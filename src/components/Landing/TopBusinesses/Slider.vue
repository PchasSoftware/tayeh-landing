<template>
  <div class="Slider">
    <div
      class="gallery ty-flex"
      :style="{ width: `calc(${businesses.length}*100%)`, right: `${right}%` }"
    >
      <div
        class="slide"
        v-for="(item, index) in businesses"
        :key="index"
        :style="`width: calc(100%/${businesses.length})`"
      >
        <div class="summary ty-flex">
          <div class="img-part ml-3"></div>
          <div>
            <h4 class="fs-16 fw-500 my-0">{{ item.name }}</h4>
            <a :href="item.website_link" target="_blank" class="web-link">{{
              item.website_name
            }}</a>
          </div>
        </div>
        <p class="fs-14 fw-300 mb-0 par">{{ item.explain }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["businesses", "right"],
};
</script>

<style scoped>
.Slider {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
.Slider > .gallery {
  height: 100%;
  transition: 0.5s;
  position: relative;
}
.Slider > .gallery > .slide {
  padding: 35px 35px 25px 45px;
}
.Slider > .gallery > .slide > .par {
  color: #aaaaaa;
  line-height: 30px;
}
.Slider > .gallery > .slide > .summary {
  align-items: center;
}
.Slider > .gallery > .slide .img-part {
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background: url("../../../assets/images/Screen2.png") no-repeat;
  background-size: cover;
  background-position: center;
}
.Slider > .gallery > .slide .web-link {
  color: #409eff;
}
@media (max-width: 425px) {
  .Slider {
    overflow: hidden;
  }
  .Slider > .gallery > .slide > .summary {
    display: block;
  }
  .Slider > .gallery > .slide {
    padding: 0;
    text-align: center;
  }
  .Slider > .gallery > .slide .img-part {
    position: relative;
    right: 50%;
    transform: translateX(50%);
    margin: 10px 0;
  }
  .Slider > .gallery > .slide > .par {
    line-height: 26px;
  }
}
</style>