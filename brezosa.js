// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector("body.index header.store-header");
//   if (header) {
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("video-wrapper");

//     const video = document.createElement("video");
//     video.classList.add("custom-video");
//     video.src =
//       "https://elwa2.github.io/portfolio/assets/video/work/23214324_20260218_141505.mp4";
//     video.autoplay = true;
//     video.loop = true;
//     video.muted = true;
//     video.playsInline = true;

//     wrapper.appendChild(video);

//     header.parentNode.insertBefore(wrapper, header.nextSibling);
//   }
// });

(function () {

  function initCustomToast() {

    if (document.getElementById("js-custom-toast")) return;

    const style = document.createElement("style");
    style.innerHTML = `
            .custom-toast-overlay {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translate(-50%, -150%);
                width: 90%;
                max-width: 380px;
                background: #fff;
                box-shadow: 0 8px 30px rgba(0,0,0,0.12);
                border-radius: 8px;
                z-index: 2147483647 !important; /* أعلى طبقة ممكنة */
                opacity: 0;
                visibility: hidden;
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s;
                overflow: hidden;
                direction: rtl;
                font-family: inherit;
                pointer-events: none; /* عشان ما يمنع الضغط تحته */
            }
            .custom-toast-overlay.active {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, 0);
                pointer-events: auto;
            }
            .toast-progress-bar {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 4px;
                background-color: #28a745;
                transform-origin: right;
                transform: scaleX(1);
            }
            .toast-progress-bar.animating {
                transition: transform 3000ms linear;
                transform: scaleX(0);
            }
            .toast-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 14px 16px;
            }
            .toast-icon-wrapper {
                width: 20px;
                height: 20px;
                background: #28a745;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                flex-shrink: 0;
            }
            .toast-text {
                color: #333;
                font-weight: 600;
                font-size: 13px;
                flex-grow: 1;
                text-align: right;
            }
            .toast-close {
                color: #999;
                cursor: pointer;
                font-size: 18px;
                padding: 4px;
                line-height: 1;
                margin-right: 8px;
            }salla-add-product-toast.s-add-product-toast.s-add-product-toast--visible {
    display: none;
}
salla-add-product-toast.s-add-product-toast.s-add-product-toast--visible {
    display: none;
}

        `;
    document.head.appendChild(style);

    const toastDiv = document.createElement("div");
    toastDiv.id = "js-custom-toast";
    toastDiv.className = "custom-toast-overlay";
    toastDiv.innerHTML = `
            <div class="toast-progress-bar" id="js-toast-progress"></div>
            <div class="toast-content">
                <div style="display:flex; align-items:center;">
                    <div class="toast-icon-wrapper">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <span class="toast-text">تمت الإضافة إلى سلة التسوق</span>
                </div>
                <span class="toast-close" onclick="document.getElementById('js-custom-toast').classList.remove('active')">&#10005;</span>
            </div>
        `;
    document.body.appendChild(toastDiv);
  }

  initCustomToast();

  let toastTimer;

  function triggerToast() {
    const toast = document.getElementById("js-custom-toast");
    const bar = document.getElementById("js-toast-progress");

    if (!toast || !bar) return;

    clearTimeout(toastTimer);
    toast.classList.remove("active");
    bar.classList.remove("animating");

    void bar.offsetWidth;

    requestAnimationFrame(() => {
      toast.classList.add("active");
      bar.classList.add("animating");
    });

    toastTimer = setTimeout(() => {
      toast.classList.remove("active");
    }, 3000);
  }

  document.addEventListener(
    "click",
    function (e) {

      const targetBtn = e.target.closest(".s-button-element");

      if (targetBtn) {

        if (
          targetBtn.hasAttribute("product-id") &&
          targetBtn.getAttribute("type") === "button"
        ) {

          if (
            targetBtn.querySelector(".sicon-shopping-bag") ||
            targetBtn.innerText.indexOf("إضافة") !== -1
          ) {
            triggerToast();
          }
        }
      }
    },
    true,
  );
})();

document.addEventListener('DOMContentLoaded', function () {
  let logo = document.querySelector('.navbar-brand');
  let footerBox = document.querySelector('footer > div.store-footer__inner > div > div.lg\\:col-span-2.rtl\\:lg\\:pl-20.ltr\\:lg\\:pr-20 a.flex.items-center.m-0');

  if (logo && footerBox) {

    let h3 = footerBox.querySelector('a > h3');
    if (h3) h3.style.fontSize = '0';

    let clone = logo.cloneNode(true);
    footerBox.appendChild(clone);
  }

  console.log(logo);
  console.log(footerBox);
});








document.addEventListener("DOMContentLoaded", function() {

    var logo = document.querySelector('.navbar-brand');

    if (logo) {

        var currentParent = logo.parentElement;

        currentParent.after(logo);

    }
});
 (function() {
    let attempts = 0;
    const maxAttempts = 10;

    function findNumberAndInit() {
        const footerWaLink = document.querySelector('footer.store-footer a[href*="wa.me"]');

        if (footerWaLink) {
            let href = footerWaLink.getAttribute('href');
            let extractedNumber = href.split('wa.me/')[1].split('?')[0];

            buildWhatsappButton(extractedNumber);
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(findNumberAndInit, 500);
        } else {
            buildWhatsappButton("96655000000");
        }
    }

    function buildWhatsappButton(whatsappNumber) {
        if (document.querySelector('.salla-whatsapp-floating')) return;

        const style = document.createElement('style');
        style.innerHTML = `
            .salla-whatsapp-floating {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background-color: #25d366;
                color: #fff;
                border-radius: 50%;
                text-align: center;
                font-size: 30px;
                box-shadow: 2px 2px 15px rgba(0,0,0,0.2);
                z-index: 999999;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                text-decoration: none !important;
                cursor: pointer;
            }

            .salla-whatsapp-floating:hover {
                background-color: #128c7e;
                transform: scale(1.1);
                color: #fff;
            }

            .salla-whatsapp-floating::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #25d366;
                border-radius: 50%;
                z-index: -1;
                animation: pulse-whatsapp 2s infinite;
            }

            @keyframes pulse-whatsapp {
                0% { transform: scale(1); opacity: 0.6; }
                100% { transform: scale(1.6); opacity: 0; }
            }

            .salla-whatsapp-floating svg {
                width: 35px;
                height: 35px;
                fill: currentColor;
                fill: #fff;
            }

            @media (max-width: 768px) {
                .salla-whatsapp-floating {
                    bottom: 20px;
                    right: 20px;
                    width: 55px;
                    height: 55px;
                }
            }
        `;
        document.head.appendChild(style);

        const waLink = document.createElement('a');
        waLink.className = 'salla-whatsapp-floating';
        waLink.setAttribute('aria-label', 'تواصل معنا عبر واتساب');

        waLink.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        `;

        waLink.addEventListener('click', function(e) {
            e.preventDefault();

            let message = "السلام عليكم، أرغب في الاستفسار عن منتجات Brezobrand";
            const currentUrl = window.location.href;

            const productTitleElement = document.querySelector('h1.text-xl, h1.t-title, .main-content h1');

            if (currentUrl.includes('/p') && productTitleElement) {
                let productName = productTitleElement.innerText.trim();
                message = `السلام عليكم، أرغب في الاستفسار عن هذا المنتج:\n\n*المنتج:* ${productName}\n*الرابط:* ${currentUrl}`;
            }

            const finalWaUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(finalWaUrl, '_blank');
        });

        document.body.appendChild(waLink);
        console.log("WhatsApp Smart Button Loaded with Number: " + whatsappNumber);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', findNumberAndInit);
    } else {
        findNumberAndInit();
    }
})();









document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .custom-scrolling-banner {
            width: 100%;
            overflow: hidden;
            display: flex;
            direction: ltr;
            background: transparent;
            margin-bottom: 20px;
        }
        .custom-scrolling-track {
            display: flex;
            width: max-content;
            animation: custom-scroll-anim 25s linear infinite;
            will-change: transform;
        }
        .custom-scrolling-track:hover {
            animation-play-state: paused;
        }
        .custom-scrolling-track img {
            height: 50px; 
            width: auto;
            object-fit: contain;
            padding: 0 15px;
            flex-shrink: 0;
            user-select: none;
            pointer-events: none;
        }
        @keyframes custom-scroll-anim {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
        }
        @media (max-width: 768px) {
            .custom-scrolling-track img { 
                height: 35px;
            }
            .custom-scrolling-banner {
                margin-bottom: 10px;
            }
        }
    `;
    document.head.appendChild(style);

    function injectScrollingBanner(targetSelector, imageUrl) {
        const targetElement = document.querySelector(targetSelector);
        
        if (!targetElement) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'custom-scrolling-banner';

        const track = document.createElement('div');
        track.className = 'custom-scrolling-track';

        const imgHTML = `<img src="${imageUrl}" alt="Scrolling Offer Banner" loading="lazy">`;
        track.innerHTML = imgHTML.repeat(12);

        wrapper.appendChild(track);
        targetElement.insertAdjacentElement('afterend', wrapper);
    }

    injectScrollingBanner(
        'section.s-block.s-block--fixed-banner.wide-placeholder:first-of-type',
        'https://cdn.files.salla.network/other/575762812/51f8a7db-b94a-46b6-90a4-bf9a0eb274e3-original.webp?_s_uploader_cache_bust=preview-nbj89jem0'
    );

    injectScrollingBanner(
        'section[component-id="93878147"]',
        'https://cdn.files.salla.network/other/575762812/b886287d-811b-4928-ac9f-2586a7891f10-original.webp?_s_uploader_cache_bust=preview-49utpp5ef'
    );
});