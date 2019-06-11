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
<<<<<<< HEAD
=======
    {
      path:'/details/:id',
      component:()=>import('./views/Details.vue')
    }
>>>>>>> 详情页完成
  ]
})
