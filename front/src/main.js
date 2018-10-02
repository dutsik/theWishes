import './bootstrap'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import store from './store'
import router from './router'

import VueAxios from 'vue-axios'
import axios from 'axios'

import './i18n'

import './scss/custom.scss'



import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item'
import bNav from 'bootstrap-vue/es/components/nav/nav'
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select'

Vue.component('b-navbar', bNavbar);
Vue.component('b-nav-item', bNavItem);
Vue.component('b-nav', bNav);
Vue.component('b-form-select', bFormSelect);



Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueAxios, axios)

/* eslint-disable no-new */




new Vue({

  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})






