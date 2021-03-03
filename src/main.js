import Vue from "vue";
import Landing from "./Landing.vue";
// import router from './router'
import "tayeh-ui/dist/index.min.css";
import "@/assets/styles/global.scss";
import TayehUi from "tayeh-ui";
Vue.config.productionTip = false;

Vue.use(TayehUi);

new Vue({
  render: (h) => h(Landing),
}).$mount("#app");
