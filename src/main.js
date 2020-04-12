import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './unite.css'
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  el: '#app',
  template: '<App/>',

  components: { App },
})