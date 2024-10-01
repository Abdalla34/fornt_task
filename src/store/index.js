import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CartItems: JSON.parse(localStorage.getItem("CartItems")) || [],
  },
  mutations: {
    getSingleProduct(state, product) {
      state.CartItems.push(product);
      localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
    },
  },
  getters: {
    counterCart: (state) => state.CartItems.length,
  },
});

// state: {
//   cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
// },
// mutations: {
//   ADD_TO_CART(state, product) {
//     state.cartItems.push(product);
//     localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); // حفظ الكارت في localStorage
//   },
// },
// getters: {
//   cartCount: (valuereturn) => valuereturn.cartItems.length, // حساب عدد الأوردرات
// },

// addtocart() {
//   this.getInLocal(this.product);
// },
// ...mapMutations(["getInLocal"]),
