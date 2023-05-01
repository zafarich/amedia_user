<template>
    <div>
        <div class="trending-courses">
            <div class="container">
                <div class="category-box">
                    <div class="anime-cat">
                        <button
                            v-for="(item, index) in category"
                            :key="index"
                            :class="
                                categoryId == item._id
                                    ? 'btn-simple btn-simple-active'
                                    : 'btn-simple'
                            "
                            @click="clickCat(item._id)"
                        >
                            {{ item[`name${$i18n.locale}`] }}
                        </button>
                    </div>

                    <nuxt-link
                        :to="{
                            name: `filter___${$i18n.locale}`,
                        }"
                        class="btn-simple"
                        >{{ $t('all') }} <fa icon="angle-right" />
                    </nuxt-link>
                </div>

                <div class="anime-row">
                    <div
                        v-for="(anime, i) in animes"
                        :key="i"
                        class="anime-item item-md-3"
                    >
                        <AnimeCard :anime="anime" />
                    </div>
                </div>

                <div class="animes-add" v-if="count >= limit">
                    <button
                        @click="clickMore"
                        class="btn-simple btn-simple-active"
                    >
                        {{ $t('more') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0,
            animes: null,
            page: 1,
            limit: 12,
            count: 0,
            categoryId: '5fdf87edd220804c589bef9a',
        }
    },
    computed: {
        category() {
            return this.$store.state.category
        },
    },
    async mounted() {
        this.getData()
    },
    methods: {
        clickCat(id) {
            this.categoryId = id
            this.getData()
        },
        clickMore() {
            this.limit = parseInt(this.limit) + 12
            localStorage.setItem('limit', this.limit)
            this.getData()
        },
        async getData() {
            if (localStorage.getItem('limit')) {
                this.limit = localStorage.getItem('limit')
            }

            let animes = await this.$axios.$post(
                `season/home?page=${this.page}&limit=${this.limit}`,
                {
                    category: this.categoryId,
                }
            )
            this.animes = animes.data
            this.count = animes.count
            // console.log('animes', this.animes)
        },
    },
}
</script>

<style lang="scss">
div.trending-courses {
    margin-bottom: 80px;
    margin-top: 100vh;
    .animes-add {
        display: flex;
        justify-content: center;
    }
    div.category-box {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .anime-cat {
            button {
                margin-right: 8px;
            }
        }
    }

    .slick-dots li.slick-active button:before {
        color: $gc;
        opacity: 1;
    }
}
@media (max-width: 576px) {
    .trending-courses {
        margin-top: 300px !important;
    }
    .category-box {
        margin-bottom: 20px !important;
        align-items: flex-end !important;
        flex-wrap: wrap;
        .btn-simple {
            margin-bottom: 10px !important;
        }
        .anime-cat {
            // max-width: 77%;
        }
    }
}
</style>
