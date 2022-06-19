export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  },
}

export const actions = {
  async getProducts({ commit }) {
    try {
      const { data } = await this.$axios.get('/product')
      commit('SET_PRODUCTS', data)
    } catch (error) {
      console.log(error)
    }
  },
}
