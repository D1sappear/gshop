/*
* 入口js
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store(vuex)'

let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上 vue-router
  store // 使用上 vuex
})

Vue.use({
  vm
})
