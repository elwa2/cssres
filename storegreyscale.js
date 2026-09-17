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
    if (document.body.getAttribute('data-template') !== 'home') return;

    function injectBrandsSection() {
        const targetSection = document.querySelector('section[section-id="250ebe8e-e397-4c66-af12-e56ef3880f0b"]');
        
        if (!targetSection) return false;
        if (targetSection.hasAttribute('data-brands-injected')) return true;

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

        const brandsStyles = `
            .custom-brands-section { padding: 40px 0 64px 0; background: #fff; overflow: hidden; width: 100%; font-family: inherit; }
            .brands-title-wrapper { text-align: center; margin-bottom: 40px; }
            .brands-title { font-size: clamp(28px, 4vw, 36px); font-weight: 800; color: #111827; }
            .brands-style-box { display: flex; flex-direction: column; gap: 24px; width: 100%; position: relative; }
            .brands-marquee-track { display: flex; width: max-content; animation: brands-scroll 45s linear infinite; }
            .brands-marquee-track.reverse { animation-direction: reverse; }
            .brands-style-box:hover .brands-marquee-track { animation-play-state: paused; }
            .brands-marquee-group { display: flex; gap: 24px; padding-right: 24px; flex-shrink: 0; }
            .brands-marquee-group img { height: 80px; width: 140px; object-fit: contain; border-radius: 12px; filter: grayscale(100%); transition: filter 0.3s; background: #f8f9fa; border: 1px solid #E5E7EB; padding: 0px; cursor: pointer; }
            .brands-marquee-group img:hover { filter: grayscale(0%); }
            @keyframes brands-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @media (max-width: 768px) {
                .custom-brands-section { padding: 20px 0 40px 0; }
                .brands-title { margin-bottom: 24px; }
                .brands-marquee-group { gap: 16px; padding-right: 16px; }
                .brands-marquee-group img { height: 60px; width: 100px; padding: 6px; }
            }.brands-marquee-group img {
	height: 114px;
	width: 133px;
	object-fit: cover;
	border-radius: 12px;
	filter: grayscale(100%);
	transition: filter 0.3s;
	background: #f8f9fa;
	border: 1px solid #E5E7EB;
	padding: 10px;
	cursor: pointer;
}
        `;

        if (!document.getElementById('custom-brands-styles')) {
            const styleTag = document.createElement('style');
            styleTag.id = 'custom-brands-styles';
            styleTag.textContent = brandsStyles;
            document.head.appendChild(styleTag);
        }

        targetSection.className = 'custom-brands-section';
        targetSection.innerHTML = brandsHTML;
        targetSection.setAttribute('data-brands-injected', 'true');

        return true;
    }

    if (!injectBrandsSection()) {
        window.addEventListener('DOMContentLoaded', injectBrandsSection);
        let attempts = 0;
        const observerInterval = setInterval(() => {
            if (injectBrandsSection() || attempts >= 20) {
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











(function () {
    function injectGlobalBenefits() {
        // 1. منع التكرار (إذا تم الحقن مسبقاً نوقف العمل)
        if (document.getElementById('global-custom-benefits-injected')) return true;

        // 2. تحديد المتغيرات (هل نحن في الرئيسية؟ أين السكشن؟ أين الفوتر؟)
        const isHome = document.body.getAttribute('data-template') === 'home';
        const homeTargetSection = document.querySelector('section[section-id="46c87c94-c47b-471d-a252-f628da84c5fe"]');
        const siteFooter = document.getElementById("custom-gray-footer") || document.getElementById("footer") || document.querySelector("footer");

        // إذا لم نجد السكشن في الرئيسية ولا الفوتر في باقي الصفحات، ننتظر
        if (!homeTargetSection && !siteFooter) return false;

        // 3. أيقونة المكعب 
        const cubeIcon1 = `<?xml version="1.0" encoding="UTF-8"?> <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.56 306.27"> <defs> <style> .cls-1 { fill: #fff; } </style> </defs> <path class="cls-1" d="M436.35,231.57v-5.08c0-18.5-.03-37,.01-55.5,.02-8.67-3.42-15.42-10.68-20.23-7.22-4.79-13.81-11.46-21.73-13.96-7.74-2.44-16.82-.72-25.31-.73-34.66-.02-69.33,0-103.99-.01-12.01,0-15.98-3.92-15.98-15.74,0-29.83,0-59.66,0-89.5v-6.61h-6.22c-56.16,0-112.32,0-168.48,0-10.48,0-16.23-4.23-16.29-11.95C67.61,4.46,73.44,.03,83.74,.03,160.4,.03,237.06,.07,313.71,0c19.09-.02,33.57,8.08,43.86,23.96,18.91,29.18,37.76,58.39,56.76,87.51,1.67,2.56,4.03,4.85,6.51,6.67,6.31,4.63,12.92,8.84,19.31,13.35,13.32,9.4,20.2,22.35,20.32,38.62,.17,23.83,.06,47.67,.04,71.5,0,9.73-4.6,14.26-14.46,14.3-8.97,.03-17.94,0-26.73,0-11.02,33.52-31.49,50.41-60.57,50.34-28.87-.07-49.48-17.24-59.92-50.1h-90.23c-3.74,17.67-12.96,31.79-28.56,41.35-11.3,6.92-23.67,9.62-36.82,8.54-20.06-1.65-46.63-15.04-54.66-49.9-1.62-.07-3.39-.21-5.16-.22-11.17-.02-22.33,.04-33.5-.03-8.42-.05-13.52-4.64-13.59-12-.07-7.51,4.79-12.18,13.24-12.28,11.83-.14,23.66-.12,35.49,0,3.03,.03,4.58-.57,5.63-3.92,7.99-25.68,31.02-42.63,57.64-42.81,26.76-.17,49.82,16.72,58.27,42.68,.41,1.25,.91,2.47,1.48,3.99h4.52c27.5,0,54.99-.06,82.49,.08,3.56,.02,5.13-.99,6.28-4.52,8.36-25.77,31.39-42.41,57.98-42.23,26.49,.17,49.27,16.81,57.41,42.34,1.17,3.68,2.9,4.57,6.33,4.39,4.27-.23,8.57-.06,13.28-.06Zm-51.69-119.85c-.55-1.18-.75-1.78-1.09-2.29-15.8-24.45-31.55-48.93-47.44-73.32-5.11-7.83-12.66-11.56-21.96-11.66-8-.08-16-.02-24-.02-2.41,0-4.82,0-7.08,0V111.72h101.57Zm-62.13,133.32c-.43,19.53,15.6,36.52,34.95,37.04,20.37,.55,37.55-15.24,38.03-34.96,.5-20.35-15.33-37.57-34.97-38.04-20.85-.51-37.55,15.29-38,35.97Zm-210.19,.19c-.58,19.24,15.27,36.19,34.46,36.85,20.45,.7,37.84-15.2,38.44-35.15,.6-19.78-15.38-37.03-34.76-37.88-22.28-.98-39.05,18-38.14,36.19Z"/> <path class="cls-1" d="M85.5,152.22c-23.99,0-47.99,0-71.98,0C5.15,152.22-.02,147.64,0,140.3c.02-7.28,5.31-12.07,13.58-12.07,47.99-.03,95.97-.03,143.96,0,6.35,0,10.84,2.93,12.61,7.94,1.7,4.83,.41,10.69-3.86,13.44-2.47,1.59-5.84,2.48-8.81,2.51-23.99,.2-47.98,.11-71.98,.11Z"/> <path class="cls-1" d="M66.48,91.21c-16.98,0-33.96,.06-50.94-.03-7.92-.04-12.89-4.41-13.23-11.27-.35-7.2,4.38-12.79,11.6-12.81,35.12-.13,70.24-.12,105.37,0,6.87,.02,12.08,5.65,11.97,12.2-.11,6.42-5.05,11.7-11.84,11.77-17.64,.19-35.29,.06-52.93,.06,0,.02,0,.05,0,.07Z"/> </svg>`;
        const cubeIcon2 = `<?xml version="1.0" encoding="UTF-8"?> <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.42 336.23"> <defs> <style> .cls-1 { fill: #fff; } </style> </defs> <path class="cls-1" d="M241.87,336.23c-61.32,0-122.65,0-183.97,0C24.31,336.22,0,311.84,0,278.16,0,204.84,0,131.51,0,58.18,0,24.27,24.34,0,58.33,0c122.65,0,245.29,0,367.94,0,32.3,0,57.04,24.48,57.08,56.85,.1,74.16,.09,148.32,0,222.48-.04,32.45-24.65,56.88-57.01,56.89-61.49,.02-122.98,0-184.47,0ZM29.24,134.19c-.1,1.24-.22,2.04-.22,2.84-.01,48.01-.08,96.01,.04,144.02,.03,11.16,7.74,21.54,18.51,24.75,4.53,1.35,9.51,1.68,14.28,1.68,120.01,.09,240.01,.07,360.02,.06,1.99,0,3.99-.12,5.98-.28,16.29-1.26,26.5-12.2,26.51-28.53,.03-46.34,0-92.68,0-139.02v-5.53H29.24Zm424.83-29.44c0-17.71,.02-35.01-.03-52.3,0-1.3-.38-2.63-.75-3.9-3.45-11.54-13.28-19.57-25.5-19.58-123.95-.12-247.9-.08-371.85-.09-.33,0-.66,.04-1,.06-14.59,.85-25.78,12.56-25.91,27.19-.08,8.16-.01,16.33-.01,24.49,0,7.95,0,15.91,0,24.12H454.07Z"/> <path class="cls-1" d="M81.69,235.04c12.92,0,23.16,10.23,23.16,23.13,0,12.88-10.17,23.16-23.08,23.34-12.95,.17-23.52-10.43-23.41-23.5,.1-12.88,10.35-22.98,23.33-22.97Z"/> <path class="cls-1" d="M117.68,258.14c0-13.03,10.06-23.1,23.06-23.1,12.98,0,23.2,10.11,23.26,23.01,.06,13.08-10.4,23.55-23.43,23.45-12.87-.1-22.89-10.34-22.89-23.36Z"/> </svg>`;
        const cubeIcon3 = `<?xml version="1.0" encoding="UTF-8"?> <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.7 376.99">   <defs>     <style>       .cls-1 {         fill: #fff;       }     </style>   </defs>   <path class="cls-1" d="M340.51,215.64c1.01-22.37,.82-44.72-6.01-66.33-18.74-59.28-55.94-100.87-117.36-116.27-48.74-12.22-92.96,.5-130.85,32.89-38.68,33.07-56.89,76.18-57.84,126.81-.14,7.66-4.29,13.14-11.1,14.54-6.94,1.43-13.32-1.61-16.03-7.98C.44,197.24,0,194.82,0,192.55-.11,105.13,57.52,26.06,141.72,5.65c61.48-14.91,116.43-.13,163.01,42.37,43.52,39.7,64.5,89.99,64.88,148.86,.11,17,.17,34-.19,50.99-1.12,53.03-42.2,98.84-94.67,104.81-13.5,1.54-27.3,.57-40.96,.52-3.34-.01-5.23,.9-7.08,3.92-7.86,12.92-19.57,19.66-34.76,19.77-8.31,.06-16.76,.45-24.92-.78-20.38-3.07-34.52-21.88-33.05-42.81,1.42-20.2,17.98-36.58,38.26-37.2,9.45-.29,19.1-.49,28.37,1.02,13.78,2.24,23.31,10.97,28.69,23.78,1.35,3.21,2.86,4.24,6.18,4.08,14.12-.67,28.54,.5,42.31-2,33.83-6.14,60.33-36.99,62.59-71.38,.78-11.94,.12-23.98,.12-35.97Zm-157.66,133.27v-.03c3.33,0,6.67,.22,9.98-.05,6.55-.53,11.51-5.88,11.62-12.19,.11-6.5-4.95-12.22-11.7-12.56-6.3-.32-12.65-.3-18.95,0-6.93,.33-11.86,5.73-11.82,12.37,.04,6.57,5.13,11.98,11.89,12.42,2.98,.19,5.99,.03,8.98,.03Z"/>   <path class="cls-1" d="M306.63,201.82c0,11.99,.5,24-.1,35.96-1.29,25.74-22.91,46.31-49.15,47.41-26.14,1.09-49.41-17.88-52.95-43.27-.5-3.61-.79-7.29-.76-10.94,.17-23.14-.82-46.38,1.03-69.4,2.08-25.82,26.57-44.59,53.5-43.5,25.19,1.01,47.07,22.12,48.33,47.28,.61,12.12,.1,24.3,.1,36.46Zm-29.12-.05s.08,0,.12,0c0-9.82,0-19.64,0-29.47,0-.33,0-.67,0-1-.21-13.9-9.96-24.28-22.59-24.07-12.77,.21-22.01,10.22-22.05,24.08-.06,20.14-.06,40.29,.04,60.43,.01,2.95,.32,6.03,1.21,8.83,3.2,10.14,13.52,16.7,23.55,15.3,11.08-1.55,19.33-10.1,19.66-21.15,.34-10.98,.07-21.97,.07-32.96Z"/>   <path class="cls-1" d="M166.94,196.69c0,12.15,.93,24.4-.19,36.45-2.59,27.79-24.98,47.6-51.98,47.11-27.21-.49-49.19-20.8-50.44-48.69-1.08-24.1-.87-48.32,.22-72.42,1.14-24.93,23.94-45.59,48.81-46.07,27.26-.53,50.54,18.33,52.99,44.21,1.24,13.03,.22,26.27,.22,39.42,.12,0,.24,0,.36,0Zm-29-.04c-.05,0-.1,0-.15,0,0-11.15,.49-22.33-.13-33.45-.7-12.37-11.24-21.51-22.95-20.95-12.03,.57-21.3,10.2-21.38,22.65-.14,21.14-.17,42.29,.09,63.43,.04,3.68,1.09,7.65,2.76,10.94,4.51,8.89,14.57,13.3,23.95,11.16,10.68-2.44,17.47-10.7,17.77-22.31,.26-10.48,.06-20.98,.06-31.46Z"/> </svg>`;

        // 4. بناء الـ HTML
        const newHTML = `
            <div class="custom-benefits-container" dir="rtl">
                <div class="theme-container">
                    <div class="cb-title-wrapper">
                        <h2 class="cb-main-title">ما يميزنا</h2>
                    </div>
                    <div class="cb-grid">
                        <div class="cb-item">
                            <div class="cb-icon">${cubeIcon1}</div>
                            <h3 class="cb-title">أسعارنا التنافسية</h3>
                         
                        </div>
                        <div class="cb-item cb-middle">
                            <div class="cb-icon">${cubeIcon2}</div>
                            <h3 class="cb-title">خدماتنا المتجددة</h3>
                           
                        </div>
                        <div class="cb-item">
                            <div class="cb-icon">${cubeIcon3}</div>
                            <h3 class="cb-title">خبرتنا العالية</h3>
                           
                        </div>
                    </div>
                </div>
                <div class="cb-bottom-line"></div>
            </div>
        `;

        // 5. التنسيقات (مخصصة للسكشن المحدد أو للسكشن العام الجديد)
        const styles = `
            section[section-id="46c87c94-c47b-471d-a252-f628da84c5fe"],
            #global-custom-benefits {
                padding: 0 !important;
                background-color: #F8F9FA !important;
                position: relative;
                overflow: hidden;
                width: 100%;
            }            .cb-main-title { font-size: clamp(28px, 4vw, 36px); font-weight: 800; color: #111827; margin: 0; }
.cb-title-wrapper {
    text-align: center;
    margin-bottom: 50px;
}
            .custom-benefits-container { padding: 60px 0 0 0; width: 100%; font-family: inherit; }
            .cb-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; }
            .cb-item { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 15px; }
            .cb-middle { border-right: 1px solid rgba(0,0,0,0.06); border-left: 1px solid rgba(0,0,0,0.06); }
            .cb-icon { width: 64px; height: 64px; background-color: var(--primary) ; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ffffff; margin-bottom: 24px; box-shadow: 0 4px 10px rgba(235, 40, 53, 0.2); }
            .cb-title { font-size: 18px; font-weight: 700; color: #2D2D2D; margin-bottom: 12px; margin-top: 0; }
            .cb-desc { font-size: 14.5px; color: #666666; line-height: 1.6; margin: 0; max-width: 280px; }
            .cb-bottom-line { width: 100%; height: 20px; background-color: var(--primary) ; margin-top: 50px; }.cb-icon svg {
    width: 39px;
    height: 64px;
}
            @media (max-width: 768px) {
                .custom-benefits-container { padding: 40px 0 0 0; }
                .cb-grid { grid-template-columns: 1fr; gap: 40px; }
                .cb-middle { border: none; padding-top: 40px; padding-bottom: 40px; border-top: 1px solid rgba(0,0,0,0.06); border-bottom: 1px solid rgba(0,0,0,0.06); }
                .cb-bottom-line { margin-top: 40px; height: 16px; }
            }
        `;

        if (!document.getElementById('custom-benefits-style-global')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'custom-benefits-style-global';
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
        }

        // 6. حقن المحتوى بناءً على مكاننا في الموقع
        if (isHome && homeTargetSection) {
            // في الصفحة الرئيسية -> استبدال محتوى السكشن المحدد ليكون قابلاً للتحريك
            homeTargetSection.innerHTML = newHTML;
            homeTargetSection.id = 'global-custom-benefits-injected';
        } else if (siteFooter) {
            // في باقي الصفحات -> إنشاء سكشن فوق الفوتر مباشرة
            const wrapper = document.createElement("section");
            wrapper.id = "global-custom-benefits";
            wrapper.innerHTML = newHTML;
            
            // علامة مخفية لمنع التكرار
            const marker = document.createElement("div");
            marker.id = 'global-custom-benefits-injected';
            marker.style.display = 'none';
            document.body.appendChild(marker);

            siteFooter.parentNode.insertBefore(wrapper, siteFooter);
        } else {
            return false;
        }

        return true;
    }

    // التشغيل المتكرر لضمان التنفيذ في بيئة زد
    if (!injectGlobalBenefits()) {
        window.addEventListener('DOMContentLoaded', injectGlobalBenefits);
        let attempts = 0;
        const observerInterval = setInterval(() => {
            if (injectGlobalBenefits() || attempts >= 30) {
                clearInterval(observerInterval);
            }
            attempts++;
        }, 500);
    }
})();