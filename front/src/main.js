import './bootstrap'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import store from './store'
import router from './router'

import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'

import './i18n'

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/custom.scss'

import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
Vue.component('b-navbar', bNavbar);



Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000', // Your API domain

  providers: {
    github: {
      clientId: '',
      redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
    }
  }
})

/* eslint-disable no-new */




new Vue({

  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})






