import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';
import './common/css/reset.css'
import './common/js/flexble'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
/*//使用mintUI;*/
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");