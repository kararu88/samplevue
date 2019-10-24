import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

Vue.use(BootstrapVue,Vuex);

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
