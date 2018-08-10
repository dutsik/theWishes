import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Datetime from 'vue-datetime'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons/faLightbulb'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle'


import LoadingButton from '@/components/LoadingButton'
import FormError from '@/components/FormError'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

window.axios = axios

Vue.config.productionTip = false

library.add(faTimes, faSpinner, faCheck, faUser, faKey, faTrash, faPlus, faLock, faHeart, faMobileAlt, faExclamationTriangle)
library.add(faGithub)
library.add(faClock, faLightbulb, faCheckCircle)

Vue.use(VueRouter);
Vue.use(Datetime);

Vue.component('LoadingButton', LoadingButton)
Vue.component('FormError', FormError)
Vue.component('Fa', FontAwesomeIcon)


Vue.directive('focus', {
  inserted (el) {
    el.focus()
  }
})

window.axios = axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = `${BASE_URL}/api/v1/`

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}


