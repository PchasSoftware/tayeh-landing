<template>
  <div class="HeaderView ty-relative">
    <div class="define">
      <h1 class="def-head">محیطی برای<br />رشد کسب و کار شما</h1>
      <p class="fs-18 fw-200 par">
        تایه به کسب و کار شما کمک میکند تا بهینه فعالیت کنید<br />و تمام کارهای
        خود را در یک بستر انجام دهید.
      </p>
      <button class="btn-service fs-18 fw-300 mt-2">
        <a href="#Services">تایه چه خدماتی میده؟</a>
      </button>
    </div>
    <div class="img-part"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.HeaderView > .img-part {
  height: 580px;
  background: url("https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/landing_bg.png") no-repeat;
  background-position: bottom right;
  background-size: contain;
}
.HeaderView > .define {
  position: absolute;
  right: 51%;
  top: 6%;
}
.HeaderView > .define > .def-head {
  font-size: 42px;
  background: -webkit-linear-gradient(0deg, #409eff 45%, #004e8f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.HeaderView > .define > .par {
  line-height: 34px;
}
.HeaderView > .define > .btn-service {
  background-color: #f1f6ff;
  border: none;
  padding: 12px 48px 12px 20px;
  border-radius: 10px;
  background-image: url("../../../assets/images/arrow_downward.svg");
  background-repeat: no-repeat;
  background-position: 92% 50%;
}
.HeaderView > .define > .btn-service > a {
  color: #409eff;
}
</style>