import { createStore } from 'vuex'

export default createStore({
  state: {
    // data
    counter: 1
  },
  getters: {
    // computed
    times2(state) { return state.counter * 2}
  },
  mutations: {
    // sync sets
    setCounter(state, payload){
      state.counter = payload
    }
  },
  actions: {
    // async sets
  },
  modules: {
    // subdivide the store
  }
})
