<template>
    <div>
        <Slider />
        <Animes />
        <Trailer />
        <News />
    </div>
</template>

<script>
import News from '@/components/home/News.vue'
import Animes from '@/components/home/Animes.vue'
import Slider from '@/components/home/Slider12.vue'
import Trailer from '@/components/home/Trailer1.vue'

export default {
    components: {
        Trailer,
        Animes,
        News,
        Slider,
    },

    head() {
        return {
            title: this.$t('tithome'),
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    name: 'description',
                    content: this.$t('titmeta'),
                },
            ],
        }
    },

    mounted() {},
    methods: {},
}
</script>

<style lang="scss" scoped></style>
