<template>
  <div class="Blog">
    <div class="title text-center mb-5">
      <h2 class="fw-500 my-0">آخرین مطالب</h2>
      <p class="fw-300 mt-2">
        آموزش های کار با پنل و اخبار تایه را در این بخش بخوانید
      </p>
    </div>
    <ty-row :gutter="10">
      <ty-col
        :xs="24"
        :sm="12"
        :md="6"
        :lg="6"
        :xl="6"
        v-for="(item, index) in BPosts"
        :key="index"
      >
        <BlogPost
          :title="item.title"
          :explain="item.explain"
          :img="item.img"
          :date="item.date"
          :link="item.link"
        />
      </ty-col>
    </ty-row>
    <div class="text-center mt-4 pt-2">
      <button class="btn-more fw-500">مطالب بیشتر</button>
    </div>
  </div>
</template>

<script>
import BlogPost from "./BlogPost";
import BlogPostObjects from "../../../assets/jsons/BlogPosts.json";
export default {
  name: "Blog",
  components: {
    BlogPost,
  },
  data() {
    return {
      BPosts: [],
    };
  },
  methods: {
    getBPosts () {
      this.BPosts = BlogPostObjects;
    },
  },
  mounted() {
    this.getBPosts();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.Blog {
  width: 85%;
  margin: 0 auto;
  padding-top: 80px;
}
.Blog .btn-more {
  color: #409eff;
  background-color: rgba(64, 158, 255, 0.1);
  border: none;
  border-radius: 10px;
  padding: 10px 40px;
}
@media (max-width: 425px) {
  .Blog {
    padding-top: 50px;
    width: 92%;
  }
  .Blog > .title {
    margin-bottom: 20px !important;
  }
  .Blog > .title > p {
    font-size: 12px;
  }
}
</style>