import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
//   },
//   mutations: {
//     AddToCart(state, product) {
//       const existingProduct = state.cartItems.find(
//         (item) => item.id === product.id
//       );
//       if (existingProduct) {
//         existingProduct.quantity += 1; // Increase quantity if product exists
//       } else {
//         const productToAdd = { ...product, quantity: 1 }; // Add new product with quantity 1
//         state.cartItems.push(productToAdd);
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); // Save to local storage
//     },
//     RemoveCartItem(state, productId) {
//       state.cartItems = state.cartItems.filter((item) => item.id !== productId); // Remove product by id
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); // Save updated cart to local storage
//     },
//     UpdateCartItemQuantity(state, item) {
//       const cartItem = state.cartItems.find((i) => i.id === item.id);
//       if (cartItem) {
//         cartItem.quantity = item.quantity; // Update the quantity
//         localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); // Update local storage
//       }
//     },
//   },
//   getters: {
//     CountCart: (valuenumber) => valuenumber.cartItems.length,
//   },
// });

// export default new Vuex.Store({
//   state: {
//     CartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
//   },
//   mutations: {
//     Add_To_Cart(state, product) {
//       let ifProduct = state.CartItems.find((pro) => pro.id === product.id);
//       if (ifProduct) {
//         ifProduct.quantity += 1;
//       } else {
//         let NewProduct = { ...product, quantity: 1 };
//         state.CartItems.push(NewProduct);
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.CartItems));
//     },
//     REMOVE_FROM_CART(state, productid) {
//       state.CartItems = state.CartItems.filter((pro) => pro.id !== productid);
//       localStorage.setItem("cartItems", JSON.stringify(state.CartItems));
//     },
//     quantityUpdate(state, newQun) {
//       let cartQuantity = state.CartItems.find((pro) => pro.id === newQun.id);
//       if (cartQuantity) {
//         cartQuantity.quantity = newQun.quantity;
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.CartItems));
//     },
//   },
//   getters: {
//     counterCart: (numCart) => numCart.CartItems.length,
//   },
// });

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
  },
  getters: {
    counterCart: (value) => value.cartItems.length,
  },
});
