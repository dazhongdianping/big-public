import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'
import {Cookie,instance,LocalStorage} from './axios_config'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
      path:'/details/:id',
      component:()=>import('./views/Details.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/logins',
      name: 'logins',
      component: () => import('./views/Logins.vue')
    },
    {
      path: '/PersonalMsg',
      name: 'PersonalMsg',
      component: () => import('./views/PersonalMsg.vue')
    },
    {
      path: '/TakeMsg',
      name: 'TakeMsg',
      component: () => import('./views/TakeMsg.vue')
    },
    {
      path:'/TakeOrder',
      name:'TakeOrder',
      component: () => import('./views/TakeOrder.vue')
    },
    {
      path:'/pay',
      name:'pay',
      component: () => import('./views/pay.vue')
    }
  ]
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {

 if(store.getters.LoginMeg || to.name === 'login'||to.name==='logins'||to.name==='home'||to.name==='TakeMsg')
  {
    // console.log("进来2")
    next();
  }
  else if(Cookie.getCookie('Token').length!==0)
  {
    // console.log(Cookie.getCookie('Token').length)
    // console.log(to)
    // console.log('进来1',Cookie.getCookie('Token'))
    TokenCheck(Cookie.getCookie('Token'),function (res) {
      store.state.isLogin=true;
      store.state.token=Cookie.getCookie('Token');
      store.state.userName=res.data;
      console.log('routerProtect','Token验证成功')
      next();
    })
  }
  else {
     console.log('进来3') ;
     router.push('/login')
  }
 // console.log(router.currentRoute.fullPath)
})

let TokenCheck=function (token,fn)
{
  instance({
    method: 'post',
    url: 'http://127.0.0.1:8083/public',
    data:{
      code:3,token
    }
  }).then(res=>{
    fn(res);
  })
}
export {router}