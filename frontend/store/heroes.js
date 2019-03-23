export const state = () => ({
  list: [],
  response: {},
  types: [
    {
      name: 'Attack',
      imgUrl: '/svgs/hero_attack.svg'
    },
    {
      name: 'Support',
      imgUrl: '/svgs/hero_support.svg'
    },
    {
      name: 'Tank',
      imgUrl: '/svgs/hero_tank.svg'
    },
  ]
})

export const mutations = {
  setList(state, val) {
    state.list = val
  },
  setResponse(state, val) {
    state.response = val
  }
}

export const actions = {
  async fetchHeroes({ commit }) {
    try {
      const response = await this.$axios.$get('/api/heroes')
      commit('setResponse', response)
      if (response.data.lenght) {
        commit('setList', response.data.maps)
      }
    } catch (error) {
      // TODO: check if state.list is empty
      commit('setResponse', error)
      commit('setList', [])
    }
  }
}
