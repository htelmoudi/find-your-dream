<template>
    <div class="wrapper">
        <div class="container p-0">
            <div class="form-outer">
                <div class="page">
                    <div class="frame3 frame8">
                        <div class="card-img">
                            <img :src="('assets/images/fr3.png')" alt="">
                        </div>
                        <div class="card-body">
                            <h3>Fill out your profile</h3>
                            <h6>Place of residence</h6>
                            <p>It’s important for potential customers to know where you come from. Please indicate your
                                place of residence and the perimeter of
                                the distance you are willing to travel</p>

                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Street</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>lorem</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="form-group mb-3 mt-5">
                                <label for="" class="mb-2">Zip Code</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="mb-2">City</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>lorem</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Country</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>lorem</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>


                            <div class="form-check py-3">
                                <input class="form-check-input bg-success" type="checkbox" value=""
                                    id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    I take orders all over the world
                                </label>
                            </div>

                            <div class="d-flex py-3">
                                <button class="btn prev custom-white-btn" @click.prevent="back">Back</button>
                                <button class="btn next custom-success-btn ms-2"
                                    @click.prevent="redirectTo('PictureProfile')">Next</button>
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