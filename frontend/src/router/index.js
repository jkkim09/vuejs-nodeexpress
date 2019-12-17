import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login.vue'
import ButtonAdmin from '@/components/ButtonAdmin.vue'
import ButtonView from '@/components/ButtonView.vue'
import FrontView from '@/components/FrontView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/view',
      name: 'ButtonView',
      component: ButtonView
    },
    {
      path: '/admin',
      name: 'ButtonAdmin',
      component: ButtonAdmin
    },
    {
      path: '/front',
      name: 'FrontView',
      component: FrontView
    }
  ]
})
