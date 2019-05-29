// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import TopHeader from '@/components/common/TopHeader.vue'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('top-header', TopHeader)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
