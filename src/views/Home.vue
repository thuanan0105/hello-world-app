<template>
  <div>
    <Header @custom-event="catchCustomEvent($event)" listName="My posts" />
    <!-- <div class="desc">{{ description }}</div> -->
    <main>
      <PostList>
        <PostRow
          v-for="{ id, title, body } in posts"
          :key="id"
          :title="title"
          :body="body"
        />
      </PostList>
    </main>
  </div>
</template>

<script lang="ts">
import { Post, IApi } from "@/models";
import { Api } from "@/apis";
import Header from "@/components/Header.vue";
import PostList from "@/components/PostList.vue";
import PostRow from "@/components/PostRow.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { Header, PostList, PostRow },
  data() {
    return {
      description: "Description",
    };
  },
})
export default class Home extends Vue implements IApi {
  posts: Post[] = [];

  async mounted() {
    this.posts = await this.fetch("posts");
  }

  async fetch(url: string): Promise<any> {
    const api = new Api();
    return await api.fetch(url);
  }

  catchCustomEvent(event: CustomEvent) {
    console.log("--- Data event: ", event);
  }
}
</script>

<style lang="scss">
.container {
  padding: 0 1.5rem;
}

.desc {
  padding-left: 1.5rem;
}
</style>
