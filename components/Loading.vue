<template>
    <div v-if="loading" id="loader">
        <div class="loading">
            <hollow-dots-spinner
                :animation-duration="1000"
                :dot-size="18"
                :dots-num="3"
                color="#f29824"
            />
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({}),

    computed: {
        loading() {
            return this.$store.state.isLoading
        },
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
div.loading {
    width: 100%;
    height: 100vh;
    background-color: #333;
    z-index: 9993434;
    opacity: 0.6;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    div.loading-inner {
        width: 482px;
        height: 347px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
@media (max-width: 480px) {
    div.loading {
        padding: 30px;
        div.loading-inner {
        }
    }
}
</style>
