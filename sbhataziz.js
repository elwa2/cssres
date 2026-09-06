document.querySelector("body > div.app-inner.flex.flex-col.min-h-full > header > div.main-nav-container.shadow-default.bg-white > div > div > div .flex.items-center.justify-end").innerHTML+=
` <button class="header-btn" onclick="salla.event.dispatch('search::open')">
<i class="header-btn__icon"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
<title>search</title>
<path d="M30.276 28.391l-7.576-7.576c1.644-2.053 2.633-4.652 2.633-7.481 0-6.616-5.384-12-12-12s-12 5.384-12 12 5.384 12 12 12c2.829 0 5.428-0.989 7.481-2.633l7.576 7.576c0.26 0.26 0.601 0.391 0.943 0.391s0.683-0.131 0.943-0.391c0.521-0.521 0.521-1.364 0-1.885zM13.333 22.667c-5.147 0-9.333-4.187-9.333-9.333s4.187-9.333 9.333-9.333 9.333 4.187 9.333 9.333-4.187 9.333-9.333 9.333z"></path>
</svg></i>
</button>
`;


document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(() => {
        const menu = document.querySelector("#mainnav ul.s-user-menu-dropdown-list");
        if (menu && !menu.dataset.modified) {
            const newItem = document.createElement("li");
            newItem.className = "s-user-menu-dropdown-item taq";
            newItem.innerHTML = `<a href="https://sbhataziz.com/rating"><i class="sicon-star"></i>تقييم المتجر والمنتجات</a>`;

            const lastItem = menu.lastElementChild;
            if (lastItem) {
                menu.insertBefore(newItem, lastItem);
            } else {
                menu.appendChild(newItem);
            }

            menu.dataset.modified = "true";
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
});







window.onload = function () {
  // نقل العنصر الأول
  const source = document.querySelector('div.main-content.md\\:sticky.md\\:overflow-hidden.top-24.w-full.md\\:w-2\\/4.md\\:pb-16 > div.bg-white.py-2\\.5.mb-5.rounded-md.inline-flex.text-sm');
  const target = document.querySelector('salla-rating-stars');

  if (source && target) {
    target.parentNode.insertBefore(source, target);
  }

  // نقل small إلى جنب السعر
  const smallElement = document.querySelector('div.main-content.md\\:sticky.md\\:overflow-hidden.top-24.w-full.md\\:w-2\\/4.md\\:pb-16 > small');
  const priceContainer = document.querySelector('div.flex.whitespace-nowrap.gap-4.items-center');

  if (smallElement && priceContainer) {
    priceContainer.appendChild(smallElement);
  }
};




document.addEventListener('DOMContentLoaded', function () {
    const productSections = document.querySelectorAll('section.s-block.container');

    productSections.forEach(section => {
        const title = section.querySelector('.s-block__title');
        const productList = section.querySelector('salla-products-list');
        const showAllButton = section.querySelector('.s-block__display-all');

        if (title && productList && showAllButton && title.parentElement === section && productList.parentElement === section) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('s-block-wrap');
            section.insertBefore(wrapper, title);
            
            wrapper.appendChild(title);
            wrapper.appendChild(productList);
            wrapper.appendChild(showAllButton);
        }
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const swiperSection = document.querySelector('section.s-block.s-block--best-offers.container.overflow-hidden');
    if (swiperSection) {
        const swiperContainer = swiperSection.querySelector('.swiper');
        if (swiperContainer) {
            const interval = setInterval(() => {
                if (swiperContainer.swiper) {
                    clearInterval(interval);
                    swiperContainer.swiper.params.slidesPerGroup = 2;
                    swiperContainer.swiper.update();
                }
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
            }, 5000);
        }
    }
});


(function() {
    // دالة لإنشاء العناصر (تعمل فوراً)
    function initCustomToast() {
        // 1. منع التكرار (عشان لو الكود اشتغل مرتين بالغلط)
        if (document.getElementById('js-custom-toast')) return;

        // 2. حقن الـ CSS
        const style = document.createElement('style');
        style.innerHTML = `
            .custom-toast-overlay {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translate(-50%, -150%);
                width: 90%;
                max-width: 380px;
                background: #fff;
                box-shadow: 0 8px 30px rgba(0,0,0,0.12);
                border-radius: 8px;
                z-index: 2147483647 !important; /* أعلى طبقة ممكنة */
                opacity: 0;
                visibility: hidden;
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s;
                overflow: hidden;
                direction: rtl;
                font-family: inherit;
                pointer-events: none; /* عشان ما يمنع الضغط تحته */
            }
            .custom-toast-overlay.active {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, 0);
                pointer-events: auto;
            }
            .toast-progress-bar {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 4px;
                background-color: #28a745;
                transform-origin: right;
                transform: scaleX(1);
            }
            .toast-progress-bar.animating {
                transition: transform 3000ms linear;
                transform: scaleX(0);
            }
            .toast-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 14px 16px;
            }
            .toast-icon-wrapper {
                width: 20px;
                height: 20px;
                background: #28a745;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                flex-shrink: 0;
            }
            .toast-text {
                color: #333;
                font-weight: 600;
                font-size: 13px;
                flex-grow: 1;
                text-align: right;
            }
            .toast-close {
                color: #999;
                cursor: pointer;
                font-size: 18px;
                padding: 4px;
                line-height: 1;
                margin-right: 8px;
            }
        `;
        document.head.appendChild(style);

        // 3. حقن الـ HTML
        const toastDiv = document.createElement('div');
        toastDiv.id = 'js-custom-toast';
        toastDiv.className = 'custom-toast-overlay';
        toastDiv.innerHTML = `
            <div class="toast-progress-bar" id="js-toast-progress"></div>
            <div class="toast-content">
                <div style="display:flex; align-items:center;">
                    <div class="toast-icon-wrapper">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <span class="toast-text">تمت الإضافة إلى سلة التسوق</span>
                </div>
                <span class="toast-close" onclick="document.getElementById('js-custom-toast').classList.remove('active')">&#10005;</span>
            </div>
        `;
        document.body.appendChild(toastDiv);
    }

    // تشغيل دالة الإنشاء
    initCustomToast();

    // متغير المؤقت
    let toastTimer;

    // دالة العرض
    function triggerToast() {
        const toast = document.getElementById('js-custom-toast');
        const bar = document.getElementById('js-toast-progress');
        
        if(!toast || !bar) return;

        // إعادة الضبط
        clearTimeout(toastTimer);
        toast.classList.remove('active');
        bar.classList.remove('animating');
        
        // Reflow (خدعة لإعادة تشغيل الانيميشن)
        void bar.offsetWidth;

        // التشغيل
        requestAnimationFrame(() => {
            toast.classList.add('active');
            bar.classList.add('animating');
        });

        // الإخفاء
        toastTimer = setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    // 4. المستمع للحدث (الأقوى - يعمل في وضع Capture)
    document.addEventListener('click', function(e) {
        // البحث عن الزر بدقة بناء على الكود اللي انت ارسلته
        // نبحث عن أقرب عنصر يحمل كلاس s-button-element
        const targetBtn = e.target.closest('.s-button-element');

        if (targetBtn) {
            // تحقق إضافي: هل هو زر منتج؟ (يحتوي على product-id ونوعه زر)
            if (targetBtn.hasAttribute('product-id') && targetBtn.getAttribute('type') === 'button') {
                // تحقق أخير: هل هو زر "إضافة" (وليس زر إعلام توفر)
                // نتأكد بوجود أيقونة السلة أو كلمة إضافة
                if (targetBtn.querySelector('.sicon-shopping-bag') || targetBtn.innerText.indexOf('إضافة') !== -1) {
                    triggerToast();
                }
            }
        }
    }, true); // true هنا هي السر! تعني التقاط الحدث قبل أي كود آخر في الموقع

})();





(function() {
    function tryLoadMore() {
        try {
            // البحث عن زر التحميل
            const loadMoreButton = document.querySelector('div.s-infinite-scroll-wrapper > button');
            
            if (loadMoreButton) {
                console.log('تم العثور على زر التحميل');
                
                // محاولة الضغط
                loadMoreButton.click();
                
                console.log('تم الضغط على الزر');
            } else {
                console.log('لم يتم العثور على زر التحميل');
            }
        } catch (error) {
            console.error('حدث خطأ:', error);
        }
    }

    // محاولة التحميل عند تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryLoadMore);
    } else {
        tryLoadMore();
    }

    // مراقبة مستمرة كل 3 ثوانٍ
    setInterval(tryLoadMore, 3000);
})();










 

















