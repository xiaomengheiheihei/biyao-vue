// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './utils/http'
import vue_bus from 'vue-bus'

Vue.use(vue_bus);
Vue.config.productionTip = false
Vue.prototype.http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
