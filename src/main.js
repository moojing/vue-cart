import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";
import "bootstrap";
import "jquery";
import VeeValidate from "vee-validate";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import App from "./App.vue";
import router from "./router";
import "./bus";
import store from "@/store";
import currencyFilter from "@/filters/Currency";

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
Vue.component("Loading", Loading);
Vue.filter("currencyFilter", currencyFilter);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API_BASE}/api/user/check`;
    axios.post(api).then(response => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/admin/login"
        });
      }
    });
  } else {
    next();
  }
});
