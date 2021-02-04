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
import axios from "axios";

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
    console.log(this.posts);
  }

  async fetch(): Promise<Post[]> {
    // const api = new Api()
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return await data;
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
