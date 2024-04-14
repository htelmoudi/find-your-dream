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
                                <button class="btn prev custom-black-btn"
                                    @click.prevent="redirectTo('CompleteProfile')">Man</button>
                                <button class="btn next custom-info-btn ms-2">women</button>
                            </div>

                            <div class="form-group mb-3 mt-5">
                                <label for="" class="mb-2">Size *(cm)</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>43247</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">weight (kg)</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Chest Size (cm)</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Waist Size (cm)</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Hip Circumference (cm)</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Shoe Size</label>
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
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Hair Colour</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Eye Colour</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Skin Type</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
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
