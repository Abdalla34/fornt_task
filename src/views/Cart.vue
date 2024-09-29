<template>
  <div class="Cart">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <table>
            <tr>
              <div>
                <th>product</th>
              </div>
              <div>
                <th>product</th>
              </div>
              <div>
                <th>product</th>
              </div>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "CartPage",
  data: () => {
    return {
      cart: {},
    };
  },
  // methods: {
  //   async getCartSingle() {
  //     await axios.get(`https://fakestoreapi.com/carts/5`).then((res) => {
  //       this.cart = res.data;
  //     });
  //   },
  // },
  // async mounted() {
  //   this.getCartSingle();
  // },
};
</script>
<style scoped>
.hand-col {
  position: relative;
}
.hand-col::before {
  content: "";
  position: absolute;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  left: 0;
  top: 52%;
}
.hand-col::after {
  content: "";
  position: absolute;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  left: 0;
  bottom: 30%;
}
@media (max-width: 578px) {
  .p-cart {
    padding-top: 20px;
  }
}
</style>
