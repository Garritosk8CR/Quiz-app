/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify/lib'
import PrimaryTheme from './plugins/vuetify'
import axios from 'axios'



Vue.config.productionTip = false

Vue.use(Vuetify, PrimaryTheme)

axios.defaults.baseURL = ''


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
