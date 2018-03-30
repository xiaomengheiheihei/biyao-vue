import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/home'
import classify from '@/components/classify'
import shopCar from '@/components/shopCar'
import mine from '@/components/mine'
import proList from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: 'mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/list',
      name: 'proList',
      component: proList,
    }
  ]
})
