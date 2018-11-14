 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'
import store from './vuex/store'
import axios from 'axios'
import echarts from 'echarts'
//import vuex from 'vuex'
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(VueResource)
//Vue.use(vuex);
//var store = new vuex.Store({//store对象
//  state:{
//      show:false
//  }
//})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
