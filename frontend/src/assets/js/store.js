// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: '',
    page: 0,
    event: {},
    currentItem: {}
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
    },
    getCurrent: function (state) {
      return state.currentItem
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
    },
    setCurrent: function (state, payload) {
      state.currentItem = payload
    }
  }
})
