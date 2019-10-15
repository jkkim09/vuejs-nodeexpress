// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: '',
    page: 0,
    event: {}
  },
  getters: {
    getPage: function (state) {
      return state.page
    },
    getUser: function (state) {
      return state.user
    },
    getEvent: function (state) {
      return state.event
    }
  },
  mutations: {
    setPage: function (state, payload) {
      state.page = Number(payload)
    },
    setUser: function (state, payload) {
      state.user = payload
    },
    setEvent: function (state, payload) {
      state.event[payload] = true
    }
  }
})
