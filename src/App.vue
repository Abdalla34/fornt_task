<template>
  <div id="app">
    <HeaderApp />
    <router-view />
    <FooterPage />
  </div>
</template>
<script>
import HeaderApp from "./components/Header.vue";
import FooterPage from "./components/Footer.vue";
export default {
  name: "AppVue",
  components: {
    HeaderApp,
    FooterPage,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
