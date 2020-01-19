import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "@/store";
import "normalize.css/normalize.css";
import { Input, Menu, MenuItem, Carousel, CarouselItem } from 'element-ui';
Vue.config.productionTip = false

Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Carousel);
Vue.use(CarouselItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
