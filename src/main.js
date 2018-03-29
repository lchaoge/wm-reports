// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VueRouter from 'vue-router'
import {routes} from './router/index'
Vue.use(VueRouter)

import {store} from './store'

var router = new VueRouter({
	routes,
	mode:'history'
})

Vue.config.productionTip = false

import EasyScroll from 'easyscroll'
Vue.use(EasyScroll)

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
