import Router from 'vue-router'
import store from '../store'
import Home from '../components/Home'
import AuthLayout from '../components/auth/AuthLayout'
import TaskList from '../components/Tasks/TaskList'
import lazyLoading from './lazyLoading'


let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {auth: false}
    },
    {
      path: '*',
      redirect: { name: 'Home' }
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login')
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup')
        },
        {
          path: '',
          redirect: {name: 'login'}
        }

      ]
    },
    {
      path: '/app/:status',
      name: 'TaskList',
      component: TaskList,
      meta: {auth: true}
    },

  ]
})

router.beforeEach((to, from, next) => {
  if (!store.getters.isAuthenticated && to.meta.auth) {
    return next('/login')
  }
console.log(store.getters.isAuthenticated)
  if (store.getters.isAuthenticated && !to.meta.auth) {
    return next('/app/active')
  }

  next()
})

export default router
