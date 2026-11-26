// Main Logic

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    const savedLang = localStorage.getItem('site_lang') || 'vi';
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    // 1. Initialize Site with correct language
    changeLanguage(savedLang);

    // 2. Setup Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const navItems = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });
});

let currentLang = 'vi';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    const t = window.AppConfig.translations[lang];

    if (!t) return;

    // 1. Update Static Text [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = t;
        keys.forEach(k => { val = val ? val[k] : null });
        if (val) el.innerText = val;
    });

    // 2. Update Placeholders
    const inputs = {
        'name-input': t.form.name_ph,
        'phone-input': t.form.phone_ph,
        'note-input': t.form.note_ph
    };
    for (const [id, ph] of Object.entries(inputs)) {
        const el = document.getElementById(id);
        if (el) el.placeholder = ph;
    }

    // 3. Update Hero CTAs (Text Only)
    const ctaMain = document.querySelector('.hero-actions .btn-primary');
    const ctaSec = document.querySelector('.hero-actions .liquid-glass:not(.btn-primary)');
    if (ctaMain) ctaMain.innerText = t.hero.cta_main;
    if (ctaSec) ctaSec.innerText = t.hero.cta_sec;

    // 4. Update Header Buttons
    const callHeader = document.getElementById('header-cta-call');
    const zaloHeader = document.getElementById('header-cta-zalo'); // Usually just 'Nhắn Zalo' in VN but we can translate if we want
    if (zaloHeader) {
        // zaloHeader.innerText = "Mesage Zalo" // Optional: if we add header.zalo to translations
    }

    // 4. Re-render Dynamic Sections
    renderProducts();
    renderFeatures();
    updateContactInfo(); // Update links and form listener
    renderStats();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const t = window.AppConfig.translations[currentLang];
    const productsData = t ? t.products : null;
    const productKeys = ['p1', 'p2', 'p3'];

    if (window.AppConfig && window.AppConfig.products) {
        grid.innerHTML = window.AppConfig.products.map((p, index) => {
            const trans = productsData ? productsData[productKeys[index]] : null;
            const name = trans ? trans.name : p.name;
            const desc = trans ? trans.desc : p.description;
            const tag = trans ? trans.tag : p.tag;
            const note = trans ? trans.note : p.shippingNote;
            const ctaText = trans ? trans.cta : p.ctaText;
            const price = trans && trans.price ? trans.price : (p.priceText || "");
            const priceNote = p.priceNote || "";

            return `
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${p.image}" alt="${name}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-tag">${tag}</span>
                    <h3 class="product-name">${name}</h3>
                    <p class="product-desc">${desc}</p>
                    ${price ? `<p class="product-price" style="font-weight: 600; font-size: 1.1rem; margin: 8px 0 4px;">${price}</p>` : ""}
                    ${priceNote ? `<p class="product-price-note" style="font-size: 0.9rem; color: #666; margin: 0 0 8px;">${priceNote}</p>` : ""}
                    <p class="shipping-note">${note}</p>
                    <a href="${p.ctaLink}" target="_blank" class="liquid-glass btn-primary" style="width:100%; justify-content: center;">
                        ${ctaText}
                    </a>
                </div>
            </div>
            `;
        }).join('');
    }
}

function renderFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;

    const t = window.AppConfig.translations[currentLang];
    const originalFeatures = window.AppConfig.features;
    const translatedTexts = t ? t.features : null;

    const getIconIdx = (key) => {
        const icons = {
            home: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
            hand: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
            package: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.5 9.4-9-5.19"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>`,
            leaf: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
            gift: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>`,
            message: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
        };
        return icons[key] || icons['home'];
    };

    if (originalFeatures) {
        grid.innerHTML = originalFeatures.map((f, index) => {
            const text = translatedTexts ? translatedTexts[index] : f.text;
            return `
            <div class="feature-item">
                <div class="feature-icon">${getIconIdx(f.icon)}</div>
                <p style="font-weight: 500;">${text}</p>
            </div>
            `;
        }).join('');
    }
}

function updateContactInfo() {
    if (!window.AppConfig) return;

    // Header Buttons
    const zaloHeader = document.getElementById('header-cta-zalo');
    const callHeader = document.getElementById('header-cta-call');

    if (zaloHeader) zaloHeader.href = window.AppConfig.brand.zaloLink;
    if (callHeader) {
        callHeader.href = `tel:${window.AppConfig.brand.phone.replace(/\./g, '')}`;
        callHeader.textContent = `Gọi ${window.AppConfig.brand.phone}`;
    }

    // Mobile Bottom Bar Logic
    const mobileZalo = document.getElementById('mobile-cta-zalo');
    const mobileCall = document.getElementById('mobile-cta-call');

    if (mobileZalo) mobileZalo.href = window.AppConfig.brand.zaloLink;
    if (mobileCall) mobileCall.href = `tel:${window.AppConfig.brand.phone.replace(/\./g, '')}`;

    // Contact Logic Buttons
    const zaloContact = document.getElementById('contact-zalo');
    const fbContact = document.getElementById('contact-facebook');
    const callContact = document.getElementById('contact-call');

    if (zaloContact) zaloContact.href = window.AppConfig.brand.zaloLink;
    if (fbContact) {
        fbContact.href = window.AppConfig.brand.facebookLink || "#";
        // Optional: Open in new tab
        fbContact.target = "_blank";
        fbContact.rel = "noopener noreferrer";
    }
    if (callContact) callContact.href = `tel:${window.AppConfig.brand.phone.replace(/\./g, '')}`;

    // Handle Form Submit (Mock)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = form.querySelector('input[placeholder="Họ và tên"]').value;
            const phone = form.querySelector('input[placeholder="Số điện thoại"]').value;
            const note = form.querySelector('textarea').value;

            const selectedProducts = [];
            form.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                selectedProducts.push(cb.value);
            });

            // Validate
            if (!name || !phone) {
                alert("Vui lòng nhập Họ tên và Số điện thoại!");
                return;
            }

            // Construct Message
            let message = `Chào Nhà Ry, mình là ${name} (SĐT: ${phone}).\n`;
            if (selectedProducts.length > 0) {
                message += `Mình quan tâm: ${selectedProducts.join(', ')}.\n`;
            }
            if (note) {
                message += `Ghi chú: ${note}`;
            }

            // Redirect to Zalo
            // Note: Zalo generic link doesn't officially support ?text= deep linking perfectly on all devices, 
            // but we can try using the customized link or just open one.
            // For best compatibility with personal Zalo, we usually use api or just copy text.
            // Here we will try to open Zalo chat.

            const zaloPhone = window.AppConfig.brand.phone.replace(/\./g, '');
            // Attempting to use Zalo CLI format or just open chat. 
            // Since automatic content filling is restricted on Zalo Web, we might just alert success + redirect.

            // Better approach for static site: Send to Google Form or just Alert + Redirect to Zalo Chat.
            // Let's go with Alert + Open Zalo Chat for now as it is safest without backend.

            const confirmAction = confirm(`Thông tin của bạn:\n- Tên: ${name}\n- SĐT: ${phone}\n\nNhấn OK để chuyển sang Zalo chat trực tiếp với shop ngay!`);

            if (confirmAction) {
                window.open(window.AppConfig.brand.zaloLink, '_blank');
            }
        });
    }
}

function renderStats() {
    // Base configuration
    const BASE_ORDERS = 7298;
    const START_DATE = new Date("2026-02-05"); // Implementation date
    const SERVING_SINCE = 2018;
    const BASE_ONLINE = 147;

    const t = window.AppConfig.translations[currentLang].footer;

    // 1. Calculate Orders
    const now = new Date();
    const diffTime = Math.abs(now - START_DATE);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const growth = Math.floor(diffDays * 7.5);
    const currentOrders = BASE_ORDERS + growth;

    // 2. Calculate Customers (1/15 of Orders)
    const currentCustomers = Math.floor(currentOrders / 15);

    // 3. Online Users
    const onlineVariance = Math.floor(Math.random() * 12);
    const currentOnline = BASE_ONLINE + 1 + onlineVariance;

    // Render
    const elOrders = document.getElementById('stat-orders');
    const elCustomers = document.getElementById('stat-customers');
    const elServing = document.getElementById('stat-serving');
    const elOnline = document.getElementById('stat-online');

    if (elOrders) elOrders.innerText = `${t.sold.replace('...', '')} ${currentOrders.toLocaleString('vi-VN')}`;
    if (elCustomers) elCustomers.innerText = `${t.customers.replace('...', '')} ${currentCustomers.toLocaleString('vi-VN')}`;
    if (elServing) {
        const years = now.getFullYear() - SERVING_SINCE;
        elServing.innerText = `${t.serving} (${years})`;
    }
    if (elOnline) elOnline.innerHTML = `${t.online.replace('...', '')} <span style="color: rgba(255,255,255,0.9); font-weight:bold;">${currentOnline}</span>`;
}
