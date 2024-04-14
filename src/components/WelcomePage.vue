<template>
  <div class="wrapper">
    <div class="container p-0">
      <div class="form-outer">
        <div class="page slide-page card">
          <div class="card-img">
            <img :src="getImagePath('fr1.png')" alt="">
          </div>
          <div class="dots">
            <img :src="getImagePath('dots.png')" alt="">
          </div>
          <div class="card-body">
            <h1>Find <br>
              <span> your </span> <br>
              dream
            </h1>
            <p class="card-text">
              It is never too late to be <br> what you might have been
            </p>
            <div class="field mb-4">
              <router-link to="/login" class="btn firstNext next frame1">Start <i
                  class="fa-solid fa-arrow-right ms-2"></i></router-link>
            </div>
          </div>
          <div class="footer-img d-flex justify-content-end">
            <img :src="getImagePath('footer-img.png')" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImagePath(imageName) {
      return require(`@/assets/images/${imageName}`);
    },
  },
};
</script>
