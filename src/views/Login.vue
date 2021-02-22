

<template>
  <div class="log-form">
    <h2>Login to your account</h2>
    <form @submit="submitForm" autocomplete="off">
      <input
        id="username"
        v-model="username"
        type="text"
        title="username"
        placeholder="username"
        autocomplete="off"
      />
      <p v-bind:class="{ hide: !error.hasOwnProperty('username') }">
        {{ error.username }}
      </p>
      <input
        id="password"
        v-model="password"
        type="password"
        title="username"
        placeholder="password"
        autocomplete="off"
      />
      <p v-bind:class="{ hide: !error.hasOwnProperty('password') }">
        {{ error.password }}
      </p>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import store from "../store";

@Options({
  data() {
    return {};
  },
})
export default class Login extends Vue {
  username: string = "";
  password: string = "";
  error: any = {};
  user: any = {};

  computed() {
    console.log(this);
  }

  validateForm() {
    if (this.username && this.password) {
      store.state.user.loggedIn = true;
      store.state.user.subscribed = true;
      console.log(store);
      return true;
    }

    if (!this.username) {
      this.error.username = "Username must not be empty.";
    }

    if (!this.password) {
      this.error.password = "Password must not be empty.";
    }

    event?.preventDefault();

    return false;
  }

  submitForm() {
    if (!this.validateForm()) {
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/font";

.hide {
  display: none;
}

.log-form {
  width: 40%;
  min-width: 320px;
  max-width: 475px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
}
@media (max-width: 40em) {
  .log-form {
    width: 95%;
    position: relative;
    margin: 2.5% auto 0 auto;
    left: 0%;
    -webkit-transform: translate(0%, 0%);
    -moz-transform: translate(0%, 0%);
    -o-transform: translate(0%, 0%);
    -ms-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
}
.log-form form {
  display: block;
  // width: 100%;
  padding: 2em;
}
.log-form h2 {
  color: #5d5d5d;
  font-family: "Condensed";
  font-size: 1.35em;
  display: block;
  background: #2a2a2a;
  // width: 100%;
  text-transform: uppercase;
  padding: 0.75em 1em 0.75em 1.5em;
  box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.05);
  border: 1px solid #1d1d1d;
  margin: 0;
  font-weight: 200;
}
.log-form input {
  display: block;
  margin: auto auto;
  width: 100%;
  margin-bottom: 2em;
  padding: 1em 0;
  border: none;
  border-bottom: 1px solid rgb(216 216 216);
  color: #757575;
}
.log-form input:focus {
  outline: none;
}
.log-form .btn {
  display: inline-block;
  background: #1fb5bf;
  border: 1px solid #1ba0a9;
  padding: 1em 2em;
  border-radius: 5px;
  color: white;
  margin-right: 0.5em;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.2);
}
.log-form .btn:hover {
  background: #23cad5;
}
.log-form .btn:active {
  background: #1fb5bf;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.1);
}
.log-form .btn:focus {
  outline: none;
}
.log-form .forgot {
  color: #33d3de;
  line-height: 0.5em;
  position: relative;
  top: 2.5em;
  text-decoration: none;
  font-size: 0.75em;
  margin: 0;
  padding: 0;
  float: right;
}
.log-form .forgot:hover {
  color: #1ba0a9;
}
</style>


