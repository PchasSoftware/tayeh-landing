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
export default {
  name: "Posts",
  components: {
    PhotoPost,
  },
  data() {
    return {
      posts: [
        {
          title: "فروش محصولات از طریق شبکه های اجتماعی",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
          img: "woman_touching_mobile.svg",
          order: "right",
        },
        {
          title: "مدیریت کارکنان و آنالیز داده های فروشگاه",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
          img: "woman_teaching_man.svg",
          order: "left",
        },
      ],
    };
  },
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