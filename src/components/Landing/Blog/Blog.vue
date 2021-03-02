<template>
  <div class="Blog">
    <div class="text-center mb-5">
      <h2 class="fw-500 my-0">آخرین مطالب</h2>
      <p class="fw-300 mt-2">
        آموزش های کار با پنل و اخبار تایه را در این بخش بخوانید
      </p>
    </div>
    <div class="ty-flex ty-flex-wrap ty-space-between">
      <BlogPost
        v-for="(item, index) in BPosts"
        :key="index"
        :title="item.title"
        :explain="item.explain"
        :img="item.img"
        :date="item.date"
        :link="item.link"
      />
    </div>
    <div class="text-center mt-4 pt-2">
      <button class="btn-more fw-500">مطالب بیشتر</button>
    </div>
  </div>
</template>

<script>
import BlogPost from "./BlogPost";
export default {
  name: "Blog",
  components: {
    BlogPost,
  },
  data() {
    return {
      BPosts: [
        {
          title: "چگونه محصولات را در پنل آپلود کنیم؟",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
          img: "landing_payment.svg",
          date: "10 بهمن 1399",
          link: "",
        },
        {
          title: "چگونه محصولات را در پنل آپلود کنیم؟",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
          img: "landing_payment.svg",
          date: "10 بهمن 1399",
          link: "",
        },
        {
          title: "چگونه محصولات را در پنل آپلود کنیم؟",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
          img: "landing_payment.svg",
          date: "10 بهمن 1399",
          link: "",
        },
        {
          title: "چگونه محصولات را در پنل آپلود کنیم؟",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
          img: "landing_payment.svg",
          date: "10 بهمن 1399",
          link: "",
        },
      ],
    };
  },
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
</style>