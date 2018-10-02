import Vue from 'vue'
// TODO make moment js work with i18n automatically
// import moment from 'vue-moment'


// add translations directly to the application
Vue.i18n.add('en', require('./en.json'))
Vue.i18n.add('ru', require('./ru.json'))

// set the start locale to use
Vue.i18n.set('ru')

// set fallback for non-translated strings
Vue.i18n.fallback('ru')
