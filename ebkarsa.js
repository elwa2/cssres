<script>
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
</script>
