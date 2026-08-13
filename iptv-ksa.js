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
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://ksaaiptv.com/admin-themes/mbotiq/assets/images/payments/mastercard.png" alt="mastercard" loading="lazy" class="lazy object-contain max-h-full"></li>' +
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://ksaaiptv.com/admin-themes/mbotiq/assets/images/payments/visa.png" alt="visa" loading="lazy" class="lazy object-contain max-h-full"></li>' +
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://ksaaiptv.com/admin-themes/mbotiq/assets/images/payments/mada.png" alt="mada" loading="lazy" class="lazy object-contain max-h-full"></li>' +
        '<li class="pay-mada w-12 h-7 bg-white rounded flex items-center p-1"><img width="100%" height="100%" src="https://ksaaiptv.com/admin-themes/mbotiq/assets/images/payments/applepay.png" alt="applepay" loading="lazy" class="lazy object-contain max-h-full"></li>' +
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

    function buildPlatformNav() {
        var srcUl = document.querySelector('#header .main-menu');
        var target = document.querySelector('#iptv_site_header ._iptv_nav');
        if (!srcUl || !target) return;
        if (target.getAttribute('data-iptv-platform-nav') === '1') return;
        var path = (window.location.pathname || '/').replace(/\/+$/, '') || '/';
        var html = '<li><a href="/" class="_iptv_nav_link' + (path === '/' ? ' _iptv_nav_link_active' : '') + '">الرئيسية</a></li>';
        var count = 0;
        for (var i = 0; i < srcUl.children.length; i++) {
            var li = srcUl.children[i];
            if (!li || !li.tagName) continue;
            if (li.tagName.toLowerCase() !== 'li') continue;
            var cls = li.className || '';
            if (cls.indexOf('menu-user-login') > -1) continue;
            if (cls.indexOf('mobile-menu-slider') > -1) continue;
            var a = li.querySelector('a');
            if (!a) continue;
            var href = a.getAttribute('href');
            var text = (a.textContent || '').replace(/\s+/g, ' ').trim();
            if (!href || href === '#' || !text) continue;
            var hrefPath = href.indexOf(window.location.origin) === 0 ? href.slice(window.location.origin.length) : href;
            hrefPath = hrefPath.split('#')[0].split('?')[0].replace(/\/+$/, '');
            var active = path !== '/' && hrefPath === path ? ' _iptv_nav_link_active' : '';
            count++;
            html += '<li><a href="' + href + '" class="_iptv_nav_link' + active + '">' + text + '</a></li>';
        }
        if (!count) return;
        target.setAttribute('data-iptv-platform-nav', '1');
        target.innerHTML = html;
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
        buildPlatformNav();
    }

    buildSiteShell();
    document.addEventListener('DOMContentLoaded', buildSiteShell);
    setTimeout(buildSiteShell, 300);

    var productStatsBound = false;
    function buildProductStats() {
        if (productStatsBound) return;
        var title = document.querySelector('h1[data-selia="product-single-title"]');
        if (!title) {
            var hs = document.querySelectorAll('h1');
            for (var i = 0; i < hs.length; i++) {
                var cls = hs[i].className || '';
                if (cls.indexOf('da-tm') > -1 && cls.indexOf('leading-normal') > -1) {
                    title = hs[i];
                    break;
                }
            }
        }
        if (!title) return;
        if (document.querySelector('.custom-product-stats')) return;

        if (!document.getElementById('iptv-product-stats-css')) {
            var style = document.createElement('style');
            style.id = 'iptv-product-stats-css';
            style.textContent = '.custom-product-stats{display:flex;flex-direction:column;align-items:flex-start;gap:9px;margin-bottom:18px;min-height:26px;background:rgba(17,16,24,.6);border:1px solid rgba(255,200,0,.18);border-radius:10px;padding:12px 16px;width:fit-content;}.custom-stat-item{display:flex;align-items:center;gap:10px;}.custom-stat-icon{display:flex;align-items:center;justify-content:center;width:28px;height:28px;background:linear-gradient(90deg,#FFC800 0%,#FF5E00 45%,#C80000 100%);color:#fff;border-radius:50%;font-size:13px;flex-shrink:0;box-shadow:0 4px 12px rgba(255,94,0,.35);}.custom-stat-text{font-size:14px;color:#e8e8e8;font-weight:600;display:flex;align-items:center;flex-wrap:wrap;gap:4px;line-height:1.4;}.custom-stat-num{color:#FFC800;font-weight:800;}';
            document.head.appendChild(style);
        }

        var productId = 'default';
        try {
            if (window.salla && window.salla.config && window.salla.config.get) {
                var cfg = window.salla.config.get('page');
                if (cfg && cfg.id) productId = cfg.id;
            }
        } catch (e) {}
        if (productId === 'default') {
            var btn = document.querySelector('salla-add-product-button, twsaa-add-product-button, [data-product-id]');
            if (btn) {
                productId = btn.getAttribute('product-id') || btn.getAttribute('data-product-id') || productId;
            }
        }
        if (productId === 'default') {
            var mm = (window.location.pathname || '').match(/\/(\d+)\/?$/);
            if (mm) productId = mm[1];
        }

        var key = 'iptv_product_stats_' + productId;
        var stats = null;
        try { stats = JSON.parse(localStorage.getItem(key)); } catch (e) {}
        if (!stats) {
            stats = {
                sold: Math.floor(Math.random() * (150000 - 10000) + 10000),
                reviews: Math.floor(Math.random() * (900 - 50) + 50),
                rating: (Math.random() * (5.0 - 4.5) + 4.5).toFixed(1),
                watch: Math.floor(Math.random() * (80 - 15) + 15)
            };
        } else {
            stats.sold += Math.floor(Math.random() * 5) + 1;
            stats.reviews += Math.floor(Math.random() * 2);
            stats.watch = Math.floor(Math.random() * (85 - 20) + 20);
        }
        try { localStorage.setItem(key, JSON.stringify(stats)); } catch (e) {}

        var formatNum = function (n) {
            try { return new Intl.NumberFormat('en-US').format(n); } catch (e) { return String(n); }
        };

        var container = document.createElement('div');
        container.className = 'custom-product-stats';
        container.innerHTML =
            '<div class="custom-stat-item active"><div class="custom-stat-icon">🔥</div><div class="custom-stat-text">يشاهد هذا المنتج الآن <span class="custom-stat-num">' + formatNum(stats.watch) + '</span> شخص</div></div>' +
            '<div class="custom-stat-item"><div class="custom-stat-icon">⭐</div><div class="custom-stat-text">التقييم <span class="custom-stat-num">' + stats.rating + '</span> من 5 — <span class="custom-stat-num">' + formatNum(stats.reviews) + '</span> تقييم</div></div>' +
            '<div class="custom-stat-item"><div class="custom-stat-icon">🔥</div><div class="custom-stat-text">تم بيع <span class="custom-stat-num">' + formatNum(stats.sold) + '</span> مرة</div></div>';

        if (title.parentNode) title.parentNode.insertBefore(container, title);

        productStatsBound = true;
        var items = container.querySelectorAll('.custom-stat-item');
        for (var si = 0; si < items.length; si++) items[si].classList.add('active');
    }

    function buildProductReviews() {
        var panel = document.getElementById('nav-comments');
        if (!panel) return;
        if (panel.querySelector('.custom-product-reviews')) return;
        if (panel.getAttribute('data-iptv-reviews-bound') === '1') return;
        panel.setAttribute('data-iptv-reviews-bound', '1');

        if (!document.getElementById('iptv-product-reviews-css')) {
            var style = document.createElement('style');
            style.id = 'iptv-product-reviews-css';
            style.textContent = '.custom-product-reviews{margin-top:6px}.custom-pr-summary{display:flex;align-items:center;gap:20px;flex-wrap:wrap;background:rgba(17,16,24,.6);border:1px solid rgba(255,200,0,.18);border-radius:12px;padding:20px;margin-bottom:20px}.custom-pr-rating{display:flex;align-items:baseline;gap:8px}.custom-pr-rating b{font-size:42px;color:#FFC800;font-weight:800;line-height:1}.custom-pr-rating small{color:#e8e8e8;font-size:14px}.custom-pr-stars{color:#FFC800;font-size:20px;letter-spacing:2px}.custom-pr-count{color:#b0b0b0;font-size:14px}.custom-pr-grid{display:grid;grid-template-columns:repeat(1,1fr);gap:14px}.custom-pr-card{background:rgba(17,16,24,.6);border:1px solid rgba(255,200,0,.12);border-radius:12px;padding:18px;display:flex;flex-direction:column;gap:10px}.custom-pr-card .custom-pr-stars{font-size:15px}.custom-pr-card p{font-size:13.5px;color:#cccccc;line-height:1.7;margin:0}.custom-pr-user{display:flex;align-items:center;gap:8px;margin-top:auto}.custom-pr-avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(90deg,#FFC800,#FF5E00);display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;font-weight:700;flex-shrink:0}.custom-pr-name{font-size:13px;color:#ffffff;font-weight:700}.custom-pr-verified{font-size:11px;color:#22c55e;display:flex;align-items:center;gap:3px}@media(max-width:768px){.custom-pr-grid{grid-template-columns:1fr}}';
            document.head.appendChild(style);
        }

        var productId = 'default';
        try {
            if (window.salla && window.salla.config && window.salla.config.get) {
                var cfg = window.salla.config.get('page');
                if (cfg && cfg.id) productId = cfg.id;
            }
        } catch (e) {}
        if (productId === 'default') {
            var btn = document.querySelector('salla-add-product-button, twsaa-add-product-button, [data-product-id]');
            if (btn) {
                productId = btn.getAttribute('product-id') || btn.getAttribute('data-product-id') || productId;
            }
        }
        if (productId === 'default') {
            var mm = (window.location.pathname || '').match(/\/(\d+)\/?$/);
            if (mm) productId = mm[1];
        }

        var key = 'iptv_product_stats_' + productId;
        var stats = null;
        try { stats = JSON.parse(localStorage.getItem(key)); } catch (e) {}
        var rating = stats && stats.rating ? stats.rating : (Math.random() * (5.0 - 4.5) + 4.5).toFixed(1);
        var reviewCount = stats && stats.reviews ? stats.reviews : Math.floor(Math.random() * (900 - 50) + 50);

        var formatNum = function (n) {
            try { return new Intl.NumberFormat('en-US').format(n); } catch (e) { return String(n); }
        };

        var revList = [
            ['أفضل اشتراك IPTV جربته، جودة عالية واستقرار رهيب.', 'أحمد الغامدي'],
            ['محتوى ضخم وأسعار مناسبة، والدعم الفني ممتاز.', 'محمد العتيبي'],
            ['أتابع جميع المباريات مباشرة بدون تقطيع وجودة ممتازة.', 'سعيد الحربي'],
            ['التفعيل فوري والمشاهدة بجودة 4K ممتازة.', 'فهد القحطاني'],
            ['الدعم الفني رد عليا في دقائق وحل المشكلة.', 'يوسف الزهراني'],
            ['مشترك من 6 شهور بدون أي تقطيع، خدمة تستاهل.', 'بدر العلي'],
            ['سهولة في التفعيل والدعم متوفر على مدار الساعة.', 'رائد العنزي'],
            ['فعلت كل أجهزة البيت وكله شغال بدون مشاكل.', 'خالد الجهني'],
            ['أفضل خدمة IPTV بلا منازع من ناحية الجودة.', 'تركي المطيري']
        ];

        var cards = '';
        for (var r = 0; r < revList.length; r++) {
            cards += '<div class="custom-pr-card"><div class="custom-pr-stars">★★★★★</div><p>"' + revList[r][0] + '"</p><div class="custom-pr-user"><div class="custom-pr-avatar">' + revList[r][1].charAt(0) + '</div><div class="custom-pr-name">' + revList[r][1] + '</div><span class="custom-pr-verified"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>مشتري موثق</span></div></div>';
        }

        var box = document.createElement('div');
        box.className = 'custom-product-reviews';
        box.innerHTML =
            '<div class="custom-pr-summary">' +
            '<div class="custom-pr-rating"><b>' + rating + '</b><small>من 5</small></div>' +
            '<div><div class="custom-pr-stars">★★★★★</div><div class="custom-pr-count">' + formatNum(reviewCount) + ' تقييم من عملائنا</div></div>' +
            '</div>' +
            '<div class="custom-pr-grid">' + cards + '</div>';

        panel.appendChild(box);
    }

    buildProductStats();
    buildProductReviews();
    document.addEventListener('DOMContentLoaded', function () {
        buildProductStats();
        buildProductReviews();
    });
    setTimeout(function () {
        buildProductStats();
        buildProductReviews();
    }, 300);

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
        ['أفضل خدمة IPTV جربتها، جودة عالية واستقرار رهيب.', 'أحمد الغامدي'],
        ['محتوى ضخم وأسعار مناسبة، والدعم الفني ممتاز.', 'محمد العتيبي'],
        ['أتابع جميع مباريات الدوري بدون تقطيع وجودة ممتازة.', 'سعيد الحربي'],
        ['الأفلام والمسلسلات تتحدث يومياً، أنصح الجميع.', 'خالد الشمري'],
        ['التفعيل فوري والمشاهدة بجودة 4K ممتازة.', 'فهد القحطاني'],
        ['خدمة أكثر من رائعة، أنصح بها أصحاب الـ Smart TV.', 'عبدالله السبيعي'],
        ['أكثر من 20 ألف قناة، ما صدقت إنه بسعر كذا.', 'ناصر الدوسري'],
        ['الدعم الفني رد عليا في دقائق وحل المشكلة.', 'يوسف الزهراني'],
        ['أفضل اشتراك IPTV بلا منازع من ناحية الجودة.', 'تركي المطيري'],
        ['مشترك من 6 شهور بدون أي تقطيع.', 'بدر العلي'],
        ['القنوات الرياضية تشتغل بدون انقطاع حتى وقت المباريات.', 'ماجد الشهري'],
        ['سهولة في التفعيل والدعم متوفر على مدار الساعة.', 'رائد العنزي'],
        ['جودة الصورة ممتازة على التلفزيون والموبايل.', 'حسن آل مساعد'],
        ['أسعار منافسة جداً وخدمة تستاهل كل ريال.', 'فيصل الحربي'],
        ['تجدد الاشتراك أكثر من مرة وما فيه مثله.', 'أيمن باجابر'],
        ['محتوى عائلي ممتاز والضبط بسيط جداً.', 'طلال الشمراني'],
        ['من أفضل الخدمات اللي جربتها في المملكة.', 'عدنان الغامدي'],
        ['فعلت كل أجهزة البيت وكله شغال.', 'خالد الجهني']
    ];
    var revs = '';
    for (s = 0; s < revList.length; s++) revs += '<div class="_iptv_review_card"><p class="_iptv_review_text">"' + revList[s][0] + '"</p><div class="_iptv_review_stars">★★★★★</div><div class="_iptv_review_user"><div class="_iptv_review_avatar">👤</div><div class="_iptv_review_info"><span class="_iptv_review_name">' + revList[s][1] + '</span></div></div></div>';

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

        '<section class="_iptv_container"><div class="_iptv_section_title_wrap"><div class="_iptv_title_line"></div><h2 class="_iptv_section_title">آراء عملائنا</h2><div class="_iptv_title_line"></div></div><div class="_iptv_reviews_controls"><button type="button" class="_iptv_reviews_arrow _iptv_reviews_arrow_right" aria-label="الآراء التالية">&#8594;</button><div class="_iptv_reviews_wrap _iptv_reveal"><div class="_iptv_reviews_track"><div class="_iptv_reviews_group">' + revs + '</div><div class="_iptv_reviews_group">' + revs + '</div></div></div><button type="button" class="_iptv_reviews_arrow _iptv_reviews_arrow_left" aria-label="الآراء السابقة">&#8592;</button></div></section>' +

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

    function initReviewsSlider(wrap) {
        var viewport = wrap.querySelector('._iptv_reviews_wrap');
        var track = wrap.querySelector('._iptv_reviews_track');
        var rightButton = wrap.querySelector('._iptv_reviews_arrow_right');
        var leftButton = wrap.querySelector('._iptv_reviews_arrow_left');
        if (!viewport || !track || !rightButton || !leftButton || track.getAttribute('data-iptv-slider-bound') === '1') return;
        track.setAttribute('data-iptv-slider-bound', '1');

        var offset = 0;
        var startX = 0;
        var lastX = 0;
        var startOffset = 0;
        var startTime = 0;
        var lastTime = 0;
        var dragging = false;
        var animating = false;
        var velocity = 0;
        var resumeTimer;
        var animationFrame;

        function groupWidth() {
            var group = track.querySelector('._iptv_reviews_group');
            return group ? group.getBoundingClientRect().width : 0;
        }

        function clamp(value) {
            var limit = groupWidth();
            if (!limit) return value;
            while (value > 0) value -= limit;
            while (value < -limit) value += limit;
            return value;
        }

        function applyOffset(smooth) {
            offset = clamp(offset);
            if (smooth) {
                track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            } else {
                track.style.transition = 'none';
            }
            track.style.transform = 'translate3d(' + offset + 'px, 0, 0)';
        }

        function useManualMode() {
            if (!track.classList.contains('_iptv_reviews_manual')) {
                var currentTransform = window.getComputedStyle(track).transform;
                var match = currentTransform && currentTransform.match(/matrix\([^,]+,\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*([^,]+),/);
                if (match) offset = parseFloat(match[1]) || 0;
            }
            track.classList.add('_iptv_reviews_manual');
            window.clearTimeout(resumeTimer);
            window.cancelAnimationFrame(animationFrame);
            animating = false;
        }

        function momentum() {
            if (!animating || Math.abs(velocity) < 0.1) {
                animating = false;
                return;
            }
            offset += velocity;
            applyOffset(false);
            velocity *= 0.92;
            animationFrame = window.requestAnimationFrame(momentum);
        }

        function moveBy(distance) {
            useManualMode();
            track.style.transition = 'none';
            offset += distance;
            offset = clamp(offset);
            track.style.transform = 'translate3d(' + offset + 'px, 0, 0)';
            setTimeout(function () {
                track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, 16);
        }

        rightButton.addEventListener('click', function () { moveBy(-340); });
        leftButton.addEventListener('click', function () { moveBy(340); });

        viewport.addEventListener('pointerdown', function (event) {
            useManualMode();
            dragging = true;
            startX = event.clientX;
            lastX = startX;
            startOffset = offset;
            startTime = Date.now();
            lastTime = startTime;
            velocity = 0;
            viewport.classList.add('_iptv_reviews_dragging');
            if (viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId);
        }, { passive: true });

        viewport.addEventListener('pointermove', function (event) {
            if (!dragging) return;
            var currentTime = Date.now();
            var deltaTime = Math.max(currentTime - lastTime, 16);
            offset = startOffset + (event.clientX - startX);
            velocity = (event.clientX - lastX) / deltaTime;
            lastX = event.clientX;
            lastTime = currentTime;
            applyOffset(false);
        }, { passive: true });

        function stopDragging(event) {
            if (!dragging) return;
            dragging = false;
            viewport.classList.remove('_iptv_reviews_dragging');
            if (event && viewport.releasePointerCapture && viewport.hasPointerCapture && viewport.hasPointerCapture(event.pointerId)) {
                viewport.releasePointerCapture(event.pointerId);
            }
            if (Math.abs(velocity) > 0.1) {
                animating = true;
                momentum();
            } else {
                applyOffset(true);
            }
        }

        viewport.addEventListener('pointerup', stopDragging);
        viewport.addEventListener('pointercancel', stopDragging);
        viewport.addEventListener('pointerleave', function (event) {
            if (dragging && event.buttons === 0) stopDragging(event);
        });
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
        initReviewsSlider(wrap);
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
