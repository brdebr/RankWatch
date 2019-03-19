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
  }
}

export const actions = {
  async fetchMatches({ commit }) {
    try {
      const response = await this.$axios.$get('/api/matches')
      commit('setResponse', response)
      if (response.data.lenght) {
        commit('setList', response.data.matches)
      }
    } catch (error) {
      // TODO: check if state.list is empty
      commit('setResponse', error)
      commit('setList', [])
    }
  }
}

//   export const actions = {
//     async fetchMatches({ commit, state }) {
//       if(state.response && state.response.timestamp){
//         if(moment.duration(moment().diff(state.response, 'minutes', true)).minutes() > 5){
//           let response = await this.$axios.$get('http://localhost:4000/api/matches')
//           response.timestamp = moment()
//           commit('setResponse', response)
//           if(response.data.lenght){
//               commit('setList', response.data.matches)
//           }
//         }
//       } else {
//         let response = await this.$axios.$get('http://localhost:4000/api/matches')
//         response.timestamp = moment()
//         commit('setResponse', response)
//         if(response.data.lenght){
//             commit('setList', response.data.matches)
//         }
//       }
//     }
// }
