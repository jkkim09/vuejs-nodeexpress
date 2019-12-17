import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Button from '@/components/Button.vue'
import ButtonAdmin from '@/components/ButtonAdmin.vue'
import ButtonView from '@/components/ButtonView.vue'

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
      name: 'Button',
      component: Button
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
    }
  ]
})
