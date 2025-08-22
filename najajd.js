document.addEventListener("DOMContentLoaded", function() {
    const featureContainer = document.querySelector('div[section-id="c7119089-f42e-47e9-bdcf-ba2591cc4a14"] .features-section.container');
    if (featureContainer && featureContainer.children.length === 3) {
        const newFeature = document.createElement('div');
        newFeature.className = 'feature d-flex flex-column justify-content-center align-items-center';
        newFeature.innerHTML = `
            <img class="features-section-img" src="https://assets.zid.store/themes/f9f0914d-3c58-493b-bd83-260ed3cb4e82/shield-check.svg" loading="lazy" alt="جودة مضمونة">
            <p class="px-2 theme-text-for-primary-bg features-section-title">تغليف أنيق وآمن</p>
        `;
        featureContainer.appendChild(newFeature);
    }

    const faqsData = [
        {
            question: "من هو متجر نجد؟",
            answer: "“نجد” للمجوهرات – علامة سعودية فاخرة انطلقت من قلب الرياض في عام 2018. نسعى لابتكار قطع ذهب تعكس الأصالة بأحدث تصاميم، مع توفير أفضل خدمات التوصيل وأسعار تنافسية. لأن فخامتك تستحق اختيارًا أصيلاً."
        },
        {
            question: "كم يستغرق توصيل الطلب داخل وخارج الرياض؟",
            answer: "داخل الرياض: يتم تسليم الطلب خلال 24 إلى 48 ساعة. خارج الرياض: خلال 2 إلى 7 أيام عمل، حسب شركة الشحن والمنطقة."
        },
        {
            question: "ما هي سياسة الضمان والاستبدال والاسترجاع؟",
            answer: "<ul><li><b>الضمان:</b> جميع منتجات “نجد” من الذهب أصلية ومطابقة للمواصفات.</li><li><b>الاستبدال:</b> يمكن استبدال القطعة خلال 3 أيام من تاريخ الاستلام.</li><li><b>الاسترجاع:</b> يمكن استرجاع القطعة خلال يوم واحد من تاريخ الاستلام.</li><li><b>ملاحظات:</b> يتم خصم مبلغ التوصيل والتغليف في حالة الإلغاء أو الاسترجاع، ويجب أن تكون القطعة بحالتها الأصلية.</li></ul>"
        },
        {
            question: "كيف أعرف مقاس الذهب المناسب قبل الشراء؟",
            answer: "نوفر دليل مقاسات مفصّل لكل منتج على موقعنا، كما يمكنك التواصل مع فريق خدمة العملاء وسنساعدك في اختيار المقاس الأنسب لك بسهولة."
        }
    ];

    const faqSection = document.createElement('div');
    faqSection.className = 'custom-faq-section';
    faqSection.innerHTML = '<h2 class="section-title">الأسئلة الشائعة</h2>';

    faqsData.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';

        const faqQuestion = document.createElement('div');
        faqQuestion.className = 'faq-question';
        faqQuestion.innerHTML = `
            <span class="faq-question-text">${faq.question}</span>
            <span class="faq-icon">+</span>
        `;

        const faqAnswer = document.createElement('div');
        faqAnswer.className = 'faq-answer';
        faqAnswer.innerHTML = `<p>${faq.answer}</p>`;

        faqItem.appendChild(faqQuestion);
        faqItem.appendChild(faqAnswer);
        faqSection.appendChild(faqItem);
    });

    const footer = document.querySelector('.footer');
    if (footer) {
        footer.parentNode.insertBefore(faqSection, footer);
    }

    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
});
