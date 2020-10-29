import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'u-reset.css'
import vconsole from 'vconsole'
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/swipe/style'
import 'vant/lib/swipe-item/style'
import { Image as VanImage } from 'vant';
import 'vant/lib/image/style'
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
import { Tab, Tabs ,GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant';
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/goods-action/style'
import 'vant/lib/goods-action-icon/style'
import 'vant/lib/goods-action-button/style'
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.config.productionTip = false
Vue.prototype.$http = axios;
new vconsole();
Vue.use(ElementUI);


Vue.config.productionTip = false
new vconsole();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
