import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'login'
    },
    {
      path: '/',
      name: 'home',
      component: Home, 
      meta:{requiresAuth:true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
  ]
})
