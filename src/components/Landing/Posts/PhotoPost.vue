<template>
  <div class="PhotoPost ty-flex ty-flex-wrap">
    <div :class="['side-width',order === 'right' ? 'right' : 'order-2']">
      <h3 class="post-head fs-22 fw-500 mb-0">
        {{ title }}
      </h3>
      <p class="fw-300 par mt-3">
        {{ explain }}
      </p>
    </div>
    <div :class="['side-width',order === 'left' ? 'right order-1' : '']">
      <div class="img-part">
        <img :src="static_server + img" alt="my-post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoPost",
  props: ["title", "explain", "img", "order"],
  data() {
    return {
      static_server:
        "https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/",
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.PhotoPost {
  align-items: center;
}
.PhotoPost + .PhotoPost {
  margin-top: 20px;
}
.PhotoPost > .side-width {
  width: 50%;
  padding: 0 25px;
}
.PhotoPost > .right {
  direction: ltr;
}
.order-1{
  order: 1;
}
.order-2{
  order: 2;
}
.PhotoPost > .side-width > .post-head {
  max-width: 400px;
  background-image: linear-gradient(180deg, #409eff, #004e8f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.PhotoPost > .side-width > .par {
  max-width: 265px;
  line-height: 30px;
}
</style>