<template>
    <div v-if="loading">
        <Header />
        <div class="header-back"></div>
        <div class="layout-home">
            <Nuxt :key="$route.fullPath" />
        </div>
        <Loading />
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
        }
    },
    async mounted() {
        if (this.$auth.loggedIn) {
            await this.$store.dispatch('getLike')
        }

        localStorage.removeItem('limit')

        await this.$store.dispatch('getJanr')
        await this.$store.dispatch('getCategory')
        this.loading = true
        ;(function (m, e, t, r, i, k, a) {
            m[i] =
                m[i] ||
                function () {
                    ;(m[i].a = m[i].a || []).push(arguments)
                }
            m[i].l = 1 * new Date()
            ;(k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a)
        })(
            window,
            document,
            'script',
            'https://mc.yandex.ru/metrika/tag.js',
            'ym'
        )

        ym(86920155, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
        })
    },
}
</script>

<style lang="scss"></style>
