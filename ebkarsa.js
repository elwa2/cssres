
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

    // 1. استخراج الرقم من الفوتر
    function findNumberAndInit() {
        const footerWaLink = document.querySelector('footer.store-footer a[href*="wa.me"]');

        if (footerWaLink) {
            let href = footerWaLink.getAttribute('href');
            let extractedNumber = href.split('wa.me/')[1].split('?')[0];

            buildWhatsappButton(extractedNumber);
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(findNumberAndInit, 500);
        } else {
            buildWhatsappButton("966543109049"); // رقمك الافتراضي في حال لم يجده
        }
    }

    // 2. بناء الزر بنفس تصميمك بالضبط
    function buildWhatsappButton(whatsappNumber) {
        if (document.querySelector('.salla-whatsapp-floating')) return;

        // الـ CSS الخاص بك بدون أي تعديل
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
                fill: currentColor;
                fill: #fff;
            }

            @media (max-width: 768px) {
                .salla-whatsapp-floating {
                    bottom: 20px;
                    right: 20px;
                    width: 55px;
                    height: 55px;
                }
            }
        `;
        document.head.appendChild(style);

        // إنشاء الزر (بقي كـ Anchor Tag للحفاظ على الـ CSS)
        const waLink = document.createElement('a');
        waLink.className = 'salla-whatsapp-floating';
        waLink.setAttribute('aria-label', 'تواصل معنا عبر واتساب');

        // الـ SVG الخاص بك بدون أي تعديل
        waLink.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        `;

        // 3. الجزء الذكي: برمجة الضغطة لقراءة بيانات المنتج
        waLink.addEventListener('click', function(e) {
            e.preventDefault(); // نمنع الرابط من عمل ريفريش للصفحة
            
            let message = "السلام عليكم، أرغب في الاستفسار عن منتجات Brezobrand"; 
            const currentUrl = window.location.href; // سحب الرابط الحالي

            // نبحث عن اسم المنتج داخل h1 (هذا الكلاس مأخوذ من كود متجرك الذي أرسلته)
            const productTitleElement = document.querySelector('h1.text-xl, h1.t-title, .main-content h1');

            // لو احنا في صفحة منتج (الرابط يحتوي على /p واسم المنتج موجود)
            if (currentUrl.includes('/p') && productTitleElement) {
                let productName = productTitleElement.innerText.trim();
                message = `السلام عليكم، أرغب في الاستفسار عن هذا المنتج:\n\n*المنتج:* ${productName}\n*الرابط:* ${currentUrl}`;
            }

            // توليد الرابط النهائي وفتحه
            const finalWaUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(finalWaUrl, '_blank');
        });

        document.body.appendChild(waLink);
        console.log("WhatsApp Smart Button Loaded with Number: " + whatsappNumber);
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
