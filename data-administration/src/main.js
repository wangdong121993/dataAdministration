import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './storage/index'
import './plugins/element.js'
import "./plugins/eCharts"

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
