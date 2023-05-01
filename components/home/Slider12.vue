<template>
    <div>
        <div class="slider" v-if="slider != null">
            <Vue-slick-carousel v-bind="settings12">
                <div
                    class="carousel-item"
                    v-for="(item, index) in slider"
                    :key="index"
                    v-if="item.serial != null"
                >
                    <img
                        class="back"
                        :src="$cdn + item.serial.screens.original[0]"
                        alt
                    />
                    <div class="opacity-banner"></div>
                    <div class="text">
                        <div class="container">
                            <div class="card-row align-center">
                                <div class="item-7 item-md-6">
                                    <div class="categories">
                                        <nuxt-link
                                            v-for="(cat, i) in item.serial
                                                .category"
                                            :key="i"
                                            :to="{
                                                name: `filter___${$i18n.locale}`,
                                                query: {
                                                    category: cat._id,
                                                },
                                            }"
                                        >
                                            {{ cat[`name${$i18n.locale}`] }}
                                        </nuxt-link>
                                    </div>
                                    <div class="link">
                                        <nuxt-link
                                            :to="{
                                                name: `season-id___${$i18n.locale}`,
                                                params: { id: item.serial._id },
                                            }"
                                        >
                                            {{
                                                item.serial.name[
                                                    `${$i18n.locale}`
                                                ]
                                            }}
                                        </nuxt-link>
                                        <p>
                                            {{
                                                item.serial.description[
                                                    `${$i18n.locale}`
                                                ]
                                            }}
                                        </p>
                                    </div>
                                    <div class="video-info">
                                        <b>
                                            {{ item.serial.year }}
                                        </b>
                                        <h3>1080 <span>FULL HD</span></h3>
                                        <nuxt-link
                                            class="play"
                                            :to="{
                                                name: `season-id___${$i18n.locale}`,
                                                params: { id: item.serial._id },
                                            }"
                                        >
                                            <span><fa icon="play" /></span>
                                            {{ $t('see') }}
                                        </nuxt-link>
                                    </div>
                                </div>

                                <div class="item-5">
                                    <div class="img-right">
                                        <div class="img-rel">
                                            <img
                                                :src="$cdn + item.serial.image"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Vue-slick-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            settings12: {
                arrows: true,
                accessibility: false,
                dotsClass: 'slick-dots custom-dot-class',
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 600,
                autoplaySpeed: 4000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            },
            slider: null,
        }
    },
    async mounted() {
        let slider = await this.$axios.$get('slider/client')
        this.slider = slider.data
    },
}
</script>

<style lang="scss">
.slick-prev {
    left: 0px !important;
}
.slick-next {
    right: 0px !important;
}
.slick-prev,
.slick-next {
    line-height: 0;
    position: absolute;
    top: 45% !important;
    display: block;
    width: 57px !important;
    height: 92% !important;
    padding: 0;
    // transform: translate(0, -50%);
    cursor: pointer;
    color: #e10d0d00 !important;
    border: none;
    outline: none;
    background: transparent !important;
    z-index: 1777 !important;
    transition: 0.2s;
    &:hover {
        background: rgba(0, 0, 0, 0.7) !important;
    }
}
.slick-next:before {
    content: '\276F' !important;
}
.slick-prev:before {
    content: '\276E' !important;
}
.align-center {
    display: flex;
    align-items: center;
}
.slider {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
}
.slick-dots {
    font-size: 20px;
    bottom: 60px !important;
    li {
        button::before {
            font-size: 14px;
            color: #fff !important;
        }
    }
    li.slick-active {
        button::before {
            color: $gc !important;
        }
    }
}
.slick-dots li button:before {
    color: #fff !important;
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.slider {
    margin-bottom: 50px;
    z-index: 2;
    .carousel-item {
        // padding: 30px 0;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        position: relative;
        .img-right {
            display: flex;
            justify-content: flex-end;
            .img-rel {
                max-width: 350px;
                height: 450px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        img.back {
            top: 0;
            left: 0;
            pointer-events: none;
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .opacity-banner {
            box-shadow: inset 0px 0px 200px 150px rgba(0, 0, 0, 0.7);
            background: linear-gradient(130deg, black, black);

            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            // background: #000;
            // box-shadow: inset 0px 0px 200px 300px;
            // background-image: linear-gradient(
            //     to top,
            //     rgb(0, 0, 0) 0%,
            //     rgba(0, 0, 0, 0) 100%
            // );
            opacity: 0.7;
        }
        .text {
            top: 50%;
            transform: translate(0%, -50%);
            position: absolute;
            z-index: 2;
            width: 100%;
            .categories {
                margin-bottom: 10px;
                a {
                    color: $gc;
                    margin-right: 20px;

                    img {
                        margin-top: 150px;
                        height: 450px;
                        pointer-events: none;
                        width: 100%;
                    }
                }
            }
            .video-info {
                display: flex;
                align-items: center;
                margin-top: 25px;
                b {
                    color: $gc;
                }
                h3 {
                    font-weight: normal;
                    margin: 0 20px;
                    border: 1px solid #fff;
                    font-size: 16px;
                    color: #fff;
                    padding-left: 5px;
                    span {
                        margin-left: 3px;
                        background: #fff;
                        color: #000;
                        padding: 0 5px;
                        font-weight: 700;
                    }
                }
            }
            .play {
                font-size: 13px;
                font-weight: normal;
                width: auto;
                padding: 12px 24px;
                letter-spacing: 4px;
                text-transform: uppercase;
                color: #fff;
                border-width: 2px;
                border-radius: 30px;
                background: $gc;
            }
            .link {
                a {
                    display: block;
                    font-size: 50px;
                    line-height: 56px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 30px;
                    &:hover {
                        color: $gc;
                    }
                }
            }
            p {
                font-size: 20px;
                color: #fff;
                line-height: 25px;
                height: 100px;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
@media (max-width: 576px) {
    .slider {
        margin-bottom: 0;
        .slick-slider {
            padding-bottom: 0px !important;
        }
        .slick-prev {
            width: 30px !important;
            top: 49%;
            height: 66% !important;
        }
        .slick-next {
            width: 30px !important;
            top: 49%;
            height: 66% !important;
        }
        .slick-dots {
            bottom: 40px !important;
        }
        .carousel-item {
            height: 300px;
            .img-right {
                display: none;
                .img-rel {
                    height: 275px;
                }
            }
            .text {
                top: 55%;
                .categories {
                    display: none;
                }
                .link {
                    a {
                        font-size: 20px !important;
                        margin-bottom: 0px;
                        line-height: 25px;
                        -webkit-line-clamp: 2;
                    }
                    p {
                        // display: none;
                        height: 50px;
                        font-size: 15px;
                        margin-bottom: 0px !important;
                        -webkit-line-clamp: 2;
                    }
                }
                .video-info {
                    margin-top: 5px;
                    b {
                        font-size: 12px;
                    }
                    h3 {
                        display: none;
                        font-size: 14px;
                        margin: 0 10px;
                    }
                    .play {
                        margin: 0 20px;
                        display: flex;
                        align-items: center;
                        padding: 3px 10px;
                        font-size: 12px;
                        letter-spacing: 1px;
                        span {
                            font-size: 10px;
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
    }
}
</style>
