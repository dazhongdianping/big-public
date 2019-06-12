import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
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
  ]
})
