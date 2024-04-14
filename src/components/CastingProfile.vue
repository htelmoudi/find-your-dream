<template>
    <div class="wrapper">
        <div class="container p-0">
            <div class="form-outer">
                <div class="page">
                    <div class="frame6">
                        <div class="card-img">
                            <img :src="('assets/images/fr6.png')" alt="">
                        </div>
                        <div class="card-body">
                            <h3>Fill out your profile</h3>
                            <p class="card-text">
                                Complete your profile and get <br>
                                a casting faster!
                            </p>

                            <div class="form-check mb-3">
                                <input class="form-check-input ms-1" type="radio" name="exampleRadios"
                                    id="exampleRadios1" value="option1" checked>
                                <label class="form-check-label ms-2" for="exampleRadios1">
                                    Professional model
                                </label>
                            </div>

                            <div class="form-check mb-3">
                                <input class="form-check-input ms-1" type="radio" name="exampleRadios"
                                    id="exampleRadios2" value="option2">
                                <label class="form-check-label ms-2" for="exampleRadios2">
                                    New Face
                                </label>
                            </div>

                            <h6 class="card-title">
                                Fees
                            </h6>
                            <p>Indicate an hourly rate as a reference
                                for potential customers</p>

                            <div class="form-group mb-3 mt-3">
                                <input type="text" class="form-control" placeholder="Honoraires/ H/ $">
                            </div>

                            <div class="form-group mb-3">
                                <label for="" class="mb-2">Langauge</label>
                                <input type="text" class="form-control">
                            </div>


                            <div class="d-flex py-3">
                                <button class="btn prev custom-info-btn" @click.prevent="back">Back</button>
                                <button class="btn next custom-info-btn ms-2"
                                    @click.prevent="redirectTo('CastingProfile2')">Next</button>
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