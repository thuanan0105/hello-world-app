import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      loggedIn: false,
      subscribed: false
    }
  },
  getters: {
    auth(state) {
      return state.user
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
