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
          :id="id"
        />
      </PostList>
    </main>
  </div>
</template>

<script lang="ts">
import { Post } from "@/models";
import Header from "@/components/Header.vue";
import PostList from "@/components/PostList.vue";
import PostRow from "@/components/PostRow.vue";
import { Options, Vue } from "vue-class-component";
import { Api } from "../apis/api";

@Options({
  components: { Header, PostList, PostRow },
  data() {
    return {
      description: "Description",
    };
  },
})
export default class Home extends Vue {
  posts: Post[] = [];

  async mounted() {
    this.posts = await this.fetch();
  }

  async fetch(): Promise<Post[]> {
    const api = new Api();
    return await api.get("posts");
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
