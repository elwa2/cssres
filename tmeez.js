/* =====================================================================
   التميز برو — ترتيب احترافي لوصف المنتج + الصفحات التعريفية
   ملف JavaScript مستقل (بدون HTML)
   ⚠️ سلة بتحذف أي <script> من بلوك "HTML مخصص" العادي، فهذا الملف لازم
   يتحمّل من مكان JS فعلي يشتغل: ملف ثيم (قبل </body>) أو حقل Custom Scripts
   ===================================================================== */
(function () {
  "use strict";

  var CSS = ""
    + ":root{--tmz-black:#1a1206;--tmz-black-deep:#0d0906;--tmz-gold:#E8A93A;--tmz-gold-bright:#FFD56B;--tmz-gold-deep:#C9821A;}"
    + "@keyframes tmz-fmt-fade{0%{opacity:0;transform:translateY(14px);}100%{opacity:1;transform:translateY(0);}}"
    + "@keyframes tmz-fmt-ring{0%{box-shadow:0 0 0 0 rgba(232,169,58,.35);}70%{box-shadow:0 0 0 10px rgba(232,169,58,0);}100%{box-shadow:0 0 0 0 rgba(232,169,58,0);}}"

    /* ===== هيدر بادج (العنوان الرئيسي) ===== */
    + ".tmz-fmt-hero{position:relative!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:16px!important;padding:20px 22px!important;margin:0 0 18px!important;border-radius:20px!important;background:linear-gradient(160deg,rgba(232,169,58,.14),rgba(13,9,6,.5))!important;border:1px solid rgba(232,169,58,.35)!important;overflow:hidden!important;animation:tmz-fmt-fade .5s ease both!important;}"
    + ".tmz-fmt-hero::before{content:\"\"!important;position:absolute!important;inset:0!important;background:radial-gradient(circle at 85% 20%,rgba(232,169,58,.18),transparent 55%)!important;pointer-events:none!important;}"
    + ".tmz-fmt-hero-title{position:relative!important;z-index:1!important;color:#f8f1df!important;font-size:18px!important;font-weight:800!important;text-align:center!important;}"
    + ".tmz-fmt-hero-icon{position:relative!important;z-index:1!important;flex-shrink:0!important;width:46px!important;height:46px!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;background:linear-gradient(135deg,var(--tmz-gold-deep),var(--tmz-gold),var(--tmz-gold-bright))!important;animation:tmz-fmt-ring 2.6s ease-in-out infinite!important;}"
    + ".tmz-fmt-hero-icon svg{width:22px!important;height:22px!important;}"

    /* ===== فقرة المقدمة ===== */
    + ".tmz-fmt-intro{color:#c9bd9f!important;line-height:1.95!important;font-size:14.5px!important;text-align:center!important;margin:0 0 20px!important;padding:0 6px!important;animation:tmz-fmt-fade .5s ease both!important;}"

    /* ===== عنوان قسم بخط جانبي ===== */
    + ".tmz-fmt-sec-head{display:flex!important;align-items:center!important;gap:10px!important;margin:22px 0 12px!important;animation:tmz-fmt-fade .5s ease both!important;}"
    + ".tmz-fmt-sec-head::before{content:\"\"!important;width:4px!important;height:18px!important;border-radius:4px!important;background:linear-gradient(180deg,var(--tmz-gold-bright),var(--tmz-gold-deep))!important;}"
    + ".tmz-fmt-sec-head span{color:var(--tmz-gold-bright)!important;font-size:15.5px!important;font-weight:800!important;}"

    /* ===== بطاقة شبكية للنقاط (مثل المرجع) ===== */
    + ".tmz-fmt-grid{display:grid!important;grid-template-columns:1fr 1fr!important;gap:10px 18px!important;padding:16px 18px!important;margin:0 0 18px!important;border-radius:16px!important;background:rgba(232,169,58,.045)!important;border:1px solid rgba(232,169,58,.2)!important;animation:tmz-fmt-fade .5s ease both!important;}"
    + ".tmz-fmt-grid .tmz-fmt-item{display:flex!important;align-items:flex-start!important;gap:9px!important;color:#e9ddc4!important;font-size:13.5px!important;line-height:1.75!important;}"
    + ".tmz-fmt-item .tmz-check{flex-shrink:0!important;width:18px!important;height:18px!important;margin-top:2px!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;background:linear-gradient(135deg,var(--tmz-gold-deep),var(--tmz-gold),var(--tmz-gold-bright))!important;}"
    + ".tmz-fmt-item .tmz-check svg{width:10px!important;height:10px!important;}"
    + "@media (max-width:640px){.tmz-fmt-grid{grid-template-columns:1fr!important;}}"

    /* ===== صندوق ملاحظة ===== */
    + ".tmz-fmt-note{display:flex!important;align-items:flex-start!important;gap:10px!important;background:linear-gradient(160deg,rgba(232,169,58,.12),rgba(0,0,0,0))!important;border:1px dashed rgba(232,169,58,.45)!important;border-radius:14px!important;padding:13px 16px!important;color:#f3e9d2!important;font-size:13.5px!important;line-height:1.85!important;margin-top:6px!important;animation:tmz-fmt-fade .5s ease both!important;}"
    + ".tmz-fmt-note .tmz-pin{flex-shrink:0!important;font-size:16px!important;}"

    /* ===== فقرة عادية متبقية ===== */
    + ".tmz-fmt-p{color:#d8cdb8!important;line-height:1.9!important;margin:0 0 12px!important;animation:tmz-fmt-fade .5s ease both!important;}"

    /* ===== الصفحات التعريفية (.content-entry) ===== */
    + ".content-entry{animation:tmz-fmt-fade .55s ease both!important;}"
    + ".content-entry p{color:#d8cdb8!important;line-height:1.95!important;margin-bottom:10px!important;}"
    + ".content-entry h1,.content-entry h2,.content-entry h3{color:#f8f1df!important;font-weight:800!important;}"
    + ".content-entry ul{list-style:none!important;display:grid!important;grid-template-columns:1fr 1fr!important;gap:10px 18px!important;margin:12px 0 20px!important;padding:16px 18px!important;border-radius:16px!important;background:rgba(232,169,58,.045)!important;border:1px solid rgba(232,169,58,.2)!important;}"
    + ".content-entry ul li{display:flex!important;align-items:flex-start!important;gap:9px!important;color:#e9ddc4!important;font-size:13.5px!important;line-height:1.75!important;padding-right:0!important;}"
    + ".content-entry ul li::before{content:\"\"!important;flex-shrink:0!important;width:16px!important;height:16px!important;margin-top:3px!important;border-radius:50%!important;background:linear-gradient(135deg,var(--tmz-gold-deep),var(--tmz-gold),var(--tmz-gold-bright))!important;}"
    + ".content .content-entry a{color:var(--tmz-gold-bright)!important;text-decoration:underline!important;}"
    + "@media (max-width:640px){.content-entry ul{grid-template-columns:1fr!important;}}"

    /* هيدر بادج لصفحة التعريفية (فوق .content-entry) */
    + ".tmz-page-hero{position:relative!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:16px!important;padding:26px 22px!important;margin:0 0 22px!important;border-radius:22px!important;background:linear-gradient(160deg,rgba(232,169,58,.14),rgba(13,9,6,.5))!important;border:1px solid rgba(232,169,58,.35)!important;overflow:hidden!important;animation:tmz-fmt-fade .5s ease both!important;}"
    + ".tmz-page-hero::before{content:\"\"!important;position:absolute!important;inset:0!important;background:radial-gradient(circle at 85% 20%,rgba(232,169,58,.18),transparent 55%)!important;pointer-events:none!important;}"
    + ".tmz-page-hero-title{position:relative!important;z-index:1!important;color:#f8f1df!important;font-size:20px!important;font-weight:800!important;}"
    + ".tmz-page-hero-icon{position:relative!important;z-index:1!important;flex-shrink:0!important;width:54px!important;height:54px!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;background:linear-gradient(135deg,var(--tmz-gold-deep),var(--tmz-gold),var(--tmz-gold-bright))!important;animation:tmz-fmt-ring 2.6s ease-in-out infinite!important;}"
    + ".tmz-page-hero-icon svg{width:26px!important;height:26px!important;}";

  var styleTag = document.createElement("style");
  styleTag.id = "tmz-content-format-style";
  styleTag.textContent = CSS;
  document.head.appendChild(styleTag);

  var CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#1a1206" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  var INFO_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#1a1206" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  var PAGE_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#1a1206" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg>';

  function closeGrid(frag, gridRef) {
    if (gridRef.el) {
      frag.appendChild(gridRef.el);
      gridRef.el = null;
    }
  }

  function formatProductDescription() {
    var root = document.querySelector(".product__description article");
    if (!root || root.dataset.tmzFormatted === "1") return;

    var paragraphs = Array.prototype.slice.call(root.querySelectorAll(":scope > p"));
    if (!paragraphs.length) return;

    var frag = document.createDocumentFragment();
    var gridRef = { el: null };
    var isFirst = true;

    paragraphs.forEach(function (p) {
      var text = p.textContent.replace(/\s+/g, " ").trim();
      if (!text) return;

      var isBullet = /^[*\-•]\s*/.test(text);
      var isNote = /^📌/.test(text);
      var isSub = !isBullet && !isNote && /[:：]\s*$/.test(text) && text.length < 60;

      if (isFirst) {
        var hero = document.createElement("div");
        hero.className = "tmz-fmt-hero";
        var icon = document.createElement("span");
        icon.className = "tmz-fmt-hero-icon";
        icon.innerHTML = INFO_ICON_SVG;
        var title = document.createElement("span");
        title.className = "tmz-fmt-hero-title";
        title.textContent = text;
        hero.appendChild(title);
        hero.appendChild(icon);
        frag.appendChild(hero);
        isFirst = false;
        return;
      }

      if (isBullet) {
        if (!gridRef.el) {
          gridRef.el = document.createElement("div");
          gridRef.el.className = "tmz-fmt-grid";
        }
        var item = document.createElement("div");
        item.className = "tmz-fmt-item";
        var chk = document.createElement("span");
        chk.className = "tmz-check";
        chk.innerHTML = CHECK_SVG;
        var itemText = document.createElement("span");
        itemText.textContent = text.replace(/^[*\-•]\s*/, "");
        item.appendChild(chk);
        item.appendChild(itemText);
        gridRef.el.appendChild(item);
        return;
      }

      closeGrid(frag, gridRef);

      if (isNote) {
        var note = document.createElement("div");
        note.className = "tmz-fmt-note";
        var pin = document.createElement("span");
        pin.className = "tmz-pin";
        pin.textContent = "📌";
        var noteText = document.createElement("span");
        noteText.textContent = text.replace(/^📌\s*/, "");
        note.appendChild(pin);
        note.appendChild(noteText);
        frag.appendChild(note);
        return;
      }

      if (isSub) {
        var sub = document.createElement("div");
        sub.className = "tmz-fmt-sec-head";
        var subText = document.createElement("span");
        subText.textContent = text;
        sub.appendChild(subText);
        frag.appendChild(sub);
        return;
      }

      var el = document.createElement("p");
      el.className = "tmz-fmt-intro";
      el.textContent = text;
      frag.appendChild(el);
    });

    closeGrid(frag, gridRef);

    root.innerHTML = "";
    root.appendChild(frag);
    root.dataset.tmzFormatted = "1";
  }

  function formatInfoPages() {
    var pages = document.querySelectorAll(".content--single-page");
    pages.forEach(function (page) {
      if (page.dataset.tmzFormatted === "1") return;
      page.dataset.tmzFormatted = "1";

      var h1 = page.querySelector(":scope > h1");
      var entry = page.querySelector(".content-entry");
      if (!h1 || !entry) return;

      var hero = document.createElement("div");
      hero.className = "tmz-page-hero";
      var icon = document.createElement("span");
      icon.className = "tmz-page-hero-icon";
      icon.innerHTML = PAGE_ICON_SVG;
      var title = document.createElement("span");
      title.className = "tmz-page-hero-title";
      title.textContent = h1.textContent.trim();
      hero.appendChild(title);
      hero.appendChild(icon);

      h1.replaceWith(hero);
    });
  }

  function run() {
    try { formatProductDescription(); } catch (e) {}
    try { formatInfoPages(); } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  /* يغطي حالات التنقل بدون إعادة تحميل كاملة (SPA navigation) داخل نفس الثيم */
  var lastUrl = location.href;
  setInterval(function () {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setTimeout(run, 400);
    }
  }, 800);
})();








document.addEventListener("DOMContentLoaded", function() {
    // تحديد جميع الكروت
    const cards = document.querySelectorAll('.product-entry');

    cards.forEach(card => {
        // إنشاء عنصر الإضاءة داخل كل كارت
        const glow = document.createElement('div');
        glow.classList.add('mouse-glow-effect');
        card.appendChild(glow);

        // مراقبة حركة الماوس
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // موقع الماوس بالنسبة للكارت (العرض)
            const y = e.clientY - rect.top;  // موقع الماوس بالنسبة للكارت (الطول)
            
            // تمرير الإحداثيات إلى الـ CSS
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
