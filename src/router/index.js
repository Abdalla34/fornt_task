import Vue from "vue";
import VueRouter from "vue-router";
import HomeVue from "../views/HomeVue.vue";
import AboutView from "../views/AboutView.vue";
// import ProductView from "../views/ProductView.vue";

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
  // {
  //   path: "/product/:id",
  //   name: "ProductView",
  //   component: ProductView,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
