import { MOCK_DB } from './mockDb.js';

// Khóa lưu cục bộ
const DB_STORAGE_KEY = 'nextgen_pc_db';
const LAST_UPDATE_KEY = 'nextgen_pc_last_update';
const FOUR_HOURS_MS = 4 * 60 * 60 * 1000; // 4 tiếng

class DataService {
    constructor() {
        this.db = null;
        this.lastUpdate = null;
        this.listeners = [];
        this.init();
    }

    init() {
        this.loadDB();
        this.checkAndUpdatePrices();
        
        // Kiểm tra mỗi phút xem đã đến hạn 4 tiếng chưa
        setInterval(() => this.checkAndUpdatePrices(), 60000);
    }

    loadDB() {
        const storedDB = localStorage.getItem(DB_STORAGE_KEY);
        const storedTime = localStorage.getItem(LAST_UPDATE_KEY);
        
        if (storedDB && storedTime) {
            this.db = JSON.parse(storedDB);
            this.lastUpdate = parseInt(storedTime);
        } else {
            // Lần đầu
            this.db = JSON.parse(JSON.stringify(MOCK_DB)); // Clone
            this.lastUpdate = Date.now();
            this.saveDB();
        }
    }

    saveDB() {
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.db));
        localStorage.setItem(LAST_UPDATE_KEY, this.lastUpdate.toString());
        this.notifyListeners();
    }

    checkAndUpdatePrices() {
        const now = Date.now();
        if (now - this.lastUpdate >= FOUR_HOURS_MS) {
            this.simulatePriceChanges();
            this.lastUpdate = now;
            this.saveDB();
            console.log('Prices updated (4-hour interval)');
        }
    }

    // Force update dùng để test
    forceUpdatePrices() {
        this.simulatePriceChanges();
        this.lastUpdate = Date.now();
        this.saveDB();
    }

    simulatePriceChanges() {
        // Biến động từ -5% đến +5%
        const mutatePrice = (price) => {
            const changePercent = (Math.random() * 10 - 5) / 100;
            let newPrice = price * (1 + changePercent);
            // Làm tròn đến hàng nghìn
            return Math.round(newPrice / 1000) * 1000;
        };

        ['cpus', 'mainboards', 'gpus', 'rams', 'psus'].forEach(category => {
            this.db[category].forEach(item => {
                // Giữ lại giá cũ để UI có thể so sánh xanh/đỏ
                item.previousPrice = item.currentPrice;
                item.currentPrice = mutatePrice(item.basePrice);
            });
        });
    }

    // API
    getAll(category) {
        return this.db[category] || [];
    }

    getGames() {
        return this.db.games || [];
    }

    getLastUpdateTime() {
        return new Date(this.lastUpdate);
    }
    
    getTimeUntilNextUpdate() {
        const now = Date.now();
        const next = this.lastUpdate + FOUR_HOURS_MS;
        return Math.max(0, next - now);
    }

    // PubSub pattern cho Real-time UI updates
    subscribe(callback) {
        this.listeners.push(callback);
    }

    unsubscribe(callback) {
        this.listeners = this.listeners.filter(cb => cb !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(cb => cb());
    }
}

export const dataStore = new DataService();
