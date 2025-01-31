import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import axios from 'axios';
import './assets/font/iconfont.css';

Vue.use(Vuex);
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
