import Vue from 'vue'
import App from './App.vue'
// axios vue 객체 추가
import axios from 'axios';
Vue.prototype.$axios = axios;
import 'bootstrap/dist/css/bootstrap.css'
import ES6Promise from 'es6-promise'
ES6Promise.polyfill()

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
