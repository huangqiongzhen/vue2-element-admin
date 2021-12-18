import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarActive: false
  },
  getters: {
    sidebarActive: state => state.sidebarActive
  },
  mutations: {
    setSideBar(state) {
      state.sidebarActive = !state.sidebarActive
    }
  },
  actions: {
    setSideBar({ commit }) {
      commit('setSideBar')
    }
  },
  modules: {}
})
