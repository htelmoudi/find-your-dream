<template>
  <div class="wrapper">
    <div class="container p-0">
      <div class="form-outer">
        <div class="page">
          <div class="frame2">
            <div class="card-img">
              <img :src="('assets/images/fr2.png')" alt="">
            </div>
            <div class="card-body">
              <h3>Hello Again!</h3>
              <p class="card-text">
                Wellcome back <br>
                you’ve been missed
              </p>
              <div class="form-group mb-3">
                <label for="userEmail" class="mb-2">Email</label>
                <input type="email" id="userEmail" class="form-control" placeholder="Hedi@gmail.com" v-model="email"
                  required>
              </div>
              <div class="form-group mb-3">
                <label for="" class="mb-2">Password</label>
                <input type="password" class="form-control" placeholder="*********" v-model="password" required>
              </div>
              <div class="text-end mb-3">
                <span class="">Forgot your password ?</span>
              </div>
              <div class="signBtn">
                <button class="btn custom-info-btn next" @click.prevent="signIn">Sign in</button>
              </div>
              <div class="frame-footer mt-5 text-center">
                <span>Don’t have an account yet ? </span> <router-link to="/register">Register Now</router-link>
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
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signIn() {
      if (!this.email || !this.password) {
        alert("Please fill in all fields.");
        return;
      }else{
        this.$router.push('HomePage');
      }
    }
  }
};
</script>