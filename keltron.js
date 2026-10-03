
(function() {
    // 1. حقن أكواد CSS المخصصة لشكل القائمة
    const injectStyles = () => {
        if (document.getElementById('custom-mega-menu-style')) return;
        const style = document.createElement('style');
        style.id = 'custom-mega-menu-style';
        style.textContent = `
            @media (min-width: 1024px) {
                /* إجبار القائمة على العرض الجديد وتفعيل الـ Flexbox */
                .root-level.has-mega-menu .sub-menu {
                    width: 700px !important;
                    display: flex !important;
                    flex-direction: row !important;
                    padding: 0 !important;
                    border-radius: 0.5rem !important;
                    overflow: hidden !important;
                    background-color: #ffffff !important;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
                    border: 1px solid #f3f4f6 !important;
                }

                /* تنسيق قسم الروابط (يمين القائمة) */
                .root-level.has-mega-menu .sub-menu > ul {
                    width: 35% !important;
                    max-height: 350px !important;
                    overflow-y: auto !important;
                    padding: 1rem !important;
                    margin: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 0.25rem !important;
                }

                /* تخصيص شريط التمرير للروابط */
                .root-level.has-mega-menu .sub-menu > ul::-webkit-scrollbar { width: 4px; }
                .root-level.has-mega-menu .sub-menu > ul::-webkit-scrollbar-track { background: #f1f1f1; }
                .root-level.has-mega-menu .sub-menu > ul::-webkit-scrollbar-thumb { background: var(--color-primary); border-radius: 4px; }

                /* تنسيق قسم الصورة (يسار القائمة) */
                .custom-mega-image {
                    width: 65%;
                    background: radial-gradient(circle, #ffffff 0%, #f9fafb 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid #f3f4f6;
                    padding: 2rem;
                    position: relative;
                }

                .custom-mega-image img {
                    max-width: 90%;
                    max-height: 220px;
                    object-fit: contain;
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    filter: drop-shadow(0 15px 10px rgba(0, 0, 0, 0.05));
                    will-change: transform;
                }

                /* تأثير التحريك عند مرور الماوس */
                .root-level.has-mega-menu:hover .custom-mega-image img {
                    transform: scale(1.08);
                }
            }
        `;
        document.head.appendChild(style);
    };

    // 2. إعدادات الصور لكل قسم (قم بتغيير الروابط المؤقتة بصورك النهائية لاحقاً)
    const categoryImages = {
        "965755740": "https://cdn.files.salla.network/other/1698663858/189dda0a-6a1d-4b79-97e5-5effe6c923c9-original.webp", // الشاشات (الصورة الأصلية)
        "1781217972": "https://cdn.files.salla.network/other/1698663858/ff364873-62da-42be-82d8-81afb786ec7c-original.webp", // المكيفات (صورة مؤقتة)
        "398797444": "https://cdn.files.salla.network/other/1698663858/1c7af6fc-f8b8-4faf-89c0-4d60de359cf1-original.webp", // غسالات ونشافات (صورة مؤقتة)
        "1421996931": "https://cdn.files.salla.network/other/1698663858/1516b920-f6fb-40ed-9f2c-6480ec125671-original.webp", // أجهزة التبريد (صورة مؤقتة)
        "1564039318": "https://cdn.files.salla.network/other/1698663858/a37f1123-afcf-4fa4-ae1e-a366193fa934-original.webp", // الافران و الاسطح (صورة مؤقتة)
        "1079509660": "https://cdn.files.salla.network/other/1698663858/e03e63a2-6a0c-4d54-bc7d-a40b06c8f354-original.webp", // أجهزة المطبخ الصغيره (صورة مؤقتة)
        "1178645730": "https://cdn.files.salla.network/other/1698663858/da8f14b1-f1a3-4550-a898-41e73e55a6d2-original.webp", // أجهزة المنزل الصغيرة (صورة مؤقتة)
        "586603499": "https://cdn.files.salla.network/other/1698663858/4aebc645-c295-4a9f-ba19-06e19691e848-original.webp"  // اكسسورارات الجوال (صورة مؤقتة)
    };

    // 3. دالة بناء القائمة
    const buildMegaMenu = () => {
        const rootMenuItems = document.querySelectorAll('.root-level.has-children');
        
        if (rootMenuItems.length === 0) return false; 

        let processed = false;

        rootMenuItems.forEach(item => {
            if (item.classList.contains('has-mega-menu')) return; 

            const categoryId = item.id;
            const imageUrl = categoryImages[categoryId];

            if (imageUrl && imageUrl.trim() !== "") {
                const subMenu = item.querySelector('.sub-menu');
                
                if (subMenu && !subMenu.querySelector('.custom-mega-image')) {
                    item.classList.add('has-mega-menu');
                    
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'custom-mega-image';
                    
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = item.querySelector('a > span')?.textContent || 'صورة القسم';
                    img.loading = 'lazy';
                    
                    imgContainer.appendChild(img);
                    
                    subMenu.appendChild(imgContainer);
                    processed = true;
                }
            }
        });

        return processed;
    };

    // 4. تشغيل الكود مع المراقبة
    injectStyles();
    
    let attempts = 0;
    const observerInterval = setInterval(() => {
        const isBuilt = buildMegaMenu();
        attempts++;
        
        // سيستمر في المحاولة لضمان التقاط الأقسام التي قد تتأخر في الظهور
        if (isBuilt || attempts > 15) {
            clearInterval(observerInterval);
        }
    }, 500);
})();
