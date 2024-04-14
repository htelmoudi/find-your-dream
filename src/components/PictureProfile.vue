<template>
    <div class="wrapper">
        <div class="container p-0">
            <div class="form-outer">
                <div class="page">
                    <div class="frame3 frame9">
                        <div class="card-img">
                            <img :src="('assets/images/fr3.png')" alt="">
                        </div>
                        <div class="card-body">
                            <h3>Fill out your profile</h3>


                            <div class="form-group mb-3 mt-5">
                                <label for="" class="mb-2">Profile Picture</label>
                                <input type="file" class="form-control" placeholder="">
                            </div>
                            <h6>Modeling experience</h6>
                            <p>Upload more photos of yourself and show
                                your versatility</p>

                            <div class="form-group mb-3">
                                <input type="file" class="form-control" placeholder="Add Picture">
                            </div>

                            <div class="form-group mb-3 mt-5">
                                <label for="" class="mb-2">Add Video</label>
                                <input type="file" class="form-control" placeholder="">
                            </div>



                            <div class="photoshop py-3">
                                <button class="btn">Request professional photoshoot</button>
                            </div>

                            <div class="form-check py-3">
                                <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    CONNECT WITH
                                </label>
                            </div>

                            <p>Your chances of being chosen by <br> customers are greater!</p>

                            <div class="d-flex py-3">
                                <button class="btn prev custom-white-btn" @click.prevent="back">Back</button>
                                <button class="btn next custom-success-btn ms-2"
                                    @click.prevent="redirectTo('HomeExplore')">Confirm</button>
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