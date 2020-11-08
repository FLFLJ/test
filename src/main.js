import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)



Vue.prototype.axios=axios;

import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller)

import Loading from '@/components/Loading'
Vue.component('Loading',Loading)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
