 













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
















(function () {
  var STYLE_ID = 'custom-cat-pills-style';
  var BAR_CLASS = 'custom-cat-pills-bar';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      '.custom-cat-pills-bar{display:flex;align-items:center;gap:0.625rem;width:100%;margin-bottom:1.25rem;padding-bottom:0.25rem;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}',
      '.custom-cat-pills-bar::-webkit-scrollbar{display:none;}',
      '.custom-cat-filter-btn{display:inline-flex;align-items:center;justify-content:center;gap:0.45rem;flex-shrink:0;height:2.375rem;padding:0 1rem;border-radius:9999px;border:1px solid var(--store-text-primary,#171717);background-color:var(--bg-primary,#ffffff);color:var(--store-text-primary,#171717);font-size:0.875rem;font-weight:600;line-height:1;cursor:pointer;white-space:nowrap;transition:background-color 0.2s ease,color 0.2s ease,border-color 0.2s ease,transform 0.15s ease;}',
      '.custom-cat-filter-btn:hover{border-color:var(--color-primary,#a783d4);color:var(--color-primary,#a783d4);}',
      '.custom-cat-filter-btn:active{transform:scale(0.97);}',
      '.custom-cat-filter-icon{width:1rem;height:1rem;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;}',
      '.custom-cat-filter-badge{display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;height:1.25rem;padding:0 0.3rem;border-radius:9999px;background-color:var(--store-text-primary,#171717);color:var(--bg-primary,#ffffff);font-size:0.75rem;font-weight:700;line-height:1;}',
      '.custom-cat-filter-badge.is-empty{display:none;}',
      '.custom-cat-divider{width:1px;height:1.375rem;background-color:#e5e7eb;flex-shrink:0;}',
      '.custom-cat-pills-track{display:flex;align-items:center;gap:0.5rem;flex-wrap:nowrap;}',
      '.custom-cat-pill{display:inline-flex;align-items:center;justify-content:center;gap:0.4rem;flex-shrink:0;height:2.375rem;padding:0 1rem;border-radius:9999px;border:1px solid #e5e7eb;background-color:var(--bg-primary,#ffffff);color:var(--store-text-primary,#171717);font-size:0.875rem;font-weight:500;line-height:1;cursor:pointer;white-space:nowrap;transition:background-color 0.2s ease,color 0.2s ease,border-color 0.2s ease,transform 0.15s ease;}',
      '.custom-cat-pill:hover{border-color:var(--color-primary,#a783d4);}',
      '.custom-cat-pill:active{transform:scale(0.97);}',
      '.custom-cat-pill.is-active{background-color:var(--store-text-primary,#171717);border-color:var(--store-text-primary,#171717);color:var(--bg-primary,#ffffff);font-weight:600;}',
      '.custom-cat-pill-close{display:none;width:0.875rem;height:0.875rem;align-items:center;justify-content:center;opacity:0.9;}',
      '.custom-cat-pill.is-active .custom-cat-pill-close{display:inline-flex;}',
      '.dark .custom-cat-divider{background-color:#374151;}',
      '.dark .custom-cat-pill{border-color:#374151;}',
      '@media (min-width:1024px){.product-index__layout.custom-filters-collapsed #filters-menu{display:none;}.product-index__layout.custom-filters-collapsed .main-content{margin-inline-start:0;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function createSvgIcon(paths, viewBox) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', viewBox || '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.width = '100%';
    svg.style.height = '100%';
    paths.forEach(function (d) {
      var path = document.createElementNS(ns, 'path');
      path.setAttribute('d', d);
      svg.appendChild(path);
    });
    return svg;
  }

  function cleanLabelText(text) {
    return (text || '').replace(/\s*\(\d+\)\s*$/, '').trim();
  }

  function getCategoryCheckboxes(filtersMenu) {
    return Array.prototype.slice.call(
      filtersMenu.querySelectorAll('salla-filters-widget input[name="category_id"]')
    );
  }

  function getActiveFiltersCount(filtersMenu) {
    var checked = filtersMenu.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked').length;
    var priceInputs = filtersMenu.querySelectorAll('.s-price-range-number-input');
    var hasPrice = false;
    priceInputs.forEach(function (inp) {
      if (inp.value && inp.value.trim() !== '') {
        hasPrice = true;
      }
    });
    return checked + (hasPrice ? 1 : 0);
  }

  function ensureBar(toolbar) {
    var existing = toolbar.parentElement.querySelector('.' + BAR_CLASS);
    if (existing) return existing;

    var bar = document.createElement('div');
    bar.className = BAR_CLASS;
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'فئات المنتجات');

    var filterBtn = document.createElement('button');
    filterBtn.type = 'button';
    filterBtn.className = 'custom-cat-filter-btn';

    var iconWrap = document.createElement('span');
    iconWrap.className = 'custom-cat-filter-icon';
    iconWrap.appendChild(
      createSvgIcon([
        'M4 6h16',
        'M7 12h10',
        'M10 18h4'
      ])
    );

    var btnText = document.createElement('span');
    btnText.textContent = 'فلترة';

    var badge = document.createElement('span');
    badge.className = 'custom-cat-filter-badge is-empty';
    badge.textContent = '0';

    filterBtn.appendChild(iconWrap);
    filterBtn.appendChild(btnText);
    filterBtn.appendChild(badge);

    filterBtn.addEventListener('click', function () {
      if (window.innerWidth < 1024) {
        var trigger = document.querySelector('.filters-trigger');
        if (trigger) trigger.click();
      } else {
        var layout = document.querySelector('.product-index__layout');
        if (layout) layout.classList.toggle('custom-filters-collapsed');
      }
    });

    var divider = document.createElement('span');
    divider.className = 'custom-cat-divider';
    divider.setAttribute('aria-hidden', 'true');

    var track = document.createElement('div');
    track.className = 'custom-cat-pills-track';

    bar.appendChild(filterBtn);
    bar.appendChild(divider);
    bar.appendChild(track);

    toolbar.insertAdjacentElement('afterend', bar);
    return bar;
  }

  function syncPills() {
    var filtersMenu = document.getElementById('filters-menu');
    var toolbar = document.querySelector('.product-index__toolbar');
    if (!filtersMenu || !toolbar) return;

    var checkboxes = getCategoryCheckboxes(filtersMenu);
    var bar = ensureBar(toolbar);
    var track = bar.querySelector('.custom-cat-pills-track');
    var badge = bar.querySelector('.custom-cat-filter-badge');

    var activeCount = getActiveFiltersCount(filtersMenu);
    badge.textContent = String(activeCount);
    badge.classList.toggle('is-empty', activeCount === 0);

    var divider = bar.querySelector('.custom-cat-divider');
    divider.style.display = checkboxes.length ? '' : 'none';

    track.innerHTML = '';
    checkboxes.forEach(function (checkbox) {
      var labelEl = checkbox.closest('label');
      var nameEl = labelEl ? labelEl.querySelector('.s-filters-option-name') : null;
      var labelText = cleanLabelText(nameEl ? nameEl.textContent : '');
      if (!labelText) return;

      var pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'custom-cat-pill' + (checkbox.checked ? ' is-active' : '');
      pill.setAttribute('aria-pressed', checkbox.checked ? 'true' : 'false');
      if (checkbox.id) {
        pill.setAttribute('data-target-id', checkbox.id);
      }

      var textSpan = document.createElement('span');
      textSpan.textContent = labelText;

      var closeSpan = document.createElement('span');
      closeSpan.className = 'custom-cat-pill-close';
      closeSpan.appendChild(
        createSvgIcon([
          'M18 6L6 18',
          'M6 6l12 12'
        ])
      );

      pill.appendChild(textSpan);
      pill.appendChild(closeSpan);

      pill.addEventListener('click', function () {
        var target = checkbox.id ? document.getElementById(checkbox.id) : checkbox;
        if (target) {
          target.click();
        }
      });

      track.appendChild(pill);
    });
  }

  function init() {
    var filtersMenu = document.getElementById('filters-menu');
    var toolbar = document.querySelector('.product-index__toolbar');
    if (!filtersMenu || !toolbar) return;

    injectStyles();
    syncPills();

    var scheduled = false;
    function scheduleSync() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        syncPills();
      });
    }

    filtersMenu.addEventListener('change', scheduleSync);

    var observer = new MutationObserver(scheduleSync);
    observer.observe(filtersMenu, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['checked']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();