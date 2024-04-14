<template>
  <div class="wrapper">
    <div class="container p-0">
      <div class="form-outer">
        <div class="page">
          <div class="frame10">
            <div class="card-img">
              <img :src="('assets/images/fr10.png')" alt="">
            </div>
            <div class="card-body">
              <div class="user d-flex justify-content-between align-items-center">
                <h6 class="">Home</h6>
                <div class="user-img">
                  <img :src="('assets/images/user.png')" alt="">
                </div>
              </div>
              <h3 class="mt-3">Hey Hedi</h3>
              <p class="py-3">Select your first domain <br>
                of expertise</p>
              <div class="searchBar">
                <input type="text" class="form-control" placeholder="Search...">
              </div>

            </div>
          </div>
          <div class="card cat-card">
            <div class="card-title p-3">
              <h5>Category</h5>
            </div>
            <div class="card-body">
              <div class="cate-boxes row">
                <div class="col-6 mb-3">
                  <div class="box" @click.prevent="redirectTo('HomePage')">
                    <div class="card-image">
                      <img :src="('assets/images/cat1.png')" alt="">
                    </div>
                    <div class="cat-name text-center">
                      <span>Mode</span>
                    </div>
                  </div>
                </div>

                <div class="col-6 mb-3">
                  <div class="box" @click.prevent="redirectTo('HomePage')">
                    <div class="card-image">
                      <img :src="('assets/images/cat2.png')" alt="">
                    </div>
                    <div class="cat-name text-center">
                      <span>Cinema</span>
                    </div>
                  </div>
                </div>

                <div class="col-6 mb-3">
                  <div class="box" @click.prevent="redirectTo('HomePage')">
                    <div class="card-image">
                      <img :src="('assets/images/cat3.png')" alt="">
                    </div>
                    <div class="cat-name text-center">
                      <span>Theatre</span>
                    </div>
                  </div>
                </div>

                <div class="col-6 mb-3">
                  <div class="box" @click.prevent="redirectTo('HomePage')">
                    <div class="card-image">
                      <img :src="('assets/images/cat4.png')" alt="">
                    </div>
                    <div class="cat-name text-center">
                      <span>Dance</span>
                    </div>
                  </div>
                </div>

                <div class="col-6 mb-3">
                  <div class="box" @click.prevent="redirectTo('HomePage')">
                    <div class="card-image">
                      <img :src="('assets/images/cat5.png')" alt="">
                    </div>
                    <div class="cat-name text-center">
                      <span>Advertist</span>
                    </div>
                  </div>
                </div>

                <div class="col-6 mb-3">
                  <div class="box offBox">
                    <div class="card-image">
                      <img :src="('assets/images/voice.png')" alt="">
                    </div>
                    <div class="cat-name text-center">
                      <span>voice OFF</span>
                    </div>
                  </div>
                </div>
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