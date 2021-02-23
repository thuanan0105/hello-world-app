<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import store from "./store";
import { USER_REQUEST } from "./store/actions/user";

export default class App extends Vue {
  created() {
    console.log("---- Created app");
    console.log("---- store: ", store);
    if (store.getters.isAuthenticated) {
      store.dispatch(USER_REQUEST);
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
