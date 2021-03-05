<template>
  <div class="JobsState ty-flex">
    <div
      class="icon-part"
      :style="`background-image: url('${static_server}${icon}')`"
    ></div>
    <div class="values-part mr-3">
      <div class="flexer ty-flex ty-flex-wrap fw-500 color-white mb-2">
        <p class="state-num fs-38 my-0">{{ value }}</p>
        <span class="fs-18 mr-2" v-if="span">{{ span_value }}</span>
      </div>
      <span class="state-title">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobsState",
  props: ["title", "value", "icon", "span", "span_value"],
  data() {
    return {
      static_server: "https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/icons/",
    };
  },
};
</script>

<style scoped>
.JobsState {
  align-items: center;
}
.JobsState > .icon-part {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  background-image: url("https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/icons/landing_bag.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.JobsState .state-num {
  font-family: IRANSans-fa;
  line-height: 30px;
}
.JobsState .state-title {
  color: rgba(255, 255, 255, 0.5);
}
.color-white {
  color: #ffffff;
}
@media (max-width: 1024px) {
  .JobsState {
    width: 50%;
  }
  .JobsState:nth-child(n + 2) {
    margin-top: 20px;
  }
}
@media (max-width: 768px) {
  .JobsState .state-num {
    font-size: 24px;
  }
}
@media (max-width: 425px) {
  .JobsState {
    display: block;
    width: 100%;
    text-align: center;
  }
  .JobsState + .JobsState {
    margin-top: 35px;
  }
  .JobsState > .icon-part {
    margin: 0 auto;
  }
  .JobsState > .values-part {
    margin-right: 0 !important;
  }
  .JobsState > .values-part > .flexer {
    justify-content: center;
    margin-top: 15px;
  }
  .JobsState .state-num {
    font-size: 38px;
  }
}
</style>