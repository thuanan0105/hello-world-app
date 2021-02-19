import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      loggedIn: true,
      subscribed: true
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
