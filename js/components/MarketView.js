import { dataStore, formatVND } from '../data/dataService.js';

export class MarketView {
    constructor(container) {
        this.container = container;
        this.categories = [
            { id: 'cpus', label: 'Vi xử lý (CPU)', icon: 'fa-microchip' },
            { id: 'mainboards', label: 'Bo mạch chủ (Mainboard)', icon: 'fa-object-group' },
            { id: 'gpus', label: 'Card đồ họa (VGA)', icon: 'fa-id-card' },
            { id: 'rams', label: 'Bộ nhớ trong (RAM)', icon: 'fa-memory' },
            { id: 'psus', label: 'Nguồn máy tính (PSU)', icon: 'fa-plug' }
        ];
        this.activeCategory = 'cpus';
        
        // Listen to data changes
        dataStore.subscribe(() => this.render());
    }

    render() {
        this.container.innerHTML = `
            <div class="market-header">
                <h2><i class="fa-solid fa-chart-line"></i> Thị Trường Linh Kiện PC</h2>
                <div class="last-update">
                    <span><i class="fa-regular fa-clock"></i> Cập nhật lần cuối: ${dataStore.getLastUpdateTime().toLocaleString('vi-VN')}</span>
                    <button id="force-update-btn" class="btn btn-small btn-outline"><i class="fa-solid fa-rotate"></i> Cập nhật Ngay (Dev Test)</button>
                </div>
            </div>

            <div class="market-tabs">
                ${this.categories.map(cat => `
                    <button class="tab-btn ${this.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
                        <i class="fa-solid ${cat.icon}"></i> ${cat.label}
                    </button>
                `).join('')}
            </div>

            <div class="product-grid" id="product-grid">
               <!-- Products will be mapped here -->
            </div>

            <!-- Detail Modal -->
            <div id="market-detail-modal" class="modal-overlay" style="display: none;">
                <div class="modal-content glass-panel" style="max-width: 500px;">
                    <div class="modal-header">
                        <h3 id="md-title">Chi tiết sản phẩm</h3>
                        <button class="btn-close" id="md-close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="modal-body" id="md-body">
                        <!-- Details injected here -->
                    </div>
                </div>
            </div>
        `;

        this.attachEventListeners();
        this.renderProducts();
    }

    renderProducts() {
        const grid = this.container.querySelector('#product-grid');
        let products = dataStore.getAll(this.activeCategory);

        // Sort lowest to highest price as requested
        products.sort((a, b) => a.currentPrice - b.currentPrice);

        if(products.length === 0) {
            grid.innerHTML = '<p class="text-muted">Không có dữ liệu cho danh mục này.</p>';
            return;
        }

        grid.innerHTML = products.map(prod => {
            const isPriceChanged = prod.previousPrice && prod.previousPrice !== prod.currentPrice;
            const isPriceUp = isPriceChanged && prod.currentPrice > prod.previousPrice;
            const isPriceDown = isPriceChanged && prod.currentPrice < prod.previousPrice;
            
            let priceClass = '';
            let priceIcon = '';
            
            if (isPriceUp) {
                priceClass = 'price-up';
                priceIcon = '<i class="fa-solid fa-arrow-up"></i>';
            } else if (isPriceDown) {
                priceClass = 'price-down';
                priceIcon = '<i class="fa-solid fa-arrow-down"></i>';
            }

            return `
                <div class="product-card glass-panel fade-in" data-id="${prod.id}" style="cursor: pointer;" title="Nhấn để xem chi tiết">
                    <div class="product-icon">
                        <i class="fa-solid ${prod.img || 'fa-box'}"></i>
                    </div>
                    <div class="product-info">
                        <h3>${prod.name}</h3>
                        ${prod.brand ? `<span class="tag brand-tag" style="background: rgba(0, 240, 255, 0.2); color: var(--accent-primary);"><i class="fa-solid fa-tag"></i> Hãng: ${prod.brand}</span>` : ''}
                        ${prod.socket ? `<span class="tag">Socket: ${prod.socket}</span>` : ''}
                        ${prod.type ? `<span class="tag">${prod.type}</span>` : ''}
                        ${prod.wattage ? `<span class="tag">${prod.wattage}W</span>` : ''}
                        
                        <div class="price-container ${priceClass}">
                            <span class="current-price">${formatVND(prod.currentPrice)}</span>
                            ${isPriceChanged ? `<span class="price-indicator">${priceIcon}</span>` : ''}
                        </div>
                        
                        ${isPriceChanged ? `
                            <div class="old-price">Cũ: <del>${formatVND(prod.previousPrice)}</del></div>
                        ` : '<div class="old-price" style="opacity:0">-</div>'}
                    </div>
                </div>
            `;
        }).join('');
    }

    attachEventListeners() {
        // Tab switching
        const tabs = this.container.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.activeCategory = e.target.closest('.tab-btn').getAttribute('data-cat');
                this.render(); // Re-render whole view to update active tab state
            });
        });

        // Force update button (for testing)
        const updateBtn = this.container.querySelector('#force-update-btn');
        if (updateBtn) {
            updateBtn.addEventListener('click', () => {
                dataStore.forceUpdatePrices();
                // View will auto-update via PubSub
            });
        }

        // Product Details Modal
        const modal = this.container.querySelector('#market-detail-modal');
        const modalBody = this.container.querySelector('#md-body');
        const closeBtn = this.container.querySelector('#md-close');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        this.container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const id = card.getAttribute('data-id');
                const products = dataStore.getAll(this.activeCategory);
                const prod = products.find(p => p.id === id);
                
                if (prod) {
                    let specsHtml = '';
                    if (prod.specs && prod.specs.length > 0) {
                        specsHtml = `
                            <div class="mt-3">
                                <h5>Thông số kỹ thuật:</h5>
                                <ul style="padding-left: 20px; color: #a0a0b0;">
                                    ${prod.specs.map(s => `<li>${s}</li>`).join('')}
                                </ul>
                            </div>
                        `;
                    }
                    
                    modalBody.innerHTML = `
                        <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 20px;">
                            <div style="font-size: 3rem; color: var(--accent-primary);">
                                <i class="fa-solid ${prod.img || 'fa-box'}"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0; font-size: 1.3rem;">${prod.name}</h4>
                                <span class="text-muted">Thương hiệu: ${prod.brand || 'Khác'}</span>
                            </div>
                        </div>
                        <div class="highlight" style="font-size: 1.5rem; margin-bottom: 15px;">
                            Giá: ${formatVND(prod.currentPrice)}
                        </div>
                        ${specsHtml}
                    `;
                    modal.style.display = 'flex';
                }
            });
        });
    }
}
