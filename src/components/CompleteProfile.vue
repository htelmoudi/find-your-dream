<template>
  <div class="wrapper">
    <div class="container p-0">
      <div class="form-outer">
        <div class="page">
          <div class="frame4">

            <div class="card-img">
              <img :src="('assets/images/fr4.png')" alt="">
            </div>
            <div class="card-body">
              <h3>Fill out your profile</h3>
              <p class="card-text">
                Complete your profile and get <br>
                a casting faster!
              </p>

              <div class="d-flex py-3">
                <button class="btn prev custom-info-btn">Man</button>
                <button class="btn next custom-black-btn ms-2"
                  @click.prevent="redirectTo('WomenProfile')">Women</button>
              </div>

              <div class="form-group mb-3 mt-5">
                <label for="" class="mb-2">Size *(cm)</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>100</option>
                  <option value="1">105</option>
                  <option value="2">110</option>
                  <option value="3">115</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="" class="mb-2">weight (kg)</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">50</option>
                  <option value="2">51</option>
                  <option value="3">52</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="" class="mb-2">Size</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="" class="mb-2">Clothing Size</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">32</option>
                  <option value="2">34</option>
                  <option value="3">36</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="" class="mb-2">Eye Colour</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">black</option>
                  <option value="2">brown</option>
                  <option value="3">Green</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="" class="mb-2">Skin Type</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="" class="mb-2">Skin Colour</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div class="d-flex py-3">
                <button class="btn prev custom-info-btn" @click.prevent="back">Back</button>
                <button class="btn next custom-info-btn ms-2"
                  @click.prevent="redirectTo('CastingProfile')">Next</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectTo(routePath) {
      this.$router.push(routePath);
    },
    back() {
      this.$router.go(-1);
    },
  }
};
</script>
