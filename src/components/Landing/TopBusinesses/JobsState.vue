<template>
  <div class="JobsState ty-flex">
    <div
      class="icon-part"
      :style="`background-image: url('${static_server}${icon}')`"
    ></div>
    <div class="mr-3">
      <div class="ty-flex fw-500 color-white mb-2">
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
</style>