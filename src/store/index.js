import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    updateCart({ commit }, newValue) {
      commit("addToCart", newValue); // call a mutation through an action
    },
  },
  modules: {},
});
