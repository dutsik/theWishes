import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module

import VueAxios from 'vue-axios'
import { VueAuthenticate } from 'vue-authenticate'
import axios from 'axios';





import tasks from './modules/tasks'
import auth from './modules/auth'

// import * as getters from './getters'

Vue.use(Vuex)
Vue.use(VueAxios, axios)





const store = new Vuex.Store({
  // strict: true, // process.env.NODE_ENV !== 'production',
  modules: {
    tasks,
    auth
  },
  // state: {},
  // mutations: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
