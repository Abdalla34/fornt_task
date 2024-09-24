<template>
  <div class="contact-Us">
    <div class="background-hand margin-about-section">
      <div class="image-sec-background">
        <img class="w-100" src="../assets/contact_2.jpg" alt="" />
      </div>
      <h1 class="text-uppercase text-light title-sec-backgeound">Contact us</h1>
    </div>
    <div class="container">
      <div class="parent-form margin-bottom">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12 text-start">
            <div class="contcat-title mb-3">
              <h1 class="title">We would love to hear from you.</h1>
              <p class="pargraph">
                If you have any query or any type of suggestion, you can contact
                us here. We would love to hear from you.
              </p>
            </div>
            <form id="form-contact">
              <div class="hand-from w-100 d-flex gap-2 mb-1">
                <div class="name width-input mb-1">
                  <label class="d-block pargraph" for="">Name</label>
                  <input
                    class="w-100 p-2 input-color input-hover"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div class="email width-input mb-1">
                  <label class="d-block pargraph" for="">Email</label>
                  <input
                    class="w-100 p-2 input-color input-hover"
                    type="text"
                    placeholder="Your Eamil"
                  />
                </div>
              </div>
              <label class="d-block pargraph" for="">Message</label>
              <textarea
                class="w-100 p-2 input-color input-hover"
                name=""
                id=""
                placeholder="Your Message"
              ></textarea>
              <button class="btn-send-sellers opacity text-light mt-5">
                Send Message
              </button>
            </form>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 mt-5">
            <div class="text-contact text-start mb-4">
              <h1 class="contect">Visit Us</h1>
              <p class="pargraph">
                UET Lahore, Punjab, Pakistan
                <span class="d-block">Phone: +923039898987</span>
              </p>
            </div>
            <div class="text-contact text-start">
              <h1 class="contect">Get In Touch</h1>
              <p class="pargraph">
                You can get in touch with us on this provided email.
                <span class="d-block">Email: hmjawad087@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
};
</script>
<style scoped>
.width-input {
  width: 50%;
}
.contect {
  font-size: 18px;
  font-weight: bold;
}
@media (max-width: 578px) {
  .btn-send-sellers {
    font-size: 14px;
  }
  .width-input {
    width: 100%;
  }
  .hand-from {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
