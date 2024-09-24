<template>
  <div class="chek-out">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <form action="" class="text-start">
            <div class="full-name mb-3">
              <label class="pargraph d-block" for="">full name</label>
              <input type="text" class="input-color input-hover w-100" />
            </div>
            <div class="street mb-3">
              <label class="pargraph d-block" for="">street adrees</label>
              <input type="text" class="input-color input-hover w-100" />
            </div>
            <div class="city mb-3">
              <label class="pargraph d-block" for="">town / city</label>
              <input type="text" class="input-color input-hover w-100" />
            </div>
            <div class="phone mb-3">
              <label class="pargraph d-block" for="">phone</label>
              <input type="text" class="input-color input-hover w-100" />
            </div>
            <div class="email-adrres mb-3">
              <label class="pargraph d-block" for="">email adrees</label>
              <input type="text" class="input-color input-hover w-100" />
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-start">
          <h1 class="title text-capitalize margin-bottom text-sart">
            your order
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChekOut",
};
</script>
