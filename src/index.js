import Vue from 'vue';
import App from './App.vue';

const render = h => h(App);

window.SettingsUI = new Vue({
  el: '#app',
  render,
});
