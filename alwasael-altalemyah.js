
(function() {
    // 1. الكود الخاص بالتصميم (HTML + CSS مدمج لضمان عمل الألوان في سلة)
    const customSections = `
        <style>
            #my-custom-store-features * {
                font-family: var(--font-main), 'PingARLT', sans-serif !important;
            }
            .angel-feature-box {
                transition: all 0.3s ease;
            }
            .angel-feature-box:hover {
                background-color: #069a96 !important;
                border-color: #069a96 !important;
                box-shadow: 0 8px 30px rgba(6, 154, 150, 0.25) !important;
            }
            .angel-feature-box:hover p, .angel-feature-box:hover div {
                color: #ffffff !important;
            }
            .angel-feature-icon {
                background-color: #ebf6f6;
                color: #069a96;
                transition: all 0.3s ease;
            }
            .angel-feature-box:hover .angel-feature-icon {
                background-color: rgba(255,255,255,0.2) !important;
            }
            .angel-btn-primary {
                background-color: #069a96;
                color: #ffffff !important;
                transition: all 0.3s ease;
            }
            .angel-btn-primary:hover {
                background-color: #007470;
                transform: translateY(-3px);
                box-shadow: 0 6px 20px rgba(6, 154, 150, 0.4);
            }
        </style>

        <!-- قسم مميزات المتجر -->
        <section class="bg-white py-12 md:py-16" dir="rtl">
            <div class="container mx-auto px-4">
                <div class="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                    
                    <div class="md:order-1">
                        <h2 class="mb-8 text-2xl font-bold sm:text-3xl md:text-4xl text-right" style="color: #004956;">لماذا تختار منصة الوسائل التعليمية؟</h2>
                        
                        <div class="relative px-1 pb-4 pt-1">
                            <div class="absolute bottom-11 top-11 z-0 w-px bg-gray-200 right-[2.1rem]"></div>
                            
                            <div class="flex flex-col gap-4">
                                <div class="angel-feature-box relative z-10 flex cursor-default items-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div class="angel-feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
                                    </div>
                                    <div class="flex-1 mr-5 text-right">
                                        <p class="mb-1 text-lg font-bold text-gray-900">ملفات جاهزة للطباعة</p>
                                        <p class="text-sm leading-relaxed text-gray-500">أوراق عمل واختبارات بتنسيق PDF عالي الجودة، جاهزة للتحميل والطباعة المباشرة بدون أي تعقيد.</p>
                                    </div>
                                </div>

                                <div class="angel-feature-box relative z-10 flex cursor-default items-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div class="angel-feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                                    </div>
                                    <div class="flex-1 mr-5 text-right">
                                        <p class="mb-1 text-lg font-bold text-gray-900">شاملة لجميع المراحل</p>
                                        <p class="text-sm leading-relaxed text-gray-500">محتوى يغطي مواد لغتي، العلوم، الدراسات الإسلامية والاجتماعية من المرحلة الابتدائية وحتى المتوسطة.</p>
                                    </div>
                                </div>

                                <div class="angel-feature-box relative z-10 flex cursor-default items-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div class="angel-feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </div>
                                    <div class="flex-1 mr-5 text-right">
                                        <p class="mb-1 text-lg font-bold text-gray-900">توفير وقت وجهد المعلم</p>
                                        <p class="text-sm leading-relaxed text-gray-500">نضع بين يديك خطط أسبوعية وسجلات متابعة منظمة واحترافية توفر عليك ساعات من التحضير.</p>
                                    </div>
                                </div>

                                <div class="angel-feature-box relative z-10 flex cursor-default items-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                    <div class="angel-feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                                    </div>
                                    <div class="flex-1 mr-5 text-right">
                                        <p class="mb-1 text-lg font-bold text-gray-900">تحميل فوري وآمن</p>
                                        <p class="text-sm leading-relaxed text-gray-500">احصل على ملفاتك فور إتمام عملية الدفع مباشرة، لتبدأ باستخدامها مع طلابك في نفس اللحظة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 md:mt-0 flex h-full items-center justify-center md:order-2">
                        <div class="relative w-full aspect-square rounded-3xl overflow-hidden border shadow-lg flex items-center justify-center p-6" style="background-color: #ebf6f6; border-color: #c2eceb;">
                            <img class="w-full h-full object-cover rounded-xl shadow-sm" src="https://cdn.files.salla.network/products/251715113/0371ae1c-7e7f-4a72-a8b7-4ba1572d3fab-original.webp" alt="أوراق عمل الوسائل التعليمية" loading="lazy">
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- قسم الدعوة لاتخاذ إجراء -->
        <section class="py-10 md:py-16" style="background-color: #f7fcfc; border-top: 1px solid #e1f2f2;" dir="rtl">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    
                    <div class="text-center md:text-right md:order-1">
                        <span class="inline-block py-1 px-3 rounded-full text-sm font-bold mb-4" style="background-color: #e1f2f2; color: #069a96;">حصرياً للمعلمين والطلاب</span>
                        <h2 class="text-2xl md:text-[34px] font-bold mb-6 leading-[1.4]" style="color: #004956;">استعد لعامك الدراسي بأفضل الملفات التعليمية!</h2>
                        <p class="text-lg text-gray-600 md:mb-10 mb-8 leading-relaxed">
                            من خلال متجر "الوسائل التعليمية"، نقدم لك أوراق عمل مبتكرة، واختبارات تشخيصية، وخطط أسبوعية مصممة خصيصاً لتواكب المناهج الدراسية وتدعم رحلتك التعليمية باحترافية.
                        </p>
                        
                        <div>
                            <a href="/categories" class="angel-btn-primary inline-flex items-center justify-center gap-2 h-14 px-8 py-3 rounded-2xl text-lg font-bold group w-full md:w-auto">
                                <span>تصفح المنتجات الآن</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2 transition-transform duration-200 ease-in-out group-hover:-translate-x-2"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex justify-center md:order-2 mt-6 md:mt-0">
                        <div class="relative w-full max-w-sm lg:max-w-md">
                            <img alt="استعد لعامك الدراسي" loading="lazy" decoding="async" class="object-contain w-full h-auto drop-shadow-md rounded-2xl" src="https://cdn.files.salla.network/homepage/251715113/94fb70c5-bffb-43c3-892f-a71e5cb25358-original.webp">
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;

    // 2. دالة الإدراج
    function injectMyCustomSections() {
        // التحقق أننا في الصفحة الرئيسية
        const path = window.location.pathname;
        if (path !== '/' && path !== '/ar/' && path !== '/en/') return;

        // التحقق من عدم تكرار الكود
        if (document.getElementById('my-custom-store-features')) return;

        // البحث عن قسم "الأقسام" (نجلب كل العناوين h2 ونبحث عن كلمة الاقسام)
        let targetSection = document.querySelector('section[component-id="746603934"]');
        
        if (!targetSection) {
            const headings = document.querySelectorAll('.s-block__title h2');
            for (let i = 0; i < headings.length; i++) {
                if (headings[i].textContent.includes('الاقسام')) {
                    targetSection = headings[i].closest('section');
                    break;
                }
            }
        }

        // إدراج الكود في حال العثور على القسم
        if (targetSection) {
            const wrapper = document.createElement('div');
            wrapper.id = 'my-custom-store-features';
            wrapper.innerHTML = customSections;
            targetSection.insertAdjacentElement('afterend', wrapper);
        }
    }

    // 3. التنفيذ الفوري
    injectMyCustomSections();

    // 4. استخدام Interval للبحث عن العنصر (لأن سلة تقوم بتحميل العناصر تدريجياً)
    let attempts = 0;
    const intervalId = setInterval(function() {
        injectMyCustomSections();
        attempts++;
        // التوقف عن البحث بعد 5 ثوانٍ أو في حال تم الإدراج بنجاح
        if (attempts > 10 || document.getElementById('my-custom-store-features')) {
            clearInterval(intervalId);
        }
    }, 500);

    // 5. التفاعل مع أحداث سلة (عند الانتقال بين الصفحات)
    if (window.salla) {
        salla.event.on('page::viewed', function() {
            setTimeout(injectMyCustomSections, 500);
        });
    }

})();
