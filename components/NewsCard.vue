<template>
    <div>
        <nuxt-link
            :to="{
                name: 'news-id___' + $i18n.locale,
                params: { id: news._id },
            }"
        >
            <div class="anime-card">
                <div class="img">
                    <img :src="$cdn + news.image" alt="" />
                </div>

                <div class="text-bottom">
                    <div class="text-inner">
                        <div class="blur"></div>
                        <div class="text">
                            <div class="title">
                                <h2>
                                    {{ news.name[$i18n.locale] }}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: Object,
        },
    },
}
</script>

<style lang="scss" scoped>
div.anime-card {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;

    span.year {
        padding: 3px 10px;
        font-size: 13px;
        color: #fff;
        background: $gc;
        position: absolute;
        top: 15px;
        left: 15px;
        z-index: 5;
        border-radius: 3px;
    }

    button.like {
        position: absolute;
        z-index: 5;
        right: 15px;
        top: 15px;

        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        // background-color: #fff;
        svg {
            font-size: 24px;
            path {
                fill: #fff;
            }
        }
    }
    &:hover {
        box-shadow: 5px 5px 25px rgb(0 0 0 / 8%);

        div.img {
            img {
                transform: scale(1.1);
            }
        }
        div.text-bottom {
            background-color: #fff;
            div.text-inner {
                background-color: unset !important;
            }

            h2 {
                color: $tc !important;
            }

            div.left {
                svg {
                    color: $gc;
                }
                b {
                    color: $gc;
                }
            }
        }
    }
    div.img {
        height: 366px;
        position: relative;
        z-index: 1;
        img {
            height: 100%;
            transition: 0.3s;
            width: 100%;
            object-fit: cover;
        }
    }
    div.text-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        transition: 0.3s;
        div.text-inner {
            position: relative;
            z-index: 6;
            background-color: rgba($color: #000000, $alpha: 0.5);
        }
        div.blur {
            position: absolute;
            opacity: 0.9;
            z-index: 2;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
        }
        div.text {
            position: relative;
            z-index: 23;
        }
        div.title {
            padding: 15px 20px;
            position: relative;
            z-index: 5;
        }
        h2 {
            font-size: 18px;
            color: #fff;
            font-weight: 500;
            height: 75px;
            line-height: 25px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        div.bot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            div.left {
                display: flex;
            }
            span {
                display: flex;
                align-items: center;
                margin-right: 15px;
                svg {
                    color: #fff;
                }
                b {
                    font-size: 14px;
                    color: #fff;
                    margin-left: 10px;
                    font-weight: 500;
                }
            }

            div.price-type {
                display: inline-block;
                padding: 3px 10px;
                font-size: 14px;
                color: #fff;
                border-radius: 3px;
            }

            .free {
                background-color: #00bda6;
            }
            .lock {
                background-color: #e93333;
            }
        }
    }
}

div.anime-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.3);
    z-index: 2;
}
</style>
