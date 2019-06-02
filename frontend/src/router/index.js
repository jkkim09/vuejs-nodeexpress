import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SignUp from '@/components/SignUp'
import FindUserInfo from '@/components/FindUserInfo'
import Login from '@/components/Login'
import ListPage from '@/components/ListPage'
import Address from '@/components/Address'
import PlaceSearch from '@/components/PlaceSearch'
import UserInfo from '@/components/UserInfo'
import History from '@/components/History'
import Myplace from '@/components/Myplace'
import Reservation from '@/components/Reservation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/finduserinfo',
      name: 'FindUserInfo',
      component: FindUserInfo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/listpage',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/place',
      name: 'PlaceSearch',
      component: PlaceSearch
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/myplace',
      name: 'Myplace',
      component: Myplace
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation
    }
  ]
})
