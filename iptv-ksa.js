(function buildIptvLanding() {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.add('iptv-site-active');

    function loadFonts() {
        if (document.getElementById('iptv-font-link')) return;
        var link = document.createElement('link');
        link.id = 'iptv-font-link';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap';
        document.head.appendChild(link);
    }
    loadFonts();

    var j, s;

    var siteHeaderHtml =
        '<header id="iptv_site_header" class="_iptv_header">' +
        '<div class="_iptv_header_start">' +
        '<button type="button" id="show-sideMenu" class="_iptv_menu_btn" role="button" aria-controls="mobile-menu" aria-expanded="false" aria-label="القائمة الرئيسية"><svg class="svg burger" width="27" height="16" viewBox="0 0 27 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H22V2H0V0Z" fill="currentColor"></path><path d="M0 7H27V9H0V7Z" fill="currentColor"></path><path d="M0 14H17V16H0V14Z" fill="currentColor"></path></svg></button>' +
        '<ul class="_iptv_nav"><li><a href="/" class="_iptv_nav_link _iptv_nav_link_active">الرئيسية</a></li><li><a href="/products" class="_iptv_nav_link">الباقات</a></li><li><a href="/products" class="_iptv_nav_link">القنوات</a></li><li><a href="/products" class="_iptv_nav_link">الأفلام</a></li><li><a href="/products" class="_iptv_nav_link">المسلسلات</a></li><li><a href="/products" class="_iptv_nav_link">الأطفال</a></li></ul>' +
        '</div>' +
        '<a href="/" class="_iptv_logo" aria-label="IPTV KSA"><img src="https://dbi49knxhb5pc.cloudfront.net/channel/12550/VTCqGt2lJS7bsiJ91foaMfEkPk7QJoFvEW5p1dfX.png" alt="IPTV KSA" class="_iptv_logo_img"></a>' +
        '<div class="_iptv_header_actions"><a href="/products" class="_iptv_btn_primary">اشترك الآن</a>' +
        '<div class="_iptv_header_shop"></div>' +
        '</div></header>';

    var siteFooterHtml =
        '<footer id="iptv_site_footer" class="_iptv_footer"><div class="_iptv_footer_grid">' +
        '<div class="_iptv_footer_col"><img src="https://dbi49knxhb5pc.cloudfront.net/channel/12550/VTCqGt2lJS7bsiJ91foaMfEkPk7QJoFvEW5p1dfX.png" alt="Logo" style="height:45px;margin-bottom:12px;display:block;"><p style="color:#666;font-size:0.85rem;margin-bottom:15px;">وجهتك الأولى لمشاهدة القنوات والأفلام والمسلسلات والمباريات بجودة عالية واستقرار تام.</p></div>' +
        '<div class="_iptv_footer_col"><h4>معلومات</h4><ul class="_iptv_footer_links"><li><a href="/page/terms-of-use">شروط الاستخدام</a></li><li><a href="/page/return-policy">سياسة الاسترجاع</a></li><li><a href="/page/return-policy">سياسة الخصوصية</a></li></ul></div>' +
        '<div class="_iptv_footer_col"><h4>طرق الدفع</h4><ul class="flex justify-center items-center flex-wrap gap-2">' +
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://iptv-ksa.net/admin-themes/mbotiq/assets/images/payments/mastercard.png" alt="mastercard" loading="lazy" class="lazy object-contain max-h-full"></li>' +
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://iptv-ksa.net/admin-themes/mbotiq/assets/images/payments/visa.png" alt="visa" loading="lazy" class="lazy object-contain max-h-full"></li>' +
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://iptv-ksa.net/admin-themes/mbotiq/assets/images/payments/mada.png" alt="mada" loading="lazy" class="lazy object-contain max-h-full"></li>' +
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://iptv-ksa.net/admin-themes/mbotiq/assets/images/payments/applepay.png" alt="applepay" loading="lazy" class="lazy object-contain max-h-full"></li>' +
        '</ul></div>' +
        '</div><div class="_iptv_footer_bottom">جميع الحقوق محفوظة © IPTV KSA : 2026</div></footer>';

    var siteFabHtml =
        '<div class="_iptv_fab_stack">' +
        '<a href="https://wa.me/966530554953" class="_iptv_fab _iptv_fab_wa" aria-label="تواصل واتساب"><svg width="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg></a>' +
        '</div>' +
        '<button type="button" class="_iptv_to_top" aria-label="العودة للأعلى"><svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></button>';

    function bindSearchOpen(btn) {
        if (btn.getAttribute('data-iptv-search-bound') === '1') return;
        btn.setAttribute('data-iptv-search-bound', '1');
        btn.addEventListener('click', function (e) {
            var modal = document.getElementById('searchProductModal');
            if (!modal) return;
            if (e && e.preventDefault) e.preventDefault();
            if (e && e.stopPropagation) e.stopPropagation();
            modal.classList.remove('s-hidden');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            var input = modal.querySelector('.s-search-input, input[type="search"]');
            if (input) setTimeout(function () { try { input.focus(); } catch (err) {} }, 120);
        });
    }

    function moveStoreActions() {
        var shop = document.querySelector('#iptv_site_header ._iptv_header_shop');
        if (shop && !shop.children.length) {
            var loginBtn = document.getElementById('customerLogin');
            if (loginBtn) shop.appendChild(loginBtn);
            var cart = document.querySelector('#header twsaa-cart-summary, .store-header twsaa-cart-summary, twsaa-cart-summary');
            if (cart) shop.appendChild(cart);
            var searchBtn = document.querySelector('[data-target="#searchProductModal"]');
            if (searchBtn) {
                searchBtn.classList.remove('lg:hidden');
                shop.appendChild(searchBtn);
                bindSearchOpen(searchBtn);
            }
        }
        var searchModal = document.getElementById('searchProductModal');
        if (searchModal && searchModal.parentElement && searchModal.parentElement !== document.body) {
            document.body.appendChild(searchModal);
        }
    }

    function bindShell() {
        var toTop = document.querySelector('#iptv_site_footer ~ ._iptv_to_top, ._iptv_to_top');
        if (toTop) {
            function onScroll() {
                if (window.scrollY > 400) {
                    toTop.classList.add('_iptv_show');
                } else {
                    toTop.classList.remove('_iptv_show');
                }
            }
            window.addEventListener('scroll', onScroll);
            onScroll();
            toTop.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    function bindSideMenu() {
        var btn = document.getElementById('show-sideMenu');
        if (!btn) return;
        if (btn.getAttribute('data-iptv-menu-bound') === '1') return;
        btn.setAttribute('data-iptv-menu-bound', '1');

        function setSideMenu(open) {
            if (open) {
                document.body.classList.add('mm-ocd-opened');
                var ocd = document.querySelector('.mm-ocd');
                if (ocd) ocd.classList.add('mm-ocd--open');
                var mm = document.getElementById('mobile-menu');
                if (mm) mm.classList.add('mm-spn--main');
                var mainMenu = document.querySelector('#mobile-menu .main-menu');
                if (mainMenu) mainMenu.classList.add('mm-spn--open');
                btn.setAttribute('aria-expanded', 'true');
            } else {
                document.body.classList.remove('mm-ocd-opened');
                var ocd2 = document.querySelector('.mm-ocd');
                if (ocd2) ocd2.classList.remove('mm-ocd--open');
                var mm2 = document.getElementById('mobile-menu');
                if (mm2) mm2.classList.add('mm-spn--main');
                var mainMenu2 = document.querySelector('#mobile-menu .main-menu');
                if (mainMenu2) mainMenu2.classList.remove('mm-spn--open', 'mm-spn--parent');
                btn.setAttribute('aria-expanded', 'false');
            }
        }

        btn.addEventListener('click', function () {
            setSideMenu(!document.body.classList.contains('mm-ocd-opened'));
        });

        document.addEventListener('click', function (e) {
            var t = e.target;
            if (t && t.closest && t.closest('.close-mobile-menu')) {
                setSideMenu(false);
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setSideMenu(false);
        });

        var backdrop = document.querySelector('.mm-ocd__backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', function () {
                setSideMenu(false);
            });
        }
    }

    var shellBound = false;
    function buildSiteShell() {
        if (!document.body) return;
        if (!document.getElementById('iptv_site_header')) {
            var tempH = document.createElement('div');
            tempH.innerHTML = siteHeaderHtml;
            var headerEl = tempH.firstElementChild;
            if (headerEl) document.body.insertBefore(headerEl, document.body.firstChild);
        }
        if (!document.getElementById('iptv_site_footer')) {
            var tempF = document.createElement('div');
            tempF.innerHTML = siteFooterHtml + siteFabHtml;
            var frag = document.createDocumentFragment();
            while (tempF.firstChild) frag.appendChild(tempF.firstChild);
            document.body.appendChild(frag);
        }
        if (!shellBound) {
            shellBound = true;
            bindShell();
            bindSideMenu();
            moveStoreActions();
        }
    }

    buildSiteShell();
    document.addEventListener('DOMContentLoaded', buildSiteShell);
    setTimeout(buildSiteShell, 300);

    if (window.location.pathname !== '/' && window.location.pathname !== '') return;
    if (document.getElementById('iptv_master_wrap_2025')) return;

    document.documentElement.classList.add('iptv-landing-active');
    document.documentElement.classList.add('iptv-hero-image-only');

    function resolveBanner() {
        try {
            var img = document.querySelector('.s-block--fixed-banner img, .banner--fixed img, .banner img');
            if (img) {
                var u = img.getAttribute('data-src') || img.getAttribute('src');
                if (u && u.indexOf('sketch.png') === -1) return u;
            }
        } catch (e) {}
        return 'https://cdn.twsaa.com/home/12550/010f509b-ce48-4298-9d96-f72e08ee6978.png';
    }

    var tickerList = [['⚡', 'تفعيل فوري بعد الدفع'], ['📺', 'أكثر من 20,000 قناة'], ['⚽', 'جميع المباريات مباشرة'], ['🎬', 'أحدث الأفلام والمسلسلات'], ['💬', 'دعم فني 24/7'], ['🔒', 'دفع آمن (مدى / فيزا / Apple Pay)']];
    var ticker = '';
    for (j = 0; j < 2; j++) for (s = 0; s < tickerList.length; s++) ticker += '<span><b>' + tickerList[s][0] + '</b> ' + tickerList[s][1] + '</span>';

    var featList = [
        ['<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>', 'جودة عالية', '4K - FULL HD'],
        ['<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>', 'تحديث يومي', 'للأفلام والمسلسلات'],
        ['<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>', 'دعم فني 24/7', 'فريق دعم متخصص'],
        ['<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>', 'يدعم على', 'جميع الأجهزة'],
        ['<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>', 'استقرار عالي', 'سيرفرات قوية'],
        ['<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>', 'تفعيل فوري', 'بعد الدفع مباشرة']
    ];
    var feats = '';
    for (s = 0; s < featList.length; s++) feats += '<div class="_iptv_feature_card"><div class="_iptv_feature_icon">' + featList[s][0] + '</div><h4>' + featList[s][1] + '</h4><p>' + featList[s][2] + '</p></div>';

    var revList = [
        ['أفضل خدمة IPTV جربتها، جودة عالية واستقرار رهيب.', 'أحمد الغامدي', 'السعودية'],
        ['محتوى ضخم وأسعار مناسبة، والدعم الفني ممتاز.', 'محمد العتيبي', 'الكويت'],
        ['أتابع جميع مباريات الدوري بدون تقطيع وجودة ممتازة.', 'سعيد الحربي', 'الإمارات'],
        ['الأفلام والمسلسلات تتحدث يومياً، أنصح الجميع.', 'خالد الشمري', 'قطر']
    ];
    var revs = '';
    for (s = 0; s < revList.length; s++) revs += '<div class="_iptv_review_card"><p class="_iptv_review_text">"' + revList[s][0] + '"</p><div class="_iptv_review_stars">★★★★★</div><div class="_iptv_review_user"><div class="_iptv_review_avatar">👤</div><div class="_iptv_review_info"><span class="_iptv_review_name">' + revList[s][1] + '</span><span class="_iptv_review_country">' + revList[s][2] + '</span></div></div></div>';

    var stats = '<section class="_iptv_container"><div class="_iptv_section_title_wrap"><div class="_iptv_title_line"></div><h2 class="_iptv_section_title">أرقام نفخر بها</h2><div class="_iptv_title_line"></div></div><div class="_iptv_stats _iptv_reveal"><div class="_iptv_stats_card"><b data-count="20000" data-suffix="+">0</b><span>قناة ومحتوى</span></div><div class="_iptv_stats_card"><b data-count="100" data-suffix="+">0</b><span>دولة حول العالم</span></div><div class="_iptv_stats_card"><b data-count="10000" data-suffix="+">0</b><span>عميل سعيد</span></div><div class="_iptv_stats_card"><b>24/7</b><span>دعم فني متواصل</span></div></div></section>';

    var htmlString =
        '<div id="iptv_master_wrap_2025">' +

        '<section class="_iptv_container _iptv_hero">' +
        '<div class="_iptv_hero_image">' +
        '<img class="_iptv_hero_banner_img" src="__IPTV_BANNER__" alt="IPTV KSA">' +
        '<div class="_iptv_hero_badge _iptv_hero_badge_top"><div class="_iptv_badge_icon">20K+</div><div><b>قناة مباشرة</b><small>بجودة عالية</small></div></div>' +
        '<div class="_iptv_hero_badge _iptv_hero_badge_bottom"><div class="_iptv_badge_icon">4K</div><div><b>جودة فائقة</b><small>بدون تقطيع</small></div></div>' +
        '</div>' +
        '</section>' +

        '<div class="_iptv_ticker"><div class="_iptv_ticker_track">' + ticker + '</div></div>' +

        '<section class="_iptv_container"><div class="_iptv_section_title_wrap"><div class="_iptv_title_line"></div><h2 class="_iptv_section_title">لماذا IPTV KSA ؟</h2><div class="_iptv_title_line"></div></div><div class="_iptv_grid_5 _iptv_reveal">' + feats + '</div></section>' +

        stats +

        '<section class="_iptv_container"><div class="_iptv_section_title_wrap"><div class="_iptv_title_line"></div><h2 class="_iptv_section_title">آراء عملائنا</h2><div class="_iptv_title_line"></div></div><div class="_iptv_reviews_wrap _iptv_reveal">' + revs + '</div></section>' +

        '<section class="_iptv_container _iptv_reveal"><div class="_iptv_cta"><h2>جاهز لتجربة ترفيه لا مثيل لها؟</h2><p>اشترك الآن واستمتع بأكثر من 20,000 قناة وأحدث الأفلام والمسلسلات والمباريات بجودة 4K</p><div class="_iptv_cta_actions"><a href="/products" class="_iptv_btn_primary">اشترك الآن</a><a href="https://wa.me/966530554953" class="_iptv_btn_outline"><svg width="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>تواصل عبر واتساب</a></div></div></section>' +

        '</div>';

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1200;
        var start = null;
        function step(ts) {
            if (start === null) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString('en-US') + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function initAnimations(wrap) {
        if ('IntersectionObserver' in window) {
            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('_iptv_visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            var revealEls = wrap.querySelectorAll('._iptv_reveal');
            for (var i = 0; i < revealEls.length; i++) revealObserver.observe(revealEls[i]);

            var counterObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    counterObserver.unobserve(entry.target);
                    animateCounter(entry.target);
                });
            }, { threshold: 0.4 });
            var counterEls = wrap.querySelectorAll('._iptv_stats_card b[data-count]');
            for (var k = 0; k < counterEls.length; k++) counterObserver.observe(counterEls[k]);
        } else {
            var all = wrap.querySelectorAll('._iptv_reveal, ._iptv_stats_card b[data-count]');
            for (var m = 0; m < all.length; m++) all[m].classList.add('_iptv_visible');
        }
    }

    function initReviewSliderDrag(wrap) {
        if (!wrap || wrap.getAttribute('data-iptv-drag') === '1') return;
        wrap.setAttribute('data-iptv-drag', '1');
        var isDown = false, startX = 0, startScrollLeft = 0, moved = false;
        function onDown(e) {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            isDown = true; moved = false;
            startX = e.clientX;
            startScrollLeft = wrap.scrollLeft;
            wrap.classList.add('_iptv_dragging');
        }
        function onMove(e) {
            if (!isDown) return;
            var dx = e.clientX - startX;
            if (!moved && Math.abs(dx) < 5) return;
            moved = true;
            wrap.scrollLeft = startScrollLeft - dx;
            if (e.cancelable) e.preventDefault();
        }
        function onUp() {
            isDown = false; moved = false;
            wrap.classList.remove('_iptv_dragging');
        }
        wrap.addEventListener('pointerdown', onDown);
        wrap.addEventListener('pointermove', onMove);
        wrap.addEventListener('pointerup', onUp);
        wrap.addEventListener('pointercancel', onUp);
        wrap.addEventListener('mouseleave', onUp);
    }

    function buildUI() {
        if (!document.body) return;
        if (document.getElementById('iptv_master_wrap_2025')) return;
        var temp = document.createElement('div');
        temp.innerHTML = htmlString.split('__IPTV_BANNER__').join(resolveBanner());
        var wrap = temp.firstElementChild;
        if (!wrap) return;
        var headerEl = document.getElementById('iptv_site_header');
        if (headerEl) {
            headerEl.insertAdjacentElement('afterend', wrap);
        } else {
            document.body.insertBefore(wrap, document.body.firstChild);
        }
        initAnimations(wrap);
        initReviewSliderDrag(wrap.querySelector('._iptv_reviews_wrap'));
    }

    function movePlatformBlocks() {
        var wrap = document.getElementById('iptv_master_wrap_2025');
        if (!wrap) return;
        if (wrap.getAttribute('data-iptv-blocks') === '1') return;
        wrap.setAttribute('data-iptv-blocks', '1');
        var statsDiv = wrap.querySelector('._iptv_stats');
        var anchor = null;
        if (statsDiv && statsDiv.closest) anchor = statsDiv.closest('section');
        if (!anchor) anchor = statsDiv;
        var blocks = [];
        try {
            blocks = document.querySelectorAll('#app .s-block, .main-container-wrapper .s-block, main .s-block');
        } catch (e) {}
        for (var i = 0; i < blocks.length; i++) {
            var b = blocks[i];
            if (!b) continue;
            if ((b.className || '').indexOf('s-block--fixed-banner') > -1) continue;
            if (wrap.contains(b)) continue;
            if (anchor && anchor.parentNode) {
                anchor.parentNode.insertBefore(b, anchor);
            } else {
                wrap.appendChild(b);
            }
        }
    }

    function initLanding() {
        buildUI();
        movePlatformBlocks();
    }

    initLanding();
    document.addEventListener('DOMContentLoaded', initLanding);
    setTimeout(initLanding, 300);
})();
