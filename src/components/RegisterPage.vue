<template>
  <div class="wrapper">
    <div class="container p-0">
      <div class="form-outer">
        <div class="page">
          <div class="frame3">
            <div class="card-img">
              <img :src="('assets/images/fr3.png')" alt="">
            </div>
            <div class="card-body">
              <h3>Register</h3>

              <div class="form-group mb-3 mt-5">
                <label for="nom" class="mb-2">Nom</label>
                <input type="text" class="form-control" placeholder="" v-model="nom" required>
              </div>
              <div class="form-group mb-3">
                <label for="prenom" class="mb-2">Prenom</label>
                <input type="text" class="form-control" placeholder="" v-model="prenom" required>
              </div>
              <div class="form-group mb-3">
                <label for="userEmail" class="mb-2">Email</label>
                <input type="email" class="form-control" placeholder="" v-model="email" required>
              </div>
              <div class="form-group mb-3">
                <label for="phone" class="mb-2">Phone</label>
                <input type="text" class="form-control" placeholder="" v-model="phone" required>
              </div>
              <div class="form-group mb-3">
                <label for="dob" class="mb-2">Date of birth</label>
                <input type="date" class="form-control" placeholder="" v-model="dob" required>
              </div>
              <div class="form-group mb-3">
                <label for="password" class="mb-2">Password</label>
                <input type="password" class="form-control" placeholder="*********" v-model="password" required>
              </div>
              <div class="form-check py-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required>
                <label class="form-check-label" for="flexCheckDefault">
                  You are agree to our <span>terms of Use</span> and
                  you have read and understand
                  our <span>Privacy Policy</span>
                </label>
              </div>
              <div class="signBtn">
                <button class="btn custom-info-btn next" @click.prevent="register">Register</button>
              </div>

            </div>
          </div>
          <button class="btn prev d-none" @click.prevent="prevStep">Previous</button>
          <button class="btn next d-none" @click.prevent="nextStep">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      phone: '',
      dob: '',
      password: ''
    };
  },
  methods: {
    register() {
      if (!this.nom || !this.prenom || !this.email || !this.phone || !this.dob || !this.password) {
        alert("Please fill in all fields.");
        return;
      }
      this.$router.push('/completeProfile');
    },
  }
};
</script>
