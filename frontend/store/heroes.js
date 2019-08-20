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
      } else if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    })
    return aux
  },
  groupAndOrderByType(state) {
    const aux = [...state.list]
      .sort(function(a, b) {
        if (a.type > b.type) {
          return 1
        } else if (a.type < b.type) {
          return -1
        } else if (a.name > b.name) {
          return 1
        } else {
          return -1
        }
      })
      .reduce((array, el) => {
        array[el.type] = array[el.type] || []
        array[el.type].push(el)
        return array
      }, {})
    return aux
  }
}

export const actions = {
  async fetchHeroes({ commit }) {
    try {
      const response = await this.$axios.$get('/api/heroes')
      commit('setResponse', response)
      if (response.data.lenght) {
        commit('setList', response.data.heroes)
      }
    } catch (error) {
      // TODO: check if state.list is empty
      commit('setResponse', error)
      commit('setList', [])
    }
  }
}
