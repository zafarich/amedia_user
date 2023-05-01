<template>
    <div>
        <div class="home-news">
            <div class="container">
                <div class="home-title">
                    <h4>{{ $t('news') }}</h4>

                    <nuxt-link class="btn-simple" to="/news">{{
                        $t('all')
                    }}</nuxt-link>
                </div>

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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: null,
        }
    },
    async mounted() {
        let news = await this.$axios.$get(`news/home?page=1&limit=3`)
        this.news = news.data
        // console.log('asad', this.news)
    },
}
</script>

<style></style>
