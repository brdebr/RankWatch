export const state = () => ({
    list: [],
    response: {}
  })
  
  export const mutations = {
    setList(state, val) {
      state.list = val
    },
    setResponse(state, val) {
        state.response = val
    },
  }

  export const actions = {
      async fetchMaps({ commit }) {
        try {
          let response = await this.$axios.$get('http://localhost:4000/api/maps')
          commit('setResponse', response)
          if(response.data.lenght){
              commit('setList', response.data.maps)
          }
        } catch (error) {
          // TODO: check if state.list is empty
          commit('setResponse', error)
          commit('setList', [])
        }
      }
  }