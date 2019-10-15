// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import io from 'socket.io-client'
import config from './assets/js/config'
// store.js 를 불러와
import { store } from './assets/js/store'

import Header0 from './components/header/Header0'
import Header1 from './components/header/Header1'
import Header2 from './components/header/Header2'
import Header3 from './components/header/Header3'
import Header4 from './components/header/Header4'
import Header5 from './components/header/Header5'
import Header6 from './components/header/Header6'

import Box0 from './components/box/Box0'
import Box1 from './components/box/Box1'
import Box2 from './components/box/Box2'
import Box3 from './components/box/Box3'
import Box4 from './components/box/Box4'
import Box5 from './components/box/Box5'
import Box6 from './components/box/Box6'

Vue.prototype.$http = axios
Vue.prototype.$io = io
Vue.prototype.$socket = io('http://localhost:3000')
Vue.prototype.$config = config
// Vue.prototype.$io = io
Vue.config.productionTip = false
Vue.component('header-0', Header0)
Vue.component('header-1', Header1)
Vue.component('header-2', Header2)
Vue.component('header-3', Header3)
Vue.component('header-4', Header4)
Vue.component('header-5', Header5)
Vue.component('header-6', Header6)

Vue.component('box-0', Box0)
Vue.component('box-1', Box1)
Vue.component('box-2', Box2)
Vue.component('box-3', Box3)
Vue.component('box-4', Box4)
Vue.component('box-5', Box5)
Vue.component('box-6', Box6)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
