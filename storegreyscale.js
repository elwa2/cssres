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
                            حلول إبداعية تواكب أهدافك وتسرّع نمو مشروعك.. من الهوية البصرية إلى إدارة السوشيال والمحتوى والمونتاج — كل شيء في متجر واحد بنكهة نيون.
                        </p>
                        
                        <div class="jh-buttons">
                            <a href="#products" class="jh-btn-primary">اطلب الآن ${iconArrow}</a>
                            <a href="#how-we-work" class="jh-btn-secondary">${iconPlay} كيف نعمل؟</a>
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
        <a href="https://hana.com.sa/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/dd635213-f655-429d-b942-ed06ebdf3585.png" alt="Brand"></a>
        <a href="https://c971.ae/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/35117985-0b64-403e-9120-c80c183aa21d.png" alt="Brand"></a>
        <a href="https://dstartco.com/ar/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/730ff704-2652-4245-8688-8d04676d670b.png" alt="Brand"></a>
        <a href="https://grippysa.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/7b604ac8-983c-4cdb-a0f9-76590e2edc42.png" alt="Brand"></a>
        <a href="https://nfahsa.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/f8faa58b-c1bb-44e7-ab19-789483a961b3.png" alt="Brand"></a>
        <a href="https://hasinah-sa.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/792da464-a637-488b-b267-a64c647adbe5.png" alt="Brand"></a>
        <a href="https://nephelestore.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/025a0646-9ecd-4a85-8b07-4f498119e04d.png" alt="Brand"></a>
        <a href="https://addaxsa.com/ar-sa/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/d0550c3f-748c-47a6-9820-e3a180cd39c0.png" alt="Brand"></a>
        <a href="https://shakasa.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/6de112b2-66e1-4fc1-bb72-c892f500568f.png" alt="Brand"></a>
        <a href="https://shoetypes.co/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/cbf46038-abfa-4e0a-a7a8-e85c7273ff8a.png" alt="Brand"></a>
    `;

    const row2Logos = `
        <a href="https://ananasroastery.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/22026a36-1efb-4319-8921-27896cefdca8.png" alt="Brand"></a>
        <a href="https://thecandypills.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/539c09e3-00e9-430c-9b26-cc3ef4239570.png" alt="Brand"></a>
        <a href="https://roohsweet.net/ar-sa/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/5664e023-7483-4349-b53e-f73cbba29ee2.png" alt="Brand"></a>
        <a href="https://sultan.sa/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/58b912a9-66a8-49d3-83d3-2f3c3a7d97f6.png" alt="Brand"></a>
        <a href="https://padelstoreksa.com/ar-sa/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/d992b345-9071-4759-b146-679e4cb85231.png" alt="Brand"></a>
        <a href="https://wooden.sa/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/4f725e9c-4e8c-45ff-ae92-c2973ce05cab.png" alt="Brand"></a>
        <a href="http://moqafaa.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/6223cea4-625b-4f67-a411-e20d1ca2dca5.png" alt="Brand"></a>
        <a href="https://almunasabah.net/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/bc78c9ab-a1ef-4f56-a245-afe7d9608812.png" alt="Brand"></a>
        <a href="https://smartbody.me/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/46e33ea0-eb16-4624-9084-a8d83d4e803d.png" alt="Brand"></a>
        <a href="https://peacockroaster.com/" target="_blank"><img loading="lazy" src="https://media.zid.store/0232d8f5-ca57-4d25-a080-a49f33996232/3a2cae5b-ee1a-4455-ab2e-7eb2fb32db3b.png" alt="Brand"></a>
    `;

    // 3. هيكل الـ HTML للقسم بالكامل
    const sectionHTML = `
        <div class="brands-title-wrapper">
            <div class="brands-title">شركاء النجاح عملاؤنا</div>
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
                            <div class="cgf-icon-box">${iconLightbulb}</div>
                            <div class="cgf-brand-text">
                                <h3>متجر جراي</h3>
                                <span>JARAY STORE • EST 2023</span>
                            </div>
                        </div>
                        <div class="cgf-text">
                            نحوّل أفكارك إلى منتجات رقمية تبيع. تصميم، محتوى، مونتاج، وإدارة متاجر — بلمسة نيون شبابية واحترافية عالية.
                        </div>
                        <div class="cgf-socials">
                            <a href="#" aria-label="Share">${iconShare}</a>
                            <a href="#" aria-label="Share">${iconShare}</a>
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
                            <li><a href="#">تتبع طلبك</a></li>
                            <li><a href="#">الأسئلة الشائعة</a></li>
                            <li><a href="#">سياسة الاسترجاع</a></li>
                            <li><a href="#">تواصل معنا</a></li>
                            <li><a href="#">انضم كمبدع</a></li>
                        </ul>
                    </div>

                    <!-- العمود الرابع (أقصى اليسار): النشرة البريدية -->
                    <div class="cgf-col">
                        <div class="cgf-newsletter">
                            <div class="cgf-title">نشرة جراي الإبداعية</div>
                            <div class="cgf-text">نصائح تصميم + قوالب مجانية كل أسبوع.</div>
                            <form class="cgf-newsletter-form" onsubmit="event.preventDefault();">
                                <input type="email" placeholder="بريدك الإلكتروني" required>
                                <button type="submit">اشتراك</button>
                            </form>
                            <div class="cgf-note">${iconCheck} بدون إزعاج. إلغاء في أي وقت.</div>
                        </div>
                    </div>

                </div>

                <!-- الشريط السفلي -->
                <div class="cgf-bottom-bar">
                    <div class="cgf-copyright">
                        © 2025 متجر جراي — جميع الحقوق محفوظة. صُنع بحب وتوهج نيون.
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














(function() {
    // 1. إضافة تنسيقات CSS نقية لضمان عدم تعارضها مع بيئة زد
    const customStyles = `
        <style id="jaray-story-styles">
            .j-story-section {
                max-width: 1280px;
                margin: 0 auto;
                padding: 40px 20px;
                direction: rtl;
                font-family: 'IBM Plex Sans Arabic', 'Tajawal', system-ui, -apple-system, sans-serif;
                color: #111827;
            }
            .j-story-section * {
                box-sizing: border-box;
            }
            @media (min-width: 768px) {
                .j-story-section { padding: 64px 32px; }
            }
            .j-story-grid {
                display: grid;
                gap: 24px;
                align-items: start;
            }
            @media (min-width: 1024px) {
                .j-story-grid { grid-template-columns: 0.9fr 1.1fr; gap: 32px; }
                .j-story-sticky { position: sticky; top: 88px; }
            }
            .j-story-badge {
                display: inline-flex;
                padding: 4px 12px;
                border-radius: 99px;
                background: #fff;
                border: 1px solid #E9E5FF;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.05em;
                color: #8B5CF6;
                margin-bottom: 16px;
            }
            .j-story-title {
                font-size: clamp(26px, 4vw, 36px);
                font-weight: 800;
                line-height: 1.25;
                margin: 0;
            }
            .j-story-highlight {
                position: relative;
                display: inline-block;
                z-index: 1;
            }
            .j-story-highlight::after {
                content: '';
                position: absolute;
                bottom: 6px;
                left: 0;
                right: 0;
                height: 8px;
                background: rgba(198, 255, 0, 0.6);
                transform: rotate(-1deg);
                z-index: -1;
            }
            .j-story-desc {
                margin-top: 16px;
                font-size: 15px;
                line-height: 1.8;
                color: #4B5563;
                max-width: 420px;
            }
            .j-story-cta {
                margin-top: 32px;
                border-radius: 20px;
                background: #0A0A0A;
                color: white;
                padding: 20px;
                display: flex;
                align-items: center;
                gap: 16px;
                position: relative;
                overflow: hidden;
            }
            .j-story-cta-bg {
                position: absolute;
                inset: 0;
                background: linear-gradient(to left, rgba(139,92,246,0.3), transparent);
                pointer-events: none;
            }
            .j-story-cta-icon {
                position: relative;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                background: white;
                color: black;
                display: grid;
                place-items: center;
                flex-shrink: 0;
            }
            .j-story-cta-title { font-size: 13px; font-weight: 700; margin-bottom: 2px; }
            .j-story-cta-sub { font-size: 12px; color: rgba(255,255,255,0.6); }
            .j-story-cta-btn {
                position: relative;
                margin-right: auto;
                background: white;
                color: black;
                font-size: 12px;
                font-weight: 700;
                padding: 8px 16px;
                border-radius: 99px;
                border: none;
                cursor: pointer;
            }
            .j-cards-col {
                display: grid;
                gap: 16px;
            }
            .j-card {
                background: white;
                border-radius: 24px;
                border: 1px solid #E9E5FF;
                padding: 28px;
                box-shadow: 0 12px 40px -12px rgba(139,92,246,0.15), 0 4px 20px -4px rgba(0,0,0,0.05);
                transition: all 0.3s ease;
                display: flex;
                align-items: flex-start;
                gap: 16px;
            }
            .j-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 16px 50px rgba(139,92,246,0.16);
            }
            .j-card-icon-box {
                width: 48px;
                height: 48px;
                border-radius: 14px;
                border: 1px solid #E9E5FF;
                display: grid;
                place-items: center;
                position: relative;
                flex-shrink: 0;
            }
            .j-card-icon-dot {
                position: absolute;
                top: -4px;
                left: -4px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
            }
            .j-card-header {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .j-card-title {
                font-weight: 700;
                font-size: 16px;
                margin: 0;
                color: #111827;
            }
            .j-card-num {
                font-size: 10px;
                padding: 2px 8px;
                border-radius: 99px;
                background: #F8F7FF;
                border: 1px solid #EDE9FE;
                color: #111827;
            }
            .j-card-p {
                font-size: 14px;
                color: #6B7280;
                line-height: 1.7;
                margin: 8px 0 0 0;
            }
            .j-tags {
                margin-top: 16px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .j-tag {
                font-size: 11px;
                padding: 4px 10px;
                border-radius: 99px;
                background: #F8F7FF;
                border: 1px solid #E9E5FF;
                display: flex;
                align-items: center;
                gap: 4px;
                color: #111827;
                font-weight: 500;
            }
            .j-bottom-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 12px;
                margin-top: 8px;
            }
            @media (min-width: 640px) {
                .j-bottom-grid {
                    grid-template-columns: 2fr 1fr;
                }
            }
            .j-work-style {
                background: white;
                border-radius: 20px;
                border: 1px solid #E9E5FF;
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .j-work-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #0A0A0A;
                color: white;
                display: grid;
                place-items: center;
                flex-shrink: 0;
            }
            .j-work-title {
                font-size: 13px;
                font-weight: 700;
                color: #111827;
                margin-bottom: 2px;
            }
            .j-work-sub {
                font-size: 11px;
                color: #6B7280;
            }
            .j-support {
                background: #C6FF00;
                border-radius: 20px;
                border: 1px solid rgba(0,0,0,0.05);
                padding: 16px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .j-support-title {
                font-size: 20px;
                font-weight: 800;
                color: #111827;
                line-height: 1;
            }
            .j-support-sub {
                font-size: 11px;
                font-weight: 700;
                color: #111827;
                margin-top: 4px;
            }
        </style>
    `;

    // 2. هيكلة الـ HTML الجديد
    const newHTML = `
        <section id="story" class="j-story-section">
            <div class="j-story-grid">
                <!-- العمود الأيمن (النصوص) -->
                <div class="j-story-sticky">
                    <div class="j-story-badge">لماذا جراي؟</div>
                    <h2 class="j-story-title">نحوّل أفكارك إلى<br><span class="j-story-highlight">متجر إبداعي ينبض</span></h2>
                    <p class="j-story-desc">لسنا مجرد مصممين. نحن فريق نمو: نفهم جمهورك، نبني هويتك، نكتب رسالتك، ونطلقها بفيديو ومحتوى يبيع.</p>
                    
                    <div class="j-story-cta">
                        <div class="j-story-cta-bg"></div>
                        <div class="j-story-cta-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div style="position: relative;">
                            <div class="j-story-cta-title">استشارة مجانية 15 دقيقة</div>
                            <div class="j-story-cta-sub">احجز مكالمة ونرسم خارطة طريقك</div>
                        </div>
                        <button class="j-story-cta-btn">احجز</button>
                    </div>
                </div>

                <!-- العمود الأيسر (الكروت) -->
                <div class="j-cards-col">
                    <!-- الكرت 1 -->
                    <div class="j-card">
                        <div class="j-card-icon-box" style="background: linear-gradient(to bottom right, rgba(255,90,138,0.2), rgba(139,92,246,0.2)); color: #111827;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
                            <span class="j-card-icon-dot" style="background: #FF5A8A; box-shadow: 0 0 10px #FF5A8A;"></span>
                        </div>
                        <div style="flex: 1;">
                            <div class="j-card-header">
                                <h3 class="j-card-title">هوية تنبض، لا مجرد لوجو</h3>
                                <span class="j-card-num">01</span>
                            </div>
                            <p class="j-card-p">نبني نظام بصري كامل: ألوان، خطوط، أيقونات، قوالب سوشيال، ودليل استخدام — جاهز للتوسع.</p>
                            <div class="j-tags">
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>تسليم سريع</span>
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>ملفات مفتوحة</span>
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>دعم</span>
                            </div>
                        </div>
                    </div>

                    <!-- الكرت 2 -->
                    <div class="j-card">
                        <div class="j-card-icon-box" style="background: linear-gradient(to bottom right, rgba(0,212,255,0.2), rgba(139,92,246,0.2)); color: #111827;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
                            <span class="j-card-icon-dot" style="background: #00D4FF; box-shadow: 0 0 10px #00D4FF;"></span>
                        </div>
                        <div style="flex: 1;">
                            <div class="j-card-header">
                                <h3 class="j-card-title">محتوى يفهم الخوارزميات والناس</h3>
                                <span class="j-card-num">02</span>
                            </div>
                            <p class="j-card-p">كتابة محتوى ومونتاج Reels مبني على هوك قوي، سرد قصصي، ودعوة إجراء واضحة — ليس حشو.</p>
                            <div class="j-tags">
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>تسليم سريع</span>
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>ملفات مفتوحة</span>
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>دعم</span>
                            </div>
                        </div>
                    </div>

                    <!-- الكرت 3 -->
                    <div class="j-card">
                        <div class="j-card-icon-box" style="background: linear-gradient(to bottom right, rgba(198,255,0,0.25), rgba(255,90,138,0.15)); color: #111827;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg>
                            <span class="j-card-icon-dot" style="background: #C6FF00; box-shadow: 0 0 10px #C6FF00;"></span>
                        </div>
                        <div style="flex: 1;">
                            <div class="j-card-header">
                                <h3 class="j-card-title">متجر خدمات، لا فوضى ملفات</h3>
                                <span class="j-card-num">03</span>
                            </div>
                            <p class="j-card-p">كل طلباتك في لوحة واحدة، تتبع مباشر، تسليمات منظمة، ودعم واتساب سريع — كأنك تطلب من متجر.</p>
                            <div class="j-tags">
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>تسليم سريع</span>
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>ملفات مفتوحة</span>
                                <span class="j-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>دعم</span>
                            </div>
                        </div>
                    </div>

                    <!-- الكروت السفلية -->
                    <div class="j-bottom-grid">
                        <div class="j-work-style">
                            <div class="j-work-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                            </div>
                            <div>
                                <div class="j-work-title">أسلوب العمل</div>
                                <div class="j-work-sub">Brief → Concept → Delivery → Support</div>
                            </div>
                        </div>
                        <div class="j-support">
                            <div class="j-support-title">24/7</div>
                            <div class="j-support-sub">دعم مستمر</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // 3. عملية الإدراج واستبدال القسم
    function injectSection() {
        const targetSection = document.querySelector('section[section-id="1c75d9c6-1b50-4174-8601-c7f99d482261"]');
        if (targetSection && !document.getElementById('jaray-story-styles')) {
            // إدراج التنسيقات
            document.head.insertAdjacentHTML('beforeend', customStyles);
            // الاستبدال
            targetSection.outerHTML = newHTML;
            return true;
        }
        return document.getElementById('story') !== null;
    }

    // التنفيذ باستخدام المراقب لضمان التوافق مع زد
    if (!injectSection()) {
        const observer = new MutationObserver((mutations, obs) => {
            if (injectSection()) {
                obs.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();