<template>
  <div class="Cart">
    <div class="container pt-5">
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col" class="col details-cart">Product</th>
            <th scope="col" class="col details-cart">price</th>
            <th scope="col" class="col details-cart">quantity</th>
            <th scope="col" class="col details-cart">total</th>
            <th scope="col" class="col details-cart">delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Allcart" :key="item.id">
            <th class="details-cart" scope="row">{{ item.name }}</th>
            <td class="details-cart">${{ item.price }}</td>
            <td class="details-cart">
              <input
                type="number"
                style="width: 50px"
                @change="quantity(item)"
                min="1"
                :max="item.stock"
                v-model="item.stoke"
                v-model.number="item.quantity"
              />
            </td>
            <td class="details-cart">
              {{ (item.price * item.quantity).toFixed(2) }}
            </td>
            <td class="details-cart">
              <button @click="removeCart(item)" class="remove">DELETE</button>
            </td>
          </tr>
          <tr v-if="Allcart.length === 0">
            <td colspan="6" class="text-center">Your cart is empty.</td>
          </tr>
        </tbody>
      </table>
      <div class="cart-mini-total mt-5">
        <div class="totals text-start title">
          <h4>Cart Totals</h4>
        </div>
        <div class="row">
          <div class="col-lg-4 d-flex justify-content-between pt-3">
            <h6 class="fw-bold text-capitalize">subtotal</h6>
            <div class="pargraph fw-bold">${{ totoPrice }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 d-flex justify-content-between pt-3">
            <h6 class="fw-bold text-capitalize">shipping free</h6>
            <div class="pargraph fw-bold text-uppercase">$FREE</div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 d-flex justify-content-between pt-3">
            <h6 class="fw-bold text-capitalize">total</h6>
            <div class="pargraph fw-bold">${{ totoPrice }}</div>
          </div>
        </div>
      </div>
      <div class="text-start mt-4">
        <router-link
          to="ChekOut"
          class="btn-chek btn-send-sellers text-light opacity"
          >porceed to chekout</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CartPage",
  data: () => {
    return {
      Allcart: [],
    };
  },
  methods: {
    removeCart(cart) {
      this.$store.commit("REMOVE_FROM_CART", cart.id);
      this.Allcart = this.$store.state.cartItems;
    },
    quantity(newQuan) {
      this.$store.commit("QuantityUpdate", newQuan);
    },
    ...mapMutations(["REMOVE_FROM_CART", "QuantityUpdate"]),
  },
  mounted() {
    this.Allcart = this.$store.state.cartItems;
  },
  computed: {
    totoPrice() {
      return this.Allcart.reduce(
        (val, item) => val + (item.price * item.quantity || 0),
        0
      ).toFixed(2);
    },
  },
};
</script>
<style scoped>
.message {
  position: relative;
  left: 50%;
  transform: translateX(20%);
}

.remove {
  border: none;
  font-size: 12px;
  color: white;
  background-color: rgb(236, 11, 11);
  border-radius: 20px;
}
@media (max-width: 768px) {
  .message {
    font-size: 12px;
    transform: translateX(50%);
  }
  .details-cart {
    font-size: 12px;
  }
}
.col {
  padding: 0px;
  text-transform: capitalize;
}
</style>
