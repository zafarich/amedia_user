<template>
    <div>
        <nuxt-link
            :to="{
                name: 'season-id___' + $i18n.locale,
                params: { id: anime._id },
            }"
        >
            <div class="anime-card">
                <div class="top">
                    <span class="year"> {{ anime.year }}</span>
                    <span class="seriya"> {{ anime.num }} </span>
                    <button
                        @click.prevent="likebos"
                        :class="like ? 'like bos' : 'like'"
                    >
                        <fa icon="heart" />
                    </button>
                </div>

                <div class="img">
                    <img :src="$cdn + anime.image" />
                </div>

                <div class="text-bottom">
                    <div class="text-inner">
                        <div class="blur"></div>
                        <div class="text">
                            <div class="title">
                                <h2>
                                    {{ anime.name[$i18n.locale] }}
                                </h2>
                            </div>
                            <div class="bot">
                                <div class="left">
                                    <span>
                                        <fa icon="eye" />
                                        <b>{{ anime.view }}</b>
                                    </span>
                                </div>

                                <div
                                    v-if="anime.price == 'free'"
                                    class="price-type free"
                                >
                                    {{ $t('free') }}
                                </div>
                                <div
                                    v-if="anime.price == 'selling'"
                                    class="price-type free"
                                >
                                    {{ $t('pul') }}
                                </div>
                                <!-- <div class="price-type lock">Pullik</div> -->
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
        anime: {
            type: Object,
        },
    },
    data() {
        return {
            like: false,
            likedAnime: null,
        }
    },
    async mounted() {
        this.checkLike()
    },
    methods: {
        async likebos() {
            if (this.$auth.loggedIn) {
                if (!this.like) {
                    await this.$axios
                        .$post('/like/create', {
                            season: this.anime._id,
                        })
                        .then((res) => {
                            this.like = true
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                } else {
                    await this.$axios
                        .$delete(`/like/${this.likedAnime._id}`)
                        .then((res) => {
                            this.like = false
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }

                await this.$store.dispatch('getLike').then((res) => {
                    this.checkLike()
                })
            } else {
                alert("Ro'yxatdan o'tmagansiz")
            }
        },
        async checkLike() {
            let likes = await this.$store.state.like

            let find = likes.find((item) => item.season._id == this.anime._id)

            if (find) {
                this.like = true
                this.likedAnime = find
            }
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
    .top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 6;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    span.seriya {
        padding: 3px 10px;
        font-size: 13px;
        color: #fff;
        background: $gc;
        // position: absolute;
        background-color: rgba($color: #000000, $alpha: 0.5);

        // top: 15px;
        // left: 50%;
        // transform: translate(-50%, 0);
        z-index: 5;
        border-radius: 3px;
    }
    span.year {
        padding: 3px 10px;
        font-size: 13px;
        color: #fff;
        background: $gc;
        // position: absolute;
        // top: 15px;
        // left: 15px;
        z-index: 5;
        border-radius: 3px;
    }

    button.like {
        // position: absolute;
        z-index: 3;
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
        &.bos {
            animation-name: like;
            animation-duration: 0.2s;
            svg {
                font-size: 24px;
                path {
                    fill: $gc;
                }
            }
        }
    }
    @keyframes like {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.4);
        }
        100% {
            transform: scale(1);
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
            background-color: rgba($color: #000000, $alpha: 0.6);
        }
        div.blur {
            position: absolute;
            opacity: 0.9;
            z-index: 2;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        div.text {
            position: relative;
            z-index: 23;
        }
        div.title {
            border-bottom: 1px solid rgb(182, 182, 182);
            padding: 15px 20px;
            position: relative;
            z-index: 5;
        }
        h2 {
            font-size: 18px;
            color: #fff;
            font-weight: 500;
            height: 50px;
            line-height: 25px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
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
@media (max-width: 576px) {
    .anime-card {
        margin-bottom: 20px !important;
        div.top {
            padding: 2px !important;

            span.year {
                font-size: 11px !important;
                line-height: 14px !important;
                padding: 0px 5px;
                height: 16px;
            }
            span.seriya {
                font-size: 11px !important;
                line-height: 14px !important;
                padding: 0px 5px !important;
                height: 16px !important;
            }
            button.like {
                svg {
                    font-size: 18px;
                }
            }
        }
        .img {
            height: 230px !important;
        }
        .text-bottom {
            h2 {
                font-size: 13px !important;
                line-height: 18px !important;
                height: 36px !important;
            }
            .title {
                padding: 5px 10px !important;
            }
            .bot {
                padding: 5px 10px !important;

                svg {
                    font-size: 12px !important;
                }
                b {
                    font-size: 12px !important;
                    margin-left: 5px !important;
                }

                .price-type {
                    font-size: 12px !important;
                    padding: 2px 5px !important;
                }
            }
        }
    }
}
</style>
