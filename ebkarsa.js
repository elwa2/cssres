
(function() {
    const faqHTML = `
    <section class="custom-faq-section container" id="ebkar-faq">
        <div class="s-block__title">
            <h2>الأسئلة الشائعة</h2>
        </div>
        <div class="faq-container">
            
            <div class="faq-item">
                <button class="faq-question">
                    <span>هل يصدر إبكار صوتًا عند التنبيه؟</span>
                    <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        لا، فكرة إبكار تعتمد على الاهتزاز على معصمك بدل صوت المنبه، حتى تستيقظ بدون إزعاج من حولك.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>هل اهتزاز إبكار واضح أثناء النوم؟</span>
                    <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        صُمم التنبيه ليكون اهتزازًا مباشرًا على المعصم، بحيث تشعر به عند حلول موعد التنبيه. وتختلف استجابة الأشخاص للاهتزاز من شخص لآخر.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>هل أقدر أنام وأنا لابس إبكار؟</span>
                    <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        نعم، إبكار مصمم ليُلبس على المعصم أثناء النوم حتى يكون التنبيه قريبًا منك عند موعد الاستيقاظ.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>هل إبكار مخصص لصلاة الفجر فقط؟</span>
                    <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        لا. الفجر جزء أساسي من فكرة إبكار، لكن تقدر تستخدمه أيضًا للدوام، الجامعة، الاختبارات، السفر، القيلولة والمواعيد المهمة.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>ما هو تحدي إبكار؟</span>
                    <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        بطاقة تحفيزية ترافقك لمدة 30 فجرًا؛ كل فجر تقوم له وتؤدي صلاتك، تضع علامة ✓ وتواصل التحدي.
                    </div>
                </div>
            </div>

        </div>
    </section>
    `;

    function injectFAQ() {
        if (document.getElementById('ebkar-faq')) return true;

        const footer = document.querySelector('.store-footer');
        if (!footer) return false; 

        footer.insertAdjacentHTML('beforebegin', faqHTML);

        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');

                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                });

                if (!isActive) {
                    question.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });

        return true; 
    }

    if (!injectFAQ()) {
        let attempts = 0;
        const intervalId = setInterval(() => {
            if (injectFAQ() || attempts > 20) {
                clearInterval(intervalId);
            }
            attempts++;
        }, 500);
    }
})();






 

(function() {
    let attempts = 0;
    const maxAttempts = 10;

    // 1. استخراج الرقم ديناميكياً من روابط المتجر أو من إعدادات سلة
    function extractWhatsappNumber() {
        // محاولة 1: من إعدادات سلة مباشرة (الأكثر دقة)
        if (window.salla && salla.config && salla.config.get('store.contacts.mobile')) {
            return salla.config.get('store.contacts.mobile').replace(/[^0-9]/g, '');
        }

        // محاولة 2: من رابط wa.me
        let waLink = document.querySelector('a[href*="wa.me/"]');
        if (waLink) {
            return waLink.getAttribute('href').split('wa.me/')[1].split('?')[0].replace(/[^0-9]/g, '');
        }

        // محاولة 3: من رابط api.whatsapp.com
        let apiWaLink = document.querySelector('a[href*="api.whatsapp.com/send"]');
        if (apiWaLink) {
            let url = new URL(apiWaLink.href);
            let phone = url.searchParams.get('phone');
            if (phone) return phone.replace(/[^0-9]/g, '');
        }

        // محاولة 4: من رابط اتصال في الفوتر
        let telLink = document.querySelector('footer.store-footer a[href^="tel:"]');
        if (telLink) {
            return telLink.getAttribute('href').replace('tel:', '').replace(/[^0-9]/g, '');
        }

        return null;
    }

    // 2. البحث عن الرقم وبدء التشغيل
    function findNumberAndInit() {
        const extractedNumber = extractWhatsappNumber();

        if (extractedNumber) {
            buildWhatsappButton(extractedNumber);
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(findNumberAndInit, 500);
        }
        // تم إزالة الرقم الافتراضي، إذا لم يجد رقماً لن يظهر الزر.
    }

    // 3. استخراج اسم المتجر ديناميكياً
    function getStoreName() {
        if (window.salla && salla.config && salla.config.get('store.name')) {
            return salla.config.get('store.name');
        }
        
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && ogTitle.content && !window.location.href.includes('/p')) {
             return ogTitle.content;
        }

        const storeLogoAlt = document.querySelector('.navbar-brand img, .header-logo img');
        if (storeLogoAlt && storeLogoAlt.getAttribute('alt')) {
            return storeLogoAlt.getAttribute('alt').replace('logo', '').trim();
        }

        return "متجركم"; 
    }

    // 4. بناء الزر بالتصميم المطلوب
    function buildWhatsappButton(whatsappNumber) {
        if (document.querySelector('.salla-whatsapp-floating')) return;

        const style = document.createElement('style');
        style.innerHTML = `
            .salla-whatsapp-floating {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background-color: #25d366;
                color: #fff;
                border-radius: 50%;
                text-align: center;
                font-size: 30px;
                box-shadow: 2px 2px 15px rgba(0,0,0,0.2);
                z-index: 999999;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                text-decoration: none !important;
                cursor: pointer;
            }

            .salla-whatsapp-floating:hover {
                background-color: #128c7e;
                transform: scale(1.1);
                color: #fff;
            }

            .salla-whatsapp-floating::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #25d366;
                border-radius: 50%;
                z-index: -1;
                animation: pulse-whatsapp 2s infinite;
            }

            @keyframes pulse-whatsapp {
                0% { transform: scale(1); opacity: 0.6; }
                100% { transform: scale(1.6); opacity: 0; }
            }

            .salla-whatsapp-floating svg {
                width: 35px;
                height: 35px;
                fill: #fff;
            }

            @media (max-width: 768px) {
                .salla-whatsapp-floating {
                    bottom: 130px;
                    right: 20px;
                    width: 55px;
                    height: 55px;
                }
                     .index .salla-whatsapp-floating {
                    bottom: 20px;
                  
                }
            }
        `;
        document.head.appendChild(style);

        const waLink = document.createElement('a');
        waLink.className = 'salla-whatsapp-floating';
        waLink.setAttribute('aria-label', 'تواصل معنا عبر واتساب');

        waLink.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        `;

        waLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const storeName = getStoreName();
            let message = `السلام عليكم، أرغب في الاستفسار عن منتجات ${storeName}.`; 
            const currentUrl = window.location.href;

            const productTitleElement = document.querySelector('h1.text-xl, h1.t-title, .main-content h1');

            if (currentUrl.includes('/p') && productTitleElement) {
                let productName = productTitleElement.innerText.trim();
                message = `السلام عليكم، أرغب في الاستفسار عن هذا المنتج من ${storeName}:\n\n*المنتج:* ${productName}\n*الرابط:* ${currentUrl}`;
            }

            const finalWaUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(finalWaUrl, '_blank');
        });

        document.body.appendChild(waLink);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', findNumberAndInit);
    } else {
        findNumberAndInit();
    }
})();





(function() {
    function removeTrustBadge() {
        // نستهدف كلاً من العنصرين لضمان دمجهما في وظيفة واحدة
        var badges = document.querySelectorAll('salla-trust-badges[data-testid="store-footer-trust-badges"], .footer-badges');
        badges.forEach(function(badge) {
            badge.remove();
        });
    }

    // 1. محاولة الحذف الفوري
    removeTrustBadge();

    // 2. تشغيل المراقب الذكي لالتقاط العنصر بمجرد حقنه في الرئيسية
    var observer = new MutationObserver(function() {
        removeTrustBadge();
    });

    // التأكد من وجود body قبل بدء المراقبة
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        document.addEventListener("DOMContentLoaded", function() {
            removeTrustBadge();
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
})();












(function() {
    // 1. وظيفة لزرع أكواد التصميم (CSS) الخاصة بالتبويبات
    function injectTabsStyles() {
        if (document.getElementById('salla-custom-tabs-style')) return;
        const style = document.createElement('style');
        style.id = 'salla-custom-tabs-style';
        style.innerHTML = `
            .salla-custom-tabs {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #eeeeee;
            }
            .custom-tab-btn {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row-reverse;
                gap: 8px;
                padding: 12px 15px;
                font-size: 16px;
                font-weight: bold;
                font-family: inherit;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 1px solid #e5e7eb;
                background-color: #ffffff;
                color: #000000;
                outline: none;
            }
            .custom-tab-btn:hover:not(.active) {
                border-color: var(--color-primary, #cb343c);
                color: var(--color-primary, #cb343c);
            }
            .custom-tab-btn.active {
                background: var(--gr, var(--color-primary, #cb343c)) !important;
                color: var(--color-primary-reverse, #edf5ff) !important;
                border: none !important;
            }
            .custom-tab-btn i {
                font-size: 18px;
            }
            .salla-tab-content {
                animation: fadeInTab 0.4s ease-in-out;
                width: 100%;
            }
            #tab-comments-content salla-comments {
                width: 100% !important;
                display: block !important;
            }
            @keyframes fadeInTab {
                from { opacity: 0; transform: translateY(5px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. وظيفة لزرع كود إخفاء المساحات الفارغة إذا لم توجد تقييمات
    function injectHideEmptyStyles() {
        if (document.getElementById('hide-empty-comments-style')) return;
        const style = document.createElement('style');
        style.id = 'hide-empty-comments-style';
        style.innerHTML = `
            salla-comments.hydrated, 
            .s-blocks-wrapper.s-before-related, 
            .s-comments-product {
                margin: 0 !important;
                padding: 0 !important;
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    // 3. الوظيفة الرئيسية للتحقق والتشغيل
    function initCustomTabs() {
        const descWrapper = document.querySelector('[data-testid="store-product-description"]');
        const commentsEl = document.querySelector('salla-comments');
        const articleEl = document.querySelector('.article--main');
        const readMoreBtn = document.getElementById('btn-show-more');

        // التأكد من وجود العناصر الأساسية
        if (!descWrapper || !commentsEl || !articleEl) return false;

        // التأكد من أن سلة قد قامت بتحميل التقييمات بالكامل (وجود كلاس hydrated)
        if (!commentsEl.classList.contains('hydrated')) return false;

        // التحقق مما إذا كان هناك تقييمات فعلية في المنتج
        const hasReviews = commentsEl.querySelectorAll('salla-comment-item').length > 0;

        // في حال "لا يوجد تقييمات"
        if (!hasReviews) {
            injectHideEmptyStyles(); // إخفاء المساحات الفارغة وكود سلة الافتراضي
            return true; // إيقاف الكود هنا (لا ننشئ تبويبات)
        }

        // --- في حال "يوجد تقييمات"، نقوم بإنشاء التبويبات ---
        
        // منع تكرار الكود إذا تم إنشاؤه مسبقاً
        if (document.querySelector('.salla-custom-tabs')) return true;

        injectTabsStyles();

        // إنشاء الأزرار
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'salla-custom-tabs';
        tabsContainer.innerHTML = `
            <button class="custom-tab-btn active" data-target="desc">
                التفاصيل <i class="sicon-document-text"></i>
            </button>
            <button class="custom-tab-btn" data-target="comments">
                التقييمات <i class="sicon-star2"></i>
            </button>
        `;

        // إنشاء صندوق الوصف
        const descTabContent = document.createElement('div');
        descTabContent.id = 'tab-desc-content';
        descTabContent.className = 'salla-tab-content';
        descTabContent.appendChild(articleEl);
        if (readMoreBtn) descTabContent.appendChild(readMoreBtn);

        // إنشاء صندوق التقييمات
        const commentsTabContent = document.createElement('div');
        commentsTabContent.id = 'tab-comments-content';
        commentsTabContent.className = 'salla-tab-content';
        commentsTabContent.style.display = 'none'; // مخفي في البداية
        commentsTabContent.appendChild(commentsEl);

        // تجميع العناصر داخل الصندوق الرئيسي
        descWrapper.innerHTML = ''; 
        descWrapper.appendChild(tabsContainer);
        descWrapper.appendChild(descTabContent);
        descWrapper.appendChild(commentsTabContent);

        // تفعيل التبديل بين الأزرار
        const tabButtons = tabsContainer.querySelectorAll('.custom-tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                tabButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                if (this.getAttribute('data-target') === 'desc') {
                    descTabContent.style.display = 'block';
                    commentsTabContent.style.display = 'none';
                } else {
                    descTabContent.style.display = 'none';
                    commentsTabContent.style.display = 'block';
                }
            });
        });

        return true; // تم التنفيذ بنجاح
    }

    // 4. مشغل الكود الموثوق
    function runLogic() {
        let attempts = 0;
        // المحاولة حتى 30 مرة (15 ثانية كحد أقصى) للتأكد من اتصال الإنترنت البطيء
        const interval = setInterval(() => {
            attempts++;
            if (initCustomTabs() || attempts > 30) {
                clearInterval(interval);
            }
        }, 500);
    }

    if (window.Salla && window.Salla.onReady) {
        Salla.onReady(runLogic);
    } else {
        document.addEventListener("DOMContentLoaded", runLogic);
    }
})();