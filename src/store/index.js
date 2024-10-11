import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  mutations: {
    ADD_TO_CART(st, product) {
      let ifProduct = st.cartItems.find((item) => item.id === product.id);
      if (ifProduct) {
        ifProduct.quantity += 1;
      } else {
        let NewProduct = { ...product, quantity: 1 };
        st.cartItems.push(NewProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(st.cartItems));
    },
    REMOVE_FROM_CART(st, product) {
      st.cartItems = st.cartItems.filter((item) => item.id !== product);
      localStorage.setItem("cartItems", JSON.stringify(st.cartItems));
    },
    QuantityUpdate(state, product) {
      let newQua = state.cartItems.find((it) => it.id === product.id);
      if (newQua) {
        newQua.quantity = product.quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
  getters: {
    counterCart: (value) => {
      return value.cartItems.reduce(
        (state, prodcut) => state + prodcut.quantity,
        0
      );
    },
  },
});
