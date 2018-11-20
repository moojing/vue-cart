import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import FrontPanel from "@/components/FrontPanel";
import Login from "@/components/admin/pages/Login";
import Products from "@/components/admin/pages/Products";
import Coupons from "@/components/admin/pages/Coupons";
import CustomOrders from "@/components/admin/pages/CustomOrders";
import Product from "@/components/pages/Product";
import Dashboard from "@/components/admin/Dashboard";
import Checkout from "@/components/pages/Checkout";
import Purchase from "@/components/pages/Purchase";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "FrontPanel",
      component: FrontPanel,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "product/:id",
          name: "product",
          component: Product
        },
        {
          path: "checkout",
          name: "checkout",
          component: Checkout
        },
        {
          path: "purchase/:orderId",
          name: "purchase",
          component: Purchase
        }
      ]
    },
    {
      path: "/admin/login",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: "products",
          name: "Products",
          component: Products,
          meta: { requiresAuth: true }
        },
        {
          path: "coupons",
          name: "coupons",
          component: Coupons,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "custom_orders",
          name: "CustomOrders",
          component: CustomOrders
        }
      ]
    }
  ]
});
