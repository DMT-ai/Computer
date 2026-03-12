// MOCK DATABASE MODULE
// Cập nhật giá ngẫu nhiên mỗi 4 tiếng mô phỏng dữ liệu VN

export const MOCK_DB = {
    // -----------------------------------------------------
    // CPU
    // -----------------------------------------------------
    cpus: [
        { id: 'cpu-1', name: 'Intel Core i3-12100F', brand: 'Intel', socket: 'LGA1700', tdp: 58, basePrice: 2200000, currentPrice: 2200000, score: 3500, img: 'fa-microchip' },
        { id: 'cpu-2', name: 'Intel Core i5-12400F', brand: 'Intel', socket: 'LGA1700', tdp: 65, basePrice: 3800000, currentPrice: 3800000, score: 5000, img: 'fa-microchip' },
        { id: 'cpu-3', name: 'Intel Core i5-13400F', brand: 'Intel', socket: 'LGA1700', tdp: 65, basePrice: 5500000, currentPrice: 5500000, score: 6500, img: 'fa-microchip' },
        { id: 'cpu-4', name: 'Intel Core i7-13700K', brand: 'Intel', socket: 'LGA1700', tdp: 125, basePrice: 10500000, currentPrice: 10500000, score: 10000, img: 'fa-microchip' },
        { id: 'cpu-5', name: 'AMD Ryzen 5 5600X', brand: 'AMD', socket: 'AM4', tdp: 65, basePrice: 3900000, currentPrice: 3900000, score: 5200, img: 'fa-microchip' },
        { id: 'cpu-6', name: 'AMD Ryzen 5 7600', brand: 'AMD', socket: 'AM5', tdp: 65, basePrice: 5800000, currentPrice: 5800000, score: 7000, img: 'fa-microchip' },
        { id: 'cpu-7', name: 'AMD Ryzen 7 7800X3D', brand: 'AMD', socket: 'AM5', tdp: 120, basePrice: 11000000, currentPrice: 11000000, score: 9800, img: 'fa-microchip' }
    ],

    // -----------------------------------------------------
    // MOTHERBOARD
    // -----------------------------------------------------
    mainboards: [
        { id: 'mb-1', name: 'ASUS PRIME H610M-K', socket: 'LGA1700', ramType: 'DDR4', basePrice: 1800000, currentPrice: 1800000, img: 'fa-object-group' },
        { id: 'mb-2', name: 'MSI PRO B660M-A', socket: 'LGA1700', ramType: 'DDR4', basePrice: 3200000, currentPrice: 3200000, img: 'fa-object-group' },
        { id: 'mb-3', name: 'GIGABYTE Z790 UD', socket: 'LGA1700', ramType: 'DDR5', basePrice: 5500000, currentPrice: 5500000, img: 'fa-object-group' },
        { id: 'mb-4', name: 'ASUS TUF GAMING B550M-PLUS', socket: 'AM4', ramType: 'DDR4', basePrice: 2800000, currentPrice: 2800000, img: 'fa-object-group' },
        { id: 'mb-5', name: 'MSI MAG B650 TOMAHAWK WIFI', socket: 'AM5', ramType: 'DDR5', basePrice: 6200000, currentPrice: 6200000, img: 'fa-object-group' }
    ],

    // -----------------------------------------------------
    // GPU
    // -----------------------------------------------------
    gpus: [
        { id: 'gpu-1', name: 'GTX 1650 4GB', tdp: 75, psuRec: 300, basePrice: 3500000, currentPrice: 3500000, score: 2500, img: 'fa-id-card' },
        { id: 'gpu-2', name: 'RTX 3050 8GB', tdp: 130, psuRec: 450, basePrice: 6500000, currentPrice: 6500000, score: 4500, img: 'fa-id-card' },
        { id: 'gpu-3', name: 'RTX 3060 12GB', tdp: 170, psuRec: 550, basePrice: 8500000, currentPrice: 8500000, score: 6500, img: 'fa-id-card' },
        { id: 'gpu-4', name: 'RTX 4060 8GB', tdp: 115, psuRec: 500, basePrice: 9000000, currentPrice: 9000000, score: 7500, img: 'fa-id-card' },
        { id: 'gpu-5', name: 'RTX 4070 12GB', tdp: 200, psuRec: 650, basePrice: 16500000, currentPrice: 16500000, score: 11000, img: 'fa-id-card' },
        { id: 'gpu-6', name: 'RX 6600 8GB', tdp: 132, psuRec: 500, basePrice: 5500000, currentPrice: 5500000, score: 5500, img: 'fa-id-card' },
        { id: 'gpu-7', name: 'RX 7800 XT 16GB', tdp: 263, psuRec: 700, basePrice: 14500000, currentPrice: 14500000, score: 10500, img: 'fa-id-card' }
    ],

    // -----------------------------------------------------
    // RAM
    // -----------------------------------------------------
    rams: [
        { id: 'ram-1', name: 'Kingston Fury Beast 8GB 3200MHz', type: 'DDR4', capacity: 8, basePrice: 550000, currentPrice: 550000, img: 'fa-memory' },
        { id: 'ram-2', name: 'Corsair Vengeance LPX 16GB (2x8) 3200MHz', type: 'DDR4', capacity: 16, basePrice: 1200000, currentPrice: 1200000, img: 'fa-memory' },
        { id: 'ram-3', name: 'Kingston Fury Beast 32GB (2x16) 3200MHz', type: 'DDR4', capacity: 32, basePrice: 2200000, currentPrice: 2200000, img: 'fa-memory' },
        { id: 'ram-4', name: 'Corsair Vengeance 32GB (2x16) 5600MHz', type: 'DDR5', capacity: 32, basePrice: 3500000, currentPrice: 3500000, img: 'fa-memory' },
        { id: 'ram-5', name: 'G.Skill Trident Z5 RGB 32GB (2x16) 6000MHz', type: 'DDR5', capacity: 32, basePrice: 4200000, currentPrice: 4200000, img: 'fa-memory' }
    ],

    // -----------------------------------------------------
    // PSU (Nguồn)
    // -----------------------------------------------------
    psus: [
        { id: 'psu-1', name: 'Aerocool VX Plus 400W', wattage: 400, basePrice: 550000, currentPrice: 550000, img: 'fa-plug' },
        { id: 'psu-2', name: 'Corsair CV550 550W 80 Plus Bronze', wattage: 550, basePrice: 1250000, currentPrice: 1250000, img: 'fa-plug' },
        { id: 'psu-3', name: 'Cooler Master MWE 650W 80 Plus Bronze V2', wattage: 650, basePrice: 1450000, currentPrice: 1450000, img: 'fa-plug' },
        { id: 'psu-4', name: 'Corsair RM750e 750W 80 Plus Gold', wattage: 750, basePrice: 2800000, currentPrice: 2800000, img: 'fa-plug' },
        { id: 'psu-5', name: 'Cooler Master MWE Gold 850W V2', wattage: 850, basePrice: 3200000, currentPrice: 3200000, img: 'fa-plug' }
    ],

    // -----------------------------------------------------
    // AAA GAMES REQUIREMENTS
    // Cấu hình (đơn giản hoá qua score hệ thống: CPU score / GPU score / RAM GB)
    // -----------------------------------------------------
    games: [
        { 
            id: 'g-1', 
            name: 'Cyberpunk 2077', 
            minReq: { cpuScore: 4500, gpuScore: 5000, ram: 16 }, // Cần i5/r5 cũ + tối thiểu RTX3060/RX6600
            recReq: { cpuScore: 7000, gpuScore: 8500, ram: 16 }, // Cần r5 gen7/i5 gen13 + RTX4060Ti/RX7700
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-2', 
            name: 'Red Dead Redemption 2', 
            minReq: { cpuScore: 3500, gpuScore: 3500, ram: 8 },  // i3 12100F + GTX1650
            recReq: { cpuScore: 6000, gpuScore: 6500, ram: 16 }, // i5 12400F + RTX3060
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-3', 
            name: 'Hogwarts Legacy', 
            minReq: { cpuScore: 5000, gpuScore: 5500, ram: 16 },
            recReq: { cpuScore: 7500, gpuScore: 9000, ram: 32 },
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-4', 
            name: 'Elden Ring', 
            minReq: { cpuScore: 4000, gpuScore: 4000, ram: 12 },
            recReq: { cpuScore: 6500, gpuScore: 6500, ram: 16 },
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-5', 
            name: 'Black Myth: Wukong', 
            minReq: { cpuScore: 5500, gpuScore: 6500, ram: 16 },
            recReq: { cpuScore: 8500, gpuScore: 10500, ram: 32 },
            cover: 'fa-gamepad'
        }
    ]
};

// Hàm định dạng tiền tệ VN
export function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
