import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'tayeh-ui/dist/index.min.css';
import '@/assets/styles/global.scss';
import TayehUi from 'tayeh-ui';
Vue.config.productionTip = false

Vue.use(TayehUi);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
