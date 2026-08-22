 
(function() {
    'use strict';
    
    if (window.installmentSliderAdded) return;
    window.installmentSliderAdded = true;
    
    // Function to check if we're on the excluded category page
    function isExcludedCategory() {
        const currentPath = window.location.pathname;
        const currentURL = window.location.href;
        
        // Check if current page is the excluded category
        return currentURL.includes('/cash-offers/c532043349') || 
               currentPath.includes('/cash-offers/c532043349');
    }
    
    function addInstallmentToSlider() {
        // Exit if we're on the excluded category page
        if (isExcludedCategory()) {
            return;
        }
        
        // Target both old slider cards and new custom-salla-product-card
        const productCards = document.querySelectorAll('.s-product-card-content, custom-salla-product-card');
        
        productCards.forEach(card => {
            // Check if installment section already exists
            if (card.querySelector('.installment-section')) return;
            
            // Handle custom-salla-product-card
            if (card.tagName && card.tagName.toLowerCase() === 'custom-salla-product-card') {
                const contentSection = card.querySelector('.product-card__content');
                if (!contentSection) return;
                
                const section = document.createElement('div');
                section.className = 'installment-section';
                
                section.innerHTML = `
                    <div class="installment-images">
                        <img src="https://cdn.files.salla.network/homepage/1992396308/395942cb-172e-440b-804a-9ab2389bc65a-original.webp  " alt="تمارا للتقسيط">
                        <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down  ,format=auto/images/payment/emkan_installment_mini.png" alt="إمكان للتقسيط">
                        <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down  ,format=auto/images/payment/tabby_installment_mini.png" alt="تابي للتقسيط">
                    </div>
                `;
                
                // Insert at the beginning of product-card__content
                contentSection.insertBefore(section, contentSection.firstChild);
                return;
            }
            
            // Handle old s-product-card-content (original code)
            const mainSection = card.querySelector('.s-product-card-content-main');
            if (!mainSection) return;
            
            const section = document.createElement('div');
            section.className = 'installment-section';
            
            section.innerHTML = `
                <div class="installment-images">
                    <img src="https://cdn.files.salla.network/homepage/1992396308/395942cb-172e-440b-804a-9ab2389bc65a-original.webp  " alt="تمارا للتقسيط">
                    <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down  ,format=auto/images/payment/emkan_installment_mini.png" alt="إمكان للتقسيط">
                    <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down  ,format=auto/images/payment/tabby_installment_mini.png" alt="تابي للتقسيط">
                </div>
            `;
            
            // Insert before the main content section
            mainSection.parentNode.insertBefore(section, mainSection);
        });
    }
    
    // Add custom styles for the slider
    if (!document.querySelector('#installment-slider-styles')) {
        const style = document.createElement('style');
        style.id = 'installment-slider-styles';
        style.textContent = `
            .installment-section {
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 8px 10px;
                margin-bottom: 10px;
                text-align: center;
                direction: rtl;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            }
            .installment-images {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                margin-bottom: 4px;
            }
            .installment-images img {
                height: 18px;
                width: auto;
                object-fit: contain;
            }
            .installment-text {
                font-size: 10px;
                color: #495057;
                font-weight: 600;
                line-height: 1.2;
            }
            
            @media (max-width: 768px) {
                .installment-section {
                    padding: 6px 8px;
                    margin-bottom: 8px;
                }
                .installment-images {
                    gap: 6px;
                }
                .installment-images img {
                    height: 16px;
                }
                .installment-text {
                    font-size: 9px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize with mutation observer for dynamic content
    function initSliderInstallment() {
        // Check if we're on excluded page before initializing
        if (isExcludedCategory()) {
            return;
        }
        
        addInstallmentToSlider();
        
        // Observe for changes
        const sliderObserver = new MutationObserver(function(mutations) {
            // Re-check if we're still not on excluded page
            if (isExcludedCategory()) {
                return;
            }
            
            let shouldUpdate = false;
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && (
                            node.classList?.contains('s-products-slider-card') ||
                            node.tagName?.toLowerCase() === 'custom-salla-product-card' ||
                            node.querySelector?.('.s-products-slider-card') ||
                            node.querySelector?.('custom-salla-product-card')
                        )) {
                            shouldUpdate = true;
                        }
                    });
                }
            });
            if (shouldUpdate) {
                setTimeout(addInstallmentToSlider, 100);
            }
        });
        
        // Observe the main content area
        const observeTargets = [
            document.querySelector('.swiper-wrapper'),
            document.querySelector('body')
        ];
        
        observeTargets.forEach(target => {
            if (target) {
                sliderObserver.observe(target, {
                    childList: true,
                    subtree: true
                });
            }
        });
        
        // Also observe for navigation clicks
        const navButtons = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                setTimeout(addInstallmentToSlider, 150);
            });
        });
    }
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSliderInstallment);
    } else {
        setTimeout(initSliderInstallment, 150);
    }
    
    // Re-run when content changes
    window.addEventListener('load', () => {
        setTimeout(() => {
            addInstallmentToSlider();
            // Check periodically for new content
            setInterval(addInstallmentToSlider, 2000);
        }, 500);
    });
    
    // Monitor URL changes (for single-page applications)
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            // URL changed, re-initialize
            setTimeout(initSliderInstallment, 300);
        }
    }).observe(document, {subtree: true, childList: true});
})();
 

 (function () {
  function replaceMadfuWithTamara() {
    var el = document.querySelector('.s-installment-madfu-wrapper');
    if (!el) return false;

    var img = el.querySelector('img');
    var text = el.querySelector('.s-installment-madfu-content-text');

    if (img) {
      img.src = 'https://cdn.files.salla.network/homepage/1992396308/395942cb-172e-440b-804a-9ab2389bc65a-original.webp';
      img.alt = 'تمارا للتقسيط';
    }
    if (text) {
      text.textContent = 'قسم فاتورتك بدون فوائد أو رسوم إضافية مع تمارا';
    }
    return true;
  }

  if (!replaceMadfuWithTamara()) {
    var observer = new MutationObserver(function () {
      if (replaceMadfuWithTamara()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
