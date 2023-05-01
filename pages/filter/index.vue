<template>
    <div>
        <div class="filter-page">
            <div class="filter-title">
                <div class="container">
                    <div class="flex">
                        <h2>{{ $t('anime') }}</h2>
                        <button class="filter" @click="clickFilter">
                            <span> <fa icon="filter" /> </span>
                            Filter
                        </button>
                    </div>
                </div>
            </div>
            <div class="filter-content">
                <div class="container">
                    <div class="card-row">
                        <div
                            @click="isCategory = false"
                            :class="isCategory ? 'fix-vh' : ''"
                        ></div>
                        <div
                            :class="
                                isCategory
                                    ? 'item-3 fxd-left scroll show'
                                    : 'item-3 fxd-left'
                            "
                        >
                            <h3 class="cat-title">{{ $t('category') }}</h3>

                            <div class="check-box check-custom">
                                <label
                                    class="cont"
                                    v-for="(item, index) in category"
                                    :key="index"
                                >
                                    {{ item[`name${$i18n.locale}`] }}
                                    <input
                                        v-model="filter.category"
                                        type="checkbox"
                                        :value="item._id"
                                        @change="changeCheck"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <h3 class="cat-title">{{ $t('janr') }}</h3>

                            <div class="check-box check-custom">
                                <label
                                    class="cont"
                                    v-for="(item, index) in janr"
                                    :key="index"
                                >
                                    {{ item[`name${$i18n.locale}`] }}
                                    <input
                                        v-model="filter.janr"
                                        type="checkbox"
                                        :value="item._id"
                                        @change="changeCheck"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <h3 class="cat-title">{{ $t('years') }}</h3>

                            <div class="check-box check-custom">
                                <label
                                    class="cont"
                                    v-for="(item, index) in year"
                                    :key="index"
                                >
                                    {{ item }}
                                    <input
                                        v-model="filter.year"
                                        type="checkbox"
                                        :value="item"
                                        @change="changeCheck"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div class="item-9 item-md-6" v-if="season != null">
                            <div
                                class="filter-courses"
                                v-if="season.length > 0"
                            >
                                <div class="card-row">
                                    <div
                                        class="item-4 item-md-3 mb-30"
                                        v-for="(item, index) in season"
                                        :key="index"
                                    >
                                        <AnimeCard :anime="item" />
                                    </div>
                                </div>
                            </div>

                            <div v-else>
                                <h1 class="not-found">
                                    {{ $t('notfound') }}
                                </h1>
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
            title: `Anime filmlar - Amediatv`,
            meta: [
                {
                    name: 'description',
                    content: this.$t('titmeta'),
                },
            ],
        }
    },
    data() {
        return {
            length: 55,
            limit: 12,
            page: 0,
            isCategory: false,
            filter: {
                category: [],
                janr: [],
                year: [],
            },
            year: [],
            season: null,
        }
    },
    computed: {
        janr() {
            return this.$store.state.janr
        },
        category() {
            return this.$store.state.category
        },
    },
    async mounted() {
        for (let i = parseInt(new Date().getFullYear()); i >= 1991; i--) {
            this.year.push(i.toString())
        }
        window.scrollTo(0, 0)

        if (this.$route.query.janr) {
            this.filter.janr.push(this.$route.query.janr)
        }
        if (this.$route.query.category) {
            this.filter.category.push(this.$route.query.category)
        }
        if (this.$route.query.year) {
            this.filter.year.push(this.$route.query.year)
        }

        await this.getData()
    },
    methods: {
        pageChange(page) {
            this.page = page
            this.getData()

            window.scrollTo(0, 0)
        },
        clickFilter() {
            this.isCategory = true
        },
        async getData() {
            let season = await this.$axios.$post(
                `season/filter?page=${this.page + 1}&limit=${this.limit}`,
                this.filter
            )
            this.season = season.data
            this.length = season.count
        },
        changeCheck() {
            this.getData()
            window.scrollTo(0, 0)
        },
    },
}
</script>

<style lang="scss">
div.filter-page {
    margin-bottom: 50px;
    div.filter-title {
        background-color: $gh;
        padding: 45px 0px;
        button {
            display: none;
        }
        h2 {
            font-size: 34px;
            color: $gc;
            font-weight: 500;
        }
    }

    div.filter-content {
        padding: 40px 0px;
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
        .fix-vh {
            position: absolute;
            width: 100%;
            height: 100vh;
            background: #000;
            z-index: 12;
            top: 0;
            left: 0;
            opacity: 0.6;
        }
        .filter-title {
            padding: 20px 0 !important;
            h2 {
                font-size: 22px !important;
            }
            button {
                display: block !important;
                background: $gc;
                color: #fff;
                padding: 5px 10px;
                border-radius: 3px;
            }
        }
        .filter-content {
            padding: 0 !important;
        }
        .filter-courses {
            padding: 20px 0;
        }
        .mb-30 {
            margin-bottom: 0px !important;
        }
        .show {
            left: 50%;
        }
        .fxd-left {
            position: fixed;
            left: -102%;
            top: 0;
            transition: 0.2s;

            width: 60%;
            background: #252831;
            z-index: 21;
            height: 100vh;
            overflow-y: scroll;
            .cont {
                color: #fff !important;
                font-weight: 400 !important;
            }
        }
    }
}
</style>
