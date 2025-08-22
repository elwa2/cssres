// ===================================================================
//   إضافة ميزة رابعة لقسم المميزات - بواسطة خبير سلة
// ===================================================================
//  هذا الكود يقوم بإنشاء الميزة الرابعة وإضافتها للقسم المحدد.

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. نحدد الحاوية التي سنضيف بداخلها الميزة الجديدة ---
    const featureContainer = document.querySelector('div[section-id="c7119089-f42e-47e9-bdcf-ba2591cc4a14"] .features-section.container');

    // --- 2. نتأكد من وجود الحاوية وأن عدد المميزات هو 3 فقط (لمنع تكرار الإضافة) ---
    if (featureContainer && featureContainer.children.length === 3) {

        // --- 3. نقوم بإنشاء عنصر الميزة الجديد بالكامل ---
        const newFeature = document.createElement('div');
        newFeature.className = 'feature d-flex flex-column justify-content-center align-items-center';

        // --- 4. نجهز المحتوى الداخلي للميزة (الأيقونة والنص) ---
        // !! يمكنك تغيير رابط الصورة والنص هنا كما تشاء !!
        newFeature.innerHTML = `
            <img class="features-section-img" src="https://assets.zid.store/themes/f9f0914d-3c58-493b-bd83-260ed3cb4e82/shield-check.svg" loading="lazy" alt="جودة مضمونة">
            <p class="px-2 theme-text-for-primary-bg features-section-title">جودة مضمونة</p>
        `;
        
        // --- 5. نضيف الميزة الجديدة التي أنشأناها إلى الحاوية ---
        featureContainer.appendChild(newFeature);
    }
});
