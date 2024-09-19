<template>
  <div class="about">
    <div class="container">
      <!-- <HeaderApp /> -->
      <div class="d-flex justify-content-center align-items-center">
        <img class="w-50" :src="products.image" />
        <div>{{ products.title }}</div>
      </div>
      <!-- Display the URL param -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductView",
  data: () => {
    return {
      products: {},
    };
  },
  methods: {
    async fetchProducts() {
      await axios
        .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then((res) => (this.products = res.data));
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
