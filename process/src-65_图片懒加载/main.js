/*
* 入口js
* */
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store(vuex)'
import './mock/mockServer' // 加载mockServer即可
import loading from './common/img/timg.gif'

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading
})


let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上 vue-router
  store // 使用上 vuex
})

Vue.use({
  vm
})
