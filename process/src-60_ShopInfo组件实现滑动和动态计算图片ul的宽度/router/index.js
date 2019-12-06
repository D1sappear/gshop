/*
* 路由对象模块
* */
// 1. 引入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// 4. 引入路由组件
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/shop/ShopInfo/ShopInfo'

// 2. 声明使用插件
Vue.use(VueRouter)

// 3. 暴露路由
export default new VueRouter({
  // 5. 映射所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
