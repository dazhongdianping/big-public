import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'


var Cookie = {
  setCookie : function(name,value,data,path){
    var str = `${name}=${JSON.stringify(value)}`;
    if(data){
      str += `; expires=${data.toUTCString()}`;
    }
    if(path){
      str += `; path=${path}`;
    }
    document.cookie = str;
  },
  getCookie : function(name){
    var cookieArr = document.cookie.split("; ");
    var res = "";
    cookieArr.forEach(function(item){
      var arr = item.split("=");
      if(arr[0] == name){
        res = arr[1];
      }
    })
    return res;
  },
  removeCookie : function(name,path){
    var d = new Date();
    d.setDate(d.getDate()-1);
    this.setCookie(name,"",d,path)
  },
  getCookitToArray:function (name)
  {
    var array=[];
    array=this.getCookie(name)?this.getCookie(name):[];
    if(typeof array==='string') {
      array = JSON.parse(array);
    }
    return array;
  }
}

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