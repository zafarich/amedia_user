<template>
    <div>
        <footer>
            <div class="container">
                <div class="footer-top">AMEDIATV</div>
                <div class="card-row">
                    <div class="item-3 item-md-3">
                        <h3>{{ $t('adres') }}</h3>

                        <div class="adres mb-">
                            <p>
                                {{ $t('address') }}
                            </p>
                        </div>
                        <div class="adres mt-10 f-12">
                            <p>
                                Saytda chop etilgan har qanday materiallarga
                                bo'lgan barcha huquqlar O'zbekiston va xalqaro
                                mualliflik huquqi va turdosh huquqlar
                                to'g'risidagi qonun hujjatlariga muvofiq
                                himoyalangan. Matn, fotosurat, audio va video
                                materiallardan har qanday foydalanish faqat
                                mualliflik huquqi egasining roziligi bilan
                                mumkin
                            </p>
                        </div>
                    </div>
                    <div class="item-3 item-md-3">
                        <h3>{{ $t('contact') }}</h3>
                        <div class="tel">
                            <b>+998 (90) 959 66 08</b>
                        </div>
                        <nuxt-link
                            class="link-foot"
                            :to="{ name: `cer___${$i18n.locale}` }"
                            >Политика конфиденциальности</nuxt-link
                        >
                        <nuxt-link
                            class="link-foot"
                            :to="{ name: `polsog___${$i18n.locale}` }"
                            >Пользовательское соглашение</nuxt-link
                        >
                    </div>
                    <div class="item-3 item-md-12">
                        <h3>{{ $t('category') }}</h3>
                        <div class="janr">
                            <ul>
                                <li
                                    v-for="(item, index) in category"
                                    :key="index"
                                >
                                    <nuxt-link
                                        :to="{
                                            name: 'filter___' + $i18n.locale,
                                            query: { category: item._id },
                                        }"
                                    >
                                        {{
                                            item[`name${$i18n.locale}`]
                                        }}</nuxt-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-3 item-md-12">
                        <h3>{{ $t('sotset') }}</h3>
                        <div class="social-links">
                            <ul>
                                <li>
                                    <a href="https://t.me/amediatvuz"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="telegram-plane"
                                            class="
                                                svg-inline--fa
                                                fa-telegram-plane fa-w-14
                                            "
                                            role="img"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="instagram"
                                            class="
                                                svg-inline--fa
                                                fa-instagram fa-w-14
                                            "
                                            role="img"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                            /></svg
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="youtube"
                                            class="
                                                svg-inline--fa
                                                fa-youtube fa-w-18
                                            "
                                            role="img"
                                            viewBox="0 0 576 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                            /></svg
                                    ></a>
                                </li>
                            </ul>
                        </div>

                        <h3>Платежные системы</h3>

                        <div class="pay-types">
                            <div class="item-pay">
                                <img src="@/assets/img/payme.png" alt="" />
                            </div>
                            <div class="item-pay">
                                <img src="@/assets/img/click.png" alt="" />
                            </div>
                            <div class="item-pay">
                                <img src="@/assets/img/oson.png" alt="" />
                            </div>
                            <div class="item-pay">
                                <img src="@/assets/img/apelsin.png" alt="" />
                            </div>
                            <div class="item-pay">
                                <img src="@/assets/img/paynet.png" alt="" />
                            </div>
                        </div>

                        <div class="app_wrap">
                            <a href="#" class="mt-8">
                                <img
                                    style="width: 130px"
                                    src="@/assets/img/appstore.png"
                                    alt=""
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.amediatv"
                                class="mt-8"
                            >
                                <img src="@/assets/img/playmarket.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="d-a-center footer-bb">
                        <p class="">{{ $t('allzashita') }}</p>
                        <nuxt-link :to="{ name: `ourlits___${$i18n.locale}` }"
                            >Наши лицензии</nuxt-link
                        >
                    </div>
                    <p>UMD Soft</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        category() {
            return this.$store.state.category
        },
    },
}
</script>

<style lang="scss" scoped>
.pay-types {
    display: flex;
    flex-wrap: wrap;
    .item-pay {
        height: 30px;
        background: #fff;
        min-width: 80px;
        margin-right: 5px;
        margin-bottom: 10px;
        padding: 3px;
        border-radius: 5px;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
}
.footer-bb {
    p {
        font-size: 14px;
        margin-right: 16px;
    }
    a {
        font-size: 14px;
        color: $gc;
    }
}
.link-foot {
    font-size: 16px;
    color: $gc;
    margin-top: 16px;
    display: block;
}
footer {
    padding: 50px 0;
    background-color: #1a1919 !important;
    position: relative;
    z-index: 0;
    .app_wrap {
        margin-top: 16px;
        display: flex;
        a {
            margin-right: 24px;
        }
    }
    div.footer-top {
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        position: absolute;
        font-size: 170px;
        opacity: 0.3;
        z-index: -1;
        color: #222;
        font-weight: 600;
        pointer-events: none;
    }
    .card-row {
        .item-12,
        .item-3 {
            h3 {
                font-weight: 500;
                z-index: 33;
                color: $gc;
                margin-bottom: 20px;
                z-index: 12;
            }
            div {
                display: flex;
                z-index: 12;
            }
            .adres {
                p {
                    color: #fff;
                    z-index: 12;
                }
            }
            .tel {
                b {
                    color: #fff;
                    font-weight: 500;
                    z-index: 12;
                }
            }
            div.social-links {
                z-index: 12;
                margin-bottom: 14px;
                ul {
                    z-index: 12;
                    display: flex;
                    list-style: none;
                }
                a {
                    margin-right: 15px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    background-color: $gh;
                    border-radius: 5px;
                    transition: 0.2s;
                    &:hover {
                        background-color: $gc;
                        svg {
                            path {
                                fill: #fff;
                            }
                        }
                    }
                    svg {
                        path {
                            transition: 0.2s;

                            fill: $gc;
                        }
                    }
                }
            }
            .janr {
                ul {
                    z-index: 12;

                    list-style: none;

                    li {
                        margin-bottom: 10px;
                        z-index: 12;

                        a {
                            z-index: 12;

                            color: #fff;
                            padding: 10px 20px;
                            padding-left: 0;
                            transition: 0.3s;
                            &:hover {
                                color: $gc;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-bottom {
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid rgb(37, 37, 37);
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            font-size: 14px;
            color: #fff;
        }
    }
}
@media (max-width: 576px) {
    footer {
        .footer-top {
            display: none;
        }
        .item-md-3 {
            margin-bottom: 15px;
        }
    }
}
</style>
