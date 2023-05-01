<template>
    <div>
        <div class="id-news" v-if="newsid != null">
            <div class="container">
                <div class="card-row">
                    <div class="item-8 item-md-6">
                        <div class="content">
                            <div class="title">
                                <h1>
                                    {{ newsid.name[$i18n.locale] }}
                                </h1>
                                <div class="date">
                                    <span> {{ newsid.date.slice(0, 10) }}</span>
                                </div>
                            </div>
                            <div class="img">
                                <img :src="$cdn + newsid.image" alt="" />
                            </div>
                            <div class="text">
                                <p>
                                    {{ newsid.description[$i18n.locale] }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item-4 item-md-6">
                        <div class="all-news">
                            <div class="title">
                                <h3>{{ $t('othernews') }}</h3>
                            </div>
                            <nuxt-link
                                v-for="(item, i) in news"
                                :key="i"
                                :to="{
                                    name: 'news-id___' + $i18n.locale,
                                    params: { id: item._id },
                                }"
                                class="card-news"
                            >
                                <div class="left">
                                    <img :src="$cdn + item.image" alt="" />
                                </div>
                                <div class="right">
                                    <div class="name">
                                        <p>
                                            {{ item.name[$i18n.locale] }}
                                        </p>
                                    </div>
                                    <div class="data">
                                        <span>
                                            {{ item.date.slice(0, 10) }}</span
                                        >
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.newsid?.name[this.$i18n.locale],
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    name: 'description',
                    content: this.$t('titmeta'),
                },
            ],
        }
    },
    data() {
        return {
            news: null,
            newsid: null,
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        this.getAll()
        this.getData()
    },
    methods: {
        async getAll() {
            let news = await this.$axios.$get(
                `news/home?page=${this.page + 1}&limit=${this.limit}`
            )
            this.news = news.data
            this.length = news.count
            // console.log('asasad', this.news)
        },
        async getData() {
            let newsid = await this.$axios.$get(`news/${this.$route.params.id}`)
            this.newsid = newsid.data
            this.length = newsid.count
            // console.log('asasad', this.newsid)
        },
    },
}
</script>

<style lang="scss" scoped>
.id-news {
    margin: 60px 0;
    .all-news {
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        .title {
            margin-bottom: 20px;
        }
    }
    .card-news {
        width: 100%;
        display: flex;
        margin-bottom: 15px;
        &:hover {
            .right {
                .name {
                    p {
                        color: $gc;
                        // text-decoration: underline;
                    }
                }
            }
        }

        .left {
            border-radius: 10px;
            width: 50%;
            margin-right: 10px;
            overflow: hidden;

            img {
                transition: 0.2s;
                border-radius: 10px;
                height: 90px;
                object-fit: cover;
                width: 130px;
            }
        }
        .right {
            width: calc(100% - 10px);
            .name {
                p {
                    height: 60px;
                    line-height: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    color: #333;
                    text-overflow: ellipsis;
                    margin-bottom: 10px;
                }
            }
            .data {
                span {
                    color: #999;
                }
            }
        }
    }
    .content {
        width: 100%;

        .title {
            margin-bottom: 20px;
            h1 {
                margin-bottom: 20px;
                // max-width: 80%;
                font-size: 26px;
            }
        }
        .text {
            p {
                font-size: 16px;
                line-height: 30px;
            }
        }
        .img {
            width: 100%;
            margin-bottom: 20px;
            img {
                border-radius: 10px;
                height: 400px;
                object-fit: cover;
                width: 100%;
            }
        }
    }
}
@media (max-width: 576px) {
    .id-news {
        .content {
            margin-bottom: 30px;
        }
    }
}
</style>
