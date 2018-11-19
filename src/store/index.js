import { ajaxGetCart, ajaxDeleteCart } from "@/api/cart";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    carts: []
  },
  mutations: {
    getCarts(state) {
      ajaxGetCart().then(res => {
        state.carts = res.data.data.carts;
      });
    },
    deleteCarts(state, id) {
      ajaxDeleteCart(id).then(() => {
        this.commit("getCarts");
      });
    }
  }
});

export default store;
