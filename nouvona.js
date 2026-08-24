(function() {
    function injectNationalDayBanner() {
        const targetSection = document.querySelector('section.sqordernow');
        if (!targetSection) return false;

        // Prevent duplicate injections
        if (targetSection.querySelector('.nd-custom-container')) return true;

        // Hide original slider safely without removing it from DOM
        const originalInner = targetSection.querySelector('.banners-slider__inner');
        if (originalInner) {
            originalInner.style.display = 'none';
        }

        // Apply Custom CSS
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
                    background-color: #073228;
                    background-image: radial-gradient(circle at right, rgba(255,255,255,0.03) 0%, transparent 40%), radial-gradient(circle at left, rgba(255,255,255,0.03) 0%, transparent 40%);
                    border-radius: 12px;
                    padding: 20px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    direction: rtl;
                    border: 1px solid #073228;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    width: 100%;
                    min-height: 140px;
                }
                .nd-right-section {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }
                .nd-national-logo {
                    width: 150px;
                    height: auto;
                    object-fit: contain;
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
                    color: #073228;
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
                        gap: 20px;
                    }
                }
                @media (max-width: 480px) {
                    .nd-national-logo {
                        width: 120px;
                    }
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

        // Create Container & Banner HTML
        const customContainer = document.createElement('div');
        customContainer.className = 'nd-custom-container anime-item';
        customContainer.style.opacity = '1';
        customContainer.style.transform = 'translateY(0)';
        
        customContainer.innerHTML = `
            <div class="nd-banner-wrapper">
                <div class="nd-right-section">
                    <img src="https://cdn.files.salla.network/other/1758065230/bcf715f6-714b-4739-ad22-5ccc6daf9a65-original.webp" alt="اليوم الوطني 94" class="nd-national-logo">
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

        // Fixed Absolute Timer Logic
        function updateTimer() {
            const now = new Date().getTime();
            const currentYear = new Date().getFullYear();
            
            // Fixed to exactly Sept 23rd 23:59:59 (Saudi Time timezone handling via standard parse)
            let targetDateStr = `${currentYear}-09-23T23:59:59+03:00`;
            let targetDate = new Date(targetDateStr).getTime();
            
            // If the date has passed this year, point it to next year automatically
            if (now > targetDate) {
                targetDateStr = `${currentYear + 1}-09-23T23:59:59+03:00`;
                targetDate = new Date(targetDateStr).getTime();
            }

            const distance = targetDate - now;
            
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

    // Try injecting, if DOM isn't ready, use MutationObserver
    if (!injectNationalDayBanner()) {
        const observer = new MutationObserver((mutations, obs) => {
            if (injectNationalDayBanner()) {
                obs.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();