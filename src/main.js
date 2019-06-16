import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import './assets/base.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import {Cookie,instance,LocalStorage} from './axios_config'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.prototype.$Cookie=Cookie;
Vue.prototype.$axios=instance;
Vue.prototype.$LocalStorage=LocalStorage;


Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.$cookie=Cookie;
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
//     if (token === 'null' || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });