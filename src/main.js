// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Aioxs from 'axios'
import Vuex from 'vuex'
import store from './store'
import 'swiper/dist/css/swiper.css'
import '../static/css/common/common.css'

Vue.config.productionTip = false
// Vue.use(Aioxs)
Vue.use(Vuex)
Vue.prototype.$aioxs = Aioxs
console.log(router)
/* eslint-disable no-new */
var Nvue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  methods: {
  }
})
console.log(Nvue)