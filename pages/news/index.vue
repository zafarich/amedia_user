<template>
    <div>
        <div class="filter-page">
            <div class="filter-title">
                <div class="container">
                    <h2>{{ $t('news') }}</h2>
                </div>
            </div>

            <div class="filter-content">
                <div class="container">
                    <div class="card-row">
                        <div class="filter-courses">
                            <div>
                                <div class="card-row">
                                    <div
                                        v-for="(item, i) in news"
                                        :key="i"
                                        class="item-4 item-md-6"
                                    >
                                        <NewsCard :news="item" />
                                    </div>
                                </div>
                            </div>

                            <div class="pagination">
                                <pagination
                                    :total-items="length"
                                    :max-visible-pages="8"
                                    :items-per-page="limit"
                                    :page="page"
                                    @page-change="pageChange"
                                >
                                </pagination>
                            </div>
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
            title: this.$t('news'),
            meta: [
                {
                    hid: this.$t('titmeta'),
                    name: 'description',
                    content: this.$t('titmeta'),
                },
            ],
        }
    },
    data() {
        return {
            length: 55,
            limit: 9,
            page: 0,
            news: null,
        }
    },
    async mounted() {
        this.getData()
        window.scrollTo(0, 0)
    },
    methods: {
        pageChange(page) {
            this.page = page
            this.getData()
        },
        async getData() {
            let news = await this.$axios.$get(
                `news/home?page=${this.page + 1}&limit=${this.limit}`
            )
            this.news = news.data
            this.length = news.count
            // console.log('asasad', this.news)
        },
    },
}
</script>

<style lang="scss" scoped>
div.filter-page {
    margin-bottom: 50px;
    div.filter-title {
        background-color: $gh;
        padding: 45px 0px;
        h2 {
            font-size: 34px;
            color: $gc;
            font-weight: 500;
        }
    }

    div.filter-content {
        padding: 40px 0px;
        .filter-courses {
            width: 100%;
        }
    }

    h3.cat-title {
        font-size: 24px;
        color: $gc;
        margin-bottom: 15px;
        font-weight: 500;
    }
    div.check-box {
        margin-bottom: 30px;
    }
}
@media (max-width: 576px) {
    .filter-page {
        .anime-card {
            margin-bottom: 0 !important;
            .item-md-6 {
                margin-bottom: 0 !important;
            }
        }
    }
}
</style>
