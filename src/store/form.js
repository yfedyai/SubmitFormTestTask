import axios from 'axios'

export default {
  state: {
    importData: null
  },

  mutations: {
    setData (state, payload) {
      state.importData = payload
    }
  },
  actions: {
    async getData ({ commit }) {
      try {
        const response = await axios.get('/db.json')
        commit('setData', response.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
