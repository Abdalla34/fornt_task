<template>
  <div class="about">
    <div class="background-hand margin-about-section">
      <div class="image-about">
        <img class="w-100" src="../assets/img-about_1.jpg" alt="" />
      </div>
      <h1 class="text-uppercase text-light title-about">About Northstar</h1>
    </div>
    <div class="container">
      <div class="about-proudact margin-about-section">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6 mb-4">
            <div class="image-prudact position-relative">
              <img
                class="w-100 opacity"
                src="../assets/about_womns.png"
                alt=""
              />
              <button class="btn-buy text-uppercase btn-spiceal opacity">
                Buy Now
              </button>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 mb-4">
            <div class="image-prudact position-relative">
              <img
                class="w-100 opacity"
                src="../assets/about_mans.png"
                alt=""
              />
              <button class="btn-buy text-uppercase btn-spiceal opacity">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="founders margin-about-section">
        <div class="details-title">
          <h1 class="title">The Founders</h1>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-3">
            <img
              class="w-100 opacity crsuor"
              src="../assets/founders_2.png"
              alt=""
            />
            <h2
              class="text-start text-capitalize text-dark title-foun-img mt-3"
            >
              HM Jawad
            </h2>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <img
              class="w-100 opacity crsuor"
              src="../assets/founder_one.png"
              alt=""
            />
            <h2
              class="text-start text-capitalize text-dark title-foun-img mt-3"
            >
              furqn abid
            </h2>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <img
              class="w-100 opacity crsuor"
              src="../assets/founder_3.png"
              alt=""
            />
            <h2
              class="text-start text-capitalize text-dark title-foun-img mt-3"
            >
              abdullah ah
            </h2>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-3">
            <img
              class="w-100 opacity crsuor"
              src="../assets/founder_4.png"
              alt=""
            />
            <h2
              class="text-start text-capitalize text-dark title-foun-img mt-3"
            >
              abrar khan
            </h2>
          </div>
        </div>
      </div>
      <div class="testmoniales">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-12 img mb-5">
            <div class="hand-testmoniles">
              <img src="../assets/testemniales_1.png" alt="" />
            </div>
          </div>
          <div class="col-lg-7 col-md-8 col-sm-12 text mb-5">
            <div class="text-testemoniles text-sm-center text-md-start">
              <h1 class="fs-3">starcy</h1>
              <p class="pargraph">
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <p class="name-margin">stacy</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12 img mb-5">
            <div class="hand-testmoniles">
              <img src="../assets/testemniales_2.png" alt="" />
            </div>
          </div>
          <div class="col-lg-7 col-md-8 col-sm-12 text mb-5">
            <div class="text-testemoniles text-sm-center text-md-start">
              <h1 class="fs-3">starcy</h1>
              <p class="pargraph">
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <p class="name-margin">stacy</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12 img mb-5">
            <div class="hand-testmoniles">
              <img src="../assets/testemniales_3.png" alt="" />
            </div>
          </div>
          <div class="col-lg-7 col-md-8 col-sm-12 text mb-5">
            <div class="text-testemoniles text-sm-center text-md-start">
              <h1 class="fs-3">starcy</h1>
              <p class="pargraph">
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <p class="name-margin">stacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutView",
};
</script>
<style scoped>
.background-hand {
  position: relative;
}
.margin-about-section {
  margin-bottom: 100px;
}
.image-about img {
  width: 100%;
}
.title-about {
  position: absolute;
  top: 67%;
  left: 14%;
}
.btn-spiceal {
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
}
.title-foun-img {
  font-family: "Arimo" sans-serif;
  font-weight: 700;
  font-size: 21px;
}
.crsuor {
  cursor: pointer;
}
.name-margin {
  margin-top: 30px;
}
@media (max-width: 578px) {
  .title-about {
    position: absolute;
    top: 60%;
    left: 4%;
    font-size: 15px;
  }
  .name-margin {
    margin-top: 0;
  }
}
</style>
