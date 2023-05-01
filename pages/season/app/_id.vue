<template>
    <div class="app-seriya">
        <iframe v-if="seria" width="100%" height="220px" :src="seria.video" frameborder="0"
            allowfullscreen="allowfullscreen"></iframe>
    </div>
</template>

<script>
export default {
    // layout: "empty",
    data() {
        return {
            seria: null
        }
    },
    async created() {
        let seria = await this.$axios.$get("/season/seriya/one/" + this.$route.params.id)
        this.seria = seria.data
    }
}
</script>

<style lang="scss" >
header {
    display: none !important;
}

.header-back {
    display: none !important;
}

footer {
    display: none !important;
}

.app-seriya {
    height: 100vh;

    background-color: #000;
}
</style>
