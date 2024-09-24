<template>
  <div class="footer text-center">
    <div class="container">
      <div class="footer-hand margin-bottom">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="text-footer mb-2">
              <h2 class="title-footer text-uppercase text-start">
                Company info
              </h2>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">About Us</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">lastest Psots</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">Contact Us</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">Shop</a>
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="text-footer mb-2 text-start">
              <h1 class="title-footer text-uppercase">Help Links</h1>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">traking</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">order status</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">Delvery</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">shipping info</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">fAQ</a>
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="text-footer mb-2 text-start">
              <h1 class="title-footer text-uppercase">useful links</h1>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">special offers</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">get card</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">advetising</a>
              </p>
              <p class="text-start parg-animate">
                <a class="pargraph" href="">terms of use</a>
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="text-footer mb-2 text-start">
              <h1 class="title-footer text-uppercase">get in the now</h1>
              <div class="input-footer d-flex align-items-center">
                <input
                  type="emial"
                  placeholder="enter you email"
                  class="text-capitalize mt-3 input-foot input-hover"
                />
                <i class="fa-solid fa-angle-right icon-animations"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6 text-start">
          <div class="footer-small">
            <div class="text-samll-foot text-start">
              <p class="m-1">© 2020 eCommerce, Made by DeoThemes.</p>
              <p class="m-1">Privacy Policy Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6 text-end">
          <div class="icons-footer">
            <img src="../assets/Rectangle 13.png" alt="" />
            <img src="../assets/Rectangle 14.png" alt="" />
            <img src="../assets/Rectangle 15.png" alt="" />
            <img src="../assets/Rectangle 16.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterPage",
};
</script>
<style scoped>
.parg-animate:hover {
  transition: 0.4s;
  transform: translateX(8px);
}
.parg-animate:hover a {
  color: #47a9ea;
}
.input-foot {
  border: none;
  border-bottom: 2px solid #1d1d1d;
  padding: 5px;
}
.input-footer:hover .icon-animations {
  animation: left 0.4s ease-in-out infinite;
}
@keyframes left {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(10px);
  }
}
.footer-small::before {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  border-top: 1px solid #e8e8e8;
  margin-top: -20px;
}
.text-samll-foot p {
  font-size: 10px;
}
@media (max-width: 576px) {
  .icons-footer img {
    margin-top: 20px;
    width: 14%;
  }
  .input-footer {
    font-size: 12px;
  }
  .pargraph {
    font-size: 10px;
    margin-top: 15px;
  }
  .title-footer {
    font-size: 12px;
  }
}
</style>
