<template>
  <div class="Service">
    <div
      class="img-part"
      :style=" `background-image: url('${static_server}${img}')` "
    ></div>
    <h4 class="serv-head text-center fw-500 fs-16 mb-0 mt-3">{{ title }}</h4>
    <p class="fs-12 fw-300 text-center par">
      {{ explain }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: ["title", "explain", "img"],
  data() {
    return {
      static_server: "https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/icons/"
    }
  },
};

</script>

<style scoped>
.Service {
  border: 1px solid transparent;
  width: 23.5%;
  padding: 35px 30px 30px 30px;
  border-radius: 10px;
  transition: 0.2s;
}
.Service:hover {
  border: 1px solid #f2f2f2;
  box-shadow: 0 15px 100px 0 rgba(18, 19, 26, 0.05);
  transform: scale(1.02);
}
.Service > .img-part {
  width: 115px;
  height: 115px;
  margin: 0 auto;
}
.Service > .par {
  color: #aaaaaa;
  line-height: 24px;
}
.Service > .serv-head{
  transition: 0.2s;
}
.Service:hover > .serv-head{
  color: #0e7cd7;
}
</style>