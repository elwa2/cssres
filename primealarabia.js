/* develope By Package +201002241591  3lwaaa@gmail.com - https://wa.me/201002241591 */
@font-face {
    font-family: sky;
    src: url(https://www.fontstatic.com/fonts/sky/sky.eot?#iefix);
    src: local("السماء"), local("sky"), url("https://www.fontstatic.com/fonts/sky/sky.woff")format("woff")
}

@font-face {
    font-family: sky-bold;
    src: url(https://www.fontstatic.com/fonts/sky-bold/sky-bold.eot?#iefix);
    src: local("السماء ثقيل"), local("sky-bold"), url("https://www.fontstatic.com/fonts/sky-bold/sky-bold.woff")format("woff")
}

header .dark.d-none.d-lg-block body {
    background: #fff;
    background-size: cover;
    background-repeat: repeat
}

* {
    font-weight: unset!important
}

h1 {
    font-family: sky-bold;
    font-weight: unset!important
}

h2, h3 {
    font-family: sky;
    font-weight: unset!important
}

a {
    color: var(--2)
}

@keyframes uplogo {
    0% {
        transform: scale(0)
    }

    100% {
        transform: scale(1)
    }
}

.app-content-padded {
    padding-top: unset
}

.header-logo a[href="/"] img {
    display: none !important;
}

#fixed-header:not(.sticky) .header-logo a[href="/"],#fixed-header.sticky .header-logo a[href="/"] {
    background: var(--logo);
    width: 215px!important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12rem;
}

@media(max-width: 991px) {
    #fixed-header:not(.sticky) .header-logo a[href="/"],#fixed-header.sticky .header-logo a[href="/"] {
        background-size: 9rem;
    }
}

#fixed-header.sticky {
    box-shadow: 0 0 10px rgba(0,0,0,.3)
}

.header .icon-arrow_left:before, .header .icon-arrow_right:before {
    color: inherit
}

.icon-arrow-right.header-theme-icon-primary, .icon-arrow-left.header-theme-icon-primary {
    background: unset;
    padding: 2px
}

@media(max-width: 991px) {
    .search-header-bar {
        height:70px
    }

    .rtl .ic.menu, .sm-search-icon {
        margin-left: 10px
    }

    .ltr .ic.menu, .sm-search-div {
        padding: 0;
        background-color: #fff
    }

    .sm-search-div input {
        border-radius: 0;
        border: 0;
        font-family: sky
    }

    #fixed-header:not(.sticky) .header-logo a[href="/"] {
        margin-right: auto!important;
        padding: 8px 0 10px 15px!important
    }

    #fixed-header.sticky .header-logo a[href="/"] {
        margin-right: auto!important;
        padding: 8px 0 10px 15px!important
    }

    #fixed-header:not(.sticky) .icon-arrow-right::before {
        content: "\f061 ";
        color: var(--1)
    }

    .header-theme-bg-primary:not(#sliding-menu) {
        background: 0 0
    }

    #fixed-header.sticky {
        background-position: center;
        background: var(--1);
        background-size: cover;
        box-shadow: 0 0 10px 0 #4c4c4c;
        background-repeat: no-repeat
    }

    .header .icon-shopping_cart_black_36dp-1-1 .path1 {
        display: none
    }
}

#fixed-header:not(.sticky) .icon-menu_open_black_24dp-1::before,#fixed-header.sticky .icon-menu_open_black_24dp-1::before,.icon-arrow_drop_down1::before {
    display: inline-block;
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 176.28 122.88'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %233e2f14; %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1-2'%3E%3Cg id='layer1'%3E%3Cpath id='path2109' class='cls-1' d='m9.31,0C4.47,0,.54,3.93.54,8.77c0,4.84,3.93,8.77,8.77,8.77h158c4.85.1,8.86-3.74,8.96-8.59S172.53.1,167.69,0h0s-158.37,0-158.37,0Zm0,52.65c-4.85,0-8.78,3.94-8.78,8.79,0,4.85,3.93,8.78,8.78,8.78h158c4.85,0,8.78-3.93,8.79-8.78,0-4.85-3.93-8.78-8.78-8.79H9.31Zm-.82,52.65C3.64,105.47-.16,109.54,0,114.39c.17,4.85,4.24,8.65,9.09,8.48.07,0,.14,0,.22-.01h158c4.85-.11,8.7-4.12,8.59-8.97-.1-4.7-3.89-8.49-8.59-8.59H9.31c-.28,0-.56,0-.84.02l.02-.02Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 25px;
    margin: auto
}

#fixed-header:not(.sticky) .icon-search::before,#fixed-header.sticky .icon-search::before {
    display: block;
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 106.57 106.56'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %233e2f14; %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1-2'%3E%3Cpath class='cls-1' d='m42.9,85.75c9.53,0,18.78-3.18,26.29-9.03l28.35,28.35c2.12,2.04,5.5,1.97,7.54-.15,1.98-2.06,1.98-5.33,0-7.39l-28.35-28.35c14.53-18.7,11.15-45.63-7.55-60.16C50.49-5.51,23.55-2.13,9.02,16.57c-14.53,18.7-11.15,45.63,7.55,60.16,7.53,5.85,16.8,9.02,26.33,9.02h0ZM20.12,20.11c12.58-12.59,32.98-12.59,45.57-.01,12.59,12.58,12.59,32.98.01,45.57-12.58,12.59-32.98,12.59-45.57.01,0,0,0,0-.01-.01h0c-12.57-12.49-12.65-32.8-.17-45.38l.17-.17h0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 22px;
    margin: unset
}

#fixed-header:not(.sticky) .icon-shopping_cart_black_36dp-1-1 .path2::before,#fixed-header.sticky .icon-shopping_cart_black_36dp-1-1 .path2::before {
    display: block;
    content: var(--cart);
    width: 25px;
    margin: unset
}

.icon-arrow_drop_down1::before ,#fixed-header.sticky .icon-menu_open_black_24dp-1::before, #fixed-header.sticky .icon-search::before,#fixed-header.sticky .icon-search::before, #fixed-header.sticky .icon-shopping_cart_black_36dp-1-1 .path2::before,#fixed-header.sticky .header-logo a[href="/"] {
    filter: brightness(25.5);
}

#fixed-header.sticky .cart-header-total {
    color: #fff;
}

@media(min-width: 991px) {
    header>.account-lang-currency {
        padding:10px 0!important
    }

    .header-theme-bg-primary:not(#sliding-menu) {
        background: #fff;
        padding: unset
    }

    .account-lang-currency.upper-bar .account-area {
        border: 0;
        border-radius: 0;
        min-width: 130px;
        padding: 0;
        text-align: center;
        font-family: sky-bold;
        line-height: 1;
        background: var(--1)!important;
        border-radius: 6px
    }

    .language-currency * {
        display: none!important
    }

    .language-currency {
        width: 20%;
        border: 0;
        display: block;
        content: "";
        background: var(--pay);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        max-height: unset
    }

    .account-lang-currency.upper-bar .account-area * {
        color: #ffffff!important;
    }

    .search-header-bar {
        height: 70px
    }

    .search-header-bar>div {
        width: 33.33333%
    }

    .search-header-bar>div:nth-child(1) {
        order: 2;
        display: block
    }

    #fixed-header .header-logo a[href="/"] {
        margin: auto
    }

    .search-header-bar>div:nth-child(2) {
        order: 1
    }

    .search-header-bar>div:nth-child(2)>div {
        width: 60%;
        border: 0;
        border-radius: unset!important;
        border-bottom: 1px solid #eee
    }

    .search-header-bar>div:nth-child(2)>div input {
        border: 0;
        border-radius: unset!important;
        font-family: sky;
        background: unset
    }

    .search-header-bar>div:nth-child(3) {
        order: 3
    }

    .search-header-bar>div:nth-child(3)>.d-none {
        margin-left: 5px!important
    }

    .cart-badge {
        position: absolute;
        right: 0!important;
        top: -8px;
        width: 20px;
        height: 20px;
        font-size: 12px
    }

    .search-header-bar>div:nth-child(3)>.d-none h3 {
        margin: 0!important;
        padding: 10px 10px 4px;
        border-radius: 6px;
        line-height: 1.35
    }

    .search-header-bar>div:nth-child(3)>[style="position: relative"] {
        margin: 0!important;
        line-height: 1
    }

    .header .account-lang-currency {
        border-bottom: 1px solid #eee
    }

    .header .account-lang-currency .account-btn {
        border: 0;
        border-radius: 0
    }

    .rtl .search-input-input {
        padding: 0 35px
    }

    .header .icon-shopping_cart_black_36dp-1-1 .path1 {
        display: none
    }

    #fixed-header.sticky .search-header {
        background: var(--1)
    }

    header .dark.d-none.d-lg-block {
        background: #f8f8f8!important;
        font-family: sky
    }

    header .dark.d-none.d-lg-block .top-level-link>a:hover {
        background: unset!important;
        color: var(--2);
    }

    header .dark.d-none.d-lg-block .top-level-link:hover {
        background: unset!important;
        color: #fff!important
    }

    header .dark.d-none.d-lg-block .top-level-link>a:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--1);
        transform: scaleX(0);
        transition: transform .3s ease;
        background: unset
    }

    header .dark.d-none.d-lg-block .top-level-link>a:hover:after {
        transform: scaleX(1)
    }
}

 

section.ss .main-slider h1 {
    color: #fff;
    text-shadow: 0 0 5px rgba(0,0,0,.4)
}

section.ss .main-slider p {
    color: #fff;
    font-family: sky
}

 

.home-categories-section .section-title {
    margin: 10px auto;
    text-align: center;
    color: #4c4c4c
}

.home-categories-section.section-padding-space .cat-col {
    padding: 0;
    margin: auto 5px;
    background: #ffffff;
    border-radius: 11px;
    box-shadow: none;
    width: auto !important;
}

.home-categories-section.section-padding-space .category-item {
    width: auto
}

.home-categories-section.section-padding-space .category-item img {
    border-radius: 10px 10px 0 0;
    box-shadow: var(--sh);
    border-radius: 18px;
}

.home-categories-section.section-padding-space .category-item h3 {
    font-size: 13px;
    margin: 8px auto;
    color: #3e2f14;
    font-family: sky;
}

.home-categories-section.section-padding-space .categories-slider {
    height: auto;
    padding: 5px 10px
}

.categories-slider.s-slider.slick-initialized.slick-slider .slick-list.draggable {
    padding: 12px;
}

@media(max-width: 991px) {
    .home>.section-padding-space:first-child {
        padding:unset
    }

    .home-categories-section.section-padding-space {
        padding: unset!important
    }

    .home-categories-section.section-padding-space .category-item {
        width: 125px
    }
}

.category-display-more-section {
    margin: 10px auto!important
}

button.more-button, a.more-button {
    min-width: unset;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 5px 40px;
    font-family: sky;
    color: #fff;
    background: var(--gr);
    border: unset;
    animation: textclip 30s linear infinite;
    background-size: 400% 400%;
}

.product-item div .btn {
    display: block;
    text-align: center;
    border: 0;
    padding: 5px 0;
    font-size: 1.1rem;
    border-radius: 50px;
    width: 95%;
    margin: auto;
    margin-bottom: 15px;
}

.prod-col {
    background: transparent;
    border-radius: 11px;
    padding: 0!important;
    margin: 0 10px;
    font-family: sky-bold;
    font-weight: unset!important;
    text-align: center
}

.section-padding-space {
    padding-top: 5px;
    padding-bottom: 5px
}

 

.home-products-section .section-title,section#product-description .d-flex.align-items-center {
    font-size: 2rem;
    margin: 10px auto;
    background: var(--gr);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600 !important;
    animation: textclip 15s linear infinite;
    background-size: 400% 400%;
}

@keyframes textclip {
    0% {
        background-position: 0%50%
    }

    50% {
        background-position: 100%50%
    }

    100% {
        background-position: 0%50%
    }
}

.home-products-section .section-title:before {
    display: inline-block;
    content: "";
    width: 30px;
    height: 30px;
    background: var(--logo2);
    margin-left: 10px;
    vertical-align: sub;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.products-slider-wrapper .category-products-display-more-section {
    margin: 15px auto!important
}

.prod-col {
    padding: unset!important;
    margin: 10px 5px;
    background: #f5f5f5;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 11px
}

.product-item {
    position: relative;
}

.products-list .prod-col, .bundle-offer-products .prod-col {
    padding: unset
}

.products-container .products-list {
    margin-bottom: 24px;
    justify-content: center
}

.products-container.pt-2 .prod-col, .products-container.pt-4 .prod-col {
    margin: 20px
}

.product-item {
    max-width: unset
}

.prod-col.slick-slide {
    box-shadow: 0px 3px 6px 0px #00000063;
}

@media(max-width: 991px) {
    .home-products-section .product-item {
        width:165px
    }

    .products-container.pt-2 .prod-col, .products-container.pt-4 .prod-col {
        width: 46%;
        margin: 10px auto
    }

    .product-item .section-product-price>div[style="color: #494949"]>span[style="color:#f25f5f;"] {
        position: absolute;
        bottom: 32vw;
        right: 5%;
        background: #f25f5f;
        color: #fff!important;
        padding: 0 0 0 10px;
        border-radius: 3px;
    }
}

.product-item>div>.btn.btn-product-card-out-of-stock {
    background: #9c9c9c!important
}

.product-item-out-of-stock {
    filter: unset
}

.add-to-cart-progress {
    display: none!important
}

.product-item>a>.box-1-1 {
    display: block!important
}

.product-item img {
    object-fit: cover!important
}

.product-item>a>.box-1-1>.content>div>img {
    border-radius: 11px
}

.product-item>a>.box-1-1>.content>div>span {
    position: absolute;
    left: 5px;
    top: 5px;
    max-width: 80%;
    padding: 4px 7px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 5px
}

.product-item>a>.product-title {
    font-family: sky-bold;
    font-weight: unset;
    color: #494949;
    font-size: 1.1rem;
    min-height: 36px;
    line-height: 1.5;
    margin: 5px 0!important;
    padding-right: 5px
}

.product-item .product-title>span {
    height: 36px;
    overflow: hidden;
    padding: 0 0 0 15px
}

.product-item>a>.product-card-rating-wrapper {
    padding-right: 5px
}

.product-item>.d-flex>.box-1-1 {
    order: 1
}

.product-item>.d-flex>.product-card-rating-wrapper {
    order: 4;
    margin-bottom: -34px;
    position: relative;
    top: -36px;
}

.product-item>.d-flex>.product-crd-spec {
    order: 3
}

.product-item>.d-flex>.product-title {
    order: 2
}

.product-item>.d-flex>.product-crd-spec .section-product-price {
    display: flex;
    flex-direction: column;
    margin: unset
}

.product-item .section-product-price {
    margin-top: 0;
    display: flex
}

.product-item>a>.product-crd-spec>small {
    display: none!important
}

.product-item>a>.product-crd-spec .product-price.theme-title-primary {
    font-family: sky-bold
}

.product-item>a>.product-crd-spec div[style="color: #494949"] {
    font-family: sky-bold
}

.product-item>a>.product-crd-spec div[style="color: #494949"] span {
    font-size: 1rem;
    color: #6c6c6c;
    line-height: 2;
    margin-right: 3px
}

.sc-7dvmpp-1.dfBDQI {
    display: none
}

.features-section.section-padding-space {
    background: #f6f6f6;
    margin: 15px;
    border-radius: 6px;
    padding: 10px 0 15px;
    box-shadow: 0 0 10px rgba(0,0,0,.3)
}

.features-section.section-padding-space>div {
    background: unset
}

.features-section.container>.feature>img {
    display: none
}

.features-section.container>.feature>p {
    font-family: sky-bold;
    font-size: 14px;
    color: #4c4c4c;
    padding: unset!important;
    margin: 0;
    margin-top: 5.5rem
}

.features-section.container>.feature:before {
    display: block;
    content: "";
    width: 70px!important;
    height: 60px;
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center
}

@keyframes float {
    0% {
        margin-top: -25px
    }

    50% {
        margin-top: -10px
    }

    100% {
        margin-top: -24px
    }
}

.features-section.container .feature.d-flex.align-items-center {
    position: relative!important
}

.features-section.container .feature.d-flex.align-items-center:nth-child(1):before {
    top: 20%;
    right: auto;
    animation-delay: .2s;
    position: absolute;
    animation-name: float;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite
}

.features-section.container .feature.d-flex.align-items-center:nth-child(2):before {
    top: 20%;
    right: auto;
    animation-delay: .5s;
    position: absolute;
    animation-name: float;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite
}

.features-section.container .feature.d-flex.align-items-center:nth-child(3):before {
    top: 20%;
    right: auto;
    animation-delay: .9s;
    position: absolute;
    animation-name: float;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite
}

.features-section.container>.feature:nth-child(1):before {
}

.features-section.container>.feature:nth-child(2):before {
}

.features-section.container>.feature:nth-child(3):before {
    background-size: 72px
}

@media(min-width: 992px) {
    .features-section.section-padding-space {
        display:none!important
    }
}

.testimonials-customer-card {
    background: #f6f6f6;
    color: #fff;
    font-family: sky;
    border-radius: 11px;
    border-right: 5px solid var(--2);
    box-shadow: 0 0 8px rgba(0,0,0,.2)
}

.testimonials-customer-card p {
    color: #4c4c4c
}

.testimonials-customer-card .icon-account_circle_black_24dp::before {
    display: inline-block;
    content: var(--ico);
    width: 20px;
    vertical-align: middle;
    line-height: 1
}

.testimonials-customer-card .testimonials-customer-icon {
    font-size: unset;
    line-height: 3
}

.rtl .testimonials-customer-name {
    font-size: 1.5rem;
    font-family: sky-bold;
    color: var(--2)
}

.testimonials-customer-card .testimonials-customer-text {
    margin: unset;
    padding: 0 10px;
    font-size: 1.35rem
}

.gallery-section.container.section-padding-space .section-title {
    color: #fff;
    text-align: center
}

.gallery.row {
    padding: 8px
}

.gallery.row .gallery-item.col-6.bottom-row {
    margin-top: unset
}

.gallery.row .gallery-item.col-6 {
    padding: 8px!important
}

.gallery.row .gallery-item.col-6 img {
    border-radius: 7px
}

@media(min-width: 992px) {
    .gallery-section.container.section-padding-space {
        width:100%
    }

    .gallery-section .gallery.row {
        flex-wrap: unset
    }

    .gallery-section .gallery.row>.gallery-item {
        flex: unset
    }
}

.gallery-section .section-title.theme-title-primary, .gallery-section .section-title.theme-text-primary {
    margin: 0!important
}

@media(max-width: 991px) {
    .footer * {
        font-weight:unset!important
    }

    .footer {
        text-align: center;
        display: block;
        position: relative;
        margin: 0;
        background: var(--3);
    }

    footer:before {
        display: block;
        content: "";
        width: 55%;
        height: 20vw;
        background: var(--logo);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 auto auto
    }

    .footer>footer .footer-store-section {
        padding: 10px;
        background: unset
    }

    .footer .footer-store-section .row>.col-lg-5 h1 {
        display: none
    }

    .footer .footer-store-section .row>.col-lg-5 p {
        font-family: sky;
        font-size: 1.1rem;
        text-align: justify;
        color: #292929;
        text-align: center;
    }

    .footer .footer-store-section .row>.col-lg-7 h1 {
        font-family: sky-bold;
        font-size: 22px;
        color: var(--1);
        text-align: center;
    }

    .footer .footer-store-section .row>.col-lg-7 p {
        font-family: sky;
        font-size: 13px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: .5rem
    }

    .footer .footer-store-section .row>.col-lg-7 p:hover {
        filter: brightness(70%)
    }

    .footer .footer-store-section .row>.col-lg-7 .col-lg-4 {
        flex: 60%!important;
        max-width: unset!important;
        position: relative;
    }

    .footer .footer-store-section .row>.col-lg-7 .col-lg-4:nth-child(3)>div:last-child {
        margin: unset!important
    }

    .footer-about-us-links-div.mt-5>.pb-2 {
        text-align: center
    }

    .store-section .social-icons a {
        background: #3e2f14;
        border-radius: 20px;
        position: relative;
        z-index: 27;
        padding: 1px;
        margin: 0 4.5px 8px;
    }

    .store-section .social-icons a:hover {
        filter: saturate(50%);
    }

    .social-icons.d-flex.flex-wrap {
        justify-content: center
    }

    .store-section .social-icons span {
        height: 35px;
        width: 35px;
        font-size: 22px;
        border: unset;
        padding: 5px;
        border-radius: unset
    }

    .store-section .social-icons a[href^="http://www.po"] {
        display: none!important
    }

    .store-section .social-icons a[href^="tel:966"] span {
        display: block!important;
        width: auto
    }

    .footer>footer .footer-companies .icons:nth-child(2) * {
        display: none!important
    }

    .footer>footer .footer-companies .icons:nth-child(2) {
        display: block;
        content: var(--pay);
        width: 70%;
        margin: 20px auto 10px
    }

    .footer>footer .footer-companies .icons:nth-child(1) {
        margin: auto!important;
        display: block!important
    }

    .footer-store-section-bars {
        min-height: unset;
        border-bottom: .5px solid var(--2)
    }

    .footer-store-section-bars>.justify-content-center>span {
        display: none
    }

    .footer-store-section-bars>.justify-content-center {
        height: 50px
    }

    .footer-store-section-bars>.justify-content-end * {
        display: block;
        font-family: sky;
        color: #4c4c4c;
        font-size: 14px
    }

    .footer .google-app-stores {
        padding: unset!important;
        margin: auto;
        gap: 10px
    }

    .footer .google-app-stores>a {
        padding: unset!important
    }

    .footer .google-app-stores>a>img {
        width: auto;
        height: 40px
    }

    .vat-crn-sections {
        margin-left: 0;
        margin-right: 0;
        padding: 20px 0 0!important
    }

    .store-section a {
        text-decoration: none;
        color: #292929;
        cursor: pointer
    }
}

@media(min-width: 992px) {
    .footer * {
        font-weight:unset!important
    }

    .footer {
        display: block;
        position: relative;
        background: var(--3)
    }

    .footer .footer-store-section .row>.col-lg-5:before {
        display: block;
        content: "";
        width: 220px;
        height: 80px;
        background: var(--logo);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 15px
    }

    .footer>footer .footer-store-section {
        padding: 40px 10px;
        background: unset
    }

    .footer .footer-store-section .row>.col-lg-5 h1 {
        display: none
    }

    .footer .footer-store-section .row>.col-lg-5 p {
        font-family: sky;
        font-size: 15px;
        text-align: justify
    }

    .footer .footer-store-section .row>.col-lg-7 h1 {
        font-family: sky-bold;
        font-size: 25px;
        color: var(--2)
    }

    .footer .footer-store-section .row>.col-lg-7 p {
        font-family: sky;
        font-size: 15px;
        text-align: justify;
        /* text-decoration: underline; */
    }

    .footer .footer-store-section .row>.col-lg-7 p:hover {
        filter: brightness(70%)
    }

    .footer .footer-store-section .row>.col-lg-7 .col-lg-4 {
        flex: 33.333%!important;
        max-width: unset!important;
        position: relative
    }

    .footer .footer-store-section .row>.col-lg-7 .col-lg-4:nth-child(3)>div:last-child {
        margin: unset!important
    }

    .store-section .social-icons a {
        background: var(--1);
        border-radius: 6px
    }

    .store-section .social-icons a:hover {
        filter: saturate(50%)
    }

    .store-section .social-icons span {
        height: 35px;
        width: 35px;
        font-size: 22px;
        border: unset;
        padding: 5px;
        border-radius: unset
    }

    .store-section .social-icons a[href^="http://www.po"] {
        display: none!important
    }

    .store-section .social-icons a[href^="tel:966"] span {
        display: block!important;
        width: auto
    }

    .footer>footer .footer-companies .icons:nth-child(2) * {
        display: none!important
    }

    .footer>footer .footer-companies .icons:nth-child(2) {
        display: block;
        content: var(--pay);
        width: 27%
    }

    .footer-store-section-bars {
        min-height: 80px;
        border-bottom: .5px solid var(--2)
    }

    .footer-store-section-bars>.justify-content-center>span {
        display: none
    }

    .footer-store-section-bars>.justify-content-center {
        width: 50%;
        height: 80px
    }

    .footer-store-section-bars>.justify-content-end * {
        display: block;
        font-family: sky;
        color: #4c4c4c;
        font-size: 14px
    }

    .footer .google-app-stores {
        padding: unset!important
    }

    .footer .google-app-stores>a {
        padding: unset!important;
        margin-left: 20px
    }

    .footer .google-app-stores>a>img {
        width: auto;
        height: 50px
    }
}

.footer-store-section-bars>.justify-content-center:after,.footer-store-section-bars>.justify-content-center:after {
    display: block;
    content: var(--con);
    font-family: sky;
    font-size: 14px;
    color: #4c4c4c;
    width: 100%
}

@media(max-width: 991px) {
    .slide-menu__slider>ul>li:nth-child(1) {
        grid-column: 1/3;
        content: var(--logo);
        height: 95px;
        padding: 5px 0;
        margin: 25px auto 10px;
        border-bottom: 0;
        filter: brightness(31.5);
    }

    .menu-header-theme-bg-primary {
        background: var(--2);
        filter: var(--header-primary-brightness);
    }

    #sliding-menu span {
        background: unset
    }

    .slide-menu__slider>ul {
        display: grid
    }

    .slide-menu__slider>ul>li {
        border-bottom: 1px solid #4c4c4c;
        border-top: 0
    }

    .slide-menu__slider a:before {
        border: 0;
        width: 40px;
        height: 40px;
        display: inline-block;
        content: "\e914 ";
        vertical-align: middle!important;
        font-family: almarai,sans-serif,icomoon!important;
        font-size: 19pt
    }

    div[style="color: #494949"] {
        /* margin: -14px -76px 1px 1px; */
    }

    .slide-menu__slider>ul>li:nth-child(18) .container .language-currency {
        margin: auto 0 auto auto!important
    }

    .slide-menu__slider>ul>li:nth-child(4), .slide-menu__slider>ul>li:nth-child(5), .slide-menu__slider>ul>li:nth-child(6), .slide-menu__slider>ul>li:nth-child(7), .slide-menu__slider>ul>li:nth-child(8), .slide-menu__slider>ul>li:nth-child(9), .slide-menu__slider>ul>li:nth-child(10), .slide-menu__slider>ul>li:nth-child(11), .slide-menu__slider>ul>li:nth-child(12), .slide-menu__slider>ul>li:nth-child(13), .slide-menu__slider>ul>li:nth-child(14), .slide-menu__slider>ul>li:nth-child(15), .slide-menu__slider>ul>li:nth-child(16), .slide-menu__slider>ul>li:nth-child(17), .slide-menu__slider>ul>li:nth-child(18), .slide-menu__slider>ul>li:nth-child(19), .slide-menu__slider>ul>li:nth-child(20), .slide-menu__slider>ul>li:nth-child(21), .slide-menu__slider>ul>li:nth-child(22) {
        grid-column: 1/3
    }

    #sliding-menu, #sliding-menu a, #sliding-menu span, #sliding-menu .d-flex button {
        color: var(--1);
        color: #fff;
        font-size: 15px;
    }

    .icon-account_circle_black_24dp:before {
        font-size: 15px!important
    }

    .slide-menu__slider>ul>li:nth-child(23) {
        grid-column: 1/3;
        margin-bottom: 20px
    }

    .slide-menu__slider>ul>li:nth-child(4) a, .slide-menu__slider>ul>li:nth-child(5) a, .slide-menu__slider>ul>li:nth-child(6) a, .slide-menu__slider>ul>li:nth-child(7) a, .slide-menu__slider>ul>li:nth-child(8) a, .slide-menu__slider>ul>li:nth-child(9) a, .slide-menu__slider>ul>li:nth-child(10) a, .slide-menu__slider>ul>li:nth-child(11) a, .slide-menu__slider>ul>li:nth-child(12) a, .slide-menu__slider>ul>li:nth-child(13) a, .slide-menu__slider>ul>li:nth-child(14) a, .slide-menu__slider>ul>li:nth-child(15) a, .slide-menu__slider>ul>li:nth-child(16) a, .slide-menu__slider>ul>li:nth-child(17) a, .slide-menu__slider>ul>li:nth-child(18) a, .slide-menu__slider>ul>li:nth-child(19) a, .slide-menu__slider>ul>li:nth-child(20) a, .slide-menu__slider>ul>li:nth-child(21) a, .slide-menu__slider>ul>li:nth-child(22) a, .slide-menu__slider>ul>li:nth-child(23) a {
        font-size: 1.2rem!important;
        padding: 5px;
        text-align: right;
    }

    .slide-menu__slider>ul>li:nth-last-child(4) {
        grid-column: 1/2;
        grid-row: 25/26;
        border: 0;
        margin: 5px auto 35px 5px
    }

    .slide-menu__slider>ul>li:nth-last-child(3) {
        grid-column: 2/3;
        grid-row: 25/26;
        border: 0;
        margin: 5px 5px 35px auto
    }

    .slide-menu__slider>ul>li:nth-child(2) {
        grid-column: 1/2;
        grid-row: 23/24;
        border: 0;
        margin: 5px auto 5px 5px
    }

    .slide-menu__slider>ul>li:nth-child(3) {
        grid-column: 2/3;
        grid-row: 23/24;
        border: 0;
        margin: 5px 5px 5px auto
    }

    .slide-menu__slider>ul>li:nth-last-child(4) a, .slide-menu__slider>ul>li:nth-last-child(3) a, .slide-menu__slider>ul>li:nth-child(2) a, .slide-menu__slider>ul>li:nth-child(3) a {
        text-align: center;
        background: var(--2-2);
        font-size: 10px!important;
        border-radius: 8px;
        padding: 10px 15px 8px;
        width: 100px;
        margin: auto;
    }

    .slide-menu__slider>ul>li:nth-last-child(4) a:before, .slide-menu__slider>ul>li:nth-last-child(3) a:before, .slide-menu__slider>ul>li:nth-child(2) a:before, .slide-menu__slider>ul>li:nth-child(3) a:before {
        display: block;
        width: 25px;
        margin: auto auto 0
    }

    .slide-menu__slider>ul>li:nth-last-child(4) a span {
        display: none
    }

    .slide-menu__slider>ul>li:nth-last-child(4) a:after {
        display: block;
        content: "الدفع والتوصيل";
        font-size: 15px;
    }

    .slide-menu__slider>ul>li:nth-last-child(4) a:before {
        content: "\e953 "!important;
        font-family: icomoon!important;
        background: 0;
        font-size: 19pt
    }

    .slide-menu__slider>ul>li:nth-last-child(3) a:before {
        content: "\f00b "!important;
        font-family: icomoon!important;
        background: 0;
        font-size: 19pt
    }

    .slide-menu__slider>ul>li:nth-child(2) a:before {
        content: "\e95a "!important;
        font-family: icomoon!important;
        background: 0;
        font-size: 19pt
    }

    .slide-menu__slider>ul>li:nth-child(3) a:before {
        content: "\e92b "!important;
        font-family: icomoon!important;
        background: 0;
        font-size: 19pt
    }

    .slide-menu__slider>ul>li:nth-last-child(2) {
        grid-area: 2/1/3/3;
        border-bottom: 0;
        margin: 10px 0;
        place-self: center
    }

    .slide-menu__slider>ul>li:nth-last-child(1)>div {
        display: none
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .container {
        grid-gap: 10px
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .container .currency-button-area, .slide-menu__slider>ul>li:nth-last-child(2) .container .vertical-line {
        display: none!important
    }

    :lang(ar) .slide-menu__slider>ul>li:nth-last-child(2) .container .language-currency {
        margin: -39px 87px auto auto!important
    }

    .currency-button-area, .language-button-area {
        min-width: unset;
        margin: auto
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .language-currency .c-btn {
        margin: auto!important
    }

    :lang(ar) .slide-menu__slider>ul>li:nth-last-child(2) .container .account-area {
        margin: 1px -11px 0 0
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .account-area .account-btn {
        min-width: 100px;
        margin: auto;
        padding: 3px 10px;
        border-radius: 6px;
        background: var(--2-2);
        border: 0;
        font-size: 9px;
        line-height: 1.8;
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .account-lang-currency {
        padding: unset
    }

    .account-lang-currency {
        border-bottom: 0 solid #d9c07a;
        padding: 8px 0
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .language-currency {
        padding: unset;
        min-width: 100px;
        margin: auto;
        padding: 3px;
        background: #f2f2f2!important;
        border: 0;
        max-height: 29.2px;
        border-radius: 6px;
        font-family: droid-naskh;
        font-size: 10px;
        line-height: 1.8
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .language-currency .c-btn {
        height: unset;
        line-height: 1.5;
        font-family: sky!important
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .language-currency span:before {
        font-size: 20px;
        line-height: unset;
        vertical-align: top
    }

    #langCurrecyModal .modal-body {
        padding: 15px 15px 25px!important
    }

    #langCurrecyModal .modal-content {
        border-radius: 11px;
        border: 0;
        background: #f2f2f2
    }

    #langCurrecyModal .modal-body form>button {
        font-size: 25px;
        top: 2px
    }

    #langCurrecyModal .row-language-currency .form-group>span {
        font-size: 12px
    }

    #langCurrecyModal .row-language-currency .form-group>div select {
        color: #000!important;
        border-radius: 5px;
        border: 0;
        margin-top: 10px
    }

    #langCurrecyModal .div-dropdown>div.form-group>div::after {
        border: 0
    }

    #langCurrecyModal .justify-content-end {
        display: block!important;
        border-radius: 0
    }

    #langCurrecyModal .justify-content-end button {
        width: 100%;
        color: #000!important;
        border-radius: 0;
        margin-top: -10px
    }

    #langCurrecyModal .justify-content-end .btn.btn-primary {
        color: #fff!important;
        background: #4c4c4c;
        border: 0;
        border-radius: 6px
    }

    #langCurrecyModal .justify-content-end .btn.btn-default {
        display: none!important
    }

    li>ul.slide-menu__submenu--active {
        display: grid!important;
        align-items: center;
        justify-content: center;
        padding: unset;
        grid-gap: 2rem
    }

    li>ul.slide-menu__submenu--active>li:first-child {
        grid-area: 1/1/2/3;
        margin: auto;
        height: unset;
        width: 100%;
        position: unset!important
    }

    li>ul.slide-menu__submenu--active>li:first-child>a {
        border: unset;
        padding: 5px 9px!important;
        margin: 15px auto;
        width: max-content;
        line-height: 1.5;
        font-size: 14px;
        border-radius: 6px;
        background: #f0f0f0!important
    }

    li>ul.slide-menu__submenu--active>li:first-child>a:before {
        display: none!important
    }

    li>ul.slide-menu__submenu--active>li:first-child>a>span {
        top: 1px
    }

    li>ul.slide-menu__submenu--active>li {
        margin: auto
    }

    li>ul.slide-menu__submenu--active>li>a {
        text-align: center;
        padding-bottom: 8px!important;
        line-height: 1;
        font-size: 12px
    }

    li>ul.slide-menu__submenu--active>li>a:before {
        display: block;
        content: "";
        margin: auto;
        margin-bottom: 10px
    }

    .slide-menu-ul-li, :not(.slide-menu-ul-li)+.slide-menu-ul-li {
        border: unset!important
    }

    :lang(ar) .slide-menu__slider>ul>li:nth-last-child(2) .container .language-currency {
        margin: auto 0 auto auto!important;
        display: none!important
    }

    .slide-menu__slider>ul>li:nth-last-child(2) .language-currency .c-btn {
        margin: auto!important
    }

    :lang(ar) .slide-menu__slider>ul>li:nth-last-child(2) .container .account-area {
        margin: auto auto auto 0
    }

    #sliding-menu>div>ul>li:nth-child(4)>a {
        grid-column: 1/3;
        position: relative;
        text-align: right;
    }
}

.breadcrumb-section {
    font-family: sky
}

.breadcrumb-section a {
    font-size: 12px
}

.breadcrumb {
    background-color: var(--2);
    border-radius: 0
}

.breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
    color: var(--1)
}

.breadcrumb-item:first-child:before {
    display: inline-block;
    content: "";
    width: 10px;
    height: 14px;
    background: var(--ico);
    background-repeat: repeat;
    background-size: auto;
    margin-left: 10px;
    vertical-align: sub;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center
}

.breadcrumb-item a {
    color: #fff;
    font-weight: unset
}

.subTitle-detail {
    background: var(--1)
}

.breadcrumb-item.active {
    color: #fff
}

.subTitle-detail .bread-title {
    margin-bottom: 0!important;
    color: #fff!important;
    font-family: sky-bold;
    font-size: 3rem
}

.subTitle-detail .bread-text {
    font-family: sky;
    margin: auto!important;
    color: #fff!important;
    padding: 0 15px;
    font-size: 12px
}

.products-container>div>.d-flex {
    display: block!important
}

.products-container>div>.d-flex>div {
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 15px
}

.products-container>div>.d-flex>div>div {
    margin: unset;
    width: 50%
}

.products-container>div>.d-flex>div>div label {
    display: none
}

.products-container>div>.d-flex>div>div i {
    display: none!important
}

.products-container>div>.d-flex>div>div:first-child>button, .products-container>div>.d-flex>div>div:last-child button {
    margin: auto!important;
    text-align: center!important;
    width: 90%;
    border: unset;
    font-family: sky-bold;
    background: var(--2);
    color: #fff;
    font-size: 1.2rem!important;
    padding: 10px 0!important
}

.products-container>div .dropdown {
    width: 100%;
    margin: auto!important;
    text-align: center
}

.main .products-container.pt-2>div:first-child span {
    font-family: sky
}

.main .filter-buttons-container>div.d-inline-block .btn-filter:focus, .main .filter-buttons-container>div.d-inline-block .btn-filter:hover {
    background: var(--2)!important;
    color: #fff!important;
    box-shadow: unset
}

#filters-form-collapse-sm .form-products-filter>span {
    font-family: sky-bold;
    font-size: 20px;
    font-weight: unset!important;
    text-align: center
}

#filters-form-collapse-sm .form-products-filter>div:nth-child(2) {
    font-family: sky;
    padding: 10px 30px 0
}

#filters-form-collapse-sm .form-products-filter>div:nth-child(2) input {
    border-radius: 6px
}

#filters-form-collapse-sm .form-products-filter>div:nth-child(3) {
    display: none!important
}

#filters-form-collapse-sm .form-products-filter>div:nth-child(4) {
    padding: 0 30px
}

#filters-form-collapse-sm .form-products-filter>div:nth-child(5) {
    justify-content: center!important;
    font-family: sky
}

#filters-form-collapse-sm #products-list-filter-form-clear {
    display: flex!important;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding: 5px;
    background: var(--1);
    border-radius: 3px
}

#filters-form-collapse-sm #products-list-filter-form-save {
    background: var(--2);
    border: 0;
    border-radius: 3px
}

#filters-form-collapse-sm #products-list-filter-form-save span {
    color: #fff!important
}

.sort-block-width .dropdown-menu {
    padding: 0;
    background: var(--1);
    border: 0;
    border-radius: 6px
}

.sort-block-width .dropdown-item {
    border-bottom: 1px dashed var(--2);
    font-family: sky;
    color: #292929
}

.sort-block-width .dropdown-item:last-child {
    border-bottom: 0
}

.main nav.products-pagination a {
    border-radius: 3px!important;
    margin: 0 5px;
    line-height: 1;
    border: 1px solid #eee
}

.products-pagination .page-link.active {
    color: #fff;
    background-color: var(--2)
}

#products-list-filter-form-checkbox-on-sale.btn.btn-sale-price {
    padding: 0
}

.products-details-page .lg-thumbs {
    display: flex!important;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding: 15px 25px;
    margin: auto;
    justify-content: center;
    background: unset
}

.products-details-page .lg-thumbs .col-3 {
    flex: 0 0 18%;
    max-width: 20%;
    margin-top: 5px;
    padding-right: 5px;
    padding-left: 5px
}

.products-details-page .slick-dots {
    display: none!important
}

.products-details-page .lg-thumbs .col-3 img {
    border-radius: 50px
}

.products-details-page .lg-thumbs .col-3>.box-1-1:hover, .products-details-page .lg-thumbs .col-3>.box-1-1:focus {
    border: 2px solid #fcd770!important;
    border-radius: 50px
}

.product.products-details-page .col-lg-6.col-product-info {
    padding: 15px;
    color: #292929;
    display: flex;
    flex-direction: column
}

.col-lg-6.col-product-info>.border-product {
    display: none
}

.col-lg-6.col-product-info>.border-product:last-child {
    display: block
}

.products-details-page .col-lg-6.col-product-info>section>h1 {
    text-align: center;
    font-size: 30px;
    font-family: sky-bold
}

.products-details-page .col-lg-6.col-product-info>section>.flex-lg-row {
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-bottom: 10px;
    font-family: sky
}

.products-details-page .col-lg-6.col-product-info>section>p {
    text-align: center;
    font-family: sky;
    font-size: 1.2rem;
    background: #f9f9f9;
    border-radius: 6px;
    padding: 15px
}

.products-details-page .col-lg-6.col-product-info>section>p a {
    color: var(--2)
}

.products-details-page .col-lg-6.col-product-info>section>.d-flex:nth-child(4)>div {
    margin: auto
}

.products-details-page .col-lg-6.col-product-info>section>.d-flex:nth-child(4)>div h1 {
    text-align: center;
    font-size: 22px;
    font-family: sky-bold;
    color: var(--2)
}

.products-details-page .col-lg-6.col-product-info>section>.d-flex:nth-child(4)>div .product-formatted-price-old {
    text-align: center;
    font-size: 20px;
    font-family: sky-bold
}

.products-details-page .col-lg-6.col-product-info>section>.d-flex:nth-child(4)>div .product-formatted-price-discount {
    text-align: center;
    font-size: 22px;
    font-family: sky-bold
}

.products-details-page .col-lg-6.col-product-info>div:nth-child(2) {
    display: none
}

.products-details-page .col-lg-6.col-product-info>.div-product-weight, .products-details-page .col-lg-6.col-product-info>.div-product-sku {
}

.products-details-page .col-lg-6.col-product-info>.div-product-weight h4, .products-details-page .col-lg-6.col-product-info>.div-product-sku h4 {
    font-size: 13px!important;
    color: #000!important;
    margin-top: 10px
}

.size-box #product-variants-options ul li.active {
    border: 0;
    color: #fff;
    background: var(--2);
    border-radius: 4px;
    font-family: sky
}

.size-box #product-variants-options ul li {
    border: 0;
    color: #fff;
    background: var(--2);
    border-radius: 4px;
    font-family: sky
}

.products-details-page .form-notify-me {
    border: unset;
    padding: 15px;
    border-radius: 6px;
    background: var(--2)
}

.products-details-page .form-notify-me>h4 {
    color: #fff!important
}

.products-details-page .col-lg-6.col-product-info .select-quantity-div>div.form-group {
    width: unset!important
}

.products-details-page .col-lg-6.col-product-info>form select {
    border: 0;
    border-radius: 3px!important
}

.rtl #product-variants-options>div.form-group>div::after, .select-quantity-div div.form-group>div::after {
    border: 0
}

.products-details-page .col-lg-6.col-product-info>form h4 {
    font-family: sky;
    font-size: 15px;
    margin: 0 0 10px!important;
    color: #292929;
    text-align: center
}

.col-lg-6.col-product-info>.product-buttons.d-block .btn.btn-add-to-cart {
    border: 0;
    background: linear-gradient(to left, var(--1), var(--1))!important;
    font-family: sky-bold;
    padding: 2px;
    font-size: 18px;
    line-height: 2;
    color: #fff
}

.form-control {
    font-size: 1rem;
    color: #495057;
    background-color: #fff;
    border: unset;
    border-radius: .5rem;
    font-family: sky
}

.col-lg-6.col-product-info>.product-buttons.d-block .btn.btn-add-to-cart:hover {
    background: linear-gradient(to right, var(--1), var(--1-1-h))!important
}

.col-lg-6.col-product-info>.product-buttons.d-block .btn.btn-add-to-cart:before {
    display: inline-block;
    content: var(--cart);
    width: 17px;
    margin: 0 3px;
    vertical-align: sub;
    padding: 7px 0 0;
    filter: brightness(26.5);
}

.col-lg-6.col-product-info>.border-product:last-child h4 {
    font-family: sky;
    text-align: center;
    font-size: 20px!important;
    font-weight: unset!important;
    color: #292929
}

.col-lg-6.col-product-info>.border-product:last-child>.product-icon {
    width: max-content;
    margin: auto
}

.col-lg-6.col-product-info .product-social i {
    color: #292929
}

.products-details-page .description-title {
    font-family: sky-bold;
    margin: 0 5px;
    font-size: 25px;
    color: var(--1);
}

.products-details-page .bundle-offer-details-section, .products-details-page #product-description, .products-details-page .review-details, section.mt-5.mb-5 {
    border-radius: 11px
}

.products-details-page .review-details>div>.align-items-center {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px!important
}

.products-details-page .review-details>div>.align-items-center>.rating-section .icon-star1:before {
    font-size: 2rem;
    color: #fff!important
}

.products-details-page .review-details>div>.align-items-center .product-card-rating-count {
    font-size: 1.5rem;
    color: #fff!important
}

.products-details-page .review-details .description-icon {
    display: none
}

.products-details-page .review-details>div>.align-items-center>button {
    font-size: 1.1rem;
    margin: auto;
    color: #fff;
    background: var(--2);
    border-radius: 7px;
    border: unset
}

.bundle-offer-details-section div[style="color: #494949"]>span[style="color:#f25f5f;"] {
    position: absolute;
    bottom: 30vw!important;
    right: 5%;
    background: #f25f5f;
    color: #fff!important;
    padding: 0 0 0 10px;
    border-radius: 3px
}

.bundle-offer-details-section>.align-items-center, #product-description>.align-items-center, section.mt-5.mt-5>.align-items-center {
    justify-content: center;
    padding-top: 10px
}

.bundle-offer-details-section .bundle-offer-title {
    color: #fff
}

.bundle-offer-details-section .bundle-offer-title-description {
    color: #fff;
    font-family: sky
}

.bundle-offer-details-section .bundle-offer-products .prod-col {
    margin: 7px;
    width: auto
}

.bundle-offer-details-section .icon-gift::before {
    content: "\f06d ";
    color: #fff
}

#product-description .description-paragrah.text-justify.description-text-clear {
    color: #292929!important;
    font-family: sky!important;
    text-align: justify!important;
    padding: 10px 20px
}

.products-details-page .description-icon {
    color: var(--1);
    font-size: 30px;
}

.products-details-page #product-description .description-paragrah * {
    text-align: justify!important;
    color: #292929!important;
    font-family: sky!important;
    line-height: 1.5!important;
    font-size: 1.2rem!important;
    background: unset!important
}

.products-details-page .product-selection>div {
    display: flex;
    flex-wrap: nowrap!important;
    flex-direction: row!important;
    overflow-x: scroll
}

.products-details-page .product-selection>div>.d-flex:nth-child(1) {
    display: none!important
}

.products-details-page .product-selection>div .card-table.options-table>.card {
    width: 180px!important;
    font-family: sky;
    border: 0;
    border-radius: 8px;
    margin: 0 10px;
    background: #eee;
    color: #292929
}

.products-details-page .card>.card-body>div>.col.m-col {
    text-align: center!important
}

.products-details-page .card>.card-body>div>.col.m-col>h4, .products-details-page .card>.card-body>div>.col.m-col>span {
    width: 100%
}

.products-details-page .product-selection .card-body .variant-name-sm {
    display: none!important
}

.products-details-page .product-selection .card-body .col.m-col>span:nth-child(2), .products-details-page .product-selection .card-body .col.m-col>h4 {
    float: left
}

.rtl .variant-image-wrapper {
    margin-right: 2px;
    margin-left: 2px;
    width: 90px;
    border: 0
}

.rtl .variant-image-wrapper img {
    border-radius: 5px
}

.products-details-page .mt-5.review-details .rating-section {
    margin: 0
}

.products-details-page .reviews-break-down-div.description-paragrah {
    display: none
}

.products-details-page .comment-section.description-paragrah>.card {
    display: flex;
    background-color: #f9f9f9;
    border: 0;
    border-radius: 9px;
    margin: 10px 5px!important;
    font-family: sky
}

.products-details-page .comment-section.description-paragrah p.card-name-customer {
    font-family: sky-bold;
    font-size: 16px!important;
    line-height: 1
}

.products-details-page .card-paragraph.text-justify.mt-2.user-review-text {
    padding: 10px 5px 0
}

.products-details-page #exampleModalCenter .modal-comment-content {
    border: 0;
    border-radius: 6px;
    font-family: sky-bold;
    background: #f9f9f9
}

.products-details-page #exampleModalCenter .modal-comment-content button {
    border-radius: 3px;
    font-family: sky
}

.products-details-page #exampleModalCenter .modal-product-title {
    font-size: 30px;
    color: var(--1)
}

.products-details-page #exampleModalCenter .custom-checkbox-label {
    font-family: sky;
    padding: 0 5px;
    color: #292929
}

.products-details-page #exampleModalCenter textarea {
    border-radius: 8px;
    font-family: sky
}

.btn.all-reviews-btn {
    font-family: sky;
    background: var(--2);
    color: #fff;
    text-decoration: unset;
    padding: 5px 10px;
    width: 100%
}

@media(min-width: 992px) {
    .bundle-offer-details-section div[style="color: #494949"]>span[style="color:#f25f5f;"] {
        display:none
    }
}

section.blog.mt-5.mb-5 .container>.blog-title {
    margin: 0!important;
    font-family: sky-bold;
    padding: 0 5px
}

section.blog.mt-5.mb-5 .container>.blog-title h1 {
    font-size: 25px!important;
    color: #fff!important;
    padding: 20px 0;
    text-align: center
}

section.blog.mt-5.mb-5 .container>.blog-text {
    margin: 0!important
}

section.blog.mt-5.mb-5 .container>.blog-text * {
    font-family: sky!important;
    color: #292929!important;
    background: unset!important;
    font-size: 1.1rem!important;
    text-align: justify!important;
    margin: unset!important;
    line-height: 2!important;
    text-indent: unset!important
}

section.blog.mt-5.mb-5 .container>.blog-text {
    text-align: justify!important;
    padding: 0 15px
}

section.blog.mt-5.mb-5 {
    margin: 0 10px
}

.gallery-section.container.section-padding-space {
    background: unset;
    width: 100%;
    border-radius: unset;
    padding: 0 15px!important;
    margin: 25px auto
}

.gallery-section.container.section-padding-space .section-title {
    color: var(--1);
    text-align: center;
    margin: 15px auto!important;
    font-size: 2.5rem
}

.gallery.row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: unset!important;
    gap: 10px;
    margin: unset!important;
    justify-content: center;
    align-items: center
}

.gallery.row .gallery-item.col-6:nth-child(1) {
    grid-column: 1/3
}

.gallery.row .gallery-item.col-6:nth-child(2) {
    grid-column: 1/2
}

.gallery.row .gallery-item.col-6:nth-child(3) {
    grid-column: 2/3
}

.gallery.row .gallery-item.col-6:nth-child(4) {
    grid-column: 1/3
}

.gallery.row .gallery-item.col-6.bottom-row {
    margin-top: unset
}

.gallery.row .gallery-item.col-6:hover {
    transform: scale(1.04)!important;
    transition: transform .35s ease!important
}

@media(max-width: 991px) {
    .gallery.row .gallery-item.col-6:nth-child(1) .box-1-1::before, .gallery.row .gallery-item.col-6:nth-child(4) .box-1-1::before {
        content:"";
        display: block;
        padding-top: 50%
    }
}

.gallery.row .gallery-item.col-6 {
    padding: 0!important;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 10px;
    flex: unset!important;
    max-width: unset
}

.gallery.row .gallery-item.col-6 img {
    border-radius: 7px;
    border-radius: 10px
}

@media(min-width: 992px) {
    .gallery-section.container.section-padding-space {
        width:100%
    }

    .gallery-section .gallery.row {
        flex-wrap: unset;
        gap: 10px
    }

    .gallery-section .gallery.row>.gallery-item {
        flex: unset
    }

    .gallery.row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: unset!important;
        gap: 15px!important;
        margin: unset!important;
        justify-content: center;
        align-items: center
    }

    .gallery.row .gallery-item.col-6:nth-child(1) {
        grid-column: 1/2
    }

    .gallery.row .gallery-item.col-6:nth-child(2) {
        grid-column: 2/3
    }

    .gallery.row .gallery-item.col-6:nth-child(3) {
        grid-column: 3/4
    }

    .gallery.row .gallery-item.col-6:nth-child(4) {
        grid-column: 4/5
    }
}

.card-categories-wrapper {
    border-radius: 5px;
    margin-bottom: 15px;
    border: 0;
    background: #f6f6f6;
    box-shadow: 0 0 5px rgba(0,0,0,.3)
}

.card-categories-wrapper #accordion .card-header-category {
    font-family: sky-bold
}

.card-categories-wrapper #accordion .card-body {
    padding-top: unset!important
}

.card-categories-wrapper #accordion .categories-title {
    font-family: sky;
    margin: 5px 0;
    font-size: 15px
}

.styles__tabby-promo-snippet--6ce13 {
    max-width: unset;
    background: #f9f9f9;
    border: unset;
    font-family: sky;
    position: relative
}

.styles__tabby-promo-snippet__content--a65de {
    font-family: sky!important;
    width: 100%;
    text-align: center
}

.styles__tabby-promo-snippet--6ce13.styles__tabby-promo-snippet--rtl--fa1a6 {
    max-width: unset;
    background: #f9f9f9;
    border: unset;
    font-family: sky;
    position: relative
}

.styles__tabby-promo-snippet__logo-img--18657 {
    top: 0%;
    left: 10px;
    animation-delay: .2s;
    position: absolute;
    animation-name: float;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite
}

.styles__tabby-promo-snippet__link--04e0f {
    display: block!important;
    color: var(--2)!important;
    transition: opacity .2s;
    text-decoration: underline!important;
    text-align: center
}

.cart-view .cart-empty .d-flex span {
    display: block;
    content: var(--cart);
    width: 25%;
    margin: unset
}

.cart-view .cart-empty .d-flex span>span {
    display: none!important
}

.cart-view .cart-empty .d-flex div {
    width: 80%
}

.cart-view .cart-empty .d-flex div>a {
    display: block;
    border: 0;
    border-radius: 4px;
    margin: auto!important;
    padding: 10px 0;
    line-height: 1.5;
    background: var(--1);
    color: #fff;
    font-family: sky
}

.rtl .cart-badge {
    right: unset;
    left: 12px;
    top: -2px
}

.cart-view .template_for_cart_products_list>div {
    flex: 0 0 32%
}

.cart-view>.cart-products-with-totals .section-cart-products .cart-product-row-wrapper {
    border: 0;
    border-radius: 11px;
    background: var(--2);
    margin: 10px auto;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    position: relative;
    width: 100%
}

.cart-product-error-messages {
    color: #721c24;
    background-color: #f8d7da;
    margin: 5px auto;
    border-radius: unset;
    font-family: sky;
    display: block!important;
    text-align: center;
    border-radius: 10px;
    position: absolute;
    top: 5rem;
    font-size: 1rem!important;
    left: 22%;
    right: auto
}

.cart-view .cart-product-row .icon-delete::before {
    content: "\f05c ";
    font-family: icomoon;
    font-size: 2rem;
    font-weight: unset
}

.cart-view .cart-product-row>.cart-products-action>div {
    margin: 0
}

.cart-view .cart-product-row>.cart-products-action select {
    margin: 0;
    border: 2px solid #eee;
    background: #fff;
    width: 30%;
    padding: 5px!important
}

.cart-view .cart-product-row>.cart-products-action select {
    margin: unset;
    border: unset;
    background: #fff;
    width: 90%;
    padding: 4px 9px!important;
    border-radius: 50px
}

.profile-item-image {
    width: 18px;
    margin-left: 5px
}

.icon-import_contacts::before {
    content: var(--ico)
}

.icon-arrow_drop_down1::before {
    font-size: 2rem;
    display: block;
    height: 25px;
    width: 18px
}

.profile-section-dropdown .dropdown-menu>li>a {
    padding: 10px 15px;
    color: #fff;
    border-top: 1px solid #fff
}

body>h1 {
    display: none
}

body>h1 {
    display: none
}

body>div[id*=gb-widget]>div[size="50"] {
    display: none
}

.store-section .social-icons span {
    color: #fff;
}

.home-categories-section.section-padding-space .category-item:hover img {
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: .6s;
    transform: translate(0px, -5px);
}

@keyframes pulse-large {
    from {
        transform: scale3d(1,1,1)
    }

    50% {
        transform: scale3d(1.15,1.15,1) rotate(5deg)
    }

    to {
        transform: scale3d(1,1,1) rotate(0)
    }
}

.header-theme-icon-primary {
    color: #ffffff;
}

.size-box #product-variants-options ul li.active {
    border: 1px solid var( --1);
    color: #ffffff;
    background: var( --1);
}

/**social media **/
svg.x-icon-twitter.d-flex.align-items-center.justify-content-center g {
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(148deg) brightness(108%) contrast(101%);
}

.store-section .social-icons span {
    position: relative;
    z-index: 7;
}

.store-section .social-icons a {
    background: var(--1);
    border-radius: 20px;
    margin: 5px 5.5px 5px;
    position: relative;
    padding: 1px;
}

.store-section .social-icons a:after {
    content: "";
    width: 110%;
    height: 100%;
    background: transparent;
    position: absolute;
    left: -3px;
    border-radius: 50%;
    border: 1px solid #740919;
    top: 0;
    animation: myAnim 14s ease-out 0s infinite normal forwards;
}

.store-section .social-icons a:before {
    content: "";
    width: 114%;
    height: 105%;
    background: transparent;
    position: absolute;
    left: -1px;
    border-radius: 50%;
    border: 1px solid #2a053a;
    top: -1px;
    animation: myAnim1 7s linear 0s infinite normal forwards;
}

@keyframes myAnim1 {
    0% {
        transform: rotate(360deg)
    }

    100% {
        transform: rotate(0)
    }
}

@keyframes myAnim {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(360deg)
    }
}

/**slide menu icons**/
#sliding-menu > div > ul > li:nth-child(500) > a:before {
    content: "";
    background: url(https://i.ibb.co/5k9HHL9/New-Project-1.png);
    background-size: contain;
    width: 25px;
    height: 25px;
    margin-left: 2px;
}

body::-webkit-scrollbar {
    width: 1em;
}

body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

body::-webkit-scrollbar-thumb {
    background-color: #3e2f14;
    outline: 1px solid slategrey;
}

body[data-template="home"]:before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--ff) var(--logo);
    position: fixed;
    top: 0;
    z-index: 99999999999999999 !important;
    background-size: 250px !important;
    background-repeat: no-repeat;
    background-position: center !important;
    animation-name: logobg;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    bottom: 0;
    left: 0;
    right: 0;
}

@keyframes logobg {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        visibility: hidden
    }
}

:root {
    --1: #3e2f14;
    --1-1-h: #3e2f1452;
    --2: #d19a2a;
    --2-2: #845d0f;
    --bg: #ededed;
    --3: #edecef;
    --ff: #ededed;
    --00: #2d2d2d;
    --primary-color: #2d2d2d!important;
    --text-color-primary-bg: #ededed!important;
    --sub-primary-color: #282323!important;
    --header-primary-color: #fff!important;
    --menu-header-primary-color: #fff!important;
    --header-primary-brightness: brightness(100%)!important;
    --menu-header-text-color-primary-bg: #000000!important;
    --header-text-color-primary-bg: #191919!important;
    --footer-primary-color: #fff!important;
    --footer-text-color-primary-bg: #000000!important;
    --menu-header-text-color-primary-bg: #191919!important;
    --sh: 0 0 transparent, 0 0 transparent, 0 3px 16px rgba(47, 83, 109, .12157);
    --gr: linear-gradient(45deg,var(--1) 0,var(--1) 0,var(--2) 39%,var(--2) 100%);
    --con: "  صنع بحب برايم العربية";
    --sh: 0 0 transparent, 0 0 transparent, 0 3px 16px rgba(47, 83, 109, .12157);
    --logo2: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 52.74 57.08'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: url(%23linear-gradient); %7D .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10 %7B stroke-width: 0px; %7D .cls-2 %7B fill: url(%23linear-gradient-6); %7D .cls-3 %7B fill: url(%23linear-gradient-5); %7D .cls-4 %7B fill: url(%23linear-gradient-2); %7D .cls-5 %7B fill: url(%23linear-gradient-7); %7D .cls-6 %7B fill: url(%23linear-gradient-3); %7D .cls-7 %7B fill: url(%23linear-gradient-9); %7D .cls-8 %7B fill: url(%23linear-gradient-8); %7D .cls-9 %7B fill: url(%23linear-gradient-10); %7D .cls-10 %7B fill: url(%23linear-gradient-4); %7D %3C/style%3E%3ClinearGradient id='linear-gradient' x1='39.21' y1='27.33' x2='43.78' y2='27.33' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233e2f14'/%3E%3Cstop offset='1' stop-color='%23d19a2a'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='34.28' y1='41.56' x2='35' y2='41.56' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-3' x1='33.6' y1='39.33' x2='43.83' y2='39.33' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-4' x1='29.67' y1='50.8' x2='31.93' y2='50.8' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-5' x1='26.28' y1='32.17' x2='30.55' y2='32.17' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-6' x1='18.25' y1='54.96' x2='28.25' y2='54.96' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-7' x1='0' y1='26.23' x2='48.78' y2='26.23' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-8' x1='29.18' y1='27.64' x2='33.74' y2='27.64' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-9' x1='16.72' y1='22.16' x2='52.74' y2='22.16' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-10' x1='16.72' y1='18.05' x2='52.74' y2='18.05' xlink:href='%23linear-gradient'/%3E%3C/defs%3E%3Cpath class='cls-1' d='M41.23,24.81c.11.14.2.25.28.37.46.65,1.01,1.16,1.71,1.55.62.35.72.85.28,1.4-.51.63-1.11,1.18-1.62,1.71-.8-.67-1.53-1.26-2.24-1.89-.54-.47-.58-.7-.14-1.25.52-.65,1.12-1.24,1.72-1.89Z'/%3E%3Cpath class='cls-4' d='M34.47,43.62c0,.46,0,.93.01,1.41.19-.61.34-1.25.42-1.92.22-1.75.1-3.42-.62-5.03.04.59.08,1.19.11,1.78.07,1.26.07,2.53.08,3.76Z'/%3E%3Cpath class='cls-6' d='M34,34.53c.1,1.16.2,2.36.28,3.55.72,1.61.84,3.28.62,5.03-.08.66-.23,1.3-.42,1.92,0,.19,0,.38,0,.56.02.97-.16,1.88-.36,2.72-.03.15-.05.31-.07.49,0,.05-.01.09-.02.14.74-.7,1.41-1.49,1.96-2.35,1.11-1.75,1.9-3.64,2.13-5.76.24-2.17-.23-4.1-1.54-5.83-.38-.51-.8-.99-1.2-1.49.03-.04.06-.09.08-.13,1.45.32,2.9.38,4.36.11,1.47-.27,2.81-.81,3.99-1.87-.14-.03-.18-.05-.2-.04-1.8.69-3.59.64-5.36-.12-.97-.42-1.94-.85-2.91-1.28-.58-.26-1.16-.42-1.75-.49.08.98.16,1.95.24,2.93.05.63.1,1.26.16,1.89Z'/%3E%3Cpath class='cls-10' d='M31.83,50.36c-.06-.15-.15-.35-.16-.6,0-.05,0-.11,0-.16-.45.5-.91.98-1.35,1.48-.22.25-.43.52-.65.78.05.05.1.1.15.15.7-.47,1.42-.92,2.11-1.39l-.05-.15s-.03-.07-.04-.11Z'/%3E%3Cpath class='cls-3' d='M30.21,30.63c-.01-.13-.03-.27-.04-.4-1.29.48-2.48,1.18-3.66,1.88-.08.05-.12.17-.22.33,1.56.31,2.97.87,4.27,1.68-.05-.48-.09-.96-.14-1.42-.07-.69-.14-1.38-.21-2.06Z'/%3E%3Cpath class='cls-2' d='M25.37,53.1c-.41.49-.76,1.02-1.16,1.53-.36.45-.75.49-1.17.1-.58-.54-1.13-1.11-1.72-1.63-.41-.37-.81-.33-1.16.1-.27.33-.5.69-.73,1.05-.26.4-.55.76-1.19.81.57.6,1.05,1.14,1.58,1.63.58.54,1.03.48,1.51-.16.29-.39.56-.8.84-1.2.4-.55.61-.59,1.1-.14.53.48,1,1.02,1.54,1.49.66.58,1.04.51,1.57-.19.05-.06.07-.14.12-.2.45-.55.66-1.38,1.73-1.4-.71-.69-1.31-1.3-1.95-1.86-.28-.24-.66-.27-.93.05Z'/%3E%3Cpath class='cls-5' d='M29.69,40.95c-.04-.28-.07-.65-.26-.8-.91-.74-1.87-1.43-2.83-2.15,0,.38-.03.86.03,1.33.23,1.92.22,3.82-.23,5.7-.3,1.26-.77,2.45-1.76,3.35-.77.71-1.71.9-2.42.52.46-1.17,1.01-2.31,1.36-3.51.81-2.81.85-5.68.5-8.57-.08-.64-.35-1.16-.85-1.58-.71-.59-1.4-1.21-2.17-1.88-.01.24-.03.39-.03.55.04,2.35.2,4.69-.21,7.05-.41,2.4-1.19,4.61-2.68,6.51-.49.56-1.76,1.61-4.05,1.23v-.02c-.4-.24-.8-.5-1.19-.76-.11-.3-.29-.59-.55-.87-.41-.36-.89-.58-1.44-.62-1.9-1.56-3.58-3.39-4.98-5.43-1.06-1.57-1.94-3.25-2.63-5.01l-.26-.66c-.05-.11-.08-.22-.12-.34l-.11-.34-.22-.68-.11-.34c-.03-.11-.06-.23-.09-.34-.11-.46-.23-.92-.34-1.38l-.25-1.4c-.05-.23-.06-.47-.09-.71l-.08-.71c-.07-.47-.07-.95-.1-1.42l-.03-.71c0-.24,0-.48,0-.71v-.71s.06-.71.06-.71c.13-1.9.46-3.79,1-5.62,1.09-3.66,3-7.08,5.56-9.94,1.28-1.43,2.72-2.72,4.29-3.84l.29-.21c.1-.07.2-.13.3-.2l.6-.4c.2-.14.41-.25.62-.38l.62-.37.64-.34c.21-.11.42-.23.64-.33l.66-.31.33-.15c.11-.05.22-.09.33-.14,3.55-1.49,7.45-2.2,11.33-2.03,3.87.17,7.72,1.2,11.16,3.02,3.45,1.82,6.49,4.41,8.85,7.54-2.28-3.18-5.28-5.86-8.72-7.77C36.62,1.46,32.74.32,28.8.06c-3.95-.27-7.96.36-11.65,1.82-.12.05-.23.09-.35.13l-.34.15-.68.3c-.23.1-.45.22-.67.33l-.67.33-.65.36c-.22.12-.44.24-.65.37l-.63.4c-.11.07-.21.13-.32.2l-.31.21c-1.64,1.12-3.17,2.43-4.54,3.88-2.73,2.92-4.81,6.44-6.04,10.27-.61,1.91-1.01,3.89-1.18,5.9l-.06.75-.03.75c0,.25-.02.5-.02.75l.02.75c.01.5.01,1.01.07,1.51l.07.75c.03.25.04.5.08.75l.23,1.49c.1.49.22.99.33,1.48.03.12.05.25.09.37l.11.36.21.73.11.36c.03.12.07.24.12.36l.26.71c.7,1.9,1.6,3.72,2.7,5.43,1.26,1.94,2.77,3.72,4.48,5.29-.1.14-.18.24-.26.34-.68.81-.97,1.77-.99,2.81-.02.72.2,1.37.92,1.68.95.41,1.91.44,2.75-.2.55-.43.99-1.01,1.52-1.56,0,0,0,0,0-.01.07.04.13.09.2.13l.02-.04c.16.14,1.68,1.43,3.7,1.61,1.23.28,2.5.02,3.51-.96.05-.05.11-.11.16-.16.7-.51,1.08-.91,1.25-1.23.09-.09.18-.18.26-.26.63.49,1.26.95,1.87,1.45,1.34,1.11,2.87,1.02,3.93.09.92-.8,1.45-1.9,1.76-3.06.63-2.31.54-4.66.22-7ZM10.14,50.88c-.58-.5-.59-1.53-.04-2.46.14.11.28.23.42.34.15.75.1,1.45-.38,2.12Z'/%3E%3Cpath class='cls-8' d='M30.78,5.15c.74,2.12,1.48,4.23,2.2,6.36.09.27.01.59.01.96-.72-.23-.83-.93-1.37-1.37-.02.25-.05.41-.05.57.13,2.44.25,4.88.41,7.31.12,1.85.29,3.7.44,5.55.22,2.72.45,5.44.66,8.17.19,2.4.42,4.8.55,7.21.1,1.9.06,3.8.1,5.7.02.87-.14,1.7-.34,2.54-.13.57-.06,1.19-.4,1.72-.1.15-.27.25-.41.37-.06-.17-.16-.34-.16-.51-.1-2.08-.15-4.17-.29-6.24-.13-2.05-.35-4.09-.53-6.14-.14-1.57-.29-3.15-.44-4.72-.19-1.97-.42-3.93-.58-5.9-.24-2.98-.44-5.96-.63-8.95-.18-2.94-.32-5.88-.5-8.81-.02-.36-.2-.7-.26-1.06-.04-.22-.05-.5.05-.68.35-.62.76-1.22,1.14-1.83.07-.1.1-.22.15-.34.08.03.15.06.23.09Z'/%3E%3Cpath class='cls-7' d='M52.73,17.28c-.07-.91-.56-1.44-1.46-1.56-.29-.04-.61-.08-.89,0-1.19.34-2.4.62-3.53,1.1-3.79,1.6-7.57,3.18-11.58,4.14-.78.19-1.56.36-2.34.5.04.47.08.95.12,1.41.04.53.09,1.07.13,1.6,0,.04,0,.09.01.13,2.16-.49,4.27-1.14,6.36-1.87,2.63-.92,5.22-1.97,7.84-2.92.88-.32,1.8-.51,2.72-.72.21-.05.47.1.7.15-.06.23-.06.5-.19.68-.66.86-1.33,1.71-2.03,2.53-1.43,1.67-2.68,3.44-3.12,5.65-.04.18-.03.36-.04.55.19-.11.29-.23.36-.37.93-1.97,2.4-3.54,3.79-5.18.97-1.16,1.81-2.44,2.64-3.71.41-.62.58-1.35.52-2.11Z'/%3E%3Cpath class='cls-9' d='M24.22,21.75c-1.86-.29-3.59-.88-5.04-2.14-1.09-.94-1.71-2.11-1.54-3.55.11-.94.35-1.87.59-2.79.19-.71.49-1.39.73-2.08.05-.15.04-.32.07-.61-.18.13-.24.16-.28.21-.07.08-.14.17-.2.26-1.61,2.62-2.2,5.47-1.64,8.48.56,2.98,2.54,4.7,5.37,5.49,2.45.68,4.94.55,7.42.21-.08-1.06-.16-2.16-.24-3.31-1.74.14-3.49.11-5.26-.17Z'/%3E%3C/svg%3E");
    --logo: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 139.73 57.08'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: url(%23linear-gradient); %7D .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11 %7B stroke-width: 0px; %7D .cls-2 %7B fill: url(%23linear-gradient-6); %7D .cls-3 %7B fill: url(%23linear-gradient-5); %7D .cls-4 %7B fill: url(%23linear-gradient-2); %7D .cls-5 %7B fill: url(%23linear-gradient-7); %7D .cls-6 %7B fill: url(%23linear-gradient-3); %7D .cls-7 %7B fill: url(%23linear-gradient-9); %7D .cls-8 %7B fill: url(%23linear-gradient-8); %7D .cls-9 %7B fill: url(%23linear-gradient-10); %7D .cls-10 %7B fill: url(%23linear-gradient-4); %7D .cls-11 %7B fill: %231d1c1a; %7D %3C/style%3E%3ClinearGradient id='linear-gradient' x1='126.21' y1='27.33' x2='130.78' y2='27.33' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233e2f14'/%3E%3Cstop offset='1' stop-color='%23d19a2a'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='121.27' y1='41.56' x2='122' y2='41.56' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-3' x1='120.6' y1='39.33' x2='130.83' y2='39.33' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-4' x1='116.66' y1='50.8' x2='118.92' y2='50.8' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-5' x1='113.28' y1='32.17' x2='117.55' y2='32.17' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-6' x1='105.25' y1='54.96' x2='115.25' y2='54.96' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-7' x1='87' y1='26.23' x2='135.77' y2='26.23' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-8' x1='116.17' y1='27.64' x2='120.73' y2='27.64' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-9' x1='103.71' y1='22.16' x2='139.73' y2='22.16' xlink:href='%23linear-gradient'/%3E%3ClinearGradient id='linear-gradient-10' x1='103.71' y1='18.05' x2='139.73' y2='18.05' xlink:href='%23linear-gradient'/%3E%3C/defs%3E%3Cg%3E%3Cpath class='cls-1' d='M128.23,24.81c.11.14.2.25.28.37.46.65,1.01,1.16,1.71,1.55.62.35.72.85.28,1.4-.51.63-1.11,1.18-1.62,1.71-.8-.67-1.53-1.26-2.24-1.89-.54-.47-.58-.7-.14-1.25.52-.65,1.12-1.24,1.72-1.89Z'/%3E%3Cpath class='cls-4' d='M121.46,43.62c0,.46,0,.93.01,1.41.19-.61.34-1.25.42-1.92.22-1.75.1-3.42-.62-5.03.04.59.08,1.19.11,1.78.07,1.26.07,2.53.08,3.76Z'/%3E%3Cpath class='cls-6' d='M121,34.53c.1,1.16.2,2.36.28,3.55.72,1.61.84,3.28.62,5.03-.08.66-.23,1.3-.42,1.92,0,.19,0,.38,0,.56.02.97-.16,1.88-.36,2.72-.03.15-.05.31-.07.49,0,.05-.01.09-.02.14.74-.7,1.41-1.49,1.96-2.35,1.11-1.75,1.9-3.64,2.13-5.76.24-2.17-.23-4.1-1.54-5.83-.38-.51-.8-.99-1.2-1.49.03-.04.06-.09.08-.13,1.45.32,2.9.38,4.36.11,1.47-.27,2.81-.81,3.99-1.87-.14-.03-.18-.05-.2-.04-1.8.69-3.59.64-5.36-.12-.97-.42-1.94-.85-2.91-1.28-.58-.26-1.16-.42-1.75-.49.08.98.16,1.95.24,2.93.05.63.1,1.26.16,1.89Z'/%3E%3Cpath class='cls-10' d='M118.83,50.36c-.06-.15-.15-.35-.16-.6,0-.05,0-.11,0-.16-.45.5-.91.98-1.35,1.48-.22.25-.43.52-.65.78.05.05.1.1.15.15.7-.47,1.42-.92,2.11-1.39l-.05-.15s-.03-.07-.04-.11Z'/%3E%3Cpath class='cls-3' d='M117.2,30.63c-.01-.13-.03-.27-.04-.4-1.29.48-2.48,1.18-3.66,1.88-.08.05-.12.17-.22.33,1.56.31,2.97.87,4.27,1.68-.05-.48-.09-.96-.14-1.42-.07-.69-.14-1.38-.21-2.06Z'/%3E%3Cpath class='cls-2' d='M112.37,53.1c-.41.49-.76,1.02-1.16,1.53-.36.45-.75.49-1.17.1-.58-.54-1.13-1.11-1.72-1.63-.41-.37-.81-.33-1.16.1-.27.33-.5.69-.73,1.05-.26.4-.55.76-1.19.81.57.6,1.05,1.14,1.58,1.63.58.54,1.03.48,1.51-.16.29-.39.56-.8.84-1.2.4-.55.61-.59,1.1-.14.53.48,1,1.02,1.54,1.49.66.58,1.04.51,1.57-.19.05-.06.07-.14.12-.2.45-.55.66-1.38,1.73-1.4-.71-.69-1.31-1.3-1.95-1.86-.28-.24-.66-.27-.93.05Z'/%3E%3Cpath class='cls-5' d='M116.69,40.95c-.04-.28-.07-.65-.26-.8-.91-.74-1.87-1.43-2.83-2.15,0,.38-.03.86.03,1.33.23,1.92.22,3.82-.23,5.7-.3,1.26-.77,2.45-1.76,3.35-.77.71-1.71.9-2.42.52.46-1.17,1.01-2.31,1.36-3.51.81-2.81.85-5.68.5-8.57-.08-.64-.35-1.16-.85-1.58-.71-.59-1.4-1.21-2.17-1.88-.01.24-.03.39-.03.55.04,2.35.2,4.69-.21,7.05-.41,2.4-1.19,4.61-2.68,6.51-.49.56-1.76,1.61-4.05,1.23v-.02c-.4-.24-.8-.5-1.19-.76-.11-.3-.29-.59-.55-.87-.41-.36-.89-.58-1.44-.62-1.9-1.56-3.58-3.39-4.98-5.43-1.06-1.57-1.94-3.25-2.63-5.01l-.26-.66c-.05-.11-.08-.22-.12-.34l-.11-.34-.22-.68-.11-.34c-.03-.11-.06-.23-.09-.34-.11-.46-.23-.92-.34-1.38l-.25-1.4c-.05-.23-.06-.47-.09-.71l-.08-.71c-.07-.47-.07-.95-.1-1.42l-.03-.71c0-.24,0-.48,0-.71v-.71s.06-.71.06-.71c.13-1.9.46-3.79,1-5.62,1.09-3.66,3-7.08,5.56-9.94,1.28-1.43,2.72-2.72,4.29-3.84l.29-.21c.1-.07.2-.13.3-.2l.6-.4c.2-.14.41-.25.62-.38l.62-.37.64-.34c.21-.11.42-.23.64-.33l.66-.31.33-.15c.11-.05.22-.09.33-.14,3.55-1.49,7.45-2.2,11.33-2.03,3.87.17,7.72,1.2,11.16,3.02,3.45,1.82,6.49,4.41,8.85,7.54-2.28-3.18-5.28-5.86-8.72-7.77-3.44-1.92-7.31-3.06-11.26-3.32-3.95-.27-7.96.36-11.65,1.82-.12.05-.23.09-.35.13l-.34.15-.68.3c-.23.1-.45.22-.67.33l-.67.33-.65.36c-.22.12-.44.24-.65.37l-.63.4c-.11.07-.21.13-.32.2l-.31.21c-1.64,1.12-3.17,2.43-4.54,3.88-2.73,2.92-4.81,6.44-6.04,10.27-.61,1.91-1.01,3.89-1.18,5.9l-.06.75-.03.75c0,.25-.02.5-.02.75l.02.75c.01.5.01,1.01.07,1.51l.07.75c.03.25.04.5.08.75l.23,1.49c.1.49.22.99.33,1.48.03.12.05.25.09.37l.11.36.21.73.11.36c.03.12.07.24.12.36l.26.71c.7,1.9,1.6,3.72,2.7,5.43,1.26,1.94,2.77,3.72,4.48,5.29-.1.14-.18.24-.26.34-.68.81-.97,1.77-.99,2.81-.02.72.2,1.37.92,1.68.95.41,1.91.44,2.75-.2.55-.43.99-1.01,1.52-1.56,0,0,0,0,0-.01.07.04.13.09.2.13l.02-.04c.16.14,1.68,1.43,3.7,1.61,1.23.28,2.5.02,3.51-.96.05-.05.11-.11.16-.16.7-.51,1.08-.91,1.25-1.23.09-.09.18-.18.26-.26.63.49,1.26.95,1.87,1.45,1.34,1.11,2.87,1.02,3.93.09.92-.8,1.45-1.9,1.76-3.06.63-2.31.54-4.66.22-7ZM97.14,50.88c-.58-.5-.59-1.53-.04-2.46.14.11.28.23.42.34.15.75.1,1.45-.38,2.12Z'/%3E%3Cpath class='cls-8' d='M117.77,5.15c.74,2.12,1.48,4.23,2.2,6.36.09.27.01.59.01.96-.72-.23-.83-.93-1.37-1.37-.02.25-.05.41-.05.57.13,2.44.25,4.88.41,7.31.12,1.85.29,3.7.44,5.55.22,2.72.45,5.44.66,8.17.19,2.4.42,4.8.55,7.21.1,1.9.06,3.8.1,5.7.02.87-.14,1.7-.34,2.54-.13.57-.06,1.19-.4,1.72-.1.15-.27.25-.41.37-.06-.17-.16-.34-.16-.51-.1-2.08-.15-4.17-.29-6.24-.13-2.05-.35-4.09-.53-6.14-.14-1.57-.29-3.15-.44-4.72-.19-1.97-.42-3.93-.58-5.9-.24-2.98-.44-5.96-.63-8.95-.18-2.94-.32-5.88-.5-8.81-.02-.36-.2-.7-.26-1.06-.04-.22-.05-.5.05-.68.35-.62.76-1.22,1.14-1.83.07-.1.1-.22.15-.34.08.03.15.06.23.09Z'/%3E%3Cpath class='cls-7' d='M139.72,17.28c-.07-.91-.56-1.44-1.46-1.56-.29-.04-.61-.08-.89,0-1.19.34-2.4.62-3.53,1.1-3.79,1.6-7.57,3.18-11.58,4.14-.78.19-1.56.36-2.34.5.04.47.08.95.12,1.41.04.53.09,1.07.13,1.6,0,.04,0,.09.01.13,2.16-.49,4.27-1.14,6.36-1.87,2.63-.92,5.22-1.97,7.84-2.92.88-.32,1.8-.51,2.72-.72.21-.05.47.1.7.15-.06.23-.06.5-.19.68-.66.86-1.33,1.71-2.03,2.53-1.43,1.67-2.68,3.44-3.12,5.65-.04.18-.03.36-.04.55.19-.11.29-.23.36-.37.93-1.97,2.4-3.54,3.79-5.18.97-1.16,1.81-2.44,2.64-3.71.41-.62.58-1.35.52-2.11Z'/%3E%3Cpath class='cls-9' d='M111.22,21.75c-1.86-.29-3.59-.88-5.04-2.14-1.09-.94-1.71-2.11-1.54-3.55.11-.94.35-1.87.59-2.79.19-.71.49-1.39.73-2.08.05-.15.04-.32.07-.61-.18.13-.24.16-.28.21-.07.08-.14.17-.2.26-1.61,2.62-2.2,5.47-1.64,8.48.56,2.98,2.54,4.7,5.37,5.49,2.45.68,4.94.55,7.42.21-.08-1.06-.16-2.16-.24-3.31-1.74.14-3.49.11-5.26-.17Z'/%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath class='cls-11' d='M8.44,35.12c0,.76-.22,1.35-.66,1.78-.44.43-1.06.64-1.84.64h-1.59v2.93h-1.51v-7.7h2.98c.47,0,.87.06,1.2.19s.6.3.81.51c.21.21.36.47.46.75.1.29.15.59.15.9ZM6.91,35.17c0-.17-.02-.32-.07-.47-.05-.15-.12-.28-.22-.39-.1-.11-.23-.2-.38-.27-.16-.07-.34-.1-.56-.1h-1.34v2.46h1.47c.19,0,.36-.03.49-.1.14-.07.25-.16.34-.27s.16-.24.2-.39c.04-.15.06-.3.06-.46Z'/%3E%3Cpath class='cls-11' d='M12.88,36.02c-.09-.06-.18-.1-.28-.14-.09-.04-.22-.06-.37-.06-.23,0-.46.08-.7.24-.24.16-.44.35-.62.57v3.83h-1.44v-5.84h1.4v.86c.22-.27.47-.5.75-.69.28-.19.57-.29.88-.29.19,0,.35.02.49.05.14.03.3.1.47.19l-.59,1.27Z'/%3E%3Cpath class='cls-11' d='M14.23,33.76v-1.14h1.46v1.14h-1.46ZM14.24,40.46v-5.84h1.44v5.84h-1.44Z'/%3E%3Cpath class='cls-11' d='M23.8,40.46v-3.83c0-.35-.06-.59-.18-.71-.12-.12-.28-.18-.47-.18-.12,0-.24.02-.36.06s-.24.09-.35.15c-.11.06-.21.12-.31.2-.09.07-.18.14-.24.21v4.1h-1.44v-3.64c0-.35-.05-.62-.14-.8-.09-.18-.27-.27-.53-.27-.19,0-.4.06-.63.17s-.43.26-.63.44v4.11h-1.44v-5.84h1.37v.66c.12-.1.26-.2.41-.3.14-.09.3-.18.45-.25.16-.07.32-.13.48-.17.17-.04.33-.06.49-.06.39,0,.7.08.92.24s.4.37.52.62c.13-.11.26-.22.41-.32.15-.1.3-.2.46-.28.16-.08.33-.14.51-.19.18-.05.36-.07.54-.07.53,0,.93.16,1.2.48.27.32.41.75.41,1.29v4.18h-1.44Z'/%3E%3Cpath class='cls-11' d='M27.81,37.88c.01.28.06.53.15.73.09.2.2.37.34.49s.29.22.47.29c.17.06.35.09.54.09.28,0,.54-.06.79-.18.25-.12.49-.32.71-.61l.89.82c-.32.37-.68.65-1.08.82-.4.17-.88.25-1.43.25-.43,0-.82-.07-1.16-.21-.35-.14-.64-.34-.89-.61-.25-.26-.44-.58-.58-.96-.14-.37-.2-.8-.2-1.27s.06-.87.19-1.24c.12-.37.31-.69.55-.95s.53-.47.86-.61c.34-.15.72-.22,1.15-.22.49,0,.91.1,1.26.29.35.19.63.45.85.76s.38.67.47,1.08c.1.4.15.82.15,1.23h-4.01ZM30.37,36.93c-.04-.42-.16-.75-.38-1.01s-.51-.38-.87-.38-.64.13-.86.38c-.22.26-.36.59-.41,1.01h2.53Z'/%3E%3Cpath class='cls-11' d='M39.96,40.46l-.56-1.7h-2.83l-.55,1.7h-1.52l2.73-7.7h1.54l2.76,7.7h-1.57ZM37.97,34.42l-1.02,3.14h2.06l-1.04-3.14Z'/%3E%3Cpath class='cls-11' d='M42.27,40.46v-7.85h1.44v7.85h-1.44Z'/%3E%3Cpath class='cls-11' d='M48.5,40.46v-.63c-.32.25-.63.44-.94.56-.31.12-.62.19-.95.19-.29,0-.55-.04-.77-.13s-.41-.21-.56-.36c-.15-.15-.26-.33-.34-.54-.08-.21-.12-.43-.12-.66,0-.37.07-.68.22-.92.15-.24.35-.44.61-.59.26-.15.57-.27.93-.35.36-.08.76-.14,1.19-.19l.64-.07v-.28c0-.31-.1-.55-.29-.7-.19-.16-.45-.23-.76-.23s-.61.07-.89.2c-.28.13-.56.32-.82.56l-.69-.84c.39-.33.79-.57,1.22-.72.42-.15.85-.22,1.29-.22.4,0,.75.05,1.05.15s.55.24.75.42c.2.18.35.39.45.64.1.25.15.53.15.83v3.9h-1.38ZM48.42,37.64l-.41.06c-.64.08-1.09.21-1.34.38-.26.17-.39.41-.39.73,0,.22.07.4.22.53s.34.2.57.2.45-.05.68-.16c.22-.1.45-.25.69-.45v-1.31Z'/%3E%3Cpath class='cls-11' d='M54.63,36.02c-.09-.06-.18-.1-.28-.14-.09-.04-.22-.06-.37-.06-.23,0-.46.08-.7.24-.24.16-.44.35-.62.57v3.83h-1.44v-5.84h1.4v.86c.22-.27.47-.5.75-.69.28-.19.57-.29.88-.29.19,0,.35.02.49.05.14.03.3.1.47.19l-.59,1.27Z'/%3E%3Cpath class='cls-11' d='M59.37,40.46v-.63c-.32.25-.63.44-.94.56-.31.12-.62.19-.95.19-.29,0-.55-.04-.77-.13s-.41-.21-.56-.36c-.15-.15-.26-.33-.34-.54-.08-.21-.12-.43-.12-.66,0-.37.07-.68.22-.92.15-.24.35-.44.61-.59.26-.15.57-.27.93-.35.36-.08.76-.14,1.19-.19l.64-.07v-.28c0-.31-.1-.55-.29-.7-.19-.16-.45-.23-.76-.23s-.61.07-.89.2c-.28.13-.56.32-.82.56l-.69-.84c.39-.33.79-.57,1.22-.72.42-.15.85-.22,1.29-.22.4,0,.75.05,1.05.15s.55.24.75.42c.2.18.35.39.45.64.1.25.15.53.15.83v3.9h-1.38ZM59.29,37.64l-.41.06c-.64.08-1.09.21-1.34.38-.26.17-.39.41-.39.73,0,.22.07.4.22.53s.34.2.57.2.45-.05.68-.16c.22-.1.45-.25.69-.45v-1.31Z'/%3E%3Cpath class='cls-11' d='M67.54,37.55c0,.46-.06.87-.17,1.25-.11.37-.27.69-.48.96s-.46.47-.75.61c-.29.14-.61.21-.96.21-.31,0-.61-.06-.9-.17-.29-.11-.56-.31-.82-.6v.65h-1.37v-7.85h1.44v2.62c.2-.22.43-.4.69-.52.26-.13.58-.19.95-.19.34,0,.65.07.94.21.29.14.54.34.75.61s.38.58.49.96c.12.37.18.79.18,1.26ZM66.04,37.57c0-.28-.03-.55-.08-.78-.05-.24-.13-.44-.23-.61-.1-.17-.24-.3-.39-.4-.16-.1-.35-.15-.56-.15-.25,0-.48.07-.69.21-.21.14-.39.29-.55.45v2.51c.19.2.39.36.6.48.21.12.43.18.65.18.21,0,.4-.05.56-.15.16-.1.29-.23.39-.41.1-.17.18-.37.23-.6.05-.23.07-.48.07-.75Z'/%3E%3Cpath class='cls-11' d='M68.7,33.76v-1.14h1.46v1.14h-1.46ZM68.71,40.46v-5.84h1.44v5.84h-1.44Z'/%3E%3Cpath class='cls-11' d='M74.94,40.46v-.63c-.32.25-.63.44-.94.56-.31.12-.62.19-.95.19-.29,0-.55-.04-.77-.13s-.41-.21-.56-.36c-.15-.15-.26-.33-.34-.54-.08-.21-.12-.43-.12-.66,0-.37.07-.68.22-.92.15-.24.35-.44.61-.59.26-.15.57-.27.93-.35.36-.08.76-.14,1.19-.19l.64-.07v-.28c0-.31-.1-.55-.29-.7-.19-.16-.45-.23-.76-.23s-.61.07-.89.2c-.28.13-.56.32-.82.56l-.69-.84c.39-.33.79-.57,1.22-.72.42-.15.85-.22,1.29-.22.4,0,.75.05,1.05.15s.55.24.75.42c.2.18.35.39.45.64.1.25.15.53.15.83v3.9h-1.38ZM74.87,37.64l-.41.06c-.64.08-1.09.21-1.34.38-.26.17-.39.41-.39.73,0,.22.07.4.22.53s.34.2.57.2.45-.05.68-.16c.22-.1.45-.25.69-.45v-1.31Z'/%3E%3C/g%3E%3Cg%3E%3Cpath class='cls-11' d='M5.05,18.29v-.73c0-.11.06-.17.17-.17h1.57c.11,0,.17.06.17.17v5.53c0,.34.07.58.2.71.13.13.34.2.62.2h.65c.46,0,.68.28.68.85,0,.34-.05.57-.16.67s-.28.16-.52.16h-1.38c-.56,0-.99-.1-1.31-.29-.31-.19-.52-.53-.62-1.02-.24.21-.52.36-.85.46-.33.1-.68.15-1.04.15-.44,0-.86-.06-1.25-.19-.39-.12-.73-.32-1.02-.58-.29-.26-.52-.59-.69-1s-.26-.89-.26-1.46c0-.66.09-1.21.28-1.66.19-.44.44-.8.75-1.07.31-.27.67-.46,1.07-.57.4-.11.81-.17,1.25-.17h1.71ZM1.79,16.21c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.43c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.43ZM3.45,23.29c.55,0,.95-.16,1.21-.47s.39-.77.39-1.37v-1.45h-1.52c-.49,0-.88.13-1.18.38-.3.25-.44.71-.44,1.38,0,.52.14.91.41,1.16.27.25.65.38,1.13.38ZM4.01,16.21c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.43c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.43Z'/%3E%3Cpath class='cls-11' d='M12.34,24.81c-.16.33-.4.56-.73.68-.32.13-.76.19-1.31.19h-1.59c-.23,0-.4-.05-.51-.16s-.17-.32-.17-.64.05-.56.16-.69c.11-.13.28-.2.52-.2h1.11c.2,0,.36-.03.47-.09.11-.06.19-.16.24-.29.05-.13.08-.3.09-.51.01-.21.02-.47.02-.78v-3.55c0-.07.03-.11.09-.14.06-.02.13-.03.2-.03h1.47c.11,0,.17.06.17.17v4.16c0,.34.13.6.38.79.26.18.6.27,1.03.27h.29c.23,0,.4.06.51.19s.17.34.17.63c0,.33-.05.56-.16.68-.11.13-.28.19-.52.19-.44,0-.83-.05-1.16-.16-.33-.11-.59-.34-.79-.71ZM9.68,28.96c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.43c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.43ZM11.9,28.96c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.43c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.43Z'/%3E%3Cpath class='cls-11' d='M14.29,25.68c-.23,0-.4-.04-.51-.12-.11-.08-.17-.24-.17-.48,0-.28.05-.54.16-.76s.28-.33.52-.33h.84c.28,0,.49-.07.62-.2.13-.13.2-.37.2-.71v-4.32c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v4.76c0,.74-.15,1.28-.46,1.63-.31.35-.82.52-1.54.52h-1.59ZM15.79,28.92c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.64c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.64Z'/%3E%3Cpath class='cls-11' d='M20.89,18.77c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v4.16c0,.34.13.6.38.79.26.18.6.27,1.03.27h.29c.23,0,.4.06.51.19s.17.34.17.63c0,.33-.05.56-.16.68-.11.13-.28.19-.52.19-.39,0-.72-.03-1-.1-.28-.07-.52-.22-.71-.46v.32c0,.61-.05,1.15-.15,1.61-.1.46-.27.84-.5,1.15s-.54.54-.93.69c-.39.15-.87.23-1.43.23h-.63c-.11,0-.17-.06-.17-.17v-1.37c0-.11.06-.17.17-.17h.38c.33,0,.59-.06.77-.17.18-.11.32-.28.4-.5.09-.22.14-.49.15-.8.02-.31.03-.67.03-1.08v-6.09Z'/%3E%3Cpath class='cls-11' d='M29.3,18.29c1.31,0,2.26.24,2.87.73.6.49.9,1.13.9,1.93,0,.34-.05.66-.16.96-.11.3-.25.58-.42.84s-.36.49-.58.69c-.22.21-.43.38-.63.51.09.02.19.03.3.03h2.48c.26,0,.44.07.53.2.09.14.14.36.14.68s-.05.53-.16.64c-.11.11-.28.16-.5.16h-2.54c-.41,0-.8-.04-1.17-.11-.37-.07-.72-.21-1.05-.42-.38.21-.77.34-1.19.42-.42.07-.8.11-1.13.11h-2.46c-.22,0-.38-.06-.5-.17s-.17-.32-.17-.63.04-.52.11-.67c.07-.15.26-.22.55-.22h2c.18,0,.39,0,.61-.03.23-.02.49-.06.8-.13-.09-.38-.21-.7-.37-.97-.15-.27-.33-.51-.52-.73-.19-.21-.4-.4-.62-.56s-.45-.33-.67-.49c-.13-.09-.2-.17-.21-.25s-.03-.16-.03-.25v-1.08c0-.12.11-.26.32-.41.22-.15.5-.28.85-.4s.76-.22,1.21-.3c.46-.08.92-.12,1.4-.12ZM29.56,23.45c.18-.11.37-.25.55-.41.19-.16.35-.33.5-.52.14-.19.26-.39.35-.61.09-.22.14-.44.14-.67,0-.47-.17-.79-.5-.97-.34-.18-.77-.27-1.29-.27-.46,0-.85.05-1.19.14s-.57.17-.69.24c.52.33.97.76,1.34,1.29s.63,1.12.79,1.78Z'/%3E%3Cpath class='cls-11' d='M34.07,25.68c-.23,0-.4-.05-.51-.16-.11-.11-.17-.33-.17-.66s.05-.54.16-.67c.11-.13.28-.2.52-.2h.84c.28,0,.49-.07.62-.2.13-.13.2-.37.2-.71v-8.84c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v9.28c0,.74-.15,1.28-.46,1.63-.31.35-.82.52-1.54.52h-1.59Z'/%3E%3Cpath class='cls-11' d='M41.8,25.51c0,.11-.06.17-.17.17h-1.59c-.11,0-.17-.06-.17-.17v-11.26c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v11.26Z'/%3E%3Cpath class='cls-11' d='M52.98,25.8c-.56,0-1.05-.08-1.49-.24-.44-.16-.81-.42-1.1-.77-.09.15-.2.26-.32.33-.13.07-.24.15-.36.24-.11.09-.21.2-.29.33-.08.14-.12.34-.12.6v2.83h-1.93v-3.19c0-.36.05-.67.15-.9.1-.24.22-.44.37-.6.15-.16.32-.29.5-.4.18-.11.34-.22.5-.32s.29-.23.41-.36.19-.3.21-.52c-.01-.11-.02-.23-.03-.35s0-.25,0-.38c0-.69.09-1.29.27-1.78.18-.49.42-.88.73-1.18.31-.3.69-.51,1.12-.65.43-.14.9-.21,1.4-.21s.97.07,1.4.21c.43.14.81.35,1.12.65.31.3.56.69.73,1.18.18.49.26,1.08.26,1.78,0,.1,0,.2,0,.3,0,.1-.01.19-.03.28.02.48.14.82.35,1.02.21.2.45.3.71.3h.49c.23,0,.4.06.51.19s.17.34.17.63c0,.33-.05.56-.16.68-.11.13-.28.19-.52.19-.19,0-.4,0-.61-.02-.21-.01-.42-.05-.62-.1-.2-.06-.4-.14-.59-.26-.19-.12-.36-.29-.5-.52-.31.36-.69.63-1.16.79s-.98.24-1.55.24ZM52.98,20c-.55,0-.95.18-1.22.53-.27.35-.4.86-.4,1.54,0,.73.13,1.25.4,1.57.27.32.67.48,1.22.48s.95-.16,1.21-.49c.26-.32.39-.84.39-1.56,0-1.38-.54-2.07-1.6-2.07Z'/%3E%3Cpath class='cls-11' d='M58,25.68c-.23,0-.4-.05-.51-.16-.11-.11-.17-.32-.17-.62,0-.33.05-.56.16-.7.11-.14.28-.2.52-.2h1.11c.28,0,.49-.07.62-.2.13-.13.2-.37.2-.71v-4.32c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v4.76c0,.74-.15,1.28-.46,1.63s-.82.52-1.54.52h-1.86ZM58.64,28.96c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.43c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.43ZM60.86,28.96c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.43c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.43Z'/%3E%3Cpath class='cls-11' d='M66.1,25.51c0,.11-.06.17-.17.17h-1.59c-.11,0-.17-.06-.17-.17v-11.26c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v11.26Z'/%3E%3Cpath class='cls-11' d='M69.12,18.77c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v4.16c0,.34.13.6.38.79.26.18.6.27,1.03.27h.29c.23,0,.4.06.51.19s.17.34.17.63c0,.33-.05.56-.16.68-.11.13-.28.19-.52.19-.39,0-.72-.03-1-.1-.28-.07-.52-.22-.71-.46v.32c0,.61-.05,1.15-.15,1.61-.1.46-.27.84-.5,1.15s-.54.54-.93.69c-.39.15-.87.23-1.43.23h-.63c-.11,0-.17-.06-.17-.17v-1.37c0-.11.06-.17.17-.17h.38c.33,0,.59-.06.77-.17.18-.11.32-.28.4-.5.09-.22.14-.49.15-.8.02-.31.03-.67.03-1.08v-6.09Z'/%3E%3Cpath class='cls-11' d='M72.76,25.68c-.23,0-.4-.04-.51-.12-.11-.08-.17-.24-.17-.48,0-.28.05-.54.16-.76s.28-.33.52-.33h.84c.28,0,.49-.07.62-.2.13-.13.2-.37.2-.71v-4.32c0-.11.06-.17.17-.17h1.59c.11,0,.17.06.17.17v4.76c0,.74-.15,1.28-.46,1.63-.31.35-.82.52-1.54.52h-1.59ZM74.26,28.92c-.11,0-.17-.06-.17-.17v-1.47c0-.11.06-.17.17-.17h1.64c.11,0,.17.06.17.17v1.47c0,.11-.06.17-.17.17h-1.64Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    --ico: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 55.03 120.27'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23d19a2a; %7D .cls-2 %7B fill: %233e2f14; %7D %3C/style%3E%3C/defs%3E%3Cpolygon class='cls-2' points='55.03 92.66 55.03 120.27 0 120.27 0 8.13 21.76 74.92 15.35 75.17 15.35 93.4 55.03 92.66'/%3E%3Cg%3E%3Cpolygon class='cls-1' points='13.38 .99 21.02 27.6 55.03 27.6 55.03 0 13.38 .99'/%3E%3Cpolygon class='cls-1' points='27.51 46.83 35.8 75.41 55.03 75.41 55.03 46.83 27.51 46.83'/%3E%3C/g%3E%3C/svg%3E");
    --pay: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1558.7 151.5'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23fff; %7D .cls-2 %7B fill: %23575756; %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1-2'%3E%3Cpath class='cls-1' d='m12.8,0h270.3c7.05-.02,12.78,5.67,12.8,12.72,0,.03,0,.05,0,.08v125.9c.02,7.05-5.67,12.78-12.72,12.8-.03,0-.05,0-.08,0H12.8C5.75,151.52.02,145.83,0,138.78c0-.03,0-.05,0-.08V12.8C-.02,5.75,5.67.02,12.72,0c.03,0,.05,0,.08,0Z'/%3E%3Cpath class='cls-1' d='m328.9,0h270.3c7.05-.02,12.78,5.67,12.8,12.72,0,.03,0,.05,0,.08v125.9c.02,7.05-5.67,12.78-12.72,12.8-.03,0-.05,0-.08,0h-270.3c-7.05.02-12.78-5.67-12.8-12.72,0-.03,0-.05,0-.08V12.8C316.08,5.75,321.77.02,328.82,0c.03,0,.05,0,.08,0Z'/%3E%3Cpath class='cls-1' d='m645,0h270.3c7.05-.02,12.78,5.67,12.8,12.72,0,.03,0,.05,0,.08v125.9c.02,7.05-5.67,12.78-12.72,12.8-.03,0-.05,0-.08,0h-270.3c-7.05.02-12.78-5.67-12.8-12.72,0-.03,0-.05,0-.08V12.8c-.02-7.05,5.67-12.78,12.72-12.8.03,0,.05,0,.08,0Z'/%3E%3Cpath class='cls-1' d='m959.5,0h270.3c7.05-.02,12.78,5.67,12.8,12.72,0,.03,0,.05,0,.08v125.9c.02,7.05-5.67,12.78-12.72,12.8-.03,0-.05,0-.08,0h-270.3c-7.05.02-12.78-5.67-12.8-12.72,0-.03,0-.05,0-.08V12.8c-.02-7.05,5.67-12.78,12.72-12.8.03,0,.05,0,.08,0Z'/%3E%3Cpath class='cls-1' d='m1275.6,0h270.3c7.05-.02,12.78,5.67,12.8,12.72,0,.03,0,.05,0,.08v125.9c.02,7.05-5.67,12.78-12.72,12.8-.03,0-.05,0-.08,0h-270.3c-7.05.02-12.78-5.67-12.8-12.72,0-.03,0-.05,0-.08V12.8c-.02-7.05,5.67-12.78,12.72-12.8.03,0,.05,0,.08,0Z'/%3E%3Cpath class='cls-2' d='m71.9,45.5c-.9-4.9-4.2-6.5-8.2-6.5h-29.2l-.2,1.6c20.1,5.6,36.5,17.6,43.9,40.3l-6.3-35.4Zm8.2,46l-1.9-10.7c-3.8-11.1-13.1-21.4-23.6-26.1l14.7,61.1h19.1l28.5-76.8h-19.2l-17.6,52.5Zm50.9,24.4l11.3-76.9h-18.1l-11.3,76.9h18.1Zm49.4-78.2c-17.9,0-30.4,10.4-30.5,25.4-.1,11,8.9,17.1,15.8,20.8,7.1,3.7,9.4,6.2,9.4,9.6,0,5.1-5.7,7.4-10.8,7.4-7.3,0-11.2-1-17-4l-2.4-1.3-2.5,17.3c4.2,2.2,12,4.1,20.2,4.1,19,.1,31.3-10.3,31.5-26.2,0-8.8-4.9-15.3-15.3-20.9-6.3-3.5-10.1-6-10.1-9.6,0-3.2,3.3-6.6,10.4-6.6,4.67-.2,9.32.8,13.5,2.9l1.6.9,2.5-16.6c-5.18-2.11-10.71-3.19-16.3-3.2h0Zm48.6,1.3c-4.4,0-7.6,1.4-9.5,6.5l-26.8,70.4h19c3.1-9.5,3.8-11.5,3.8-11.5h23.1s.5,2.6,2.2,11.5h16.8l-14.6-76.9h-14Zm-8.4,49.6s1.5-4.4,7.2-21.4c-.1.1,1.5-4.4,2.4-7.3l1.3,6.6c3.4,18.3,4.1,22.2,4.1,22.2l-15-.1Z'/%3E%3Cpath class='cls-2' d='m729.6,68.9c.1,11.6,10.5,15.5,10.6,15.5-1.26,3.89-3.12,7.57-5.5,10.9-3.3,4.7-6.7,9.3-12.1,9.4s-7-3-13.1-3-8,3-13,3.1c-5.2.2-9.2-5.1-12.5-9.7-6.8-9.5-12-26.9-5-38.7,3.41-5.84,9.63-9.48,16.4-9.6,5.1-.1,10,3.3,13.1,3.3s9-4.1,15.2-3.5c5.74.18,11.09,2.98,14.5,7.6-.4.3-8.7,5-8.6,14.7h0Zm-10-28.5c3-3.36,4.49-7.81,4.1-12.3-4.5.42-8.68,2.53-11.7,5.9-2.6,2.9-4.8,7.5-4.2,11.9,4.55,0,8.87-2.01,11.8-5.5Zm40.1-5.6c2.25-.42,4.52-.72,6.8-.9,2.72-.29,5.46-.42,8.2-.4,3.72-.1,7.44.41,11,1.5,2.81.87,5.4,2.34,7.6,4.3,1.71,1.68,3.07,3.69,4,5.9,1.01,2.51,1.49,5.2,1.4,7.9.1,3.25-.58,6.47-2,9.4-1.28,2.64-3.12,4.96-5.4,6.8-2.39,1.91-5.15,3.31-8.1,4.1-3.32.92-6.75,1.39-10.2,1.4-2.82.02-5.63-.22-8.4-.7v29.8h-5s.1-69.1.1-69.1Zm5,34.8c1.3.39,2.64.62,4,.7,1.5.1,3.1.2,4.8.2,6.4,0,11.3-1.4,14.8-4.4s5.3-7.1,5.2-12.8c.04-2.41-.44-4.79-1.4-7-.89-1.92-2.23-3.6-3.9-4.9-1.81-1.32-3.84-2.3-6-2.9-2.54-.69-5.17-1.03-7.8-1-1.94,0-3.87.1-5.8.3-1.31.1-2.62.3-3.9.6v31.2h0Zm73.6,22.4c0,2,0,4,.1,6,.1,1.94.3,3.88.6,5.8h-4.7l-.7-7h-.2c-.69,1.05-1.49,2.03-2.4,2.9-1.02,1.01-2.16,1.88-3.4,2.6-1.41.84-2.92,1.48-4.5,1.9-1.79.48-3.64.72-5.5.7-2.22,0-4.42-.41-6.5-1.2-1.72-.72-3.28-1.78-4.6-3.1-1.18-1.28-2.09-2.77-2.7-4.4-.6-1.6-.9-3.29-.9-5-.2-5.6,2.73-10.84,7.6-13.6,5.1-3.2,12.7-4.7,22.9-4.6v-1.4c.02-1.51-.12-3.02-.4-4.5-.22-1.7-.8-3.34-1.7-4.8-.89-1.59-2.21-2.91-3.8-3.8-2.12-1.13-4.5-1.68-6.9-1.6-4.38.03-8.66,1.35-12.3,3.8l-1.6-3.6c2.13-1.5,4.49-2.61,7-3.3,2.44-.68,4.97-1.01,7.5-1,3-.11,5.99.51,8.7,1.8,2.1,1.06,3.89,2.64,5.2,4.6,1.31,1.89,2.2,4.04,2.6,6.3.48,2.27.71,4.58.7,6.9l-.1,19.6Zm-5-14.8c-2.8-.1-5.61,0-8.4.3-2.77.24-5.49.85-8.1,1.8-2.35.87-4.47,2.28-6.2,4.1-1.66,1.99-2.51,4.52-2.4,7.1,0,3.5,1,6.1,3.1,7.8,1.94,1.61,4.38,2.5,6.9,2.5,1.86.04,3.72-.23,5.5-.8,2.94-.94,5.48-2.84,7.2-5.4.79-1.11,1.43-2.32,1.9-3.6.31-.97.48-1.98.5-3v-10.8Zm14.7-23.1l13,32.3c.7,1.8,1.4,3.6,2,5.5s1.2,3.6,1.7,5.2h.2c.5-1.5,1.1-3.2,1.7-5.1s1.3-3.9,2.1-5.9l12.1-32.1h5.3l-14.7,36.5c-1.5,3.9-2.9,7.4-4.2,10.5-1.18,2.9-2.51,5.74-4,8.5-1.23,2.31-2.6,4.55-4.1,6.7-1.32,1.88-2.86,3.6-4.6,5.1-1.64,1.52-3.49,2.8-5.5,3.8-1.7.8-2.8,1.3-3.3,1.5l-1.7-4c1.46-.61,2.87-1.35,4.2-2.2,1.66-1,3.2-2.17,4.6-3.5,1.51-1.54,2.91-3.18,4.2-4.9,1.65-2.3,3.03-4.78,4.1-7.4.3-.7.51-1.44.6-2.2-.09-.76-.3-1.5-.6-2.2l-18.4-46.1h5.3Z'/%3E%3Cpath class='cls-2' d='m1057.3,45c.2-3.2-1.2-6-3.1-6.4h-68.7c-1.9.4-3.3,3.2-3.1,6.4h0c-.2,3.2,1.2,6,3.1,6.4h68.7c1.8-.4,3.2-3.2,3.1-6.4h0Zm-18.7,25.5c.2-3.2-1.2-6-3.1-6.4h-50c-1.9.4-3.3,3.2-3.1,6.4h0c-.2,3.2,1.2,6,3.1,6.4h50c1.8-.3,3.2-3.2,3.1-6.4h0Zm-18.8,25.6c.2-3.2-1.2-6-3.1-6.4h-31.2c-1.9.4-3.3,3.2-3.1,6.4h0c-.2,3.2,1.2,6,3.1,6.4h31.2c1.9-.4,3.3-3.2,3.1-6.4h0Z'/%3E%3Cpath class='cls-2' d='m502.3,25.2c-14.13-.09-27.87,4.59-39,13.3-11.13-8.71-24.87-13.39-39-13.3-32.3,0-58.5,23.4-58.5,52.2s26.2,52.2,58.5,52.2c14.13.09,27.87-4.59,39-13.3,11.13,8.71,24.87,13.39,39,13.3,32.3,0,58.5-23.4,58.5-52.2s-26.2-52.2-58.5-52.2Zm-112.3,64.6l3.4-18.9-7.7,18.9h-4.4v-18.9l-3.9,18.9h-5.8l4.8-25h8.7v15.5l6.3-15.5h9.2l-4.8,25h-5.8Zm27-5.1c-.24,1.32-.57,2.63-1,3.9v1.3h-4.8v-2.1c-1.3,1.7-3.4,2.6-6.3,2.6-1.39.09-2.76-.38-3.8-1.3-.99-1.21-1.52-2.73-1.5-4.3,0-2.6.8-4.4,2.4-5.6,2.47-1.48,5.32-2.21,8.2-2.1h2.4v-1.3c0-1.1-1.3-1.7-3.9-1.7-2.12.1-4.23.4-6.3.9.3-1.1.6-2.6,1-4.3,2.18-.79,4.48-1.23,6.8-1.3,5.5,0,8.2,2,8.2,6-.02,1.31-.19,2.62-.5,3.9-.2,1.81-.5,3.62-.9,5.4h0Zm17.4-10.4c-1.41-.33-2.86-.47-4.3-.4-1.9,0-2.9.6-2.9,1.7-.05.49.14.97.5,1.3l1.9.9c2.9,1.4,4.3,3.3,4.3,5.6,0,4.6-3.1,6.9-9.2,6.9-2.11.07-4.22-.07-6.3-.4.4-1.6.7-3.1,1-4.7,1.74.45,3.51.75,5.3.9,2.2,0,3.4-.6,3.4-1.7.03-.49-.15-.96-.5-1.3-.71-.59-1.52-1.03-2.4-1.3-2.9-1.1-4.3-3-4.3-5.6,0-4.6,2.9-6.9,8.7-6.9,1.94-.07,3.89.07,5.8.4l-1,4.6Zm12.5.5h-3.4c.03,1.32-.14,2.63-.5,3.9-.01.57-.08,1.14-.2,1.7-.08.62-.32,1.2-.7,1.7v1.7c0,1.1.6,1.7,1.9,1.7.65-.03,1.29-.16,1.9-.4l-1,4.7c-1.41.33-2.86.47-4.3.4-3.2,0-4.8-1.4-4.8-4.3.03-1.91.37-3.8,1-5.6l2.4-13.8h5.8l-.5,3h2.9l-.5,5.3Zm18.8,6.8h-12c-.09,1.09.27,2.18,1,3,1.24.92,2.76,1.38,4.3,1.3,2.2-.12,4.34-.69,6.3-1.7l-1,5.2c-2.04.61-4.17.91-6.3.9-6.8,0-10.1-3-10.1-9,0-3.7,1-6.6,2.9-8.6,3.41-4.01,9.39-4.59,13.5-1.3,1.4,1.35,2.1,3.27,1.9,5.2.08,1.68-.09,3.37-.5,5h0Zm9.7-3.8c-1.11,3.97-1.91,8.01-2.4,12.1h-6.3l.5-1.3c1.3-8,2.2-14.3,2.9-18.9h5.8l-.5,3c.63-1.18,1.66-2.1,2.9-2.6.74-.81,1.96-.98,2.9-.4-.3.3-1.1,2.3-2.4,6-1.3-.4-2.4.3-3.4,2.1Zm21.7,11.6c-1.7.6-3.5.9-5.3.9-2.87.11-5.66-.98-7.7-3-1.9-1.7-2.9-4.3-2.9-7.8-.12-3.95,1.24-7.8,3.8-10.8,2.3-2.9,5.5-4.3,9.7-4.3,2.31.13,4.6.57,6.8,1.3l-1,5.2c-1.67-.77-3.47-1.21-5.3-1.3-2.25-.17-4.43.81-5.8,2.6-1.3,1.4-1.9,3.7-1.9,6.9-.13,1.56.37,3.11,1.4,4.3.96,1.15,2.4,1.78,3.9,1.7,1.83-.09,3.63-.53,5.3-1.3l-1,5.6h0Zm21.5-12.5c-.12.69-.18,1.4-.2,2.1-.3,1.5-.7,3.4-1,5.8-.19,1.69-.52,3.37-1,5h-4.8v-2.1c-1.3,1.7-3.4,2.6-6.3,2.6-1.42.08-2.81-.39-3.9-1.3-.99-1.21-1.52-2.73-1.5-4.3,0-2.6.8-4.4,2.4-5.6,2.31-1.43,4.98-2.16,7.7-2.1h2.4c.33-.35.5-.82.5-1.3,0-1.1-1.3-1.7-3.8-1.7-2.12.1-4.23.4-6.3.9.08-1.48.42-2.94,1-4.3,2.18-.79,4.48-1.23,6.8-1.3,5.5,0,8.2,2,8.2,6-.02.54-.09,1.07-.2,1.6h0Zm9.4.9c-.7,1.7-1.4,5.7-2.4,12.1h-6.3l.5-1.3c1.3-6.3,2.2-12.6,2.9-18.9h5.8c.03,1.02-.14,2.04-.5,3,.63-1.18,1.66-2.1,2.9-2.6.87-.53,1.92-.67,2.9-.4-1.38,1.71-2.22,3.8-2.4,6-1.3-.4-2.4.4-3.4,2.1Zm16.4,12l.5-1.7c-1.34,1.5-3.3,2.28-5.3,2.1-2.6,0-4.3-.7-5.3-2.1-1.47-1.66-2.31-3.78-2.4-6-.11-3.33,1.11-6.57,3.4-9,1.51-2.25,4.09-3.55,6.8-3.4,2.19.1,4.27,1.03,5.8,2.6l1-7.3h6.3l-4.8,25-6-.2Zm-138.9-6c0,1.4.6,2.1,1.9,2.1,1.12.09,2.22-.4,2.9-1.3,1.04-1.02,1.59-2.44,1.5-3.9h-1.5c-3.2.1-4.8,1.1-4.8,3.1Zm54.5-9.5c-.37-.03-.72-.17-1-.4h-1c-1.9,0-3.2,1.1-3.9,3.4h6.8v-1.3l-.5-.9c-.07-.29-.21-.57-.4-.8Zm45.8,9.5c0,1.4.6,2.1,1.9,2.1,1.12.09,2.22-.4,2.9-1.3,1.04-1.02,1.59-2.44,1.5-3.9h-1.5c-3.2.1-4.8,1.1-4.8,3.1Zm37.2-9.5c-1.41.1-2.68.89-3.4,2.1-.7.9-1,2.4-1,4.7,0,2.6,1,3.9,2.9,3.9,1.33-.04,2.57-.66,3.4-1.7,1.11-1.49,1.61-3.35,1.4-5.2,0-2.5-1.1-3.8-3.3-3.8h0Z'/%3E%3Cpath class='cls-2' d='m1396.5,39.7v31.8h-90.2v-31.8h90.2Z'/%3E%3Cpath class='cls-2' d='m1519.6,55.5c-.39,1.66-.9,3.3-1.5,4.9-.8,1.78-2.08,3.3-3.7,4.4-1.55.98-3.29,1.63-5.1,1.9-2.86.41-5.78.1-8.5-.9-1-.17-2.02-.13-3,.1-1.1.1-2.2.3-3.3.3h-32.7l.8-5.5c4.4.1,8.7-.2,13.1.2v-8.6c.1-2.03-.62-4.01-2-5.5-.84-.78-1.95-1.21-3.1-1.2h-6.5l.8-5.5c.1,0,.2-.1.4-.1,2.6,0,5.2-.1,7.8.1,3.95.28,7.36,2.87,8.7,6.6.85,2.23,1.26,4.61,1.2,7v6.8h13c.19-.55.29-1.12.3-1.7v-11.1c0-3.7,1.6-5.9,5-6.9,1.4-.4,2.8-.7,4.3-1h3.2c1.2.3,2.4.6,3.6,1,2.22.88,4.06,2.5,5.2,4.6.99,1.8,1.63,3.77,1.9,5.8l.1,4.3Zm-16.4,4.6c1.66.16,3.33.23,5,.2,1.89-.03,3.5-1.36,3.9-3.2.83-2.56.87-5.32.1-7.9-.41-1.88-2.08-3.21-4-3.2h-1.7c-1.3.02-2.57.37-3.7,1,.6,4.4.2,8.6.4,13.1Z'/%3E%3Cpath class='cls-2' d='m1519.6,114.9c-1-.2-2.1-.3-3.1-.5-2.05-.58-4.2-.72-6.3-.4-1.74.39-3.52.52-5.3.4-3.95.03-7.17-3.15-7.2-7.1h0c-.01-.44.02-.87.1-1.3.3-4,3-6.1,6.9-6.6,2.5-.3,5-.2,7.5-.4h.5c.3-2.3,0-4.3-2.6-4.6-3.24-.2-6.48.31-9.5,1.5-.41.09-.82.22-1.2.4l-.8-5.5c.98-.24,1.95-.54,2.9-.9,2.82-1.01,5.8-1.49,8.8-1.4,1.36,0,2.7.2,4,.6,2.99.89,5.08,3.58,5.2,6.7-.03.17,0,.35.1.5v18.6Zm-6.8-11.3c-2.1-.2-4.22-.1-6.3.3-1.22.46-1.96,1.7-1.8,3-.01,1.27.94,2.35,2.2,2.5.73.1,1.47.1,2.2,0,1.3-.2,2.5-.5,3.8-.8l-.1-5Z'/%3E%3Cpath class='cls-2' d='m1306.2,114.8v-31.7h90.2v31.8s-90.2-.1-90.2-.1Z'/%3E%3Cpath class='cls-2' d='m1427.9,40.4c-.2,1.8-.5,3.6-.7,5.4h-.7c-2.3,0-4.5,0-6.8.1s-3.5,1.6-4.3,3.7c-.5,1.92-.7,3.91-.6,5.9-.13,1.65.04,3.31.5,4.9.37,1.06,1.07,1.97,2,2.6.95.61,2.07.92,3.2.9h27.3c.69.02,1.37-.11,2-.4,1.76-.95,2.43-3.13,1.5-4.9-.26-.49-.64-.9-1.1-1.2-.44-.31-.96-.49-1.5-.5-2.3-.1-4.6,0-6.8-.1-1.21-.03-2.41-.17-3.6-.4-3.07-.79-5.24-3.53-5.3-6.7-.24-2.13.25-4.29,1.4-6.1,1.12-1.57,2.8-2.65,4.7-3,1.68-.38,3.38-.61,5.1-.7,4.9-.1,9.9,0,14.8,0h.7c-.3,1.9-.5,3.7-.8,5.6h-15.6c-1.13-.13-2.25.37-2.9,1.3-.63,1.07-.67,2.39-.1,3.5.53,1.05,1.63,1.68,2.8,1.6h7.3c4.46-.13,8.17,3.38,8.3,7.83,0,.02,0,.04,0,.07v1.1c-.13,1.41-.47,2.79-1,4.1-.39.91-1.01,1.7-1.8,2.3-1.65,1.3-3.7,1.98-5.8,1.9-7.4.1-14.8.1-22.2.1-3.1,0-6.2.1-9.2,0-1.32,0-2.64-.21-3.9-.6-3.64-1.11-6.29-4.23-6.8-8-.8-3.69-.8-7.51,0-11.2.52-3.15,2.38-5.93,5.1-7.6,1.28-.76,2.72-1.24,4.2-1.4,3.5-.2,6.9-.2,10.4-.2-.1,0,.1.1.2.1Z'/%3E%3Cpath class='cls-2' d='m1441.8,114.1h-7v-15.7c-.02-.54-.09-1.07-.2-1.6-.15-1.07-1.02-1.9-2.1-2-1.54-.17-3.09.07-4.5.7.4,6,.1,11.9.2,17.8v.7h-7v-15.8c-.02-.51-.08-1.01-.2-1.5-.19-1.16-1.23-1.98-2.4-1.9-1.31.03-2.61.17-3.9.4v18.8h-7.2c0-.2-.1-.4-.1-.6v-19.4c-.19-1.93,1.1-3.69,3-4.1,3.84-1.41,8.01-1.69,12-.8.97.3,1.91.7,2.8,1.2,1.28-.47,2.58-.87,3.9-1.2,2.26-.58,4.62-.62,6.9-.1,3.25.56,5.66,3.31,5.8,6.6.1,1.6.1,3.2.1,4.8v13.1l-.1.6Z'/%3E%3Cpath class='cls-2' d='m1493.9,77.3v31.7c0,2.4-.8,3.6-3.1,4.2-1.64.44-3.31.77-5,1-1.02.18-2.07.22-3.1.1-1.81-.2-3.58-.6-5.3-1.2-3.4-1.5-5.2-4.5-5.8-8-.52-3.06-.38-6.2.4-9.2.99-4.23,4.76-7.21,9.1-7.2,1.68.08,3.36.31,5,.7.24.02.48.09.7.2v-11l7.1-1.3Zm-7.2,17.8l-3.2-.6c-2.09-.29-4.09.98-4.7,3-.58,1.98-.72,4.06-.4,6.1.12,1.34.6,2.62,1.4,3.7,1.7,2,4.4,1.7,6.8,1l.1-13.2h0Z'/%3E%3Cpath class='cls-2' d='m1460.9,99c-.08-1.09-.31-2.17-.7-3.2-.44-.6-1.08-1.02-1.8-1.2-1.6-.6-3.2-.2-4.8.1-1.9.4-3.8,1-5.8,1.5l-.6.2c-.3-1.9-.5-3.6-.8-5.5.7-.2,1.3-.4,1.9-.6,3.12-1.21,6.45-1.79,9.8-1.7,1.18.02,2.36.19,3.5.5,3.31.69,5.69,3.61,5.7,7,.1,6.2.1,12.4.1,18.6v.4c-1-.2-2.1-.3-3.1-.6-2.04-.63-4.2-.77-6.3-.4-1.74.39-3.52.52-5.3.4-3.92.06-7.14-3.06-7.2-6.98,0-.04,0-.08,0-.12-.02-.4.02-.81.1-1.2.3-4.2,3.2-6.3,7.4-6.8,2.3-.2,4.7-.2,7.1-.3l.8-.1Zm-.2,4.3c-2.2.2-4.2.3-6.2.6-1.28.28-2.11,1.51-1.9,2.8-.06,1.31.9,2.44,2.2,2.6.73.1,1.47.1,2.2,0,1.3-.2,2.6-.5,3.8-.8l-.1-5.2Z'/%3E%3Cpath class='cls-2' d='m1096.9,59.8h-2.5c-.7.02-1.4-.01-2.1-.1l.1.4c1.1,4.4-2.9,7-7.4,7s-9.7-2.5-10.7-6.9l-2.5-11.1h6l2.5,11c.4,1.6,2.5,2.3,3.6,2.3s2.8-.7,2.5-2.3l-5.9-25.4h6.1l4.6,19.9c.47.81,1.37,1.28,2.3,1.2h2.5l.9,4Z'/%3E%3Cpath class='cls-2' d='m1104.5,59.8h-8.5l-.9-4.1h8.5l.9,4.1Z'/%3E%3Cpath class='cls-2' d='m1112,59.8h-8.5l-.9-4.1h8.5l.9,4.1Z'/%3E%3Cpath class='cls-2' d='m1110.5,55.8h3.4c1.3,0,1.6-.8,1.4-1.7l-2.7-11.8h6.1l2.6,11.4c1.1,4.5-1.2,6.2-6.3,6.2h-3.6l-.9-4.1Zm6.9,9.1c-.43-1.34-1.69-2.24-3.1-2.2-1.4,0-2.3.9-2,2.2.41,1.31,1.63,2.2,3,2.2.98.19,1.93-.46,2.12-1.44.05-.25.04-.51-.02-.76Zm6.7,0c-.43-1.34-1.69-2.24-3.1-2.2-1.4,0-2.3.9-2,2.2.41,1.31,1.63,2.2,3,2.2,1.4,0,2.4-.9,2.1-2.2Z'/%3E%3Cpath class='cls-2' d='m1141.7,55.8h4.6l1,4.1h-4.6c1.2,5.4-2.5,7.3-7,7.3-2.27-.06-4.51-.53-6.6-1.4l.6-3.9c1.41.66,2.94,1,4.5,1,1.6,0,3.1-.9,2.7-2.6l-.1-.4h-2.8c-4.1,0-8-3-9.2-8.1-1.3-5.9,1-9.4,7.2-9.4,2.37-.08,4.72.36,6.9,1.3l2.8,12.1Zm-8.2-9.9c-.39-.13-.79-.2-1.2-.2-2.1,0-2.6,1.3-1.7,5.1s2,4.9,4,4.9h1.2l-2.3-9.8Z'/%3E%3Cpath class='cls-2' d='m1154.9,59.8h-8.5l-.9-4.1h8.5l.9,4.1Z'/%3E%3Cpath class='cls-2' d='m1162.3,59.8h-8.5l-.9-4.1h8.5l.9,4.1Z'/%3E%3Cpath class='cls-2' d='m1169.8,59.8h-8.5l-.9-4.1h8.5l.9,4.1Z'/%3E%3Cpath class='cls-2' d='m1179.4,55.8l-1.8-7.9c-.4-1.4-1.4-1.9-3.1-1.9-1.54,0-3.05.37-4.4,1.1l-2-3.4c2.22-.89,4.6-1.33,7-1.3,4.2,0,7.7,1.8,8.9,6.6l1.6,6.9h1.9l1,4.1h-19l-.9-4.1s10.8-.1,10.8-.1Z'/%3E%3Cpath class='cls-2' d='m1185.4,39.2c-1.39.05-2.63-.86-3-2.2-.26-.99.34-2,1.33-2.25.22-.06.45-.07.67-.05,1.43,0,2.69.93,3.1,2.3.3,1.2-.7,2.2-2.1,2.2Zm2.5,20.6h3.6c5.1,0,7.3-1.7,6.3-6.2l-2.6-11.4h-6.1l2.7,11.8c.2.9-.1,1.7-1.4,1.7h-3.4l.9,4.1Zm4.2-20.6c-1.39.05-2.63-.86-3-2.2-.26-.99.34-2,1.33-2.25.22-.06.45-.07.67-.05,1.43,0,2.69.93,3.1,2.3.3,1.2-.7,2.2-2.1,2.2Z'/%3E%3Cpath class='cls-2' d='m1044,90.8h7.3l3.1,13.3c.5,1.9,2.6,2.7,4,2.7h10.6c2.8,0,3.6-.9,3-3.7h-.8c-5.4,0-9.4-2.7-11.3-6.8l6.8-2.2c.6,2.8,1.4,4,3.3,4h11.1l1.2,4.9h-3.2c1.4,6.3-2.3,8.7-7.8,8.7h-12.4c-5.5,0-10.8-3.1-12-8.4l-2.9-12.5Zm18,29.8c-1.67.03-3.17-1.02-3.7-2.6-.27-1.2.48-2.39,1.67-2.66.24-.05.48-.07.73-.04,1.7-.02,3.21,1.08,3.7,2.7.5,1.5-.7,2.6-2.4,2.6Zm8.1,0c-1.66,0-3.14-1.04-3.7-2.6-.27-1.2.48-2.39,1.67-2.66.24-.05.48-.07.73-.04,1.7-.02,3.21,1.08,3.7,2.7.5,1.5-.7,2.6-2.4,2.6Z'/%3E%3Cpath class='cls-2' d='m1079.9,98.3h13.9l-1.6-7.2c-.4-1.7-1.7-2.3-3.7-2.3-1.75.07-3.48.44-5.1,1.1h0l-1.4,1.1-2.8-4.8,13.9-13.8,3.8,6.5-6.7,5.5c4.6.3,8.3,2.5,9.5,8l1.4,5.9h2.4l1.2,4.9h-23.7l-1.1-4.9Z'/%3E%3Cpath class='cls-2' d='m1113.9,103.2h-10.2l-1.1-4.9h10.2l1.1,4.9Z'/%3E%3Cpath class='cls-2' d='m1122.9,103.2h-10.2l-1.1-4.9h10.2l1.1,4.9Z'/%3E%3Cpath class='cls-2' d='m1131.9,103.2h-10.2l-1.1-4.9h10.2l1.1,4.9Z'/%3E%3Cpath class='cls-2' d='m1140.8,103.2h-10.2l-1.1-4.9h10.2l1.1,4.9Z'/%3E%3Cpath class='cls-2' d='m1149.8,103.2h-10.2l-1.1-4.9h10.2l1.1,4.9Z'/%3E%3Cpath class='cls-2' d='m1158.8,103.2h-10.2l-1.1-4.9h10.2l1.1,4.9Z'/%3E%3Cpath class='cls-2' d='m1167.8,103.2h-10.2l-1.1-4.9h10.2l1.1,4.9Z'/%3E%3Cpath class='cls-2' d='m1183.1,103.2c-2.49.11-4.96-.52-7.1-1.8-1,.9-2.9,1.8-6.6,1.8h-2.3l-1.1-4.9h4.2c.63.07,1.26-.15,1.7-.6l-3.6-15.7h7.3l3.2,14.1c.29,1.39,1.58,2.34,3,2.2h2.5l1.2,4.9h-2.4Zm-9.7-27.6c-.46-1.65-1.99-2.76-3.7-2.7-1.24-.11-2.33.81-2.44,2.04-.02.22,0,.44.04.66.49,1.57,1.95,2.63,3.6,2.6,1.7,0,2.9-1.1,2.5-2.6Z'/%3E%3Cpath class='cls-2' d='m1184.1,98.3h4.1c1.6,0,2-1,1.7-2l-3.3-14.2h7.3l3.1,13.7c1.3,5.4-1.5,7.4-7.6,7.4h-4.3l-1-4.9Zm12.8,11c-.56-1.62-2.09-2.71-3.8-2.7-1.7,0-2.8,1.2-2.4,2.7.49,1.62,2,2.72,3.7,2.7,1.7-.1,2.8-1.2,2.5-2.7Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    --cart: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 67.14 84.59'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %233e2f14; %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1-2'%3E%3Cg id='Layer_2-2' data-name='Layer 2-2'%3E%3Cpath class='cls-1' d='m33.56,47.43c-8.07,0-15.02-5.68-16.61-13.59-.21-1.56.9-3,2.46-3.2,1.5-.2,2.9.81,3.18,2.3,1.28,6.1,7.26,10,13.35,8.73,4.38-.92,7.81-4.34,8.73-8.73.25-1.56,1.71-2.62,3.27-2.37s2.62,1.71,2.37,3.27c-1.6,7.96-8.63,13.67-16.75,13.59Z'/%3E%3Cpath class='cls-1' d='m58.66,84.59H8.47C3.8,84.6,0,80.81,0,76.14h0c0-.14,0-.29.01-.43L2.29,27.1c.2-4.53,3.93-8.1,8.46-8.09h45.63c4.53,0,8.26,3.56,8.46,8.09l2.29,48.61c.23,4.67-3.36,8.64-8.03,8.87h0c-.15,0-.3.01-.44.01ZM10.75,24.67c-1.56,0-2.82,1.26-2.82,2.82l-2.29,48.5c-.08,1.56,1.12,2.88,2.67,2.96,0,0,0,0,.01,0h50.33c1.56,0,2.82-1.26,2.82-2.82v-.14l-2.29-48.61c0-1.56-1.26-2.82-2.82-2.82l-45.62.12Z'/%3E%3Cpath class='cls-1' d='m50.48,21.85h-5.64v-4.93c0-6.23-5.05-11.28-11.28-11.28s-11.28,5.05-11.28,11.28v4.93h-5.64v-4.93C16.65,7.57,24.22,0,33.56,0s16.92,7.57,16.92,16.92v4.93Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

@keyframes elwaaaa {
    0% {
        background-position: 0 0
    }

    100% {
        background-position: -2146px 0
    }
}

.home-categories-section.section-padding-space[section-id="86ebee92-5155-46b1-923d-52d968737a0e"]:before {
    display: block;
    width: 100%!important;
    background-image: url(https://media.zid.store/65d44d36-eff6-4bf7-bbda-907f75793e32/da4bc244-596f-4a5f-aff6-92f03807b469.png);
    animation: elwaaaa 80s infinite linear;
    content: "";
    width: 55%;
    height: 5vw;
    background-size: 40%;
    background-repeat: repeat-x;
    background-position: center;
    -webkit-mask-image: linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent);
    mask-image: linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent);
    margin: 10px auto auto
}

@media(max-width: 991px) {
    .home-categories-section.section-padding-space[section-id="86ebee92-5155-46b1-923d-52d968737a0e"]:before {
        display:block;
        width: 100%!important;
        height: 15vw;
        background-size: 100%;
    }
}

.header:before {
    content: '';
    background: url(https://media.zid.store/65d44d36-eff6-4bf7-bbda-907f75793e32/05cbfc6d-64a2-47a6-8385-10a6659bf062.svg);
    background-repeat-y: no-repeat;
    background-position-x: 0;
    animation: scrollBrands 500s linear alternate both infinite;
    background-size: contain;
    /* background-size: 15%; */
    height: 50px;
    /* width: 32rem; */
    display: block;
    background-color: var(--1);
    background-position: center;
    margin-bottom: 16px;
}

@keyframes scrollBrands {
    0% {
        background-position-x: 0px;
    }

    50% {
        background-position-x: 35000px;
    }

    100% {
        background-position-x: 0px;
    }
}

@media (max-width: 767px) {
    .header:before {
        background-size: 180%;
        height: 55px;
        background-position: center;
        margin-bottom: -2px;
    }
}

.account-lang-currency.upper-bar.header-theme-bg-primary.header-theme-text-for-primary-bg {
    padding: 0px 0!important;
}


@media(min-width: 992px) {
    section:nth-of-type(1) .container.container-slider {
        width: 100%!important;
        max-width: 100%!important
    }

    .home section:nth-of-type(1) .container {
        max-width: unset!important;
        padding: 0
    }

    .home section:nth-of-type(1) .main-slider {
        max-height: unset;
        margin-top: 0
    }

 [dir=rtl] .slick-next {
    right: auto;
    left: -62px;
}
[dir=rtl] .slick-prev {
    right: -62px;
    left: auto;
}
}