<template>
  <header class="header">
    <nav class="header-nav">Header</nav>
    <div class="header-container">
      <h1 @click="fireCustomEvent" title="Click me">{{ listName }}</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CustomEvent } from "@/models/custom-event";

@Options({
  props: {
    listName: String,
  },
  emits: {
    "custom-event": CustomEvent,
  },
})
export default class Header extends Vue {
  public title!: String;

  fireCustomEvent() {
    const data: CustomEvent = {
      name: "Custom event",
      data: {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    };
    this.$emit("custom-event", data);
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  &-nav {
    background: #002d80;
    width: 100%;
    height: 56px;
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    line-height: 50px;
  }
  &-container {
    padding: 0 1.5rem;
    cursor: pointer;
  }
}
</style>
