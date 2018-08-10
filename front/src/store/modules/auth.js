import axios from 'axios'

const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

const state = {
  token: localStorage.getItem('user-token') || '',
  status: localStorage.getItem('status') || ''
}



const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

var AUTH_SIGNUP = 'signup';
var AUTH_REQUEST = 'login';
var AUTH_LOGOUT = 'logout';
var AUTH_SUCCESS = 'Successfully Logged In';
var AUTH_ERROR = 'AUTH_ERROR';
const actions = {
  [AUTH_SIGNUP]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_SIGNUP)
      axios({url: 'auth/signup', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.access_token
          localStorage.setItem('user-token', token)
          localStorage.setItem('status', 'success')
          // Add the following line:
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          commit(AUTH_SUCCESS, token)
          // dispatch(USER_REQUEST)
          resolve(resp)
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          localStorage.removeItem('user-token')
          localStorage.removeItem('status')
          reject(err)
        })
    })
  },
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      axios({url: 'auth/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.access_token
          localStorage.setItem('user-token', token)
          localStorage.setItem('status', 'success')
          // Add the following line:
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          commit(AUTH_SUCCESS, token)
          // dispatch(USER_REQUEST)
          resolve(resp)
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          localStorage.removeItem('user-token')
          localStorage.removeItem('status')
          reject(err)
        })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {

      localStorage.removeItem('user-token')
      localStorage.removeItem('status')
      axios.delete('/auth/logout')
      // remove the axios default header
      delete axios.defaults.headers.common['Authorization']
      commit(AUTH_LOGOUT)
      resolve()
    })
  }
}

const mutations = {
  [AUTH_SIGNUP]: (state) => {
    state.status = 'loading'
  },
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.status = ''
    state.token = ''
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
