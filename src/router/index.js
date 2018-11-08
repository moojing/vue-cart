import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FrontPanel from '@/components/FrontPanel'
import Login from '@/components/admin/pages/Login'
import Products from '@/components/admin/pages/Products'
import Product from '@/components/pages/Product'
import Dashboard from '@/components/admin/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPanel',
      component: FrontPanel,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'product',
          name: 'product',
          component: Product
        }
      ]
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
