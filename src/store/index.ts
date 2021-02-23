import { createStore } from "vuex";

const store = createStore({
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
  modules: {},
});

export default store
