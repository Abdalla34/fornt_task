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
  // methods: {
  //   visit_id() {
  //     // always start with a letter (for DOM friendlyness)
  //     var idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
  //     do {
  //       // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
  //       var ascicode = Math.floor(Math.random() * 42 + 48);
  //       if (ascicode < 58 || ascicode > 64) {
  //         // exclude all chars between : (58) and @ (64)
  //         idstr += String.fromCharCode(ascicode);
  //       }
  //     } while (idstr.length < 32);

  //     return idstr;
  //   },
  // },
  // mounted() {
  //   let visit_id = localStorage.getItem("visit_id");
  //   if (!visit_id) {
  //     visit_id = this.visit_id();
  //     localStorage.setItem("visit_id", visit_id);
  //   }
  // },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  overflow-x: hidden;
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
