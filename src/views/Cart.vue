<template>
  <div class="Cart">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-3 col-md-6 hand-col">
          <div class="hand-cart margin-bottom">
            <h1 class="text-capitalize title pb-2">proudact</h1>
            <p class="text-capitalize fs-6 p-cart">plain white shitrt</p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 col-md-6 hand-col">
          <div class="hand-cart margin-bottom">
            <h1 class="text-capitalize title pb-2">price</h1>
            <p class="text-capitalize fs-6 p-cart">plain white shitrt</p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 col-md-6 hand-col">
          <div class="hand-cart margin-bottom">
            <h1 class="text-capitalize title pb-2">quantity</h1>
            <p class="text-capitalize fs-6 p-cart">plain white shitrt</p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 col-md-6 hand-col">
          <div class="hand-cart margin-bottom">
            <h1 class="text-capitalize title pb-2">total</h1>
            <p class="text-capitalize fs-6 p-cart">plain white shitrt</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartPage",
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
