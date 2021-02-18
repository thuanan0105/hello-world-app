
<template>
  <div class="post-list__row">
    <router-link to="post">{{ id }}</router-link>
    <div>{{ title }}</div>
    <div class="post-list__row--desc">
      <i>[{{ body }}]</i>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    id: Number,
    body: String,
    title: String,
  },
})
export default class postRow extends Vue {}
</script>

<style lang="scss" scoped>
.post-list {
  &__row {
    width: 100%;
    text-align: left;
    color: #4169e1;
    cursor: pointer;
    padding-bottom: 1rem;

    &--completed {
      text-decoration: line-through;
      color: #2e8b57;
    }

    &--desc {
      color: #80807dab;
    }
  }
}
</style>
