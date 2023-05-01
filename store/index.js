export const state = () => ({
    isLoading: false,
    isLoginModal: false,
    isLoggin: false,
    isRegister: false,

    janr: [],
    category: [],
    like: [],
})
export const mutations = {
    TRUE_LOADING(state, data) {
        state.isLoading = true
    },
    FALSE_LOADING(state, data) {
        state.isLoading = false
    },

    CHANGE_LOG(state) {
        state.isLoginModal = true

    },
    CHANGE_LOG_FALSE(state) {
        state.isLoginModal = false

    },
    CHANGE_LOGIN(state, data) {
        state.isLogin = data
    },
    CHANGE_REGISTER(state, data) {
        state.isRegister = data
    },

    JANR_GET(state, data) {
        state.janr = data
    },
    CATEGORY_GET(state, data) {
        state.category = data
    },
    LIKE_GET(state, data) {
        state.like = data
    },
}
export const actions = {
    async getJanr({ commit }) {
        let janr = await this.$axios.$get('janr')
        commit('JANR_GET', janr.data)
    },
    async getCategory({ commit }) {
        let category = await this.$axios.$get('category')
        commit('CATEGORY_GET', category.data)
    },
    async getLike({ commit }) {
        let like = await this.$axios.$get('like/me')
        commit('LIKE_GET', like.data)
    },
}
