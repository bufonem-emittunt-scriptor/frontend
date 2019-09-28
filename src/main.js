import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import xlib from './xlib';

Vue.config.productionTip = false;
Vue.use(xlib);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import '@/services/shrink-prevent.js';
