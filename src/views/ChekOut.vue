<template>
  <div class="chek-out">
    <div class="container">
      <div class="mt-5 pt-4 text-start pb-3">
        <h1 class="title">Billing details</h1>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <form action="" class="text-start">
            <div class="full-name mb-3">
              <label class="pargraph d-block" for="">full name</label>
              <input
                type="text"
                class="input-color input-hover w-100 text-capitalize"
              />
            </div>
            <div class="street mb-3">
              <label class="pargraph d-block" for="">street adrees</label>
              <input
                type="text"
                class="input-color input-hover w-100 text-capitalize"
                placeholder="house number and street name"
              />
            </div>
            <div class="city mb-3">
              <label class="pargraph d-block" for="">town / city</label>
              <input
                type="text"
                class="input-color input-hover w-100 text-capitalize"
              />
            </div>
            <div class="phone mb-3">
              <label class="pargraph d-block" for="">phone</label>
              <input
                type="text"
                class="input-color input-hover w-100 text-capitalize"
              />
            </div>
            <div class="email-adrres mb-3">
              <label class="pargraph d-block" for="">email adrees</label>
              <input
                type="text"
                class="input-color input-hover w-100 text-capitalize"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <!-- <table class="table table-striped">
            <thead>
              <tr>
                <th class="text-start text-capitalize">product</th>
                <th class="text-end text-capitalize">total</th>
              </tr>
            </thead>
            <tbody v-for="one in subProducts" :key="one.id">
              <tr>
                <td class="text-start">{{ one.name }}</td>
                <td class="text-end">
                  ${{ (one.price * one.quantity).toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </table> -->
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="sub-total text-start d-flex justify-content-between">
            <span>subtotal</span>
            <p>${{ totalAmount }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "ChekOut",
  data: () => {
    return {
      subProducts: [],
    };
  },
  // computed: {
  //   totalAmount() {
  //     const total = this.subProducts.reduce((total, product) => {
  //       return total + (product.price * product.quantity || 0);
  //     }, 0);

  //     return total.toFixed(2);
  //   },
  // },
  // mounted() {
  //   this.subProducts = this.$store.state.cartItems;
  //   console.log(this.subProducts);
  // },
};
</script>
