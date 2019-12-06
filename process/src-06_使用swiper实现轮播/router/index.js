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

// 2. 声明使用插件
Vue.use(VueRouter)

// 3. 暴露路由
export default new VueRouter({
  // 5. 配置所有路由
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
