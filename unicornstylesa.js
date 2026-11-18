(function () {
  function initHomepageProductsWave() {
    if (!document.body || !document.body.classList.contains('index')) return;

    var existingStyle = document.getElementById('salla-products-wave-style');
    if (!existingStyle) {
      existingStyle = document.createElement('style');
      existingStyle.id = 'salla-products-wave-style';
      document.head.appendChild(existingStyle);
    }
    existingStyle.textContent = [
      'body.index salla-products-slider .swiper.s-slider-container{padding-top:3rem!important;padding-bottom:1.5rem!important;}',
      'body.index salla-products-slider .s-products-slider-card{position:relative;}',
      'body.index salla-products-slider .s-products-slider-card > custom-salla-product-card{transform-origin:50% 100%!important;will-change:transform;transition:opacity 0.3s ease!important;}'
    ].join('');

    if (window.__sallaProductsWaveRaf) {
      cancelAnimationFrame(window.__sallaProductsWaveRaf);
    }

    var maxScale = 1.10;
    var minScale = 0.86;

    function animateSliders() {
      var containers = document.querySelectorAll('body.index salla-products-slider .swiper.s-slider-container');

      for (var i = 0; i < containers.length; i++) {
        var vp = containers[i];
        var r0 = vp.getBoundingClientRect();

        if (r0.width === 0 || r0.bottom < -120 || r0.top > window.innerHeight + 120) continue;

        var cx = r0.left + r0.width / 2;
        var slides = vp.querySelectorAll('.s-products-slider-card.swiper-slide');

        for (var s = 0; s < slides.length; s++) {
          var slide = slides[s];
          var r = slide.getBoundingClientRect();
          if (r.width === 0) continue;

          var d = Math.abs((r.left + r.width / 2) - cx) / (r0.width / 2);
          if (d > 1) d = 1;

          var sc = maxScale - (maxScale - minScale) * d;
          slide.style.zIndex = String(Math.round((1 - d) * 10));

          var card = slide.querySelector('custom-salla-product-card, .product-card');
          if (card && parseFloat(getComputedStyle(card).opacity) > 0.9) {
            card.style.transform = 'scale(' + sc.toFixed(3) + ')';
          }
        }
      }

      window.__sallaProductsWaveRaf = requestAnimationFrame(animateSliders);
    }

    window.__sallaProductsWaveRaf = requestAnimationFrame(animateSliders);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomepageProductsWave);
  } else {
    initHomepageProductsWave();
  }
})();














(function () {
  var STYLE_ID = 'unicorn-out-of-stock-chip-style';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      'custom-salla-product-card.product-card .s-product-options-option-stock-out {',
      '  position: relative;',
      '  opacity: 1;',
      '}',
      'custom-salla-product-card.product-card .s-product-options-option-stock-out .s-product-options-grid-mode-span {',
      '  position: relative;',
      '  overflow: hidden;',
      '  border: 1px solid #f1dfe6;',
      '  background: linear-gradient(135deg, #fdf8fa 0%, #f8f5fb 100%);',
      '  color: #9ca3af;',
      '  text-decoration: none;',
      '  cursor: pointer;',
      '  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;',
      '}',
      'custom-salla-product-card.product-card .s-product-options-option-stock-out .s-product-options-grid-mode-span::before {',
      '  content: "";',
      '  position: absolute;',
      '  top: 50%;',
      '  left: -15%;',
      '  width: 130%;',
      '  height: 1.5px;',
      '  background-color: rgba(225, 29, 72, 0.45);',
      '  transform: translateY(-50%) rotate(-24deg);',
      '  pointer-events: none;',
      '}',
      'custom-salla-product-card.product-card .s-product-options-option-stock-out:hover .s-product-options-grid-mode-span {',
      '  border-color: #fda4af;',
      '  color: #e11d48;',
      '  transform: translateY(-1px);',
      '}',
      'custom-salla-product-card.product-card .s-product-options-option-stock-out[data-stock-tooltip]::after {',
      '  content: attr(data-stock-tooltip);',
      '  position: absolute;',
      '  bottom: calc(100% + 6px);',
      '  left: 50%;',
      '  transform: translateX(-50%) translateY(4px);',
      '  padding: 0.2rem 0.5rem;',
      '  border-radius: 0.375rem;',
      '  background-color: #280455;',
      '  color: #ffffff;',
      '  font-size: 0.65rem;',
      '  font-weight: 700;',
      '  line-height: 1.3;',
      '  white-space: nowrap;',
      '  opacity: 0;',
      '  pointer-events: none;',
      '  z-index: 20;',
      '  box-shadow: 0 4px 10px rgba(40, 4, 85, 0.22);',
      '  transition: opacity 0.2s ease, transform 0.2s ease;',
      '}',
      'custom-salla-product-card.product-card .s-product-options-option-stock-out[data-stock-tooltip]:hover::after,',
      'custom-salla-product-card.product-card .s-product-options-option-stock-out[data-stock-tooltip]:focus-within::after {',
      '  opacity: 1;',
      '  transform: translateX(-50%) translateY(0);',
      '}'
    ].join('\n');
    (document.head || document.documentElement).appendChild(style);
  }

  function formatOutOfStockChips() {
    var labels = document.querySelectorAll('custom-salla-product-card .s-product-options-option-stock-out');
    for (var i = 0; i < labels.length; i++) {
      var label = labels[i];
      var span = label.querySelector('.s-product-options-grid-mode-span');
      if (!span || span.hasAttribute('data-stock-formatted')) continue;
      var rawText = (span.textContent || '').trim();
      var match = rawText.match(/^(.+?)\s*[-–]\s*(نفدت الكمية|نفذت الكمية|out of stock)\s*$/i);
      if (match) {
        span.textContent = match[1].trim();
        label.setAttribute('data-stock-tooltip', match[2].trim());
        label.setAttribute('aria-label', rawText);
      } else {
        label.setAttribute('data-stock-tooltip', 'نفدت الكمية');
      }
      span.setAttribute('data-stock-formatted', '1');
    }
  }

  function init() {
    injectStyles();
    formatOutOfStockChips();
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) {
          formatOutOfStockChips();
          break;
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
