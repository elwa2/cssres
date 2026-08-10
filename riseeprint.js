(function() {
    function applyStrictFooterRedesign() {
        const footerContainer = document.querySelector('.store-footer__inner .container');
        if (!footerContainer || footerContainer.classList.contains('redesign-applied')) return;

        // Fetch Quick Links
        const linkElements = document.querySelectorAll('.store-links-items a');
        let quickLinksHTML = '';
        linkElements.forEach(a => {
            quickLinksHTML += `<li><a href="${a.href}">${a.textContent.trim()}</a></li>`;
        });
        if (!quickLinksHTML) {
            quickLinksHTML = `
                <li><a href="/redirect/pages/1023323585">من نحن</a></li>
                <li><a href="/latest-products">منتجات</a></li>
                <li><a href="/-/c1364273694">تجميعات</a></li>
                <li><a href="/blog">مدونات</a></li>
                <li><a href="/redirect/pages/249285826">التواصل</a></li>
            `;
        }

        // Fetch Categories
        const catNodes = document.querySelectorAll('#mobile-menu li.root-level > a');
        let catsHTML = '';
        catNodes.forEach(node => {
            catsHTML += `<li><a href="${node.href}">${node.textContent.trim()}</a></li>`;
        });

        // Set the newly requested logo
        const logoSrc = 'https://cdn.files.salla.network/homepage/304821586/0c7df4f2-3745-4a9b-8f59-67ad1ca77045_865x217.webp';

        // Social SVG Icons
        const socialHTML = `
            <a href="#" aria-label="Instagram" target="_blank"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="#" aria-label="TikTok" target="_blank"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.93-.5 3.91-1.72 5.4-1.61 1.97-4.14 2.97-6.66 2.63-2.68-.36-5.04-2.31-5.83-4.91-.8-2.61.1-5.51 2.14-7.25 1.83-1.57 4.39-2.03 6.66-1.39v4.01c-.96-.4-2.04-.38-2.95.07-.94.46-1.65 1.34-1.79 2.37-.15 1.09.28 2.21 1.09 2.93.81.71 1.95 1 3.01.76 1.1-.24 2.01-1 2.36-2.07.24-.74.25-1.54.25-2.32V.02h-.01z"/></svg></a>
            <a href="#" aria-label="WhatsApp" target="_blank"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
        `;

        footerContainer.classList.add('redesign-applied');
        footerContainer.innerHTML = `
            <div class="nf-grid">
                <div class="nf-col nf-brand">
                    <img src="${logoSrc}" alt="Rise Logo" class="nf-logo">
                    <p class="nf-desc">نمتلك الابداع الذي يجعل مشروعك يتقدم. جودة وجمالية وكمية تناسب احتياجك.</p>
                    <div class="nf-newsletter">
                        <h4 class="nfn-title">اشترك في نشرة <span class="nfn-highlight">رايز</span> لتلقي<br>عروض خاصة<br>وآخر الأخبار والإلهام</h4>
                        <div class="nfn-input-wrap">
                            <input type="email" placeholder="example@riseeprint.com" class="nfn-input">
                        </div>
                        <p class="nfn-note">هذا الموقع محمي بواسطة <span class="nfn-highlight">reCAPTCHA</span>، وتسري عليه <a href="#">سياسة خصوصية</a> جوجل و<a href="#">شروط الخدمة</a>.</p>
                    </div>
                </div>

                <div class="nf-col nf-links">
                    <h3 class="nf-title">روابط سريعة</h3>
                    <ul class="nf-list">
                        ${quickLinksHTML}
                    </ul>
                </div>

                <div class="nf-col nf-cats">
                    <h3 class="nf-title">فئات</h3>
                    <ul class="nf-list">
                        ${catsHTML}
                    </ul>
                </div>

                <div class="nf-col nf-contact">
                    <h3 class="nf-title">تواصل معنا</h3>
                    <div class="nf-contact-links">
                        <a href="tel:+966533281083" dir="ltr">+966 53 328 1083</a>
                        <a href="mailto:help@riseeprint.com">help@riseeprint.com</a>
                        <span>Saudi Arabia</span>
                    </div>
                    <div class="nf-socials">
                        ${socialHTML}
                    </div>
                </div>
            </div>
        `;

        const bottomFooter = document.querySelector('.footer-bottom .container');
        if (bottomFooter) {
            const smallLogo = 'https://cdn.files.salla.network/theme/304821586/d10e79d2-9946-4182-8573-2133edc74aa8.png';
            bottomFooter.innerHTML = `
                <div class="nf-bottom-bar">
                    <div class="nf-bottom-right">
                        <a href="#">الشروط والأحكام</a>
                        <a href="#">سياسة الخصوصية</a>
                        <a href="#">معلومات الشركة</a>
                        <a href="#">تفضيلات ملفات تعريف الارتباط</a>
                    </div>
                    <div class="nf-bottom-left" dir="ltr">
                        <img src="${smallLogo}" alt="Rise" class="nf-bottom-icon">
                        <span>© 2026 Rise. All rights reserved.</span>
                    </div>
                </div>
            `;
        }

        const style = document.createElement('style');
        style.textContent = `
            
        `;
        document.head.appendChild(style);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(applyStrictFooterRedesign, 600));
    } else {
        setTimeout(applyStrictFooterRedesign, 600);
    }
})();










 











document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('button[data-selia="header-search-button"]');
    
    if (searchBtn) {
        // 1. Inject CSS for pure Flexbox layout (no absolute positioning)
        const style = document.createElement('style');
        style.textContent = `
          
        `;
        document.head.appendChild(style);

        // 2. Inject HTML Structure
        searchBtn.innerHTML = `
            <span class="js-search-text">البحث</span>
            <svg class="custom-search-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M30.276 28.391l-7.576-7.576c1.644-2.053 2.633-4.652 2.633-7.481 0-6.616-5.384-12-12-12s-12 5.384-12 12 5.384 12 12 12c2.829 0 5.428-0.989 7.481-2.633l7.576 7.576c0.26 0.26 0.601 0.391 0.943 0.391s0.683-0.131 0.943-0.391c0.521-0.521 0.521-1.364 0-1.885zM13.333 22.667c-5.147 0-9.333-4.187-9.333-9.333s4.187-9.333 9.333-9.333 9.333 4.187 9.333 9.333-4.187 9.333-9.333 9.333z"></path>
            </svg>
        `;
    }
});









document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.s-block--enhanced-features .grid');
    if (!container) return;

    const style = document.createElement('style');
    style.innerHTML = `
    `;
    document.head.appendChild(style);

    const items = container.querySelectorAll('.s-block--enhanced-features__item');
    if (items.length <= 2) return;

    let currentIndex = 0;
    let autoPlayTimer;

    const startAutoPlay = () => {
        autoPlayTimer = setInterval(() => {
            if (window.innerWidth > 767) return;

            const isRTL = getComputedStyle(container).direction === 'rtl';
            currentIndex += 2;

            if (currentIndex >= items.length) {
                currentIndex = 0;
                container.scrollBy({
                    left: isRTL ? container.scrollWidth : -container.scrollWidth,
                    behavior: 'smooth'
                });
            } else {
                container.scrollBy({
                    left: isRTL ? -container.clientWidth : container.clientWidth,
                    behavior: 'smooth'
                });
            }
        }, 3000);
    };

    const stopAutoPlay = () => clearInterval(autoPlayTimer);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(container);

    container.addEventListener('touchstart', stopAutoPlay, { passive: true });
    container.addEventListener('touchend', startAutoPlay, { passive: true });
});















document.addEventListener('DOMContentLoaded', () => {
    const bannerLink = document.querySelector('.textfifabaner a[data-selia="home-banners-slider-banner"]');
    
    if (!bannerLink) return;

    bannerLink.style.position = 'relative';
    bannerLink.style.display = 'block';

    if(bannerLink.querySelector('.custom-salla-overlay')) {
        bannerLink.querySelector('.custom-salla-overlay').remove();
    }

    // الطبقة الخارجية
    const overlay = document.createElement('div');
    overlay.className = 'custom-salla-overlay';

    // الحاوية الداخلية لتوسيط العناصر مع بعضها
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'custom-salla-content';

    const titleElement = document.createElement('h2');
    titleElement.className = 'custom-salla-title';
    titleElement.textContent = 'حتى وقت الفعاليات معك';

    const subtitleElement = document.createElement('p');
    subtitleElement.className = 'custom-salla-subtitle';
    subtitleElement.textContent = 'نحتفل مع بعض';

    const btnElement = document.createElement('span');
    btnElement.className = 'custom-salla-btn';
    btnElement.textContent = 'تسوق جميع المنتجات';

    // إضافة العناصر للحاوية الداخلية
    contentWrapper.appendChild(titleElement);
    contentWrapper.appendChild(subtitleElement);
    contentWrapper.appendChild(btnElement);
    
    // إضافة الحاوية للطبقة الخارجية
    overlay.appendChild(contentWrapper);
    bannerLink.appendChild(overlay);

    const styleId = 'custom-salla-banner-style';
    if(!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .custom-salla-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center; /* توسيط عمودي */
                justify-content: flex-start; /* محاذاة لليسار في اللغات الأجنبية */
                padding: 5% 10%;
                box-sizing: border-box;
                z-index: 2;
                pointer-events: none;
            }
            
            html[dir="rtl"] .custom-salla-overlay {
                justify-content: flex-end; /* دفع العناصر لليسار في القوالب العربية */
            }

            .custom-salla-content {
                display: flex;
                flex-direction: column;
                align-items: center; /* توسيط العناصر بداخل الحاوية */
                text-align: center;
            }

            .custom-salla-title {
                color: #ffffff;
                font-size: clamp(22px, 4vw, 42px);
                font-weight: 800;
                margin: 0 0 10px 0;
                text-shadow: 1px 1px 6px rgba(0,0,0,0.3);
                transform: translateY(10px);
                opacity: 0;
                animation: fadeUpIn 0.8s forwards ease-out 0.1s;
            }

            .custom-salla-subtitle {
                color: #ffffff;
                font-size: clamp(16px, 2.5vw, 24px);
                font-weight: 500;
                margin: 0 0 25px 0;
                text-shadow: 1px 1px 6px rgba(0,0,0,0.3);
                transform: translateY(10px);
                opacity: 0;
                animation: fadeUpIn 0.8s forwards ease-out 0.2s;
            }

            .custom-salla-btn {
                background-color: #f72a5a;
                color: #ffffff;
                padding: 12px 35px;
                border-radius: 50px;
                font-weight: 700;
                font-size: clamp(14px, 2vw, 16px);
                transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
                box-shadow: 0 4px 15px rgba(247, 42, 90, 0.3);
                pointer-events: auto;
                transform: translateY(10px);
                opacity: 0;
                animation: fadeUpIn 0.8s forwards ease-out 0.3s;
            }

            .textfifabaner a:hover .custom-salla-btn {
                transform: scale(1.05) translateY(0);
                background-color: #d81b45;
                box-shadow: 0 6px 20px rgba(247, 42, 90, 0.4);
            }

            @keyframes fadeUpIn {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @media (max-width: 768px) {
                .custom-salla-overlay, html[dir="rtl"] .custom-salla-overlay {
                    justify-content: center;
                  
                    padding: 5%;
                }
            }
        `;
        document.head.appendChild(style);
    }
});
