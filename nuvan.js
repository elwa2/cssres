document.addEventListener('DOMContentLoaded', function () {
    const brandColors = {
        charcoal: '#343A3C',
        gold: '#C9A86A',
        sand: '#D9C5B2',
        offwhite: '#F7F3EF'
    };

    // 1. حقن التنسيقات (CSS) المخصصة للقسمين (.befoor و .drasaate)
    const style = document.createElement('style');
    style.innerHTML = `
        /* --- تنسيقات قسم "قبل وبعد" (.befoor) --- */
        .befoor .container {
            max-width: 900px !important;
            margin: 0 auto;
        }
        .befoor img-comparison-slider {
            visibility: visible !important;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
            border: 1px solid rgba(201, 168, 106, 0.3);
            --divider-color: ${brandColors.gold};
            --divider-width: 2px;
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
            display: block;
            width: 100%;
            background: ${brandColors.offwhite};
        }
        .befoor img-comparison-slider:hover {
            box-shadow: 0 30px 70px rgba(201, 168, 106, 0.15);
        }
        .befoor .nuvan-handle {
            width: 48px;
            height: 48px;
            background-color: ${brandColors.charcoal};
            border: 2px solid ${brandColors.gold};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), inset 0 0 0 2px rgba(255,255,255,0.1);
            cursor: ew-resize;
            transition: transform 0.3s ease;
        }
        .befoor img-comparison-slider:focus-within .nuvan-handle,
        .befoor .nuvan-handle:hover {
            transform: scale(1.1);
        }
        .befoor .nuvan-ba-badge {
            position: absolute;
            bottom: 24px;
            padding: 8px 20px;
            border-radius: 50px;
            font-size: 13px;
            letter-spacing: 0.05em;
            font-weight: 500;
            z-index: 10;
            pointer-events: none;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 1.4;
        }
        .befoor .nuvan-ba-badge span.day {
            font-size: 10px;
            opacity: 0.7;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        [dir="rtl"] .befoor .nuvan-ba-badge.before {
            right: 24px;
            background-color: rgba(217, 197, 178, 0.85);
            color: ${brandColors.charcoal};
            border: 1px solid rgba(255,255,255,0.4);
        }
        [dir="rtl"] .befoor .nuvan-ba-badge.after {
            left: 24px;
            background-color: rgba(52, 58, 60, 0.9);
            color: ${brandColors.offwhite};
            border: 1px solid rgba(201, 168, 106, 0.6);
        }
        .befoor .nuvan-drag-hint {
            text-align: center;
            margin-top: 20px;
            font-size: 13px;
            color: var(--store-text-secondary);
            opacity: 0.6;
            letter-spacing: 0.05em;
            animation: pulse-opacity 2s infinite;
        }

        /* --- تنسيقات قسم الدراسات العلمية (.drasaate) --- */
        section.drasaate {
            background-color: ${brandColors.offwhite} !important;
            padding: 80px 0 !important;
            position: relative;
            overflow: hidden;
            border-top: 1px solid rgba(201, 168, 106, 0.15);
            display: block !important;
        }
        section.drasaate::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 100%;
            background-image: radial-gradient(circle, ${brandColors.gold} 1.5px, transparent 1.5px);
            background-size: 32px 32px;
            opacity: 0.15;
            pointer-events: none;
        }
        .studies-header {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
            z-index: 2;
        }
        .studies-subtitle {
            font-family: 'Allura', cursive, sans-serif;
            color: ${brandColors.gold};
            font-size: 32px;
            margin-bottom: 8px;
        }
        .studies-title {
            color: ${brandColors.charcoal};
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 16px;
        }
        .studies-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            position: relative;
            z-index: 2;
        }
        .study-card {
            background: #ffffff;
            border: 1px solid rgba(201, 168, 106, 0.2);
            border-radius: 20px;
            padding: 32px;
            position: relative;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .study-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            border-color: rgba(201, 168, 106, 0.5);
        }
        .study-number {
            position: absolute;
            top: 16px;
            left: 24px;
            font-size: 48px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 300;
            color: ${brandColors.sand};
            opacity: 0.3;
            line-height: 1;
            pointer-events: none;
        }
        .study-ingredient {
            color: ${brandColors.gold};
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 16px;
            position: relative;
            z-index: 2;
        }
        .study-result {
            color: ${brandColors.charcoal};
            font-size: 14px;
            line-height: 1.8;
            opacity: 0.8;
            flex-grow: 1;
            margin-bottom: 24px;
            position: relative;
            z-index: 2;
        }
        .study-links {
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;
            z-index: 2;
        }
        .study-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${brandColors.charcoal};
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-decoration: none;
            font-weight: bold;
            transition: opacity 0.3s;
        }
        .study-link svg {
            width: 14px; height: 14px;
            fill: none;
        }
        .study-link:hover {
            opacity: 0.7;
        }
        @keyframes pulse-opacity {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.9; }
        }
        @media (max-width: 768px) {
            .studies-grid { grid-template-columns: 1fr; }
            .study-card { padding: 24px; }
            .befoor .nuvan-ba-badge { bottom: 12px; padding: 6px 12px; font-size: 11px; }
            .befoor .nuvan-handle { width: 40px; height: 40px; }
            [dir="rtl"] .befoor .nuvan-ba-badge.before { right: 12px; }
            [dir="rtl"] .befoor .nuvan-ba-badge.after { left: 12px; }
        }
    `;
    document.head.appendChild(style);

    // 2. تفعيل وضبط قسم "قبل وبعد" المستهدف بالكلاس .befoor
    if (!customElements.get('img-comparison-slider')) {
        const script = document.createElement('script');
        script.defer = true;
        script.src = "https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js";
        document.head.appendChild(script);
    }

    // استهداف السلايدر الموجود داخل السكشن المسمى .befoor فقط
    const befoorSliders = document.querySelectorAll('.befoor img-comparison-slider');
    befoorSliders.forEach(slider => {
        // إضافة المقبض الفاخر
        if (!slider.querySelector('.nuvan-handle')) {
            slider.innerHTML += `
                <div slot="handle" class="nuvan-handle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${brandColors.gold}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16L4 12M4 12L8 8M4 12H20M20 12L16 16M20 12L16 8"/></svg>
                </div>
            `;
        }
        
        // إضافة الملصقات التوضيحية
        const beforeFig = slider.querySelector('figure.before');
        const afterFig = slider.querySelector('figure.after');
        
        if (beforeFig && !beforeFig.querySelector('.nuvan-ba-badge')) {
            beforeFig.insertAdjacentHTML('beforeend', `<div class="nuvan-ba-badge before"><span class="day">اليوم ٠</span><span>جفاف وتلف</span></div>`);
        }
        if (afterFig && !afterFig.querySelector('.nuvan-ba-badge')) {
            afterFig.insertAdjacentHTML('beforeend', `<div class="nuvan-ba-badge after"><span class="day">اليوم ٢١</span><span>لمعان وقوة</span></div>`);
        }

        // إضافة تلميح السحب للمستخدم
        if(!slider.parentElement.querySelector('.nuvan-drag-hint')){
             slider.parentElement.insertAdjacentHTML('beforeend', `
                <div class="nuvan-drag-hint">
                    <i class="sicon-swap-horizontal mr-1"></i>
                    اسحبي الشريط يميناً ويساراً لرؤية النتيجة
                </div>
            `);
        }
    });

    // 3. بناء وحقن قسم الدراسات داخل السكشن المستهدف بالكلاس .drasaate
    const drasaateSection = document.querySelector('section.drasaate');
    if (drasaateSection) {
        const studiesData = [
            {
                id: "01",
                title: "إكليل الجبل (Rosemary)",
                desc: "أظهرت مقارنة استخدام زيت الروزماري مقابل المينوكسيديل (2%) لمدة 6 أشهر لدى المصابين بالصلع الوراثي نمواً متماثلاً في كثافة الشعر، مع ميزة تفوق الروزماري في تقليل حكة الفروة.",
                links: [{ url: "https://pubmed.ncbi.nlm.nih.gov/25842469/", label: "دراسة مُحكمة - PubMed" }]
            },
            {
                id: "02",
                title: "برو فيتامين ب5 (Panthenol)",
                desc: "كشفت الدراسة أن تركيبات البانثينول تعمل على اختراق طبقات الشعر لزيادة مرونته وسُمك القطاع العرضي للشعرة، مما يقلل من تكسر ألياف الشعر ويعطيه مظهراً أكثر كثافة حجمياً.",
                links: [{ url: "https://pubmed.ncbi.nlm.nih.gov/22171682/", label: "الأساس العلمي - PubMed" }]
            },
            {
                id: "03",
                title: "زيت الجوجوبا (Jojoba Oil)",
                desc: "أكدت المراجعة العلمية أن تركيبة زيت الجوجوبا الشمعية تشبه الزهم الطبيعي الذي تفرزه فروة الرأس، مما يجعله مرطباً ممتازاً دون سد البصيلات ومضاداً للالتهابات والميكروبات.",
                links: [{ url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8197201/", label: "مراجعة شاملة - PMC" }]
            },
            {
                id: "04",
                title: "الكولاجين وفيتامين (أ)",
                desc: "يعمل الكولاجين كمضاد أكسدة يدعم بروتينات البصيلة ويحميها من الضمور. بينما يساهم فيتامين (أ) في تنظيم دورة نمو خلايا الفروة وإفراز الدهون المغذية بتوازن مثالي.",
                links: [
                    { url: "https://pubmed.ncbi.nlm.nih.gov/37830229/", label: "تأثير الكولاجين - PubMed" },
                    { url: "https://pubmed.ncbi.nlm.nih.gov/35889909/", label: "دور فيتامين (أ) - PubMed" }
                ]
            }
        ];

        // استبدال محتوى السكشن الافتراضي (البانرات) بشبكة الدراسات العلمية
        drasaateSection.innerHTML = `
            <div class="container relative z-10">
                <div class="studies-header">
                    <div class="studies-subtitle">Science & Nature</div>
                    <h2 class="studies-title">الأساس العلمي الموثق</h2>
                    <p class="text-lg text-store-text-secondary opacity-70 max-w-2xl mx-auto">صُممت تركيبة نوفان بدقة متناهية بالاعتماد على أبحاث سريرية ودراسات طبية موثقة عالمياً.</p>
                </div>
                <div class="studies-grid">
                    ${studiesData.map(study => `
                        <article class="study-card">
                            <div class="study-number">${study.id}</div>
                            <h3 class="study-ingredient">${study.title}</h3>
                            <p class="study-result">${study.desc}</p>
                            <div class="study-links">
                                ${study.links.map(link => `
                                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="study-link">
                                        <svg viewBox="0 0 24 24"><path d="M14 3h7v7M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="${brandColors.gold}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
                                        ${link.label}
                                    </a>
                                `).join('')}
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        `;
    }
});











document.addEventListener('DOMContentLoaded', function () {
    // 1. استهداف قسم الضمان الذهبي
    const qualitySections = document.querySelectorAll('.Quality');
    if (qualitySections.length === 0) return;

    // 2. حقن أكواد CSS الخالصة لضمان عمل التصميم بشكل مستقل
    const style = document.createElement('style');
    style.innerHTML = `
        /* التنسيق الأساسي للقسم */
        .nuvan-quality-wrapper {
            background-color: #F7F3EF !important;
            border-top: 1px solid rgba(201, 168, 106, 0.15);
            border-bottom: 1px solid rgba(201, 168, 106, 0.15);
            width: 100%;
            direction: rtl;
        }

        .nuvan-quality-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 48px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
        }

        @media (min-width: 768px) {
            .nuvan-quality-container {
                flex-direction: row;
                padding: 64px 40px;
            }
        }

        /* تنسيق الأيقونة الذهبية */
        .nuvan-quality-main {
            display: flex;
            align-items: center;
            gap: 24px;
            width: 100%;
        }

        .nuvan-quality-badge {
            width: 84px;
            height: 84px;
            border-radius: 50%;
            background-color: #343A3C;
            border: 1.5px solid #C9A86A;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            flex-shrink: 0;
        }

        .nuvan-quality-badge-inner {
            position: absolute;
            top: 6px; left: 6px; right: 6px; bottom: 6px;
            border-radius: 50%;
            border: 1px solid rgba(201, 168, 106, 0.3);
        }

        .nuvan-quality-badge-content {
            text-align: center;
            line-height: 1;
            z-index: 2;
        }

        .nuvan-quality-badge-top {
            font-size: 9px;
            letter-spacing: 0.22em;
            color: #C9A86A;
            font-family: 'Montserrat', 'Tajawal', sans-serif;
        }

        .nuvan-quality-badge-bottom {
            font-size: 16px;
            letter-spacing: 0.18em;
            color: #F7F3EF;
            margin-top: 4px;
            font-family: 'Montserrat', 'Tajawal', sans-serif;
        }

        .nuvan-quality-star {
            position: absolute;
            top: -4px;
            right: -4px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #C9A86A;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            color: #343A3C;
            z-index: 3;
        }

        /* تنسيق النصوص */
        .nuvan-quality-text-box {
            display: flex;
            flex-direction: column;
        }

        .nuvan-quality-title {
            font-size: 14px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #343A3C;
            font-weight: bold;
            font-family: 'Montserrat', 'Tajawal', sans-serif;
        }

        .nuvan-quality-desc {
            font-size: 13px;
            color: #343A3C;
            opacity: 0.7;
            margin-top: 8px;
            max-width: 380px;
            line-height: 1.8;
            font-family: var(--font-main), 'Tajawal', sans-serif;
        }

        /* تنسيق التاجات (Tags) */
        .nuvan-quality-tags {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            width: 100%;
        }

        @media (min-width: 768px) {
            .nuvan-quality-tags {
                justify-content: flex-end;
            }
        }

        .nuvan-quality-tag {
            padding: 8px 16px;
            border-radius: 50px;
            border: 1px solid rgba(201, 168, 106, 0.25);
            font-size: 10px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            background-color: rgba(255, 255, 255, 0.7);
            color: #343A3C;
            font-weight: bold;
            font-family: 'Montserrat', 'Tajawal', sans-serif;
        }
    `;
    document.head.appendChild(style);

    // 3. بناء الهيكل HTML وإدراجه
    qualitySections.forEach(section => {
        section.innerHTML = `
            <div class="nuvan-quality-wrapper">
                <div class="nuvan-quality-container">
                    
                    <div class="nuvan-quality-main">
                        <!-- الختم الذهبي -->
                        <div class="nuvan-quality-badge">
                            <div class="nuvan-quality-badge-inner"></div>
                            <div class="nuvan-quality-badge-content">
                                <div class="nuvan-quality-badge-top">ضمان</div>
                                <div class="nuvan-quality-badge-bottom">ذهبي</div>
                            </div>
                            <div class="nuvan-quality-star">✦</div>
                        </div>
                        
                        <!-- النصوص -->
                        <div class="nuvan-quality-text-box">
                            <div class="nuvan-quality-title">Premium Quality — ضمان ذهبي</div>
                            <div class="nuvan-quality-desc">طبيعي ١٠٠٪، مختبر من أطباء الجلدية، خالٍ من السيليكون والبارابين. إذا لم تحبي النتيجة خلال ٣٠ يوم، نعيد المبلغ.</div>
                        </div>
                    </div>

                    <!-- التاجات (Tags) -->
                    <div class="nuvan-quality-tags">
                        <div class="nuvan-quality-tag">100% Natural</div>
                        <div class="nuvan-quality-tag">Dermatologically Tested</div>
                        <div class="nuvan-quality-tag">Silicone-Free</div>
                        <div class="nuvan-quality-tag">Cruelty-Free</div>
                    </div>

                </div>
            </div>
        `;

        // تنظيف الكلاسات الافتراضية لمنع التعارض
        section.className = 'Quality';
        section.style.padding = '0';
        section.style.margin = '0';
    });
});








 









