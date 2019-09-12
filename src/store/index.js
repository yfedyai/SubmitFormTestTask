import Vue from 'vue'
import Vuex from 'vuex'
import form from '../store/form'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form
  }
})
