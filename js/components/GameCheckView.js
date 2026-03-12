import { dataStore } from '../data/dataService.js';

export class GameCheckView {
    constructor(container, builderView) {
        this.container = container;
        this.builderView = builderView; // Reference to get current build
    }

    render() {
        this.container.innerHTML = `
            <div class="game-check-layout fade-in">
                <div class="market-header">
                    <h2><i class="fa-solid fa-gamepad"></i> Kiểm Tra Tương Thích Game AAA</h2>
                </div>
                
                <div class="game-search-box glass-panel mb-4">
                    <h3>Hệ thống bạn đang Build có chơi mượt không?</h3>
                    <p class="text-muted mb-3">Chọn game bên dưới để hệ thống đối chiếu với cấu hình bạn đang ráp ở mục Build PC.</p>
                    <div class="search-input-wrapper">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="game-search" class="game-search-input" placeholder="Nhập tên game (ví dụ: Cyberpunk, RDR2...)">
                    </div>
                </div>

                <div class="games-grid" id="games-grid">
                    <!-- Games injected here -->
                </div>
                
                <div id="game-result-panel" class="mt-4" style="display: none;"></div>
            </div>
        `;

        this.renderGames(dataStore.getGames());
        this.attachEventListeners();
    }

    renderGames(games) {
        const grid = this.container.querySelector('#games-grid');
        
        grid.innerHTML = games.map(game => `
            <div class="game-card glass-panel" data-id="${game.id}">
                <div class="game-icon"><i class="fa-solid ${game.cover}"></i></div>
                <h4 class="game-title">${game.name}</h4>
                <button class="btn btn-small btn-outline mt-2 w-100 btn-check-game">Kiểm Tra Ngay</button>
            </div>
        `).join('');
    }

    checkGameCompatibility(gameId) {
        const game = dataStore.getGames().find(g => g.id === gameId);
        const resultPanel = this.container.querySelector('#game-result-panel');
        
        // Lấy cấu hình hiện tại từ Builder
        const currentCpu = this.builderView.selectedParts.cpus;
        const currentGpu = this.builderView.selectedParts.gpus;
        const currentRam = this.builderView.selectedParts.rams;

        if (!currentCpu || !currentGpu || !currentRam) {
            resultPanel.innerHTML = `
                <div class="glass-panel alert alert-warning">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <strong>Chưa đủ dữ liệu!</strong><br>
                        Sử dụng tính năng này yêu cầu bạn phải chọn ít nhất CPU, VGA và RAM ở mục <b>Build PC</b>.
                    </div>
                </div>
            `;
            resultPanel.style.display = 'block';
            return;
        }

        // Logic so sánh
        const isMinMet = currentCpu.score >= game.minReq.cpuScore && 
                         currentGpu.score >= game.minReq.gpuScore && 
                         currentRam.capacity >= game.minReq.ram;
                         
        const isRecMet = currentCpu.score >= game.recReq.cpuScore && 
                         currentGpu.score >= game.recReq.gpuScore && 
                         currentRam.capacity >= game.recReq.ram;

        let statusClass = '';
        let statusTitle = '';
        let statusIcon = '';
        let msg = '';
        let recommendations = [];

        if (isRecMet) {
            statusClass = 'success';
            statusTitle = 'CHƠI MƯỢT (Max Settings)';
            statusIcon = 'fa-check-circle';
            msg = `Tuyệt vời! Cấu hình của bạn dư sức cân ${game.name} ở mức thiết lập đồ họa cao nhất.`;
        } else if (isMinMet) {
            statusClass = 'warning';
            statusTitle = 'CHƠI TẠM (Low/Medium Settings)';
            statusIcon = 'fa-triangle-exclamation';
            msg = `Cấu hình của bạn đủ để chơi ${game.name} nhưng có thể sẽ phải giảm đồ họa để đạt 60 FPS.`;
            
            // Tìm linh kiện yếu
            if (currentGpu.score < game.recReq.gpuScore) recommendations.push('Nâng cấp Card Đồ Họa (VGA) mạnh hơn.');
            if (currentCpu.score < game.recReq.cpuScore) recommendations.push('Nâng cấp CPU lên dòng cao hơn.');
            if (currentRam.capacity < game.recReq.ram) recommendations.push('Lắp thêm RAM.');
        } else {
            statusClass = 'danger';
            statusTitle = 'KHÔNG THỂ CHƠI MƯỢT';
            statusIcon = 'fa-xmark-circle';
            msg = `Rất tiếc, cấu hình hiện tại chưa đạt yêu cầu tối thiểu của ${game.name}.`;
            
            if (currentGpu.score < game.minReq.gpuScore) recommendations.push('Bắt buộc nâng cấp VGA (Card hiện tại quá yếu).');
            if (currentCpu.score < game.minReq.cpuScore) recommendations.push('Bắt buộc nâng cấp CPU.');
            if (currentRam.capacity < game.minReq.ram) recommendations.push('Thiếu RAM nghiêm trọng, hệ thống sẽ rất giật lag.');
        }

        resultPanel.innerHTML = `
            <div class="glass-panel analysis-panel fade-in" style="border-left: 5px solid var(--accent-${statusClass});">
                <h3 class="text-${statusClass}"><i class="fa-solid ${statusIcon}"></i> KẾT QUẢ ĐÁNH GIÁ: ${statusTitle}</h3>
                <p class="mb-3">${msg}</p>
                
                <div class="comparison-grid">
                    <div class="comp-col">
                        <h5>Cấu hình của bạn</h5>
                        <ul>
                            <li><i class="fa-solid fa-microchip text-muted"></i> ${currentCpu.name}</li>
                            <li><i class="fa-solid fa-id-card text-muted"></i> ${currentGpu.name}</li>
                            <li><i class="fa-solid fa-memory text-muted"></i> ${currentRam.name}</li>
                        </ul>
                    </div>
                    <div class="comp-col">
                        <h5>Yêu cầu đề nghị của ${game.name}</h5>
                        <ul>
                            <li><i class="fa-solid fa-microchip text-muted"></i> Điểm CPU tối thiểu: ${game.recReq.cpuScore}</li>
                            <li><i class="fa-solid fa-id-card text-muted"></i> Điểm GPU tối thiểu: ${game.recReq.gpuScore}</li>
                            <li><i class="fa-solid fa-memory text-muted"></i> RAM yêu cầu: ${game.recReq.ram}GB</li>
                        </ul>
                    </div>
                </div>

                ${recommendations.length > 0 ? `
                    <div class="recommendations mt-3">
                        <h5 class="text-warning"><i class="fa-solid fa-lightbulb"></i> Khuyên dùng để cải thiện:</h5>
                        <ul class="rec-list">
                            ${recommendations.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
        resultPanel.style.display = 'block';
        
        // Scroll to result
        resultPanel.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    attachEventListeners() {
        // Search
        const searchInput = this.container.querySelector('#game-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                const filtered = dataStore.getGames().filter(g => g.name.toLowerCase().includes(term));
                this.renderGames(filtered);
            });
        }

        // Game Click
        this.container.addEventListener('click', (e) => {
            const card = e.target.closest('.game-card');
            if (card) {
                const gameId = card.getAttribute('data-id');
                // Active state
                this.container.querySelectorAll('.game-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                
                this.checkGameCompatibility(gameId);
            }
        });
    }
}
