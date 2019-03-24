export const state = () => ({
  list: [],
  response: {},
  types: [
    {
      name: 'Assault',
      imgUrl: '/svgs/map_assault.svg'
    },
    {
      name: 'Control',
      imgUrl: '/svgs/map_control.svg'
    },
    {
      name: 'Escort',
      imgUrl: '/svgs/map_escort.svg'
    },
    {
      name: 'Hybrid',
      imgUrl: '/svgs/map_hybrid.svg'
    }
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

export const getters = {
  orderByType(state) {
    const aux = [...state.list].sort(function(a, b) {
      if (a.type > b.type) {
        return 1
      } else if (a.type < b.type) {
        return -1
      } else {
        return 0
      }
    })
    return aux
  }
}

export const actions = {
  async fetchMaps({ commit }) {
    try {
      const response = await this.$axios.$get('/api/maps')
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
