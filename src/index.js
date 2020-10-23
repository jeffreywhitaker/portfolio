import Vue from 'vue'

import App from './App.vue'
import router from './utils/routes'

import './index.css'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#root')
