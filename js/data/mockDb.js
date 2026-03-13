// MOCK DATABASE MODULE
// Cập nhật giá ngẫu nhiên mỗi 4 tiếng mô phỏng dữ liệu VN

export const MOCK_DB = {
    // -----------------------------------------------------
    // CPU
    // -----------------------------------------------------
    cpus: [
        { id: 'cpu-1', name: 'Intel Core i3-12100F', brand: 'Intel', socket: 'LGA1700', tdp: 58, basePrice: 2200000, currentPrice: 2200000, score: 3500, img: 'fa-microchip', specs: ['Tiến trình: Intel 7', 'Số nhân: 4', 'Số luồng: 8', 'Xung cơ bản: 3.3 GHz', 'Xung tối đa: 4.3 GHz', 'Không có iGPU'] },
        { id: 'cpu-2', name: 'Intel Core i5-12400F', brand: 'Intel', socket: 'LGA1700', tdp: 65, basePrice: 3500000, currentPrice: 3500000, score: 5000, img: 'fa-microchip', specs: ['Tiến trình: Intel 7', 'Số nhân: 6', 'Số luồng: 12', 'Xung cơ bản: 2.5 GHz', 'Xung tối đa: 4.4 GHz', 'Không có iGPU'] },
        { id: 'cpu-3', name: 'Intel Core i5-13400F', brand: 'Intel', socket: 'LGA1700', tdp: 65, basePrice: 5300000, currentPrice: 5300000, score: 6500, img: 'fa-microchip', specs: ['Tiến trình: Intel 7', 'Số nhân: 10 (6P+4E)', 'Số luồng: 16', 'Xung tối đa: 4.6 GHz', 'Không có iGPU'] },
        { id: 'cpu-4', name: 'Intel Core i5-14400F', brand: 'Intel', socket: 'LGA1700', tdp: 65, basePrice: 5900000, currentPrice: 5900000, score: 6800, img: 'fa-microchip', specs: ['Tiến trình: Intel 7', 'Số nhân: 10 (6P+4E)', 'Số luồng: 16', 'Xung tối đa: 4.7 GHz', 'Không có iGPU'] },
        { id: 'cpu-5', name: 'Intel Core i7-13700K', brand: 'Intel', socket: 'LGA1700', tdp: 125, basePrice: 10500000, currentPrice: 10500000, score: 10000, img: 'fa-microchip', specs: ['Tiến trình: Intel 7', 'Số nhân: 16 (8P+8E)', 'Số luồng: 24', 'Xung tối đa: 5.4 GHz', 'Mở khóa ép xung'] },
        { id: 'cpu-6', name: 'Intel Core i7-14700K', brand: 'Intel', socket: 'LGA1700', tdp: 125, basePrice: 11200000, currentPrice: 11200000, score: 10800, img: 'fa-microchip', specs: ['Tiến trình: Intel 7', 'Số nhân: 20 (8P+12E)', 'Số luồng: 28', 'Xung tối đa: 5.6 GHz', 'Hỗ trợ AI Boost'] },
        { id: 'cpu-7', name: 'Intel Core i9-14900K', brand: 'Intel', socket: 'LGA1700', tdp: 150, basePrice: 16500000, currentPrice: 16500000, score: 12500, img: 'fa-microchip', specs: ['Tiến trình: Intel 7', 'Số nhân: 24 (8P+16E)', 'Số luồng: 32', 'Xung tối đa: 6.0 GHz', 'Dành cho Extreme Gaming'] },
        { id: 'cpu-8', name: 'Intel Core Ultra 5 245K', brand: 'Intel', socket: 'LGA1851', tdp: 125, basePrice: 8500000, currentPrice: 8500000, score: 8500, img: 'fa-microchip', specs: ['Thế hệ: Arrow Lake', 'Số nhân: 14', 'NPU: Tích hợp AI', 'Xung tối đa: 4.9 GHz', 'Socket mới LGA1851'] },
        { id: 'cpu-9', name: 'Intel Core Ultra 7 265K', brand: 'Intel', socket: 'LGA1851', tdp: 125, basePrice: 11900000, currentPrice: 11900000, score: 11500, img: 'fa-microchip', specs: ['Thế hệ: Arrow Lake', 'Số nhân: 20', 'NPU: Tích hợp AI', 'Xung tối đa: 5.2 GHz', 'Hỗ trợ đỉnh cao đa nhiệm'] },
        { id: 'cpu-10', name: 'Intel Core Ultra 9 285K', brand: 'Intel', socket: 'LGA1851', tdp: 125, basePrice: 17500000, currentPrice: 17500000, score: 14000, img: 'fa-microchip', specs: ['Thế hệ: Arrow Lake', 'Số nhân: 24', 'NPU: Khả năng tính toán AI chuyên dụng', 'Xung tối đa: 5.5 GHz', 'Flagship 2026'] },
        { id: 'cpu-11', name: 'AMD Ryzen 5 5600X', brand: 'AMD', socket: 'AM4', tdp: 65, basePrice: 3500000, currentPrice: 3500000, score: 5200, img: 'fa-microchip', specs: ['Tiến trình: 7nm', 'Số nhân: 6', 'Số luồng: 12', 'Xung tối đa: 4.6 GHz', 'Bộ nhớ đệm: 35MB'] },
        { id: 'cpu-12', name: 'AMD Ryzen 7 5700X3D', brand: 'AMD', socket: 'AM4', tdp: 105, basePrice: 5800000, currentPrice: 5800000, score: 6800, img: 'fa-microchip', specs: ['Tiến trình: 7nm', 'Số nhân: 8', 'Số luồng: 16', '3D V-Cache: 96MB', 'Vua Gaming tầm trung'] },
        { id: 'cpu-13', name: 'AMD Ryzen 5 7600', brand: 'AMD', socket: 'AM5', tdp: 65, basePrice: 5200000, currentPrice: 5200000, score: 7000, img: 'fa-microchip', specs: ['Tiến trình: 5nm', 'Số nhân: 6', 'Số luồng: 12', 'Xung tối đa: 5.1 GHz', 'Hỗ trợ PCIe 5.0'] },
        { id: 'cpu-14', name: 'AMD Ryzen 5 7600X', brand: 'AMD', socket: 'AM5', tdp: 105, basePrice: 5800000, currentPrice: 5800000, score: 7300, img: 'fa-microchip', specs: ['Tiến trình: 5nm', 'Số nhân: 6', 'Số luồng: 12', 'Xung tối đa: 5.3 GHz', 'Tối ưu Ép xung'] },
        { id: 'cpu-15', name: 'AMD Ryzen 7 7700X', brand: 'AMD', socket: 'AM5', tdp: 105, basePrice: 8200000, currentPrice: 8200000, score: 8500, img: 'fa-microchip', specs: ['Tiến trình: 5nm', 'Số nhân: 8', 'Số luồng: 16', 'Xung tối đa: 5.4 GHz', 'Cân bằng Game & Làm việc'] },
        { id: 'cpu-16', name: 'AMD Ryzen 7 7800X3D', brand: 'AMD', socket: 'AM5', tdp: 120, basePrice: 11500000, currentPrice: 11500000, score: 10500, img: 'fa-microchip', specs: ['Tiến trình: 5nm', 'Số nhân: 8', 'Số luồng: 16', '3D V-Cache: 104MB', 'CPU Gaming tốt nhất TG'] },
        { id: 'cpu-17', name: 'AMD Ryzen 9 7950X3D', brand: 'AMD', socket: 'AM5', tdp: 120, basePrice: 17000000, currentPrice: 17000000, score: 13500, img: 'fa-microchip', specs: ['Tiến trình: 5nm', 'Số nhân: 16', 'Số luồng: 32', '3D V-Cache: 144MB', 'Sức mạnh tuyệt đối'] },
        { id: 'cpu-18', name: 'AMD Ryzen 5 9600X', brand: 'AMD', socket: 'AM5', tdp: 65, basePrice: 7500000, currentPrice: 7500000, score: 8000, img: 'fa-microchip', specs: ['Thế hệ: Zen 5', 'Số nhân: 6', 'Số luồng: 12', 'Xung tối đa: 5.4 GHz', 'Hiệu suất năng lượng cực cao'] },
        { id: 'cpu-19', name: 'AMD Ryzen 7 9700X', brand: 'AMD', socket: 'AM5', tdp: 65, basePrice: 10500000, currentPrice: 10500000, score: 9500, img: 'fa-microchip', specs: ['Thế hệ: Zen 5', 'Số nhân: 8', 'Số luồng: 16', 'Xung tối đa: 5.5 GHz', 'IPC tăng cường'] },
        { id: 'cpu-20', name: 'AMD Ryzen 9 9950X', brand: 'AMD', socket: 'AM5', tdp: 170, basePrice: 18500000, currentPrice: 18500000, score: 15000, img: 'fa-microchip', specs: ['Thế hệ: Zen 5', 'Số nhân: 16', 'Số luồng: 32', 'Xung tối đa: 5.7 GHz', 'Trạm làm việc di động'] }
    ],

    // -----------------------------------------------------
    // MOTHERBOARD
    // -----------------------------------------------------
    mainboards: [
        { id: 'mb-1', name: 'ASUS PRIME H610M-K D4', brand: 'ASUS', socket: 'LGA1700', ramType: 'DDR4', basePrice: 1800000, currentPrice: 1800000, img: 'fa-object-group', specs: ['Kích thước: Micro-ATX', 'Khe RAM: 2 x DDR4', 'PCIe: 4.0', 'Cổng M.2: 1'] },
        { id: 'mb-2', name: 'GIGABYTE H610M S2H V2 D4', brand: 'GIGABYTE', socket: 'LGA1700', ramType: 'DDR4', basePrice: 1900000, currentPrice: 1900000, img: 'fa-object-group', specs: ['Kích thước: Micro-ATX', 'Khe RAM: 2 x DDR4', 'Tản nhiệt VRM cơ bản', 'Cổng kết nối đa dạng'] },
        { id: 'mb-3', name: 'MSI PRO B760M-P DDR4', brand: 'MSI', socket: 'LGA1700', ramType: 'DDR4', basePrice: 2600000, currentPrice: 2600000, img: 'fa-object-group', specs: ['Kích thước: Micro-ATX', 'Khe RAM: 4 x DDR4', 'PCIe: 4.0', 'Phù hợp i5/i7 non-K'] },
        { id: 'mb-4', name: 'ASUS TUF GAMING B760M-PLUS WIFI D4', brand: 'ASUS', socket: 'LGA1700', ramType: 'DDR4', basePrice: 4200000, currentPrice: 4200000, img: 'fa-object-group', specs: ['Kích thước: Micro-ATX', 'Khe RAM: 4 x DDR4', 'Kết nối: Wi-Fi 6, Bluetooth 5.2', 'Tản nhiệt VRM xịn'] },
        { id: 'mb-5', name: 'MSI MAG B760M MORTAR WIFI', brand: 'MSI', socket: 'LGA1700', ramType: 'DDR5', basePrice: 4800000, currentPrice: 4800000, img: 'fa-object-group', specs: ['Kích thước: Micro-ATX', 'Khe RAM: 4 x DDR5', 'Tản nhiệt Shield Frozr', 'Wi-Fi 6E'] },
        { id: 'mb-6', name: 'GIGABYTE Z790 UD AC', brand: 'GIGABYTE', socket: 'LGA1700', ramType: 'DDR5', basePrice: 5500000, currentPrice: 5500000, img: 'fa-object-group', specs: ['Kích thước: ATX', 'Dành cho ép xung CPU đuôi K', 'Khe RAM: 4 x DDR5', 'Tích hợp Wi-Fi'] },
        { id: 'mb-7', name: 'ASUS ROG STRIX Z790-F GAMING WIFI II', brand: 'ASUS', socket: 'LGA1700', ramType: 'DDR5', basePrice: 10500000, currentPrice: 10500000, img: 'fa-object-group', specs: ['Kích thước: ATX', 'Thiết kế ROG Extreme', 'PCIe 5.0, Wi-Fi 7', 'Phase nguồn khủng'] },
        { id: 'mb-8', name: 'ASUS PRIME Z890-P WIFI', brand: 'ASUS', socket: 'LGA1851', ramType: 'DDR5', basePrice: 6500000, currentPrice: 6500000, img: 'fa-object-group', specs: ['Dành cho Core Ultra', 'Kích thước: ATX', 'Wi-Fi 7 Ready', 'Hỗ trợ Thunderbolt 4'] },
        { id: 'mb-9', name: 'MSI PRO Z890-A MAX WIFI', brand: 'MSI', socket: 'LGA1851', ramType: 'DDR5', basePrice: 7200000, currentPrice: 7200000, img: 'fa-object-group', specs: ['Dành cho Core Ultra', 'Kích thước: ATX', 'Tối ưu hoá điện năng AI', 'Wi-Fi 7'] },
        { id: 'mb-10', name: 'ASUS PRIME B450M-A II', brand: 'ASUS', socket: 'AM4', ramType: 'DDR4', basePrice: 1500000, currentPrice: 1500000, img: 'fa-object-group', specs: ['Dành cho Ryzen Gen 3/5', 'Kích thước: Micro-ATX', 'Siêu tiết kiệm', '1 x M.2'] },
        { id: 'mb-11', name: 'ASUS TUF GAMING B550M-PLUS', brand: 'ASUS', socket: 'AM4', ramType: 'DDR4', basePrice: 2800000, currentPrice: 2800000, img: 'fa-object-group', specs: ['Chuẩn quân đội TUF', 'PCIe 4.0', 'Tản nhiệt VRM cực tốt', 'Lựa chọn quốc dân AM4'] },
        { id: 'mb-12', name: 'MSI MAG B550 TOMAHAWK', brand: 'MSI', socket: 'AM4', ramType: 'DDR4', basePrice: 3800000, currentPrice: 3800000, img: 'fa-object-group', specs: ['Kích thước: ATX', 'Tản nhiệt thép', 'Mạng LAN 2.5G', 'Hỗ trợ ép xung AM4'] },
        { id: 'mb-13', name: 'GIGABYTE A620M S2H', brand: 'GIGABYTE', socket: 'AM5', ramType: 'DDR5', basePrice: 2400000, currentPrice: 2400000, img: 'fa-object-group', specs: ['Bo mạch AM5 giá rẻ nhất', 'Cơ bản không ép xung', 'Chỉ cắm Ryzen 5'] },
        { id: 'mb-14', name: 'MSI PRO B650M-P', brand: 'MSI', socket: 'AM5', ramType: 'DDR5', basePrice: 3100000, currentPrice: 3100000, img: 'fa-object-group', specs: ['Micro-ATX cho AM5', 'Khe RAM: 4 x DDR5', 'Tản nhiệt M.2 Shield'] },
        { id: 'mb-15', name: 'ASUS TUF GAMING B650-PLUS WIFI', brand: 'ASUS', socket: 'AM5', ramType: 'DDR5', basePrice: 5200000, currentPrice: 5200000, img: 'fa-object-group', specs: ['Kích thước: ATX', '14 Phase nguồn', 'Wi-Fi 6, PCIe 5.0'] },
        { id: 'mb-16', name: 'GIGABYTE X670 AORUS ELITE AX', brand: 'GIGABYTE', socket: 'AM5', ramType: 'DDR5', basePrice: 7500000, currentPrice: 7500000, img: 'fa-object-group', specs: ['Kích thước: ATX', 'Cao cấp cho Ryzen 7/9', 'Nhiều cổng kết nối'] },
        { id: 'mb-17', name: 'ASUS ROG STRIX X870-A GAMING WIFI', brand: 'ASUS', socket: 'AM5', ramType: 'DDR5', basePrice: 11000000, currentPrice: 11000000, img: 'fa-object-group', specs: ['Dành cho Ryzen 9000', 'Bản màu trắng tuyết tuyệt đẹp', 'Công nghệ ROG AI', 'Wi-Fi 7'] }
    ],

    // -----------------------------------------------------
    // GPU
    // -----------------------------------------------------
    gpus: [
        { id: 'gpu-1', name: 'GIGABYTE GTX 1650 D6 OC 4G', brand: 'GIGABYTE', chipset: 'NVIDIA', tdp: 75, psuRec: 350, basePrice: 3500000, currentPrice: 3500000, score: 2500, img: 'fa-id-card', specs: ['VRAM: 4GB GDDR6', 'Nhân CUDA: 896', 'Không cần nguồn phụ', 'Thích hợp eSport'] },
        { id: 'gpu-2', name: 'ASUS Dual Radeon RX 6600 8GB', brand: 'ASUS', chipset: 'AMD', tdp: 132, psuRec: 500, basePrice: 5200000, currentPrice: 5200000, score: 5500, img: 'fa-id-card', specs: ['VRAM: 8GB GDDR6', 'Nhân Stream: 1792', 'Chiến AAA Full HD tốt', 'Kiến trúc RDNA 2'] },
        { id: 'gpu-3', name: 'MSI Ventus 2X RTX 3050 8GB', brand: 'MSI', chipset: 'NVIDIA', tdp: 130, psuRec: 450, basePrice: 5800000, currentPrice: 5800000, score: 4500, img: 'fa-id-card', specs: ['VRAM: 8GB GDDR6', 'Hỗ trợ DLSS & Ray Tracing', 'Quạt kép tản nhiệt tốt'] },
        { id: 'gpu-4', name: 'GIGABYTE RTX 3060 Windforce OC 12GB', brand: 'GIGABYTE', chipset: 'NVIDIA', tdp: 170, psuRec: 550, basePrice: 7800000, currentPrice: 7800000, score: 6500, img: 'fa-id-card', specs: ['VRAM: 12GB GDDR6', 'Nhân CUDA: 3584', 'Thích hợp làm AI, đồ hoạ 3D'] },
        { id: 'gpu-5', name: 'ASUS Dual RTX 4060 8GB', brand: 'ASUS', chipset: 'NVIDIA', tdp: 115, psuRec: 500, basePrice: 8500000, currentPrice: 8500000, score: 7500, img: 'fa-id-card', specs: ['VRAM: 8GB GDDR6', 'DLSS 3.0 Frame Gen', 'Cực kỳ tiết kiệm điện', 'Quạt Axial-tech tĩnh âm'] },
        { id: 'gpu-6', name: 'MSI Ventus 2X RTX 4060 Ti 8GB', brand: 'MSI', chipset: 'NVIDIA', tdp: 160, psuRec: 550, basePrice: 10500000, currentPrice: 10500000, score: 8800, img: 'fa-id-card', specs: ['VRAM: 8GB GDDR6', 'Cân mượt 2K Medium', 'Nhân CUDA: 4352', 'DLSS 3.0 mạnh mẽ'] },
        { id: 'gpu-7', name: 'GIGABYTE Radeon RX 7700 XT Gaming OC 12GB', brand: 'GIGABYTE', chipset: 'AMD', tdp: 245, psuRec: 650, basePrice: 11800000, currentPrice: 11800000, score: 9200, img: 'fa-id-card', specs: ['VRAM: 12GB GDDR6', 'Kiến trúc RDNA 3', 'Đối thủ trực tiếp của 4060 Ti', 'Băng thông lớn'] },
        { id: 'gpu-8', name: 'ASUS Dual RTX 4070 SUPER 12GB', brand: 'ASUS', chipset: 'NVIDIA', tdp: 220, psuRec: 750, basePrice: 17500000, currentPrice: 17500000, score: 12000, img: 'fa-id-card', specs: ['VRAM: 12GB GDDR6X', 'Nhân CUDA: 7168', 'Tuyệt đỉnh Gaming 2K', 'Nhanh hơn 4070 bản thường 15%'] },
        { id: 'gpu-9', name: 'Sapphire Nitro+ RX 7800 XT 16GB', brand: 'Sapphire', chipset: 'AMD', tdp: 263, psuRec: 700, basePrice: 14500000, currentPrice: 14500000, score: 10500, img: 'fa-id-card', specs: ['VRAM: 16GB GDDR6', 'Tản nhiệt ngoại cỡ siêu tốt', 'LED ARGB tuyệt đẹp', 'Đỉnh cao RDNA 3'] },
        { id: 'gpu-10', name: 'MSI Gaming X Trio RTX 4070 Ti SUPER 16GB', brand: 'MSI', chipset: 'NVIDIA', tdp: 285, psuRec: 850, basePrice: 24500000, currentPrice: 24500000, score: 14000, img: 'fa-id-card', specs: ['VRAM: 16GB GDDR6X', 'Nhân CUDA: 8448', 'Băng thông 256-bit', 'Chiến Game 4K nhẹ nhàng'] },
        { id: 'gpu-11', name: 'GIGABYTE RTX 4080 SUPER Windforce 16GB', brand: 'GIGABYTE', chipset: 'NVIDIA', tdp: 320, psuRec: 850, basePrice: 29500000, currentPrice: 29500000, score: 16500, img: 'fa-id-card', specs: ['VRAM: 16GB GDDR6X', 'Nhân CUDA: 10240', 'Quạt chống ồn Windforce 3X', 'Chơi đỉnh mọi game 4K'] },
        { id: 'gpu-12', name: 'ASUS ROG Strix RTX 4090 24GB', brand: 'ASUS', chipset: 'NVIDIA', tdp: 450, psuRec: 1000, basePrice: 58000000, currentPrice: 58000000, score: 22000, img: 'fa-id-card', specs: ['VRAM: 24GB GDDR6X', 'Nhân CUDA: 16384', 'Card đồ họa thương mại mạnh nhất 2024', 'Thiết kế ROG Aura Sync'] },
        { id: 'gpu-13', name: 'ASUS TUF RTX 5070 12GB', brand: 'ASUS', chipset: 'NVIDIA', tdp: 200, psuRec: 700, basePrice: 18500000, currentPrice: 18500000, score: 13500, img: 'fa-id-card', specs: ['Cấu trúc Blackwell (2025/2026)', 'VRAM: 12GB GDDR7 tốc độ siêu cao', 'Chuẩn PCIe 5.0', 'DLSS 4.0'] },
        { id: 'gpu-14', name: 'MSI Suprim X RTX 5080 16GB', brand: 'MSI', chipset: 'NVIDIA', tdp: 320, psuRec: 850, basePrice: 34000000, currentPrice: 34000000, score: 19000, img: 'fa-id-card', specs: ['Cấu trúc Blackwell', 'VRAM: 16GB GDDR7', 'Mạnh hơn 4090 ở một số bài test', 'Tản nhiệt Vapor Chamber'] },
        { id: 'gpu-15', name: 'GIGABYTE Aorus RTX 5090 32GB', brand: 'GIGABYTE', chipset: 'NVIDIA', tdp: 500, psuRec: 1200, basePrice: 65000000, currentPrice: 65000000, score: 26000, img: 'fa-id-card', specs: ['Flagship Blackwell 2026', 'VRAM: 32GB GDDR7 Băng thông khổng lồ', 'Siêu quái vật AI và Render 8K'] }
    ],

    // -----------------------------------------------------
    // RAM
    // -----------------------------------------------------
    rams: [
        { id: 'ram-1', name: 'Adata XPG Spectrix D41 8GB 3200MHz DDR4', brand: 'Adata', type: 'DDR4', capacity: 8, basePrice: 450000, currentPrice: 450000, img: 'fa-memory', specs: ['Tốc độ: 3200MHz', 'LED RGB', 'Tản nhiệt nhôm'] },
        { id: 'ram-2', name: 'Kingston Fury Beast 8GB 3200MHz DDR4', brand: 'Kingston', type: 'DDR4', capacity: 8, basePrice: 500000, currentPrice: 500000, img: 'fa-memory', specs: ['Tốc độ: 3200MHz', 'Thiết kế Low-profile', 'Tự động ép xung (Plug n Play)'] },
        { id: 'ram-3', name: 'Corsair Vengeance LPX 16GB (1x16) 3200MHz DDR4', brand: 'Corsair', type: 'DDR4', capacity: 16, basePrice: 950000, currentPrice: 950000, img: 'fa-memory', specs: ['Tốc độ: 3200MHz', 'Mỏng, gọn, dễ lắp tản tháp', 'Độ bền cao'] },
        { id: 'ram-4', name: 'Corsair Vengeance LPX 16GB (2x8) 3200MHz DDR4', brand: 'Corsair', type: 'DDR4', capacity: 16, basePrice: 1100000, currentPrice: 1100000, img: 'fa-memory', specs: ['Tốc độ: 3200MHz', 'Kit 2 thanh tối ưu Dual-channel'] },
        { id: 'ram-5', name: 'Kingston Fury Beast RGB 32GB (2x16) 3200MHz DDR4', brand: 'Kingston', type: 'DDR4', capacity: 32, basePrice: 2100000, currentPrice: 2100000, img: 'fa-memory', specs: ['Tốc độ: 3200MHz', 'Dành cho hệ thống Render, làm việc'] },
        { id: 'ram-6', name: 'Crucial RAM 16GB 4800MHz DDR5', brand: 'Crucial', type: 'DDR5', capacity: 16, basePrice: 1250000, currentPrice: 1250000, img: 'fa-memory', specs: ['Tốc độ: 4800MHz', 'Chuẩn DDR5 cơ bản giá mềm'] },
        { id: 'ram-7', name: 'Corsair Vengeance 32GB (2x16) 5600MHz DDR5', brand: 'Corsair', type: 'DDR5', capacity: 32, basePrice: 2800000, currentPrice: 2800000, img: 'fa-memory', specs: ['Tốc độ: 5600MHz', 'Hỗ trợ Intel XMP 3.0', 'Tản nhiệt dày dặn'] },
        { id: 'ram-8', name: 'G.Skill Flare X5 32GB (2x16) 6000MHz AMD EXPO DDR5', brand: 'G.Skill', type: 'DDR5', capacity: 32, basePrice: 3200000, currentPrice: 3200000, img: 'fa-memory', specs: ['Tốc độ: 6000MHz', 'Tối ưu hoá đặc biệt cho AMD Ryzen (EXPO)'] },
        { id: 'ram-9', name: 'G.Skill Trident Z5 RGB 32GB (2x16) 6000MHz DDR5', brand: 'G.Skill', type: 'DDR5', capacity: 32, basePrice: 3600000, currentPrice: 3600000, img: 'fa-memory', specs: ['Tốc độ: 6000MHz', 'RAM đẹp nhất thị trường', 'Độ trễ thấp'] },
        { id: 'ram-10', name: 'Corsair Dominator Titanium 48GB (2x24) 7200MHz DDR5', brand: 'Corsair', type: 'DDR5', capacity: 48, basePrice: 7500000, currentPrice: 7500000, img: 'fa-memory', specs: ['Tốc độ: 7200MHz', 'Dung lượng dị biệt 48GB', 'Hàng khủng cho i9/Core Ultra 9'] },
        { id: 'ram-11', name: 'Kingston Fury Renegade 64GB (2x32) 6400MHz DDR5', brand: 'Kingston', type: 'DDR5', capacity: 64, basePrice: 6500000, currentPrice: 6500000, img: 'fa-memory', specs: ['Tốc độ: 6400MHz', 'Cho máy trạm ảo hoá', 'Chống lỗi ECC ON-DIE'] }
    ],

    // -----------------------------------------------------
    // PSU (Nguồn)
    // -----------------------------------------------------
    psus: [
        { id: 'psu-1', name: 'Aerocool VX Plus 400W', brand: 'Aerocool', wattage: 400, basePrice: 450000, currentPrice: 450000, img: 'fa-plug', specs: ['Chuẩn: Non-80 Plus', 'Quạt: 12cm silent', 'Dành cho máy tính văn phòng'] },
        { id: 'psu-2', name: 'Deepcool PF450 450W', brand: 'Deepcool', wattage: 450, basePrice: 750000, currentPrice: 750000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Standard', 'Độ tin cậy cao', 'Dây dẹt đen dễ đi dây'] },
        { id: 'psu-3', name: 'MSI MAG A550BN 550W', brand: 'MSI', wattage: 550, basePrice: 1100000, currentPrice: 1100000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Bronze', 'Linh kiện chất lượng', 'Đủ gánh RTX 3060 / 4060'] },
        { id: 'psu-4', name: 'Corsair CV650 650W', brand: 'Corsair', wattage: 650, basePrice: 1450000, currentPrice: 1450000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Bronze', 'Bảo hành 5 năm', 'Độ ồn cực thấp'] },
        { id: 'psu-5', name: 'Cooler Master MWE Bronze V2 750W', brand: 'Cooler Master', wattage: 750, basePrice: 1850000, currentPrice: 1850000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Bronze', 'Lọc nhiễu tốt', 'Chịu tải cao liên tục'] },
        { id: 'psu-6', name: 'Corsair RM750e ATX 3.0 750W', brand: 'Corsair', wattage: 750, basePrice: 2850000, currentPrice: 2850000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Gold', 'Mô-đun hoàn toàn', 'Chuẩn ATX 3.0 cắm chân 12VHPWR cho RTX 40'] },
        { id: 'psu-7', name: 'MSI MPG A850G PCIE5 850W', brand: 'MSI', wattage: 850, basePrice: 3500000, currentPrice: 3500000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Gold', 'Tụ Nhật Bản 105°C', 'Mô-đun hoàn toàn', 'Cho cấu hình cực cao'] },
        { id: 'psu-8', name: 'Corsair RM850x Shift', brand: 'Corsair', wattage: 850, basePrice: 4200000, currentPrice: 4200000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Gold', 'Dây cắm bên hông cải tiến (Shift)', 'Cực kỳ gọn gàng'] },
        { id: 'psu-9', name: 'FSP Hydro G Pro 1000W ATX 3.0', brand: 'FSP', wattage: 1000, basePrice: 4500000, currentPrice: 4500000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Gold', 'Lớp phủ trần mạch siêu bền', 'Cho RTX 4080/4090'] },
        { id: 'psu-10', name: 'Corsair HX1000i 1000W', brand: 'Corsair', wattage: 1000, basePrice: 6800000, currentPrice: 6800000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Platinum', 'Theo dõi phần mềm iCUE', 'Hiệu suất năng lượng 92%'] },
        { id: 'psu-11', name: 'ASUS ROG Thor 1200W Platinum II', brand: 'ASUS', wattage: 1200, basePrice: 9500000, currentPrice: 9500000, img: 'fa-plug', specs: ['Chuẩn: 80 Plus Platinum', 'Màn hình OLED báo công suất kép', 'Lưới tản nhiệt ma trận', 'Cho RTX 5090'] }
    ],

    // -----------------------------------------------------
    // AAA GAMES REQUIREMENTS
    // Cấu hình (đơn giản hoá qua score hệ thống: CPU score / GPU score / RAM GB)
    // -----------------------------------------------------
    games: [
        { 
            id: 'g-1', name: "Cyberpunk 2077: Phantom Liberty", 
            minReq: { cpuScore: 5000, gpuScore: 6500, ram: 16 }, // Core i5-12400F + RTX 3060
            recReq: { cpuScore: 7000, gpuScore: 11000, ram: 24 }, // Core i5-13400F + RTX 4070
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-2', name: "Alan Wake 2", 
            minReq: { cpuScore: 5200, gpuScore: 6500, ram: 16 }, // Ryzen 5600X + RTX 3060
            recReq: { cpuScore: 7300, gpuScore: 12000, ram: 16 }, // Ryzen 7600X + RTX 4070 SUPER
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-3', name: "Starfield", 
            minReq: { cpuScore: 5200, gpuScore: 5500, ram: 16 }, // Ryzen 5600X + RX 6600
            recReq: { cpuScore: 7000, gpuScore: 10500, ram: 32 }, // Ryzen 7600 + RX 7800 XT
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-4', name: "Baldur's Gate 3", 
            minReq: { cpuScore: 3500, gpuScore: 2500, ram: 8 }, // Core i3-12100F + GTX 1650
            recReq: { cpuScore: 5000, gpuScore: 6500, ram: 16 }, // Core i5-12400F + RTX 3060
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-5', name: "Black Myth: Wukong", 
            minReq: { cpuScore: 5000, gpuScore: 6500, ram: 16 }, // Core i5-12400F + RTX 3060
            recReq: { cpuScore: 8500, gpuScore: 12000, ram: 32 }, // Core Ultra 5 + RTX 4070 SUPER
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-6', name: "Dragon's Dogma 2", 
            minReq: { cpuScore: 6500, gpuScore: 6500, ram: 16 }, // Core i5-13400F + RTX 3060
            recReq: { cpuScore: 10000, gpuScore: 11000, ram: 32 }, // Core i7-13700K + RTX 4070
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-7', name: "Helldivers 2", 
            minReq: { cpuScore: 5000, gpuScore: 4500, ram: 16 }, // Core i5-12400F + RTX 3050
            recReq: { cpuScore: 6800, gpuScore: 7500, ram: 16 }, // Core i5-14400F + RTX 4060
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-8', name: "Ghost of Tsushima DIRECTOR'S CUT", 
            minReq: { cpuScore: 3500, gpuScore: 2500, ram: 8 }, 
            recReq: { cpuScore: 5000, gpuScore: 6500, ram: 16 }, // Rất tối ưu: i5 12400F + RTX 3060
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-9', name: "Horizon Forbidden West", 
            minReq: { cpuScore: 5000, gpuScore: 4500, ram: 16 }, 
            recReq: { cpuScore: 6800, gpuScore: 8800, ram: 16 }, // Core i5-14400F + RTX 4060 Ti
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-10', name: "Monster Hunter Wilds (2025)", 
            minReq: { cpuScore: 6800, gpuScore: 7500, ram: 16 }, // Game Capcom RE Engine Gen Mới
            recReq: { cpuScore: 10500, gpuScore: 14000, ram: 32 }, // Ryzen 7800X3D + RTX 4070 Ti SUPER
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-11', name: "Hogwarts Legacy", 
            minReq: { cpuScore: 5000, gpuScore: 5500, ram: 16 },
            recReq: { cpuScore: 7500, gpuScore: 9200, ram: 32 }, // Core i5 14400 + RX 7700 XT
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-12', name: "Resident Evil 4 Remake", 
            minReq: { cpuScore: 4500, gpuScore: 4500, ram: 8 },
            recReq: { cpuScore: 6500, gpuScore: 7500, ram: 16 }, 
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-13', name: "Grand Theft Auto VI (Dự kiến PC)", 
            minReq: { cpuScore: 7000, gpuScore: 8800, ram: 16 }, // Cấu hình đồn đoán "Sát phần cứng"
            recReq: { cpuScore: 11000, gpuScore: 16500, ram: 32 }, // Ryzen 7 7800X3D + RTX 4080 SUPER
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-14', name: "Marvel's Spider-Man 2", 
            minReq: { cpuScore: 6500, gpuScore: 6500, ram: 16 },
            recReq: { cpuScore: 10000, gpuScore: 12000, ram: 32 }, 
            cover: 'fa-gamepad'
        },
        { 
            id: 'g-15', name: "Elden Ring: Shadow of the Erdtree", 
            minReq: { cpuScore: 4000, gpuScore: 4000, ram: 12 },
            recReq: { cpuScore: 6500, gpuScore: 6500, ram: 16 }, 
            cover: 'fa-gamepad'
        }
    ]
};

// Hàm định dạng tiền tệ VN
export function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
