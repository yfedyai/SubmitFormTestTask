import axios from 'axios'

export default {
  state: {
    data: null
  },

  mutations: {
    setData (state, payload) {
      state.data = payload
    }
  },
  actions: {
    async getData ({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/form')
        console.log(response.data)
        commit('setData', response.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
