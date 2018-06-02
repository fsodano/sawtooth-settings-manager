import Dotenv from 'dotenv';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import SettingsList from './pages/SettingsList.vue';
import store from './stores/store';

Vue.use(VueRouter);

Dotenv.config();

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: SettingsList,
    },
  ],
});

window.$vue = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
