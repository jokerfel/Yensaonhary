const config = {
    brand: {
        name: "Yến Sào Nhà Ry",
        tagline: "Tinh hoa tự nhiên — chuẩn mực quà biếu",
        phone: "0986.39.22.00",
        zaloLink: "https://zalo.me/0986392200",
        facebookLink: "https://www.facebook.com/yensaonhary",
        colors: {
            primary: "#4A5D4E", // Moss Green
            secondary: "#8C8C8C", // Stone Gray
            bg: "#F8F5F2" // Ivory
        }
    },
    products: [
        {
            id: "chung-san",
            name: "Yến Chưng Sẵn Mix Vị",
            description: "Tiện dùng, vị đa dạng, phù hợp bồi dưỡng và quà tặng.",
            tag: "Tiện dùng",
            image: "assets/images/product-soup.png",
            price: 55000,
            priceText: "Từ 55.000đ/hũ 75ml",
            priceNote: "8 gram yến tươi",
            shippingNote: "Giao theo khu vực phù hợp / vui lòng nhắn để kiểm tra",
            ctaText: "Nhận tư vấn vị",
            ctaLink: "https://zalo.me/0986392200"
        },
        {
            id: "tinh-che",
            name: "Yến Tinh Chế Rút Lông",
            description: "Làm sạch kỹ, sợi yến đẹp, dễ chế biến. Chọn lọc thủ công.",
            tag: "Cao cấp",
            image: "assets/images/product-refined.png",
            price: 2900000,
            priceText: "Từ 2.900.000đ/100gr",
            priceNote: "",
            shippingNote: "COD toàn quốc",
            ctaText: "Nhận báo giá",
            ctaLink: "https://zalo.me/0986392200"
        },
        {
            id: "tho-dac-biet",
            name: "Yến Thô Đặc Biệt",
            description: "Ít lông, không rêu, không mốc, giữ nguyên giá trị tự nhiên.",
            tag: "Đặc biệt",
            image: "assets/images/product-raw.png",
            price: 2000000,
            priceText: "Từ 2.000.000đ/100gr",
            priceNote: "",
            shippingNote: "COD toàn quốc",
            ctaText: "Nhận báo giá",
            ctaLink: "https://zalo.me/0986392200"
        }
    ],
    features: [
        { icon: "home", text: "Thu hoạch từ nhà yến gia đình" },
        { icon: "hand", text: "Chọn lọc thủ công, hạn chế can thiệp" },
        { icon: "package", text: "Đóng gói kỹ lưỡng, ưu tiên độ sạch" },
        { icon: "leaf", text: "Sợi yến tự nhiên, hương vị thanh" },
        { icon: "gift", text: "Phù hợp biếu tặng sang trọng" },
        { icon: "message", text: "Tư vấn dùng yến theo nhu cầu" }
    ],
    shipping: {
        cod: "Yến tinh chế, Yến thô",
        restricted: "Yến chưng sẵn: vui lòng nhắn để kiểm tra khu vực giao"
    },
    disclaimer: "Thông tin mang tính tham khảo, không thay thế tư vấn y khoa.",
    translations: {
        vi: {
            nav: {
                products: "Sản phẩm",
                why_us: "Vì sao chọn chúng tôi",
                process: "Quy trình",
                commitments: "Cam kết",
                contact: "Liên hệ"
            },
            hero: {
                title: "Yến sào thu hoạch từ gia đình — tinh khiết, chuẩn mực, trang nhã",
                sub1: "Nguồn gốc rõ ràng",
                sub2: "Chọn lọc thủ công",
                sub3: "Hương vị tự nhiên",
                cta_main: "Xem sản phẩm",
                cta_sec: "Tư vấn nhanh"
            },
            headings: {
                products: "Sản phẩm chủ lực",
                why_us: "Vì sao chọn Yến Sào Nhà Ry?",
                process: "Quy trình từ nhà yến đến tay bạn",
                commitments: "Cam kết chất lượng",
                reviews: "Khách hàng nói gì",
                contact: "Liên hệ tư vấn"
            },
            form: {
                name_ph: "Họ và tên",
                phone_ph: "Số điện thoại",
                products_label: "Sản phẩm quan tâm:",
                note_ph: "Ghi chú thêm",
                submit: "Gửi yêu cầu",
                cod_note: "COD toàn quốc:",
                y_tinh_che: "Yến tinh chế",
                y_tho: "Yến thô",
                y_chung: "Yến chưng sẵn",
                check_area: "Vui lòng nhắn để kiểm tra khu vực giao",
                alert_missing: "Vui lòng nhập Họ tên và Số điện thoại!",
                confirm_msg: "Thông tin của bạn:\n- Tên: {name}\n- SĐT: {phone}\n\nNhấn OK để chuyển sang Zalo chat trực tiếp với shop ngay!"
            },
            footer: {
                brand_desc: "Tinh hoa tự nhiên — chuẩn mực quà biếu",
                stats_title: "Thống kê Nhà Ry",
                serving: "Phục vụ từ: 2018",
                online: "Đang xem: ...",
                sold: "Đã bán: ...",
                customers: "Khách hàng: ..."
            },
            products: {
                p1: { name: "Yến Chưng Sẵn Mix Vị", desc: "Tiện dùng, vị đa dạng, phù hợp bồi dưỡng và quà tặng.", tag: "Tiện dùng", note: "Giao theo khu vực phù hợp / vui lòng nhắn để kiểm tra", cta: "Nhận tư vấn vị", price: "Từ 55.000đ/hũ 75ml" },
                p2: { name: "Yến Tinh Chế Rút Lông", desc: "Làm sạch kỹ, sợi yến đẹp, dễ chế biến. Chọn lọc thủ công.", tag: "Cao cấp", note: "COD toàn quốc", cta: "Nhận báo giá", price: "Từ 2.900.000đ/100gr" },
                p3: { name: "Yến Thô Đặc Biệt", desc: "Ít lông, không rêu, không mốc, giữ nguyên giá trị tự nhiên.", tag: "Đặc biệt", note: "COD toàn quốc", cta: "Nhận báo giá", price: "Từ 2.000.000đ/100gr" }
            },
            features: [
                "Thu hoạch từ nhà yến gia đình",
                "Chọn lọc thủ công, hạn chế can thiệp",
                "Đóng gói kỹ lưỡng, ưu tiên độ sạch",
                "Sợi yến tự nhiên, hương vị thanh",
                "Phù hợp biếu tặng sang trọng",
                "Tư vấn dùng yến theo nhu cầu"
            ]
        },
        en: {
            nav: {
                products: "Products",
                why_us: "Why Us",
                process: "Process",
                commitments: "Commitments",
                contact: "Contact"
            },
            hero: {
                title: "Family-harvested Bird's Nest — Pure, Standard, Elegant",
                sub1: "Clear Origin",
                sub2: "Hand-picked",
                sub3: "Natural Taste",
                cta_main: "View Products",
                cta_sec: "Quick Consult"
            },
            headings: {
                products: "Main Products",
                why_us: "Why Choose Us?",
                process: "From Harvest to You",
                commitments: "Quality Commitment",
                reviews: "Customer Reviews",
                contact: "Contact Us"
            },
            form: {
                name_ph: "Full Name",
                phone_ph: "Phone Number",
                products_label: "Interested In:",
                note_ph: "Additional Notes",
                submit: "Send Request",
                cod_note: "COD Available:",
                y_tinh_che: "Refined Nest",
                y_tho: "Raw Nest",
                y_chung: "Ready-to-eat Soup",
                check_area: "Please text to check delivery area",
                alert_missing: "Please enter Name and Phone!",
                confirm_msg: "Your Info:\n- Name: {name}\n- Phone: {phone}\n\nPress OK to chat with us on Zalo!"
            },
            footer: {
                brand_desc: "Natural Essence — The Standard of Gifting",
                stats_title: "Statistics",
                serving: "Since: 2018",
                online: "Online: ...",
                sold: "Sold: ...",
                customers: "Customers: ..."
            },
            products: {
                p1: { name: "Ready-to-eat Bird's Nest", desc: "Convenient, various flavors, perfect for health and gifting.", tag: "Convenient", note: "Delivery area restricted / please msg to check", cta: "Consult Flavors" },
                p2: { name: "Refined Bird's Nest", desc: "Thoroughly cleaned, beautiful threads, easy to cook. Hand-picked.", tag: "Premium", note: "Nationwide COD", cta: "Get Quote" },
                p3: { name: "Premium Raw Nest", desc: "Low feather, no moss/mold, retaining natural value.", tag: "Special", note: "Nationwide COD", cta: "Get Quote" }
            },
            features: [
                "Harvested from family nest houses",
                "Hand-picked, minimal intervention",
                "Carefully packaged, hygiene priority",
                "Natural threads, delicate taste",
                "Perfect for luxury gifting",
                "Personalized usage consultation"
            ]
        },
        zh: {
            nav: {
                products: "产品",
                why_us: "为什么选择我们",
                process: "流程",
                commitments: "承诺",
                contact: "联系"
            },
            hero: {
                title: "家庭采摘燕窝 — 纯净、标准、优雅",
                sub1: "来源清晰",
                sub2: "手工挑选",
                sub3: "天然风味",
                cta_main: "查看产品",
                cta_sec: "快速咨询"
            },
            headings: {
                products: "主打产品",
                why_us: "为什么选择我们？",
                process: "从采摘到您手中",
                commitments: "质量承诺",
                reviews: "客户评价",
                contact: "联系咨询"
            },
            form: {
                name_ph: "姓名",
                phone_ph: "电话号码",
                products_label: "感兴趣的产品:",
                note_ph: "备注",
                submit: "发送请求",
                cod_note: "货到付款:",
                y_tinh_che: "精制燕窝",
                y_tho: "毛燕",
                y_chung: "即食燕窝",
                check_area: "请发短信查询配送区域",
                alert_missing: "请输入姓名和电话！",
                confirm_msg: "您的信息：\n- 姓名: {name}\n- 电话: {phone}\n\n点击确定直接跳转 Zalo 与我们聊天！"
            },
            footer: {
                brand_desc: "天然精华 — 送礼标准",
                stats_title: "统计",
                serving: "服务始于: 2018",
                online: "在线: ...",
                sold: "已售: ...",
                customers: "客户: ..."
            },
            products: {
                p1: { name: "即食燕窝混合口味", desc: "方便食用，口味多样，适合补品和礼品。", tag: "方便", note: "配送区域有限 / 请短信查询", cta: "咨询口味" },
                p2: { name: "精制去毛燕窝", desc: "彻底清洁，燕丝美观，易于烹饪。手工挑选。", tag: "高端", note: "全国货到付款", cta: "获取报价" },
                p3: { name: "特级毛燕", desc: "少毛，无苔藓/霉菌，保留天然价值。", tag: "特别", note: "全国货到付款", cta: "获取报价" }
            },
            features: [
                "采摘自家庭燕屋",
                "手工挑选，最少干预",
                "精心包装，卫生优先",
                "天然燕丝，口感清淡",
                "豪华礼品的完美选择",
                "个性化使用咨询"
            ]
        },
        ja: {
            nav: {
                products: "製品",
                why_us: "選ばれる理由",
                process: "プロセス",
                commitments: "お約束",
                contact: "お問い合わせ"
            },
            hero: {
                title: "自家採集の燕の巣 — 純粋、標準、優雅",
                sub1: "明確な起源",
                sub2: "手作業による選別",
                sub3: "自然な味わい",
                cta_main: "製品を見る",
                cta_sec: "今すぐ相談"
            },
            headings: {
                products: "主力製品",
                why_us: "なぜ私たちか？",
                process: "収穫からお届けまで",
                commitments: "品質へのこだわり",
                reviews: "お客様の声",
                contact: "お問い合わせ"
            },
            form: {
                name_ph: "お名前",
                phone_ph: "電話番号",
                products_label: "興味のある製品:",
                note_ph: "備考",
                submit: "送信する",
                cod_note: "代金引換:",
                y_tinh_che: "精製燕の巣",
                y_tho: "原燕の巣",
                y_chung: "即食燕の巣スープ",
                check_area: "配送エリアについてはお問い合わせください",
                alert_missing: "名前と電話番号を入力してください！",
                confirm_msg: "あなたの情報:\n- 名前: {name}\n- 電話: {phone}\n\nOKを押してZaloでチャットを開始します！"
            },
            footer: {
                brand_desc: "自然の真髄 — 贈り物の基準",
                stats_title: "統計",
                serving: "開始年: 2018",
                online: "オンライン: ...",
                sold: "販売数: ...",
                customers: "顧客数: ..."
            },
            products: {
                p1: { name: "即食燕の巣（ミックス味）", desc: "便利で多様な味、健康や贈り物に最適。", tag: "便利", note: "配送エリア限定 / 確認のためメッセージを", cta: "味を相談" },
                p2: { name: "精製燕の巣（毛抜き済み）", desc: "徹底的に洗浄され、美しい糸、調理が簡単。手作業で選別。", tag: "プレミアム", note: "全国代引き可", cta: "見積もり" },
                p3: { name: "特選原燕の巣", desc: "羽毛が少なく、苔やカビがなく、自然な価値を保持。", tag: "特別", note: "全国代引き可", cta: "見積もり" }
            },
            features: [
                "家族の燕の家から収穫",
                "手作業で選別、介入を最小限に",
                "丁寧に梱包、衛生を優先",
                "自然な糸、繊細な味わい",
                "高級ギフトに最適",
                "使用方法の個別相談"
            ]
        }
    }
}

// Export for usage if using modules, but for simple inclusion:
window.AppConfig = config;
