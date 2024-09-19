<template>
  <div class="header-parent">
    <div class="container">
      <div
        class="parent-logo d-flex align-items-center justify-content-between"
      >
        <div class="nav-logo d-flex align-items-center gap-5 pt-4">
          <h1 class="fw-400 fs-1 title">NorthStar</h1>
          <div class="nav-up">
            <ul class="nav-list d-flex gap-5">
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
                <!-- <a class="links-nav" href="/about">About</a> -->
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
        <div class="icons-header d-flex align-items-center gap-3">
          <div class="icon">
            <a class="link-icon" href=""
              ><i class="fa-regular fa-user fs-2"></i
            ></a>
          </div>
          <div class="icon">
            <a class="link-icon" href=""
              ><i class="fa-solid fa-bag-shopping fs-2"></i
            ></a>
          </div>
          <div class="icon">
            <a class="link-icon" href=""
              ><i class="fa-solid fa-bars fs-2"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderApp",
};
</script>
<style scoped>
.link-icon {
  color: black;
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
</style>
