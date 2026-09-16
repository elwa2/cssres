(function () {
    // 1. التحقق: هل نحن في الصفحة الرئيسية؟ إذا لا، توقف فوراً.
    if (document.body.getAttribute('data-template') !== 'home') return;

    // 2. التحقق لمنع تكرار الحقن
    if (document.getElementById('jaray-custom-hero')) return;

    // 3. أكواد الأيقونات (SVG)
    const iconArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
    const iconPlay = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
    const iconSocial = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
    const iconCode = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`;

    // 4. كود HTML المطابق 100% للتصميم المطلوب
    const heroHTML = `
        <section id="jaray-custom-hero" class="jaray-hero-wrapper">
            <div class="jaray-hero-box">
                <!-- الخلفية المضيئة -->
                <div class="jh-bg-glow"></div>
                <div class="jh-orb-pink"></div>
                <div class="jh-orb-purple"></div>

                <div class="jaray-hero-grid">
                    <!-- العمود الأيمن: النصوص -->
                    <div class="jh-text-side">
                        <div class="jh-badge">
                            <span class="jh-badge-dot"></span> الشريك الإبداعي لنجاحك — نسخة 2025 المطورة
                        </div>
                        <h1 class="jh-title">
                            متجر جراي..<br>
                            <span class="jh-title-gradient">الشريك الإبداعي</span><br>
                            لنجاحك !
                        </h1>
                        <p class="jh-desc">
                           نساعد المتاجر الإلكترونية والمشاريع الناشئة على تعزيز تواجدهم الرقمي.. "حلول إبداعية تواكب أهدافك وتسرع نمو مشروعك
                        </p>
                        
                        <div class="jh-buttons">
                            <a  class="jh-btn-primary">اطلب الآن ${iconArrow}</a>
                          
                        </div>

                        <div class="jh-stats">
                            <div class="jh-stat-box"><div class="jh-stat-num">+1,200</div><div class="jh-stat-lbl">مشروع مكتمل</div></div>
                            <div class="jh-stat-box"><div class="jh-stat-num">4.9/5</div><div class="jh-stat-lbl">تقييم العملاء</div></div>
                            <div class="jh-stat-box"><div class="jh-stat-num">24س</div><div class="jh-stat-lbl">متوسط التسليم</div></div>
                        </div>

                        <div class="jh-trust">
                            <span>يثق بنا أكثر من 800 علامة تجارية سعودية</span>
                        </div>
                    </div>

                    <!-- العمود الأيسر: البصريات والكروت الطائرة -->
                    <div class="jh-visual-side">
                        <div class="jh-glass-container">
                            <div class="jh-glass-bg"></div>
                            
                            <!-- البطاقة الزجاجية الرئيسية -->
                            <div class="jh-glass-card">
                                <div class="jh-glass-header">JARAY</div>
                                <div class="jh-glass-grid">
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A8A" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6FF00" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A8A" stroke-width="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg></div>
                                </div>
                            </div>

                            <!-- الكروت الطائرة -->
                            <div class="jh-floating-card jh-float-1">
                                <div class="jh-float-icon" style="background:#FF5A8A;">${iconSocial}</div>
                                <div class="jh-float-text">سوشيال ميديا<br><span>+240% تفاعل</span></div>
                            </div>
                            <div class="jh-floating-card jh-float-2">
                                <div class="jh-float-icon" style="background:#0A0A0A;">${iconCode}</div>
                                <div class="jh-float-text">تصميم هوية<br><span>جاهز في 24س</span></div>
                            </div>
                            <div class="jh-floating-card jh-float-3">
                                <div class="jh-float-icon" style="background:#00D4FF; color:#0A0A0A;">${iconPlay}</div>
                                <div class="jh-float-text">مونتاج<br><span>Reels احترافي</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // 5. دالة الحقن
    function injectHero() {
        if (document.getElementById('jaray-custom-hero')) return true;
        
        const mainContainer = document.getElementById("main");
        if (!mainContainer) return false;

        const wrapper = document.createElement("div");
        wrapper.innerHTML = heroHTML;

        // إدراج في أعلى الصفحة (أول عنصر في الـ main)
        mainContainer.insertBefore(wrapper.firstElementChild, mainContainer.firstChild);
        return true;
    }

    // التنفيذ باستخدام مؤقت ذكي لضمان تحميل الصفحة
    if (!injectHero()) {
        let attempts = 0;
        const intervalTimer = setInterval(() => {
            attempts++;
            if (injectHero() || attempts > 20) clearInterval(intervalTimer);
        }, 500);
    }
})();






 



(function () {
    // 1. التأكد من أننا في الصفحة الرئيسية فقط
    if (document.body.getAttribute('data-template') !== 'home') return;

    function injectBrandsSection() {
        // 2. منع التكرار
        if (document.getElementById('injected-brands-section')) return true;

        // 3. البحث عن الحاوية الرئيسية لوضع القسم في نهايتها
        const mainContainer = document.getElementById("main");
        if (!mainContainer) return false;

        /* ========================================================
           4. روابط الصور وتجهيز الـ HTML
           ======================================================== */
        const brandLogosHTML = `
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/faf63125-c56a-4147-b1b9-6e296fbcbcd3.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/e616a6d4-0a24-4021-915e-2856dccd58aa.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/332bfb83-fc83-426b-8449-b697fdfe066a.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/f466289a-8b48-4a16-8ede-148aef129b00.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/8c9bda20-d228-440f-a8f8-e6aa039efb51.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/dcd3e31e-35ef-477e-bd25-1ab75f7631f5.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/cb3205d9-0253-4624-a402-93d39e9bf50b.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/bc5d313e-42e7-48ce-9a23-637617a4df8e.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/b9337871-06af-41d9-8b10-1b18d4a19e90.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/1c8c2644-2e1a-4259-8579-fb942e3a48c6.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/7cd2133a-3f1e-4171-9f8c-22814781ca4e.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/1922b3d2-7810-4411-96bc-9d87a6a4dc38.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/9f329dd2-4527-4544-bd69-9b0977a58ef1.jpg" alt="Brand"></a>
            <a target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/f231860a-727c-40fc-9012-142b28751751.jpg" alt="Brand"></a>
        `;

        const brandsHTML = `
            <div class="brands-title-wrapper">
                <div class="brands-title">عملاء وثقوا بنا</div>
            </div>
            <div class="brands-style-box" dir="ltr">
                <div class="brands-marquee-track">
                    <div class="brands-marquee-group">${brandLogosHTML}</div>
                    <div class="brands-marquee-group" aria-hidden="true">${brandLogosHTML}</div>
                </div>
                <div class="brands-marquee-track reverse">
                    <div class="brands-marquee-group">${brandLogosHTML}</div>
                    <div class="brands-marquee-group" aria-hidden="true">${brandLogosHTML}</div>
                </div>
            </div>
        `;

        /* ========================================================
           5. التنسيقات (CSS)
           ======================================================== */
        const brandsStyles = `
            .custom-brands-section { padding: 40px 0 64px 0; background: #fff; overflow: hidden; width: 100%; font-family: inherit; }
            .brands-title-wrapper { text-align: center; margin-bottom: 40px; }
            .brands-title { font-size: clamp(28px, 4vw, 36px); font-weight: 800; color: #111827; }
            .brands-style-box { display: flex; flex-direction: column; gap: 24px; width: 100%; position: relative; }
            .brands-marquee-track { display: flex; width: max-content; animation: brands-scroll 45s linear infinite; }
            .brands-marquee-track.reverse { animation-direction: reverse; }
            .brands-style-box:hover .brands-marquee-track { animation-play-state: paused; }
            .brands-marquee-group { display: flex; gap: 24px; padding-right: 24px; flex-shrink: 0; }
            .brands-marquee-group img { height: 80px; width: 140px; object-fit: contain; border-radius: 12px; filter: grayscale(100%); transition: filter 0.3s; background: #f8f9fa; border: 1px solid #E5E7EB; padding: 10px; cursor: pointer; }
            .brands-marquee-group img:hover { filter: grayscale(0%); }
            
            @keyframes brands-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            
            @media (max-width: 768px) {
                .custom-brands-section { padding: 20px 0 40px 0; }
                .brands-title { margin-bottom: 24px; }
                .brands-marquee-group { gap: 16px; padding-right: 16px; }
                .brands-marquee-group img { height: 60px; width: 100px; padding: 6px; }
            }
        `;

        /* ========================================================
           6. الحقن في الـ DOM
           ======================================================== */
        // حقن التنسيقات
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.textContent = brandsStyles;
        document.head.appendChild(styleTag);

        // إنشاء القسم الجديد
        const brandsSection = document.createElement('section');
        brandsSection.id = 'injected-brands-section';
        brandsSection.className = 'custom-brands-section';
        brandsSection.innerHTML = brandsHTML;

        // إضافته في نهاية المحتوى الأساسي (قبل الفوتر)
        mainContainer.appendChild(brandsSection);

        return true;
    }

    // 7. نظام التتبع لضمان التحميل مع زد
    if (!injectBrandsSection()) {
        let attempts = 0;
        const observerInterval = setInterval(() => {
            if (injectBrandsSection() || attempts >= 30) {
                clearInterval(observerInterval);
            }
            attempts++;
        }, 500);
    }
})();












(function () {
    // التحقق لمنع التكرار
    const oldFooter = document.getElementById("custom-gray-footer");
    if (oldFooter) oldFooter.remove();

    // أيقونات SVG
    const iconLightbulb = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`;
    const iconShare = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`;
    const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C6FF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

    // هيكل HTML (الترتيب: الشعار يمين -> الخدمات -> الدعم -> النشرة يسار)
    const footerHTML = `
        <footer id="custom-gray-footer" class="custom-gray-footer">
            <div class="cgf-waves"></div>
            <div class="cgf-bg-glow"></div>
            
            <div class="cgf-container">
                <div class="cgf-grid">
                    
                    <!-- العمود الأول (أقصى اليمين): الشعار والنبذة -->
                    <div class="cgf-col">
                        <div class="cgf-brand-header">
                            <div class="cgf-icon-box"><a href="/" class="shrink-0" aria-label="الرئيسية">

  <img width="106" height="44" src="        https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/d5d9c547-bd42-46ce-b4c0-fbf3d49bc3b0.png
" class="absolute md:relative md:top-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0 max-h-[44px] md:max-h-[66px] w-auto object-contain  hidden md:block " alt="greyscale.website">
         </a></div>
                            <div class="cgf-brand-text">
                                <h3>متجر جراي</h3>
                                <span>JARAY STORE • EST 2023</span>
                            </div>
                        </div>
                        <div class="cgf-text">
                           نساعد المتاجر الإلكترونية والمشاريع الناشئة على تعزيز تواجدهم الرقمي.. "حلول إبداعية تواكب أهدافك وتسرع نمو مشروعك
                        </div>
                        <div class="cgf-socials">
                            <a href="#" aria-label="Share">${iconShare}</a>
                            <a href="#" aria-label="Share">${iconShare}</a>
                         
                        </div>
                    </div>

                    <!-- العمود الثاني: الخدمات -->
                    <div class="cgf-col">
                        <div class="cgf-title">الخدمات</div>
                        <ul class="cgf-links">
                            <li><a href="#">التصاميم الإبداعية</a></li>
                            <li><a href="#">كتابة المحتوى</a></li>
                            <li><a href="#">المونتاج والتحريك</a></li>
                            <li><a href="#">الشعار الأنيق</a></li>
                            <li><a href="#">السوشيال ميديا</a></li>
                            <li><a href="#">إدارة المتاجر</a></li>
                        </ul>
                    </div>

                    <!-- العمود الثالث: الدعم -->
                    <div class="cgf-col">
                        <div class="cgf-title">الدعم</div>
                        <ul class="cgf-links">
                             
                            <li><a href="#">الأسئلة الشائعة</a></li>
                            <li><a href="#">سياسة الاسترجاع</a></li>
                            <li><a href="#">تواصل معنا</a></li>
                            <li><a href="#">انضم كمبدع</a></li>
                        </ul>
                    </div>

                      </div>

                </div>

                <!-- الشريط السفلي -->
                <div class="cgf-bottom-bar">
                    <div class="cgf-copyright">
                        © 2025 متجر جراي — جميع الحقوق محفوظة.        .
                    </div>
                    <div class="cgf-badges">
                   
                    </div>
                </div>
            </div>
        </footer>
    `;

    function injectFooter() {
        if (document.getElementById("custom-gray-footer")) return true;
        
        const mainElement = document.getElementById("main") || document.body;
        const wrapper = document.createElement("div");
        wrapper.innerHTML = footerHTML;
        
        if (mainElement.id === "main") {
            mainElement.parentNode.insertBefore(wrapper.firstElementChild, mainElement.nextSibling);
        } else {
            document.body.appendChild(wrapper.firstElementChild);
        }
        return true;
    }

    if (!injectFooter()) {
        let attempts = 0;
        const intervalTimer = setInterval(() => {
            attempts++;
            if (injectFooter() || attempts > 20) clearInterval(intervalTimer);
        }, 500);
    }
})();












 (function () {
    // 1. التحقق: هل نحن في الصفحة الرئيسية؟ إذا لا، توقف فوراً.
    if (document.body.getAttribute('data-template') !== 'home') return;

    // 2. التحقق لمنع تكرار الحقن
    if (document.getElementById('jaray-custom-hero')) return;

    // 3. أكواد الأيقونات (SVG)
    const iconArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
    const iconPlay = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
    const iconSocial = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
    const iconCode = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`;

    // 4. كود HTML المطابق 100% للتصميم المطلوب
    const heroHTML = `
        <section id="jaray-custom-hero" class="jaray-hero-wrapper">
            <div class="jaray-hero-box">
                <!-- الخلفية المضيئة -->
                <div class="jh-bg-glow"></div>
                <div class="jh-orb-pink"></div>
                <div class="jh-orb-purple"></div>

                <div class="jaray-hero-grid">
                    <!-- العمود الأيمن: النصوص -->
                    <div class="jh-text-side">
                        <div class="jh-badge">
                            <span class="jh-badge-dot"></span> الشريك الإبداعي لنجاحك — نسخة 2025 المطورة
                        </div>
                        <h1 class="jh-title">
                            متجر جراي..<br>
                            <span class="jh-title-gradient">الشريك الإبداعي</span><br>
                            لنجاحك !
                        </h1>
                        <p class="jh-desc">
                           نساعد المتاجر الإلكترونية والمشاريع الناشئة على تعزيز تواجدهم الرقمي.. "حلول إبداعية تواكب أهدافك وتسرع نمو مشروعك
                        </p>
                        
                        <div class="jh-buttons">
                            <a  class="jh-btn-primary">اطلب الآن ${iconArrow}</a>
                          
                        </div>

                        <div class="jh-stats">
                            <div class="jh-stat-box"><div class="jh-stat-num">+1,200</div><div class="jh-stat-lbl">مشروع مكتمل</div></div>
                            <div class="jh-stat-box"><div class="jh-stat-num">4.9/5</div><div class="jh-stat-lbl">تقييم العملاء</div></div>
                            <div class="jh-stat-box"><div class="jh-stat-num">24س</div><div class="jh-stat-lbl">متوسط التسليم</div></div>
                        </div>

                        <div class="jh-trust">
                            <span>يثق بنا أكثر من 800 علامة تجارية سعودية</span>
                        </div>
                    </div>

                    <!-- العمود الأيسر: البصريات والكروت الطائرة -->
                    <div class="jh-visual-side">
                        <div class="jh-glass-container">
                            <div class="jh-glass-bg"></div>
                            
                            <!-- البطاقة الزجاجية الرئيسية -->
                            <div class="jh-glass-card">
                                <div class="jh-glass-header">JARAY</div>
                                <div class="jh-glass-grid">
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A8A" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6FF00" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A8A" stroke-width="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></div>
                                    <div class="jh-glass-grid-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg></div>
                                </div>
                            </div>

                            <!-- الكروت الطائرة -->
                            <div class="jh-floating-card jh-float-1">
                                <div class="jh-float-icon" style="background:#FF5A8A;">${iconSocial}</div>
                                <div class="jh-float-text">سوشيال ميديا<br><span>+240% تفاعل</span></div>
                            </div>
                            <div class="jh-floating-card jh-float-2">
                                <div class="jh-float-icon" style="background:#0A0A0A;">${iconCode}</div>
                                <div class="jh-float-text">تصميم هوية<br><span>جاهز في 24س</span></div>
                            </div>
                            <div class="jh-floating-card jh-float-3">
                                <div class="jh-float-icon" style="background:#00D4FF; color:#0A0A0A;">${iconPlay}</div>
                                <div class="jh-float-text">مونتاج<br><span>Reels احترافي</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // 5. دالة الحقن
    function injectHero() {
        if (document.getElementById('jaray-custom-hero')) return true;
        
        const mainContainer = document.getElementById("main");
        if (!mainContainer) return false;

        const wrapper = document.createElement("div");
        wrapper.innerHTML = heroHTML;

        // إدراج في أعلى الصفحة (أول عنصر في الـ main)
        mainContainer.insertBefore(wrapper.firstElementChild, mainContainer.firstChild);
        return true;
    }

    // التنفيذ باستخدام مؤقت ذكي لضمان تحميل الصفحة
    if (!injectHero()) {
        let attempts = 0;
        const intervalTimer = setInterval(() => {
            attempts++;
            if (injectHero() || attempts > 20) clearInterval(intervalTimer);
        }, 500);
    }
})();







(function () {
    // 1. حذف أي قسم قديم تم حقنه سابقاً لتنظيف الصفحة
    const oldSection = document.getElementById("injected-brands-section");
    if (oldSection) oldSection.remove();

    // 2. تقسيم الشعارات لصفين
    const row1Logos = `
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/faf63125-c56a-4147-b1b9-6e296fbcbcd3.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/e616a6d4-0a24-4021-915e-2856dccd58aa.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/332bfb83-fc83-426b-8449-b697fdfe066a.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/f466289a-8b48-4a16-8ede-148aef129b00.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/8c9bda20-d228-440f-a8f8-e6aa039efb51.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/dcd3e31e-35ef-477e-bd25-1ab75f7631f5.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/cb3205d9-0253-4624-a402-93d39e9bf50b.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/bc5d313e-42e7-48ce-9a23-637617a4df8e.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/b9337871-06af-41d9-8b10-1b18d4a19e90.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/1c8c2644-2e1a-4259-8579-fb942e3a48c6.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/7cd2133a-3f1e-4171-9f8c-22814781ca4e.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/1922b3d2-7810-4411-96bc-9d87a6a4dc38.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/9f329dd2-4527-4544-bd69-9b0977a58ef1.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/f231860a-727c-40fc-9012-142b28751751.jpg" alt="Brand"></a>
      
    `;

    const row2Logos = `
          <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/faf63125-c56a-4147-b1b9-6e296fbcbcd3.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/e616a6d4-0a24-4021-915e-2856dccd58aa.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/332bfb83-fc83-426b-8449-b697fdfe066a.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/f466289a-8b48-4a16-8ede-148aef129b00.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/8c9bda20-d228-440f-a8f8-e6aa039efb51.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/dcd3e31e-35ef-477e-bd25-1ab75f7631f5.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/cb3205d9-0253-4624-a402-93d39e9bf50b.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/bc5d313e-42e7-48ce-9a23-637617a4df8e.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/b9337871-06af-41d9-8b10-1b18d4a19e90.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/1c8c2644-2e1a-4259-8579-fb942e3a48c6.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/7cd2133a-3f1e-4171-9f8c-22814781ca4e.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/1922b3d2-7810-4411-96bc-9d87a6a4dc38.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/9f329dd2-4527-4544-bd69-9b0977a58ef1.jpg" alt="Brand"></a>
        <a  target="_blank"><img loading="lazy" src="https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/f231860a-727c-40fc-9012-142b28751751.jpg" alt="Brand"></a>
    `;

    // 3. هيكل الـ HTML للقسم بالكامل
    const sectionHTML = `
        <div class="brands-title-wrapper">
            <div class="brands-title"> عملاء وثقوا بنا    </div>
        </div>
        
        <div class="brands-style-box">
            <!-- الصف الأول -->
            <div class="marquee-track">
                <div class="marquee-group">${row1Logos}</div>
                <div class="marquee-group" aria-hidden="true">${row1Logos}</div>
            </div>
            
            <!-- الصف الثاني (يتحرك عكس الصف الأول) -->
            <div class="marquee-track reverse">
                <div class="marquee-group">${row2Logos}</div>
                <div class="marquee-group" aria-hidden="true">${row2Logos}</div>
            </div>
        </div>
    `;

    // 4. دالة الحقن الآمنة
    function injectBrandsSection() {
        if (document.getElementById("injected-brands-section")) return true;
        
        const mainContainer = document.getElementById("main");
        if (!mainContainer) return false;

        const wrapper = document.createElement("section");
        wrapper.id = "injected-brands-section";
        wrapper.className = "custom-brands-section";
        wrapper.innerHTML = sectionHTML;
        
        // إضافته في النهاية قبل الفوتر
        mainContainer.appendChild(wrapper);
        return true;
    }

    // 5. محاولة الحقن بمجرد اكتمال المتجر
    if (!injectBrandsSection()) {
        let attempts = 0;
        const intervalTimer = setInterval(() => {
            attempts++;
            if (injectBrandsSection() || attempts > 20) {
                clearInterval(intervalTimer);
            }
        }, 500);
    }
})();










(function () {
    // التحقق لمنع التكرار
    const oldFooter = document.getElementById("custom-gray-footer");
    if (oldFooter) oldFooter.remove();

    // أيقونات SVG
    const iconLightbulb = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`;
    const iconShare = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`;
    const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C6FF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

    // هيكل HTML (الترتيب: الشعار يمين -> الخدمات -> الدعم -> النشرة يسار)
    const footerHTML = `
        <footer id="custom-gray-footer" class="custom-gray-footer">
            <div class="cgf-waves"></div>
            <div class="cgf-bg-glow"></div>
            
            <div class="cgf-container">
                <div class="cgf-grid">
                    
                    <!-- العمود الأول (أقصى اليمين): الشعار والنبذة -->
                    <div class="cgf-col">
                        <div class="cgf-brand-header">
                            <div class="cgf-icon-box"><a href="/" class="shrink-0" aria-label="الرئيسية">

  <img width="106" height="44" src="        https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/d5d9c547-bd42-46ce-b4c0-fbf3d49bc3b0.png
" class="absolute md:relative md:top-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0 max-h-[44px] md:max-h-[66px] w-auto object-contain  hidden md:block " alt="greyscale.website">
         </a></div>
                            <div class="cgf-brand-text">
                                <h3>متجر جراي</h3>
                                <span>JARAY STORE • EST 2023</span>
                            </div>
                        </div>
                        <div class="cgf-text">
                           نساعد المتاجر الإلكترونية والمشاريع الناشئة على تعزيز تواجدهم الرقمي.. "حلول إبداعية تواكب أهدافك وتسرع نمو مشروعك
                        </div>
                        <div class="cgf-socials">
                            <a href="#" aria-label="Share">${iconShare}</a>
                            <a href="#" aria-label="Share">${iconShare}</a>
                         
                        </div>
                    </div>

                    <!-- العمود الثاني: الخدمات -->
                    <div class="cgf-col">
                        <div class="cgf-title">الخدمات</div>
                        <ul class="cgf-links">
                            <li><a href="#">التصاميم الإبداعية</a></li>
                            <li><a href="#">كتابة المحتوى</a></li>
                            <li><a href="#">المونتاج والتحريك</a></li>
                            <li><a href="#">الشعار الأنيق</a></li>
                            <li><a href="#">السوشيال ميديا</a></li>
                            <li><a href="#">إدارة المتاجر</a></li>
                        </ul>
                    </div>

                    <!-- العمود الثالث: الدعم -->
                    <div class="cgf-col">
                        <div class="cgf-title">الدعم</div>
                        <ul class="cgf-links">
                             
                            <li><a href="#">الأسئلة الشائعة</a></li>
                            <li><a href="#">سياسة الاسترجاع</a></li>
                            <li><a href="#">تواصل معنا</a></li>
                            <li><a href="#">انضم كمبدع</a></li>
                        </ul>
                    </div>

                      </div>

                </div>

                <!-- الشريط السفلي -->
                <div class="cgf-bottom-bar">
                    <div class="cgf-copyright">
                        © 2025 متجر جراي — جميع الحقوق محفوظة.        .
                    </div>
                    <div class="cgf-badges">
                   
                    </div>
                </div>
            </div>
        </footer>
    `;

    function injectFooter() {
        if (document.getElementById("custom-gray-footer")) return true;
        
        const mainElement = document.getElementById("main") || document.body;
        const wrapper = document.createElement("div");
        wrapper.innerHTML = footerHTML;
        
        if (mainElement.id === "main") {
            mainElement.parentNode.insertBefore(wrapper.firstElementChild, mainElement.nextSibling);
        } else {
            document.body.appendChild(wrapper.firstElementChild);
        }
        return true;
    }

    if (!injectFooter()) {
        let attempts = 0;
        const intervalTimer = setInterval(() => {
            attempts++;
            if (injectFooter() || attempts > 20) clearInterval(intervalTimer);
        }, 500);
    }
})();









 








(function () {
    function injectCombinedSections() {
        // منع التكرار
        if (document.getElementById('jaray-story-banner-section') || document.getElementById('jaray-works-section')) return true;

        // البحث عن القسم المستهدف (القسم الرمادي القديم)
        const targetSection = document.querySelector('section[section-id="1c75d9c6-1b50-4174-8601-c7f99d482261"]');
        if (!targetSection) return false;

        /* ========================================================
           1. تجهيز الـ HTML
           ======================================================== */
        
        // --- قسم لماذا جراي (البانر الأفقي) ---
        const storyHTML = `
            <section id="jaray-story-banner-section" class="jb-section">
                <div class="jb-container">
                    <div class="jb-banner">
                        <div class="jb-text-content">
                            <div class="jb-badge">لماذا جراي؟</div>
                            <h2 class="jb-title">نحوّل أفكارك إلى <span class="jb-highlight">متجر إبداعي ينبض</span></h2>
                            <p class="jb-desc">لسنا مجرد مصممين. نحن فريق نمو: نفهم جمهورك، نبني هويتك، نكتب رسالتك، ونطلقها بفيديو ومحتوى يبيع.</p>
                        </div>
                        
                        <div class="jb-action-content">
                            <div class="jb-cta-box">
                                <div class="jb-cta-bg"></div>
                                <div class="jb-cta-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div class="jb-cta-info">
                                    <div class="jb-cta-title">استشارة مجانية 15 دقيقة</div>
                                    <div class="jb-cta-sub">احجز مكالمة ونرسم خارطة طريقك</div>
                                </div>
                                <a href="https://wa.me/966502331517?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20..%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%AA%D9%83" class="jb-cta-btn" target="_blank">احجز</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        // --- قسم أعمالنا ---
        const workImages = [
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/87c46749-9e21-4a23-8f56-7433fddbf9e0.png",
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/51d38291-0acf-4e27-9401-738f7580365b.png",
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/dd900d48-34bc-48a4-9ad1-20aa78e4e968.png",
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/7d00d300-b06a-42b9-a32f-a89daa2e116c.png",
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/21770bbe-9ddd-47f6-b2b2-347e6caedf6c.png",
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/d741f02b-f80e-4fad-9de1-eedbaad16fa6.png",
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/811bfdd2-993a-40a4-b080-3f57e3961026.png",
            "https://media.zid.store/a271d487-cb04-4e56-861c-0fa0c53447d4/dcfe8b3c-d3de-47b6-8056-54c102dc76e7.png"
        ];
        const imagesHTML = workImages.map(src => `<img src="${src}" alt="أعمالنا" loading="lazy" class="jw-img">`).join('');

        const worksHTML = `
            <section id="jaray-works-section">
                <div class="jw-container">
                    <h2 class="jw-title">أعمالنا</h2>
                    <div class="jw-marquee-wrapper" dir="ltr">
                        <div class="jw-fade jw-fade-left"></div>
                        <div class="jw-fade jw-fade-right"></div>
                        <div class="jw-marquee-track">
                            <div class="jw-marquee-group">${imagesHTML}</div>
                            <div class="jw-marquee-group" aria-hidden="true">${imagesHTML}</div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        /* ========================================================
           2. التنسيقات (CSS)
           ======================================================== */
        const combinedStyles = `
            /* --- تنسيقات بانر لماذا جراي --- */
            .jb-section { width: 100%; padding: 64px 20px 20px 20px; direction: rtl; font-family: inherit; background-color: var(--background, #ffffff); }
            .jb-container { max-width: 1280px; margin: 0 auto; }
            .jb-banner { display: flex; flex-direction: column; gap: 32px; background: var(--secondary, #F8F9FA); border: 1px solid var(--border, #E5E7EB); border-radius: 24px; padding: 40px; align-items: center; justify-content: space-between; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
            
            .jb-text-content { flex: 1; text-align: right; }
            .jb-badge { display: inline-flex; padding: 6px 16px; border-radius: 99px; background: #fff; border: 1px solid #E9E5FF; font-size: 13px; font-weight: 700; color: #8B5CF6; margin-bottom: 20px; }
            .jb-title { font-size: clamp(24px, 3vw, 32px); font-weight: 800; line-height: 1.5; color: var(--foreground, #111827); margin: 0; }
            .jb-highlight { position: relative; display: inline-block; z-index: 1; }
            .jb-highlight::after { content: ''; position: absolute; bottom: 6px; left: 0; right: 0; height: 10px; background: rgba(198, 255, 0, 0.6); transform: rotate(-1deg); z-index: -1; }
            .jb-desc { margin-top: 16px; font-size: 16px; line-height: 1.8; color: #4B5563; max-width: 90%; }
            
            .jb-action-content { width: 100%; max-width: 450px; flex-shrink: 0; }
            .jb-cta-box { border-radius: 20px; background: #0A0A0A; color: white; padding: 20px 24px; display: flex; align-items: center; gap: 16px; position: relative; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); width: 100%; }
            .jb-cta-bg { position: absolute; inset: 0; background: linear-gradient(to left, rgba(139,92,246,0.3), transparent); pointer-events: none; }
            .jb-cta-icon { position: relative; width: 48px; height: 48px; border-radius: 50%; background: white; color: black; display: grid; place-items: center; flex-shrink: 0; }
            .jb-cta-info { position: relative; flex: 1; text-align: right; }
            .jb-cta-title { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
            .jb-cta-sub { font-size: 12px; color: rgba(255,255,255,0.7); }
            .jb-cta-btn { position: relative; background: white; color: black; font-size: 14px; font-weight: 700; padding: 10px 24px; border-radius: 99px; text-decoration: none; transition: transform 0.2s; white-space: nowrap; }
            .jb-cta-btn:hover { transform: scale(1.05); }

            /* --- تنسيقات أعمالنا --- */
            #jaray-works-section { padding: 20px 0 64px 0; background-color: var(--background, #ffffff); overflow: hidden; width: 100%; direction: rtl; }
            .jw-title { text-align: center; font-size: clamp(28px, 4vw, 36px); font-weight: 800; color: var(--foreground, #111827); margin-bottom: 40px; font-family: inherit; }
            .jw-marquee-wrapper { position: relative; display: flex; width: 100%; overflow: hidden; }
            .jw-fade { position: absolute; top: 0; bottom: 0; width: 150px; z-index: 2; pointer-events: none; }
            .jw-fade-left { left: 0; background: linear-gradient(to right, var(--background, #ffffff) 0%, transparent 100%); }
            .jw-fade-right { right: 0; background: linear-gradient(to left, var(--background, #ffffff) 0%, transparent 100%); }
            .jw-marquee-track { display: flex; width: max-content; animation: jw-scroll 35s linear infinite; }
            .jw-marquee-wrapper:hover .jw-marquee-track { animation-play-state: paused; }
            .jw-marquee-group { display: flex; gap: 24px; padding-right: 24px; flex-shrink: 0; }
            .jw-img { height: 220px; width: 320px; object-fit: cover; border-radius: 16px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; background-color: var(--secondary, #f6f5f4); }
            .jw-img:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12); }
            @keyframes jw-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

            /* شاشات سطح المكتب */
            @media (min-width: 992px) {
                .jb-banner { flex-direction: row; padding: 48px; }
            }

            /* شاشات الجوال */
            @media (max-width: 768px) {
                .jb-section { padding: 40px 16px 20px 16px; }
                .jb-banner { padding: 24px; gap: 24px; }
                .jb-desc { max-width: 100%; font-size: 14px; }
                .jb-cta-box { padding: 16px; flex-wrap: wrap; justify-content: center; text-align: center; }
                .jb-cta-info { text-align: center; min-width: 100%; margin-bottom: 8px; }
                .jb-cta-btn { width: 100%; text-align: center; }

                #jaray-works-section { padding: 20px 0 40px 0; }
                .jw-img { height: 160px; width: 240px; border-radius: 12px; }
                .jw-marquee-group { gap: 16px; padding-right: 16px; }
                .jw-fade { width: 60px; }
            }
        `;

        /* ========================================================
           3. الحقن في الصفحة
           ======================================================== */
        
        // أ. حقن التنسيقات
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.textContent = combinedStyles;
        document.head.appendChild(styleTag);

        // ب. استبدال القسم القديم بالقسمين معاً (البانر أولاً ثم الأعمال ثانياً)
        targetSection.outerHTML = storyHTML + worksHTML;

        return true;
    }

    // تشغيل الكود بنظام التتبع لضمان تحميله مع بيئة منصة زد
    if (!injectCombinedSections()) {
        let attempts = 0;
        const observerInterval = setInterval(() => {
            if (injectCombinedSections() || attempts >= 30) {
                clearInterval(observerInterval);
            }
            attempts++;
        }, 500);
    }
})();