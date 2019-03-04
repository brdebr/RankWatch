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
      async fetchMatches({ commit }) {
        let response = await this.$axios.$get('http://localhost:4000/api/matches')
        commit('setResponse', response)
        if(response.data.lenght){
            commit('setList', response.data.matches)
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