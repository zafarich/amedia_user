<template>
    <div>
        <p class="comment-text" :class="{ 'full-comment': isFull }"> {{ viewText }} <button class="btn-more"
                @click="toggleFull" v-if="!isFull && text.length > 300">Ko'proq
                o'qish
                <fa icon="angle-down" />
            </button>
            <button v-if="isFull && text.length > 300" class="btn-more" @click="toggleFull">Kamroq
                <fa icon="angle-up" />
            </button>
        </p>

    </div>
</template>

<script >
export default {
    props: {
        text: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            isFull: false,
            maxLength: 300
        }
    },

    computed: {
        viewText() {
            if (!this.isFull && this.text.length > 300) {
                return this.text.slice(0, this.maxLength) + "..."
            }
            else {
                return this.text
            }
        }
    },
    methods: {
        toggleFull() {
            this.isFull = !this.isFull
        }
    }
}
</script>

<style lang="scss">
.comment-text {
    font-size: 16px;
    line-height: 24px;
}

.btn-more {
    font-size: 16px;
    color: $gc;
    font-weight: 500;
    margin-left: 15px;
}
</style>
