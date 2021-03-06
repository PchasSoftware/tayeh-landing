<template>
  <div class="HeaderView ty-relative">
    <div class="define">
      <h1 class="def-head">محیطی برای<br />رشد کسب و کار شما</h1>
      <p class="fs-18 fw-200 par">
        تایه به کسب و کار شما کمک میکند تا بهینه فعالیت کنید<br />و تمام کارهای
        خود را در یک بستر انجام دهید.
      </p>
      <a href="#Services" class="btn-service fs-18 fw-300 mt-2"
        >تایه چه خدماتی میده؟
      </a>
    </div>
    <div class="img-part"></div>
  </div>
</template>
<style scoped>
.HeaderView > .img-part {
  height: 580px;
  background: url("https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/landing_bg.png")
    no-repeat;
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
  display: inline-block;
  background-color: #f1f6ff;
  border: none;
  padding: 12px 48px 12px 20px;
  border-radius: 10px;
  background-image: url("../../../assets/images/arrow_downward.svg");
  background-repeat: no-repeat;
  color: #409eff;
  background-position: 92% 50%;
}
@media (max-width: 1270px) {
  .HeaderView > .define {
    right: 63%;
    top: 1%;
  }
}
@media (max-width: 1024px) {
  .HeaderView > .img-part {
    height: 500px;
  }
}
@media (max-width: 970px) {
  .HeaderView > .img-part {
    height: 400px;
  }
  .HeaderView > .define > .def-head {
    font-size: 30px;
  }
  .HeaderView > .define > .par {
    font-size: 14px;
  }
  .HeaderView > .define > .btn-service {
    font-size: 14px;
    margin-top: 0 !important;
  }
}
@media (max-width: 770px) {
  .HeaderView > .define {
    width: 92%;
    margin: 0 auto;
    position: static;
    text-align: center;
  }
  .HeaderView > .img-part {
    width: 100%;
    height: 400px;
    background-position: top;
    margin-top: 30px;
    background-size: cover;
  }
  .HeaderView > .define > .def-head {
    font-size: 28px;
  }
  .HeaderView > .define > .par {
    font-size: 12px;
  }
  .HeaderView > .define > .btn-service {
    font-size: 12px;
  }
  @media (max-width: 425px) {
    .HeaderView > .define {
      text-align: right;
    }
    .HeaderView > .img-part {
      height: 320px;
      background-size: contain;
    }
    .HeaderView > .define > .par {
      line-height: 24px;
    }
    .HeaderView > .define > .def-head{
      margin-bottom: 0;
      line-height: 36px;
    }
  }
}
</style>