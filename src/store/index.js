import { ajaxGetCart, ajaxDeleteCart } from "@/api/cart";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    carts: [],
    cartsTotal: 0
  },
  mutations: {
    getCarts(state) {
      ajaxGetCart().then(res => {
        state.carts = res.data.data.carts;
        state.cartsTotal = res.data.data.total;
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
