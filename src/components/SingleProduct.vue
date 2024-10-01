<template>
  <div class="shirt-proudact mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <img class="w-100 width-image" src="@/assets/about_mans.png" alt="" />
        </div>
        <div class="col-lg-6 col-sm-12">
          <div class="text-start">
            <!-- <ul class="links d-flex gap-1">
              <li>
                <router-link to="/" class="links-nav">home /</router-link>
              </li>
              <li>
                <router-link to="" class="links-nav">Shop /</router-link>
              </li>
              <li>
                <router-link to="" class="links-nav">Woman /</router-link>
              </li>
              <li>
                <router-link to="" class="links-nav">Shop</router-link>
              </li>
            </ul> -->
            <div class="name-shirt mt-5">
              <h1 class="title text-capitalize fs-4">
                {{ product.name }}
              </h1>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.76367 1.08203L5.11328 4.45898L1.38086 4.99219C0.720703 5.09375 0.466797 5.90625 0.949219 6.38867L3.61523 9.00391L2.98047 12.6855C2.87891 13.3457 3.58984 13.8535 4.17383 13.5488L7.5 11.7969L10.8008 13.5488C11.3848 13.8535 12.0957 13.3457 11.9941 12.6855L11.3594 9.00391L14.0254 6.38867C14.5078 5.90625 14.2539 5.09375 13.5938 4.99219L9.88672 4.45898L8.21094 1.08203C7.93164 0.498047 7.06836 0.472656 6.76367 1.08203Z"
                  fill="#D6763C"
                />
              </svg>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.76367 1.08203L5.11328 4.45898L1.38086 4.99219C0.720703 5.09375 0.466797 5.90625 0.949219 6.38867L3.61523 9.00391L2.98047 12.6855C2.87891 13.3457 3.58984 13.8535 4.17383 13.5488L7.5 11.7969L10.8008 13.5488C11.3848 13.8535 12.0957 13.3457 11.9941 12.6855L11.3594 9.00391L14.0254 6.38867C14.5078 5.90625 14.2539 5.09375 13.5938 4.99219L9.88672 4.45898L8.21094 1.08203C7.93164 0.498047 7.06836 0.472656 6.76367 1.08203Z"
                  fill="#D6763C"
                />
              </svg>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.76367 1.08203L5.11328 4.45898L1.38086 4.99219C0.720703 5.09375 0.466797 5.90625 0.949219 6.38867L3.61523 9.00391L2.98047 12.6855C2.87891 13.3457 3.58984 13.8535 4.17383 13.5488L7.5 11.7969L10.8008 13.5488C11.3848 13.8535 12.0957 13.3457 11.9941 12.6855L11.3594 9.00391L14.0254 6.38867C14.5078 5.90625 14.2539 5.09375 13.5938 4.99219L9.88672 4.45898L8.21094 1.08203C7.93164 0.498047 7.06836 0.472656 6.76367 1.08203Z"
                  fill="#D6763C"
                />
              </svg>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.76367 1.08203L5.11328 4.45898L1.38086 4.99219C0.720703 5.09375 0.466797 5.90625 0.949219 6.38867L3.61523 9.00391L2.98047 12.6855C2.87891 13.3457 3.58984 13.8535 4.17383 13.5488L7.5 11.7969L10.8008 13.5488C11.3848 13.8535 12.0957 13.3457 11.9941 12.6855L11.3594 9.00391L14.0254 6.38867C14.5078 5.90625 14.2539 5.09375 13.5938 4.99219L9.88672 4.45898L8.21094 1.08203C7.93164 0.498047 7.06836 0.472656 6.76367 1.08203Z"
                  fill="#D6763C"
                />
              </svg>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.76367 1.08203C6.91602 0.777344 7.16146 0.625 7.5 0.625C7.83854 0.625 8.08398 0.777344 8.23633 1.08203L9.88672 4.43359L13.5938 4.99219C13.9323 5.02604 14.1523 5.20378 14.2539 5.52539C14.3555 5.84701 14.2878 6.1263 14.0508 6.36328L11.3594 8.97852L11.9941 12.6855C12.0449 13.0072 11.9349 13.2611 11.6641 13.4473C11.3932 13.6504 11.1139 13.6758 10.8262 13.5234L7.5 11.7969L4.17383 13.5234C3.88607 13.6927 3.60677 13.6758 3.33594 13.4727C3.0651 13.2695 2.95508 13.0072 3.00586 12.6855L3.64062 8.97852L0.949219 6.36328C0.71224 6.1263 0.644531 5.84701 0.746094 5.52539C0.847656 5.20378 1.06771 5.02604 1.40625 4.99219L5.11328 4.43359L6.76367 1.08203Z"
                  fill="#D6763C"
                  fill-opacity="0.38"
                />
              </svg>
              <span class="span fw-bold">(15)</span>
              <div class="price mt-5 fs-3">${{ product.price }}</div>
            </div>
            <div class="identifiction">
              <p class="pargraph mt-4 fs-6"></p>
            </div>
            <div class="select-size mt-5 margin">
              <select name="" id="" class="p-2 select">
                <div>
                  <svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.66016 7.69531C5.90625 7.94141 6.31641 7.94141 6.5625 7.69531L11.8945 2.39062C12.1406 2.11719 12.1406 1.70703 11.8945 1.46094L11.2656 0.832031C11.0195 0.585938 10.6094 0.585938 10.3359 0.832031L6.125 5.04297L1.88672 0.832031C1.61328 0.585938 1.20312 0.585938 0.957031 0.832031L0.328125 1.46094C0.0820312 1.70703 0.0820312 2.11719 0.328125 2.39062L5.66016 7.69531Z"
                      fill="#818181"
                    />
                  </svg>
                </div>
                <option value="">Select Size</option>
                <option value="small">small</option>
                <option value="">Medium</option>
                <option value="">Large</option>
                <option value="">Extra Large</option>
              </select>
            </div>
            <div class="btn-cart opacity">
              <button
                @click="addToCArt"
                class="btn-add-cart btn-send-sellers mt-5 text-light text-uppercase"
              >
                add to cart
              </button>
            </div>
            <div class="details-shirt mt-5">
              <p class="pargraph w-50">Category:{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "SingleProduct",
  data: () => {
    return {
      product: {},
    };
  },
  methods: {
    async getProduct() {
      await axios
        .get(
          `https://gabal-ecommerce-api.vercel.app/api/single-product?id=${this.$route.params.id}`
        )
        .then((res) => {
          this.product = res.data[0];
        });
    },
    addToCArt() {
      this.getSingleProduct(this.product);
    },
    ...mapMutations(["getSingleProduct"]),
  },
  async mounted() {
    this.getProduct();
  },
};
</script>
<style scoped>
.margin {
  margin-bottom: 100px;
}
.links {
  margin: 10px auto 10px;
}
.price {
  color: #024e82;
}
.width-image {
  height: 600px;
}
.select {
  cursor: pointer;
}
@media (max-width: 578px) {
  .select-size {
    font-size: 12px;
  }
  .width-image {
    height: 300px;
  }
  .links {
    font-size: 12px;
    width: fit-content;
    margin: 10px auto 10px;
    text-align: center;
  }
}
</style>
