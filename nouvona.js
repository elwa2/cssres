(function() {
    function injectNationalDayBanner() {
        // Target the specific section
        const targetSection = document.querySelector('section.sqordernow');
        if (!targetSection) return false;

        // Prevent duplicate injections
        if (targetSection.querySelector('.nd-custom-container')) return true;

        // Hide original slider safely instead of removing it to prevent Salla JS errors
        const originalInner = targetSection.querySelector('.banners-slider__inner');
        if (originalInner) {
            originalInner.style.display = 'none';
        }

        // Add custom styles matching the image
        if (!document.getElementById('nd-banner-styles')) {
            const style = document.createElement('style');
            style.id = 'nd-banner-styles';
            style.textContent = `
                .nd-custom-container {
                    padding-left: 15px;
                    padding-right: 15px;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 1280px;
                    width: 100%;
                }
                .nd-banner-wrapper {
                    background-color: #032b17;
                    background-image: radial-gradient(circle at right, rgba(255,255,255,0.03) 0%, transparent 40%), radial-gradient(circle at left, rgba(255,255,255,0.03) 0%, transparent 40%);
                    border-radius: 12px;
                    padding: 25px 50px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    direction: rtl;
                    border: 1px solid #104125;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    width: 100%;
                    min-height: 140px;
                }
                .nd-right-section {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                }
                .nd-logo-box {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .nd-logo-box svg {
                    width: 55px;
                    height: 55px;
                    fill: #e8d098;
                    margin-bottom: 8px;
                }
                .nd-logo-box h3 {
                    color: #ffffff;
                    font-size: 22px;
                    font-weight: 800;
                    margin: 0;
                    font-family: inherit;
                    letter-spacing: -0.5px;
                }
                .nd-logo-box p {
                    color: #d1b473;
                    font-size: 11px;
                    margin: 2px 0 0 0;
                    font-weight: 600;
                }
                .nd-text-box {
                    text-align: center;
                }
                .nd-text-box h2 {
                    color: #ffffff;
                    font-size: 26px;
                    font-weight: 800;
                    margin: 0 0 5px 0;
                    line-height: 1.3;
                }
                .nd-text-box p {
                    color: #e8d098;
                    font-size: 16px;
                    margin: 0 0 15px 0;
                    font-weight: 500;
                }
                .nd-action-btn {
                    background: linear-gradient(to bottom, #fcebba, #d4a754);
                    color: #032b17;
                    font-weight: 800;
                    font-size: 15px;
                    padding: 8px 35px;
                    border-radius: 6px;
                    display: inline-block;
                    text-decoration: none;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 4px 10px rgba(212, 167, 84, 0.3);
                }
                .nd-action-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(212, 167, 84, 0.4);
                }
                .nd-left-section {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    direction: ltr;
                }
                .nd-time-block {
                    border: 1.5px solid #6b5c33;
                    border-radius: 6px;
                    width: 75px;
                    height: 80px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                }
                .nd-time-value {
                    color: #ffffff;
                    font-size: 26px;
                    font-weight: 700;
                    line-height: 1.1;
                }
                .nd-time-label {
                    color: #c9af71;
                    font-size: 12px;
                    margin-top: 4px;
                    font-weight: 600;
                }
                .nd-time-sep {
                    color: #6b5c33;
                    font-size: 18px;
                    font-weight: bold;
                    margin-top: -15px;
                }
                @media (max-width: 1024px) {
                    .nd-banner-wrapper {
                        flex-direction: column;
                        justify-content: center;
                        gap: 30px;
                        padding: 30px 20px;
                    }
                    .nd-right-section {
                        flex-direction: column;
                        gap: 25px;
                    }
                }
                @media (max-width: 480px) {
                    .nd-time-block {
                        width: 65px;
                        height: 70px;
                    }
                    .nd-time-value {
                        font-size: 22px;
                    }
                    .nd-time-label {
                        font-size: 11px;
                    }
                    .nd-text-box h2 {
                        font-size: 22px;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Create the container and banner
        const customContainer = document.createElement('div');
        customContainer.className = 'nd-custom-container anime-item';
        customContainer.style.opacity = '1';
        customContainer.style.transform = 'translateY(0)';
        
        customContainer.innerHTML = `
            <div class="nd-banner-wrapper">
                <div class="nd-right-section">
                    <div class="nd-logo-box">
                        <!-- Saudi Palm and Swords simple representation -->
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.5 6H10.5L12 2ZM12 8L14 13H10L12 8ZM12 15C13.5 15 15 16 15 18H9C9 16 10.5 15 12 15ZM5 18L19 6L20 7L6 19L5 18ZM19 18L5 6L4 7L18 19L19 18Z"/>
                        </svg>
                        <h3>نحلم ونحقق</h3>
                        <p>اليوم الوطني السعودي 94</p>
                    </div>
                    <div class="nd-text-box">
                        <h2>عروض اليوم الوطني</h2>
                        <p>لفترة محدودة!</p>
                        <a href="/offers" class="nd-action-btn">تسوق الآن</a>
                    </div>
                </div>
                <div class="nd-left-section">
                    <div class="nd-time-block">
                        <span class="nd-time-value" id="nd-d">00</span>
                        <span class="nd-time-label">يوم</span>
                    </div>
                    <span class="nd-time-sep">•</span>
                    <div class="nd-time-block">
                        <span class="nd-time-value" id="nd-h">00</span>
                        <span class="nd-time-label">ساعة</span>
                    </div>
                    <span class="nd-time-sep">•</span>
                    <div class="nd-time-block">
                        <span class="nd-time-value" id="nd-m">00</span>
                        <span class="nd-time-label">دقيقة</span>
                    </div>
                    <span class="nd-time-sep">•</span>
                    <div class="nd-time-block">
                        <span class="nd-time-value" id="nd-s">00</span>
                        <span class="nd-time-label">ثانية</span>
                    </div>
                </div>
            </div>
        `;

        targetSection.appendChild(customContainer);

        // Timer Logic
        function updateTimer() {
            const now = new Date();
            let targetYear = now.getFullYear();
            let targetDate = new Date(targetYear, 8, 23); // September 23
            
            if (now > targetDate) {
                targetDate = new Date(targetYear + 1, 8, 23);
            }

            const distance = targetDate.getTime() - now.getTime();
            
            if (distance < 0) return;

            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            const elD = document.getElementById('nd-d');
            const elH = document.getElementById('nd-h');
            const elM = document.getElementById('nd-m');
            const elS = document.getElementById('nd-s');

            if(elD) elD.textContent = d < 10 ? '0' + d : d;
            if(elH) elH.textContent = h < 10 ? '0' + h : h;
            if(elM) elM.textContent = m < 10 ? '0' + m : m;
            if(elS) elS.textContent = s < 10 ? '0' + s : s;
        }

        setInterval(updateTimer, 1000);
        updateTimer();

        return true;
    }

    // Attempt to inject immediately
    if (!injectNationalDayBanner()) {
        // If the section doesn't exist yet, observe the DOM and inject when it appears
        const observer = new MutationObserver((mutations, obs) => {
            if (injectNationalDayBanner()) {
                obs.disconnect(); // Stop observing once injected
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();
