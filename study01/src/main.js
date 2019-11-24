import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios';
Vue.config.productionTip = false
// 전역으로 쓸 경우 컴포넌트 단위로 쓸수도 있음
// Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
