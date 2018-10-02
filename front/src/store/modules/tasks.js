import axios from 'axios'

const state = {
  all: [],
  categories: [],
  wishesEndpoint: '/wishes/',
  wishCategoriesEndpoint: '/wish_categories/'
}

const mutations = {
  setTasks (state, tasks) {
    state.all = tasks
  },
  setWishCategories (state, categories) {
    state.categories = categories
  },

  addTask (state, task) {
    state.all.push(task)
  },

  updateTask (state, task) {
    let taskId = task.id
    state.all.splice(state.all.findIndex(task => task.id === taskId), 1, task)
  },

  removeTask (state, task) {
    let taskId = task.id
    state.all.splice(state.all.findIndex(task => task.id === taskId), 1)
  },

  clearTasks (state) {
    state.all = []
  }
}

const getters = {
  filteredTasks: (state, getters) => (param) => {
    if (param === 'completed') {
      return getters.completedTasks
    } else if (param === 'active') {
      return getters.activeTasks
    } else if (param === 'all') {
      return state.all
    }
    return getters.categoryTasks(param)

  },

  activeTasks (state) {
    return state.all.filter(task => task.is_completed === false)
  },

  categoryTasks: (state) => (status) => {
    return state.all.filter(task => task.category != null && task.category.id.toString() === status)
  },

  completedTasks (state) {
    return state.all.filter(task => task.is_completed === true)
  },

  timeToChill: (state, getters) => (status) => {
    return !state.all.length ||
            (status === 'active' && !getters.activeTasks.length) ||
            (status === 'completed' && !getters.completedTasks.length)
  }
}

const actions = {
  fetchTasks ({ commit }, params) {
    return new Promise((resolve, reject) => {
      axios.get(state.wishesEndpoint)
        .then(({ data }) => {
          commit('setTasks', data)
          axios.get(state.wishCategoriesEndpoint).then(({data})=>{
            commit('setWishCategories', data)
            resolve()

          })
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  addTask ({ commit }, form) {
    return new Promise((resolve, reject) => {
      axios.post(state.wishesEndpoint, form)
        .then(({ data }) => {
          commit('addTask', data)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  updateTask ({ commit }, {task, form}) {
    return new Promise((resolve, reject) => {
      console.log(form)

      axios.patch(state.wishesEndpoint + task.id, form)
        .then(({ data }) => {
          commit('updateTask', data)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  removeTask ({ commit }, task) {
    return new Promise((resolve, reject) => {
      axios.delete(state.wishesEndpoint + task.id)
        .then(response => {
          commit('removeTask', task)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  deleteTasks ({ commit, getters }) {
    return new Promise((resolve, reject) => {
      axios.delete(state.wishesEndpoint)
        .then(response => {
          getters.completedTasks.forEach(task => commit('removeTask', task))
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
