import Vue from "vue";
import VueRouter from "vue-router";
import HomeVue from "../views/HomeVue.vue";
import AboutView from "../views/AboutView.vue";
import ContactUs from "../views/ContactUs.vue";
import ProudactsAll from "../views/ProudactsAll.vue";
import CartPage from "../views/Cart.vue";
import ChekOut from "../views/ChekOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/product/:id",
    name: "ProudactsAll",
    component: ProudactsAll,
  },
  {
    path: "/Cart",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/ChekOut",
    name: "ChekOut",
    component: ChekOut,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
