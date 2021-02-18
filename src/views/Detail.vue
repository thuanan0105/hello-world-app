
<template>
  <div>{{ id }}</div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      id: this.$route.params.id,
    };
  },
})
export default class Detail extends Vue {}
</script>