import { dataStore, formatVND } from '../data/dataService.js';

export class BuilderView {
    constructor(container) {
        this.container = container;
        this.selectedParts = {
            mainboards: null,
            cpus: null,
            rams: null,
            gpus: null,
            psus: null
        };
        
        this.slots = [
            { id: 'mainboards', label: 'Bo mạch chủ (Mainboard)', icon: 'fa-object-group' },
            { id: 'cpus', label: 'Vi xử lý (CPU)', icon: 'fa-microchip' },
            { id: 'rams', label: 'Bộ nhớ (RAM)', icon: 'fa-memory' },
            { id: 'gpus', label: 'Card đồ họa (VGA)', icon: 'fa-id-card' },
            { id: 'psus', label: 'Nguồn công suất (PSU)', icon: 'fa-plug' }
        ];

        dataStore.subscribe(() => {
            // Update selected parts if prices changed
            let needRender = false;
            Object.keys(this.selectedParts).forEach(key => {
                if (this.selectedParts[key]) {
                    const freshItem = dataStore.getAll(key).find(i => i.id === this.selectedParts[key].id);
                    if (freshItem) {
                        this.selectedParts[key] = freshItem;
                        needRender = true;
                    }
                }
            });
            if (needRender) this.render();
        });
    }

    render() {
        this.container.innerHTML = `
            <div class="builder-layout fade-in">
                
                <!-- Left: Parts Selection -->
                <div class="builder-workspace">
                    <div class="market-header">
                        <h2><i class="fa-solid fa-screwdriver-wrench"></i> Xây Dựng Cấu Hình</h2>
                    </div>
                    
                    <div class="parts-list">
                        ${this.slots.map(slot => this.renderSlot(slot)).join('')}
                    </div>
                </div>

                <!-- Right: Analysis Panel -->
                <div class="builder-analysis">
                    <div class="glass-panel analysis-panel sticky-panel">
                        <h3><i class="fa-solid fa-chart-pie"></i> Chẩn Đoán Hệ Thống</h3>
                        
                        <div class="total-price-box">
                            <span class="label">Tổng chi phí:</span>
                            <span class="value highlight">${formatVND(this.calculateTotal())}</span>
                        </div>

                        ${this.renderDiagnostics()}
                        
                        ${this.renderPerformance()}
                    </div>
                </div>

            </div>

            <!-- Modal for Component Selection -->
            <div id="selection-modal" class="modal-overlay" style="display: none;">
                <div class="modal-content glass-panel">
                    <div class="modal-header">
                        <h3 id="modal-title">Chọn Linh Kiện</h3>
                        <button class="btn-close" id="close-modal"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="modal-body" id="modal-grid">
                        <!-- Items injected here -->
                    </div>
                </div>
            </div>
        `;

        this.attachEventListeners();
    }

    renderSlot(slot) {
        const item = this.selectedParts[slot.id];
        
        if (item) {
            return `
                <div class="part-slot glass-panel filled">
                    <div class="slot-icon"><i class="fa-solid ${slot.icon}"></i></div>
                    <div class="slot-details">
                        <div class="slot-label">${slot.label}</div>
                        <div class="part-name">${item.name}</div>
                        <div class="part-price">${formatVND(item.currentPrice)}</div>
                    </div>
                    <div class="slot-actions">
                        <button class="btn-icon btn-change" data-slot="${slot.id}" title="Thay đổi"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn-icon btn-delete" data-slot="${slot.id}" title="Xóa"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="part-slot empty" data-slot="${slot.id}">
                    <div class="slot-icon"><i class="fa-solid ${slot.icon}"></i></div>
                    <div class="slot-details">
                        <div class="slot-label">${slot.label}</div>
                        <div class="part-prompt">Nhấn để chọn linh kiện...</div>
                    </div>
                    <div class="slot-actions">
                        <button class="btn btn-small btn-outline select-btn" data-slot="${slot.id}">Chọn</button>
                    </div>
                </div>
            `;
        }
    }

    calculateTotal() {
        let total = 0;
        Object.values(this.selectedParts).forEach(item => {
            if (item) total += item.currentPrice;
        });
        return total;
    }

    // --- COMPATIBILITY & BOTTLENECK LOGIC ---
    renderDiagnostics() {
        const warnings = [];
        const tips = [];
        let isComplete = true;

        const main = this.selectedParts.mainboards;
        const cpu = this.selectedParts.cpus;
        const ram = this.selectedParts.rams;
        const gpu = this.selectedParts.gpus;
        const psu = this.selectedParts.psus;

        // Check if all selected
        Object.keys(this.selectedParts).forEach(key => {
            if (!this.selectedParts[key]) isComplete = false;
        });

        if (!main || !cpu || !ram || !gpu || !psu) {
            warnings.push({ type: 'info', msg: 'Vui lòng chọn đầy đủ linh kiện để nhận phân tích chi tiết.' });
        }

        if (main && cpu) {
            if (main.socket !== cpu.socket) {
                warnings.push({ type: 'danger', msg: `Xung đột: Mainboard socket ${main.socket} KHÔNG hỗ trợ CPU socket ${cpu.socket}. Hãy thay 1 trong 2.` });
            } else {
                tips.push({ type: 'success', msg: `Tương thích: Main và CPU cùng socket ${main.socket}.` });
            }
        }

        if (main && ram) {
            if (main.ramType !== ram.type) {
                warnings.push({ type: 'danger', msg: `Xung đột: Mainboard dùng ${main.ramType} KHÔNG hỗ trợ RAM ${ram.type}.` });
            } else {
                tips.push({ type: 'success', msg: `Tương thích: Main và RAM cùng chuẩn ${main.ramType}.` });
            }
        }

        if (cpu && gpu && psu) {
            // Tính toán tổng điện năng
            const totalTDP = cpu.tdp + gpu.tdp + 50; // 50W cho main/ram/fan
            if (psu.wattage < totalTDP + 100) { // Safety margin 100W
                warnings.push({ 
                    type: 'warning', 
                    msg: `Nguồn điện báo động: Hệ thống tiêu thụ ~${totalTDP}W, nguồn ${psu.wattage}W là khá sát. Đề xuất: Nâng cấp nguồn ${gpu.psuRec}W trở lên.` 
                });
            } else {
                tips.push({ type: 'success', msg: 'Nguồn điện: Dư dả và an toàn.' });
            }

            // Tính Bottleneck 
            // Giả định: Điểm số cân bằng khi tỷ lệ lệch < 30%
            const cpuScore = cpu.score;
            const gpuScore = gpu.score;
            
            // Nếu GPU quá xịn so với CPU -> CPU Bottleneck
            if (gpuScore > cpuScore * 1.6) {
                warnings.push({ 
                    type: 'warning', 
                    msg: `Nghẽn cổ chai (CPU): CPU (${cpu.name}) quá yếu so với GPU (${gpu.name}). Cấu hình không phát huy hết sức mạnh GPU. Đề xuất: Thay chip lên Core i5/i7 cao hơn hoặc AMD Ryzen 7.`
                });
            } 
            // Nếu CPU quá xịn so với GPU
            else if (cpuScore > gpuScore * 1.6) {
                warnings.push({ 
                    type: 'warning', 
                    msg: `Nghẽn cổ chai (VGA): Card đồ họa (${gpu.name}) quá yếu so với CPU (${cpu.name}). Đề xuất: Nâng cấp VGA nếu bạn chơi game nặng.`
                });
            }
        }

        if (warnings.length === 0 && tips.length === 0) return '';

        let html = '<div class="diag-section">';
        html += warnings.map(w => `<div class="alert alert-${w.type}"><i class="fa-solid fa-triangle-exclamation"></i> ${w.msg}</div>`).join('');
        // Chỉ hiện tips khi không có lỗi nghiêm trọng (danger) và cấu hình tương đối đầy đủ
        if (!warnings.find(w => w.type === 'danger') && Object.values(this.selectedParts).filter(v=>v).length >= 2) {
             html += tips.map(t => `<div class="alert alert-${t.type}"><i class="fa-solid fa-check-circle"></i> ${t.msg}</div>`).join('');
        }
        html += '</div>';
        
        return html;
    }

    renderPerformance() {
        const cpu = this.selectedParts.cpus;
        const gpu = this.selectedParts.gpus;
        
        if (!cpu || !gpu) return '';

        // Mô phỏng điểm FPS dựa trên score
        const systemScore = Math.min(cpu.score, gpu.score) * 0.7 + Math.max(cpu.score, gpu.score) * 0.3; // Weight cho linh kiện yếu hơn
        
        // Base là Full HD
        const fpsMin = Math.round(systemScore / 100);
        const fpsMax = Math.round(fpsMin * 1.5);

        return `
            <div class="perf-section mt-4">
                <h4><i class="fa-solid fa-gauge-high"></i> Ước Tính Hiệu Năng (FHD)</h4>
                <div class="perf-bar-container">
                    <div class="perf-labels">
                        <span>Min FPS: ${fpsMin}</span>
                        <span>Max FPS: ${fpsMax}</span>
                    </div>
                    <div class="perf-track">
                        <div class="perf-fill" style="width: ${Math.min((fpsMax / 200) * 100, 100)}%;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    openSelectionModal(slotId) {
        const modal = document.getElementById('selection-modal');
        const grid = document.getElementById('modal-grid');
        const title = document.getElementById('modal-title');
        
        const slotInfo = this.slots.find(s => s.id === slotId);
        title.innerHTML = `Chọn ${slotInfo.label}`;
        
        const products = dataStore.getAll(slotId);
        
        grid.innerHTML = products.map(prod => `
            <div class="modal-card glass-panel" data-id="${prod.id}" data-slot="${slotId}">
                <h4>${prod.name}</h4>
                <div class="price highlight">${formatVND(prod.currentPrice)}</div>
                <button class="btn btn-small btn-outline mt-2 w-100 btn-select-item">Chọn</button>
            </div>
        `).join('');

        modal.style.display = 'flex';

        // Bind events for item selection inside modal
        grid.querySelectorAll('.modal-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const selectedItem = products.find(p => p.id === id);
                this.selectedParts[slotId] = selectedItem;
                modal.style.display = 'none';
                this.render(); // Redraw UI
            });
        });
    }

    attachEventListeners() {
        // Empty slot click
        this.container.querySelectorAll('.part-slot.empty, .btn-change, .select-btn').forEach(el => {
            el.addEventListener('click', (e) => {
                // Prevent bubbling if clicking button inside slot
                if(e.target.closest('.slot-actions')) e.stopPropagation();
                
                let slotId;
                if(el.classList.contains('part-slot')) {
                    slotId = el.getAttribute('data-slot');
                } else {
                    slotId = el.closest('.part-slot').getAttribute('data-slot') || el.getAttribute('data-slot');
                }
                
                if (slotId) this.openSelectionModal(slotId);
            });
        });

        // Delete button
        this.container.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const slotId = btn.getAttribute('data-slot');
                this.selectedParts[slotId] = null;
                this.render();
            });
        });

        // Close modal
        const closeModal = document.getElementById('close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                document.getElementById('selection-modal').style.display = 'none';
            });
        }
    }
}
