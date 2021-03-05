<template>
  <div class="Posts">
    <PhotoPost
      v-for="(item, index) in posts"
      :key="index"
      :title="item.title"
      :explain="item.explain"
      :img="item.img"
      :order="item.order"
    />
  </div>
</template>

<script>
import PhotoPost from "./PhotoPost";
import PostObject from "../../../assets/jsons/Posts.json";
export default {
  name: "Posts",
  components: {
    PhotoPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts () {
      this.posts = PostObject;
    },
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style scoped>
.Posts {
  padding-top: 80px;
}
@media (max-width: 425px) {
  .Posts {
    padding-top: 50px;
    width: 92%;
    margin: 0 auto;
  }
}
</style>