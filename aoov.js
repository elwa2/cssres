/* SALLA CROSS-SELL SCRIPT (FREQUENTLY BOUGHT TOGETHER) - AOV STORE */
(() => {
    "use strict";

    // ---------------------------------------------------------
    // 1. CONFIGURATION: Products Pool (المنتجات الخاصة بمتجر مسك اوف)
    // ---------------------------------------------------------
    const isArabic = document.documentElement.lang === "ar" || document.documentElement.dir === "rtl";

    const PRODUCTS_POOL = [
        { 
            id: "1578430684", 
            name: "AOV signature", 
            price: "190", 
            before_price: "", // إذا كان هناك سعر قبل الخصم ضعه هنا
            image: "https://cdn.salla.sa/PdEOwq/5aa0fd97-e589-4ad1-aa65-f465158345c8-500x500-vsQ2RkEamzhhqK1cJ2t4T7X38VQ2ykFtSs4wEt4G.jpg"
        },
        { 
            id: "1245680239", 
            name: "توزيعات اوڤ", 
            price: "199", 
            before_price: "", 
            image: "https://cdn.salla.sa/PdEOwq/a2254331-93e5-4825-9a23-c47af7f21e60-1000x1000-ohbPIVSLBzvP2K2VIepMkd5htO1PM1Gn4uDOCPgf.jpg" 
        },
        { 
            id: "1677469918", 
            name: "SIGNATURE", 
            price: "180", 
            before_price: "", 
            image: "https://cdn.salla.sa/PdEOwq/df06e03c-af31-42d7-8d74-e3c98b62f77d-1000x1000-YaDJbHoxybs3lIzSAHJdHdrHnUgT558PbwgkSS7C.jpg" 
        },
        { 
            id: "1249952970", 
            name: "Summer box", 
            price: "490", 
            before_price: "", 
            image: "https://cdn.assets.salla.network/themes/581928698/1.199.0/images/placeholder.png",
            out_of_stock: true // قمت بتحديد هذا المنتج كـ "نفدت الكمية" بناءً على الكود الذي أرسلته حتى لا يظهر للعملاء للشراء
        }
        // يمكنك إضافة المزيد من المنتجات هنا بنسخ نفس القالب 👆
    ];

    // ---------------------------------------------------------
    // 2. UI RENDER LOGIC
    // ---------------------------------------------------------
    const doMountBundle = () => {
        if (document.getElementById('custom-bundle-section')) return true; 

        const anchor = document.querySelector(".inventory-content") || document.querySelector("#variant-inventory") || document.querySelector(".product-single__info");
        if (!anchor || !anchor.parentNode) return false;

        let currentPageId = null;
        const urlParts = location.pathname.split('?')[0].split('/').filter(Boolean);
        const endPart = urlParts[urlParts.length - 1];
        
        if (endPart && endPart.startsWith('p') && !isNaN(endPart.slice(1))) {
            currentPageId = endPart.slice(1);
        } else {
            const formInput = document.querySelector('input[name="id"], input[name="product_id"]');
            if (formInput) currentPageId = formInput.value;
        }

        let cleanPool = [];
        for(let i = 0; i < PRODUCTS_POOL.length; i++) {
            if(PRODUCTS_POOL[i].id !== currentPageId && !PRODUCTS_POOL[i].out_of_stock) {
                cleanPool.push(PRODUCTS_POOL[i]);
            }
        }
        
        cleanPool.sort(() => Math.random() - 0.5);
        
        if(cleanPool.length === 0) return false;

        const currentBundle = {
            title: isArabic ? "عادة ما يتم شراؤها معًا" : "Frequently bought together",
            subtitle: "",
            products: cleanPool.slice(0, 10) 
        };

        let cardsHTML = "";
        for (let i = 0; i < currentBundle.products.length; i++) {
            const p = currentBundle.products[i];
            const bPriceHTML = p.before_price ? ('<span class="cb-before-price">' + p.before_price + ' <i class="sicon-sar"></i></span>') : '';

            cardsHTML += '<div class="cb-card" data-id="' + p.id + '">' +
                '<div class="cb-img-wrapper">' +
                    '<div class="cb-checkbox">' +
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' +
                            '<polyline points="20 6 9 17 4 12"></polyline>' +
                        '</svg>' +
                    '</div>' +
                    '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" />' +
                '</div>' +
                '<div class="cb-info">' +
                    '<div class="cb-name">' + p.name + '</div>' +
                    '<div class="cb-pricing">' +
                        '<span class="cb-price">' + p.price + ' <i class="sicon-sar"></i></span>' +
                        bPriceHTML +
                    '</div>' +
                '</div>' +
            '</div>';
        }

        if (cardsHTML === "") return true;

        if (!document.getElementById("bundle-slider-styles")) {
            const css = ".sp { display: none !important; } " +
                ".cb-container { margin: 24px 0; padding: 15px 0; width: 100%; border-top: 1px solid #eee; border-bottom: 1px solid #eee; font-family: inherit; position: relative; } " +
                ".cb-header { margin-bottom: 15px; text-align: right; } " +
                ".cb-title { font-size: 1.25rem; font-weight: 700; color: #333; margin: 0; } " +
                ".cb-subtitle { font-size: 0.95rem; color: #837356; margin: 5px 0 0 0; } " +
                "[dir='ltr'] .cb-header { text-align: left; } " +
                ".cb-carousel-wrapper { position: relative; display: flex; align-items: center; } " +
                ".cb-carousel-track { display: flex; overflow-x: auto; scroll-behavior: smooth; gap: 15px; padding: 10px 5px; scrollbar-width: none; } " +
                ".cb-carousel-track::-webkit-scrollbar { display: none; } " +
                ".cb-card { flex: 0 0 min(170px, 45%); border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fff; position: relative; transition: all 0.2s ease; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.02); display: flex; flex-direction: column; } " +
                ".cb-card:hover { border-color: #d1d5db; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } " +
                ".cb-card.is-selected { border-color: #739798; box-shadow: 0 4px 12px rgba(115,151,152,0.15); } " +
                ".cb-img-wrapper { position: relative; height: 150px; background-color: #fafafa; } " +
                ".cb-img-wrapper img { width: 100%; height: 100%; object-fit: cover; } " +
                ".cb-checkbox { position: absolute; top: 10px; right: auto; left: 10px; z-index: 2; width: 24px; height: 24px; border-radius: 6px; border: 2px solid #e5e7eb; background: #fff; display: flex; align-items: center; justify-content: center; transition: all 0.2s; } " +
                "[dir='ltr'] .cb-checkbox { left: auto; right: 10px; } " +
                ".cb-card.is-selected .cb-checkbox { background-color: #739798; border-color: #739798; } " +
                ".cb-checkbox svg { width: 14px; height: 14px; color: #fff; opacity: 0; transform: scale(0.5); transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); } " +
                ".cb-card.is-selected .cb-checkbox svg { opacity: 1; transform: scale(1); } " +
                ".cb-info { padding: 12px; display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; } " +
                ".cb-name { font-size: 0.85rem; font-weight: 600; color: #333; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 8px; } " +
                ".cb-pricing { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; } " +
                ".cb-price { font-weight: 700; color: #ef4444; font-size: 0.95rem; } " +
                ".cb-before-price { text-decoration: line-through; color: #9ca3af; font-size: 0.85rem; } " +
                ".cb-nav-btn { background: #fff; border: 1px solid #e5e7eb; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.05); position: absolute; z-index: 10; color: #374151; transition: all 0.2s; } " +
                ".cb-nav-btn:hover { background: #f9fafb; box-shadow: 0 4px 6px rgba(0,0,0,0.1); } " +
                ".cb-nav-prev { left: auto; right: -15px; transform: scaleX(-1); } " +
                ".cb-nav-next { right: auto; left: -15px; transform: scaleX(-1); } " +
                "[dir='ltr'] .cb-nav-prev { left: -15px; right: auto; transform: none; } " +
                "[dir='ltr'] .cb-nav-next { right: -15px; left: auto; transform: none; } " +
                "@media (max-width: 768px) { .cb-nav-btn { display: none; } .cb-carousel-track { padding: 10px 0; } }";

            const styleEl = document.createElement("style");
            styleEl.id = "bundle-slider-styles";
            styleEl.textContent = css;
            document.head.appendChild(styleEl);
        }

        const subtitleHTML = currentBundle.subtitle ? '<p class="cb-subtitle">' + currentBundle.subtitle + '</p>' : '';
        const dirAttr = isArabic ? "rtl" : "ltr";
        const bundleHtmlCache = '<div id="custom-bundle-section" class="cb-container" dir="' + dirAttr + '">' +
            '<div class="cb-header">' +
                '<h2 class="cb-title">' + currentBundle.title + '</h2>' +
                subtitleHTML +
            '</div>' +
            '<div class="cb-carousel-wrapper">' +
                '<button type="button" class="cb-nav-btn cb-nav-prev" aria-label="Previous">' +
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>' +
                '</button>' +
                '<div class="cb-carousel-track" id="cb-track">' +
                    cardsHTML +
                '</div>' +
                '<button type="button" class="cb-nav-btn cb-nav-next" aria-label="Next">' +
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>' +
                '</button>' +
            '</div>' +
        '</div>';

        const wrap = document.createElement("div");
        wrap.innerHTML = bundleHtmlCache;
        const insertElement = wrap.firstElementChild;

        anchor.parentNode.insertBefore(insertElement, anchor.nextSibling);

        const track = document.getElementById('cb-track');
        if (track) {
            document.querySelectorAll('.cb-card').forEach(card => {
                card.addEventListener('click', () => card.classList.toggle('is-selected'));
            });

            const prevBtn = document.querySelector('.cb-nav-prev');
            if (prevBtn) prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: isArabic ? 200 : -200, behavior: 'smooth' }); 
            });

            const nextBtn = document.querySelector('.cb-nav-next');
            if (nextBtn) nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: isArabic ? -200 : 200, behavior: 'smooth' }); 
            });
        }
        return true;
    };

    // ---------------------------------------------------------
    // 3. BOOT PAGE
    // ---------------------------------------------------------
    const startBundleLogic = () => {
        if (doMountBundle()) return;
        const obs = new MutationObserver(() => {
            if (doMountBundle()) obs.disconnect();
        });
        obs.observe(document.documentElement, { childList: true, subtree: true });
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startBundleLogic, { once: true });
    } else {
        startBundleLogic();
    }

    // ---------------------------------------------------------
    // 4. CART HOOK LOGIC
    // ---------------------------------------------------------
    let isProcessingBundles = false;
    
    const triggerCartAddition = async () => {
        if (isProcessingBundles) return;
        
        const selectedCards = document.querySelectorAll('.cb-card.is-selected');
        if (selectedCards.length === 0) return;

        isProcessingBundles = true;
        try {
            for (let i = 0; i < selectedCards.length; i++) {
                const card = selectedCards[i];
                const pid = card.getAttribute('data-id');
                if (pid) {
                    try {
                        if (window.salla && window.salla.cart && window.salla.cart.api && window.salla.cart.api.addItem) {
                            await window.salla.cart.api.addItem({ id: pid, quantity: 1 });
                        } else if (window.salla && window.salla.cart && window.salla.cart.addItem) {
                            await window.salla.cart.addItem({ id: pid, quantity: 1 });
                        } else {
                            const params = new URLSearchParams();
                            params.append('id', pid);
                            params.append('quantity', '1');
                            await fetch('/cart/item', { 
                                method: 'POST', 
                                body: params, 
                                headers: { 'X-Requested-With': 'XMLHttpRequest' }
                            });
                        }
                    } catch (err) { }
                    card.classList.remove('is-selected'); 
                }
            }
            if(window.salla && window.salla.event && window.salla.event.dispatch) {
                window.salla.event.dispatch("cart::refresh");
            }
        } finally {
            isProcessingBundles = false;
        }
    };

    if (window.salla && window.salla.event && window.salla.event.on) {
        window.salla.event.on('cart::add.item.success', triggerCartAddition);
    }
    document.addEventListener('salla::cart:add.item.success', triggerCartAddition);
    document.addEventListener('cart::add.item.success', triggerCartAddition);

    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('form.product-form button[type="submit"], salla-add-product-button');
        if (!btn || btn.closest('#custom-bundle-section') || btn.closest('.sp')) return; 

        setTimeout(triggerCartAddition, 1200);
    });

})();
















(function() {
    if (document.getElementById('custom-floating-loyalty-btn')) return;

    const style = document.createElement('style');
    style.innerHTML = `
        .custom-floating-loyalty-btn {
            position: fixed;
            top: 50%;    top: 91%;
            left: 20px;
            transform: translateY(-50%);
            background-color: #000000;
            color: #ffffff !important;
            padding: 12px 28px;
            border-radius: 16px;
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;
            z-index: 9999;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease, opacity 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            will-change: transform;
        }
        .custom-floating-loyalty-btn:hover {
            transform: translateY(-50%) scale(1.05);
            opacity: 0.9;
        }
        @media (max-width: 768px) {
            .custom-floating-loyalty-btn {
                padding: 10px 20px;
                font-size: 16px;
                left: 10px;
                border-radius: 14px;
            }
        }
    `;
    document.head.appendChild(style);

    const loyaltyBtn = document.createElement('a');
    loyaltyBtn.id = 'custom-floating-loyalty-btn';
    loyaltyBtn.href = 'https://aoov.online/ar/loyalty';
    loyaltyBtn.className = 'custom-floating-loyalty-btn';
    loyaltyBtn.innerText = 'المكافآت';

    document.body.appendChild(loyaltyBtn);
})();