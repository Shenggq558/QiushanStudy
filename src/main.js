import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import VueRouter from 'vue-router'

// vuex
// 1. 导入store
import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});