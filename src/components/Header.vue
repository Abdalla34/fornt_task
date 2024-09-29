<template>
  <div class="header-parent">
    <div class="container">
      <div class="parent-logo">
        <div class="row align-items-center">
          <div class="col-2">
            <div class="nav-logo d-flex justify-content-left">
              <h1 class="fw-400 title">NorthStar</h1>
            </div>
          </div>
          <div class="col-4">
            <div class="nav-up">
              <ul class="nav-list pt-3" v-if="navHeader">
                <li>
                  <router-link
                    class="links-nav"
                    exact-active-class="active"
                    to="/"
                  >
                    Home
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="links-nav"
                    exact-active-class="active"
                    to="/about"
                  >
                    About
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="links-nav"
                    exact-active-class="active"
                    to="/contact"
                    >Contact Us</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6">
            <div
              class="icons-header d-flex align-items-center justify-content-end gap-3"
            >
              <div class="icon position-relative">
                <button class="link-icon" href="">
                  <i class="fa-regular fa-user"></i>
                </button>
              </div>
              <div class="icon">
                <button class="link-icon position-relative" href="">
                  <div class="data" v-if="abogabalCart && abogabalCart.length">
                    {{ abogabalCart.length }}
                  </div>
                  <i class="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div class="icon">
                <button @click.prevent="toggleside()" class="link-icon">
                  <i class="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-side" :class="{ 'right-0': transition }">
        <ul class="links-side pt-3">
          <li class="li-text text-end p-2" @click.prevent="toggleside()">
            <router-link class="links-nav" exact-active-class="active" to="/">
              Home
            </router-link>
          </li>
          <li class="li-text text-end p-2" @click.prevent="toggleside()">
            <router-link
              class="links-nav"
              exact-active-class="active"
              to="/about"
            >
              About
            </router-link>
          </li>
          <li class="li-text text-end p-2" @click.prevent="toggleside()">
            <router-link
              class="links-nav"
              exact-active-class="active"
              to="/contact"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderApp",
  data: () => {
    return {
      transition: false,
      navHeader: true,
      data: [],
    };
  },
  computed: {
    abogabalCart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    toggleside() {
      this.transition = !this.transition;
    },
  },
  async mounted() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.$store.dispatch("updateCart", JSON.parse(savedCart)); // dispatch action to update value in the store
    }
  },
};
</script>
<style scoped>
.nav-list {
  display: flex;
  gap: 12px;
}
.link-icon {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: black;
}

.link-icon:focus {
  outline: none;
}
.links-nav {
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Arimo" sans-serif;
}
.links-nav:hover {
  color: #77bce6;
}
.links-nav.active {
  color: #77bce6;
}
.menu-side {
  position: absolute;
  right: -1000px;
  z-index: 5;
  background-color: #fff;
  width: 250px;
  height: 100vh;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: all 1s;
}
.li-text {
  font-size: 12px;
}
.data {
  position: absolute;
  color: white;
  background-color: #024e82;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  right: -10px;
  top: -2px;
}

@media (max-width: 992px) {
  .nav-list {
    display: none;
  }
}
@media (min-width: 992px) {
  .fa-bars {
    display: none;
  }
}
.right-0 {
  right: 0 !important;
  transition: all 0.5s;
}
</style>
