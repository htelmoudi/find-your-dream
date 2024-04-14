<template>
    <div class="wrapper">
        <div class="container p-0">
            <div class="form-outer">
                <div class="page">
                    <div class="frame11">
                        <div class="card-img">
                            <img :src="('assets/images/fr10.png')" alt="">
                        </div>

                        <div class="card-body">

                            <div class="text-center">
                                <h6 class="">Home</h6>
                            </div>

                            <div class="gradient-img mt-5">
                                <img :src="('assets/images/gradient-img.png')" alt="" class="img-fluid">
                            </div>

                            <div class="home-boxes mt-4">
                                <div class="home-box mb-4">
                                    <div class="home-content">
                                        <div class="badges">
                                            <div class="badge info-badge">Adv</div>
                                            <div class="badge black-badge">0,60 point</div>
                                        </div>
                                        <h6 class="home-title mt-3">Casting dancer from <br>
                                            18 years old for famous <br>
                                            Parisian club</h6>
                                        <span class="locotion"><i class="fa-solid fa-location-dot me-2"></i>London,
                                            United Kingdom</span>
                                        <div class="timeline">2 days ago</div>
                                    </div>
                                    <div class="home-img">
                                        <img :src="('assets/images/img1.png')" alt="">
                                    </div>
                                </div>

                                <div class="home-box mb-4">
                                    <div class="home-content">
                                        <div class="badges">
                                            <div class="badge info-badge">Cinema</div>
                                            <div class="badge black-badge">0,60 point</div>
                                        </div>
                                        <h6 class="home-title mt-3">Casting dancer from
                                            18 years old for famous
                                            Parisian club</h6>
                                        <span class="locotion"><i class="fa-solid fa-location-dot me-2"></i>London,
                                            United Kingdom</span>
                                        <div class="timeline">2 days ago</div>
                                    </div>
                                    <div class="home-img">
                                        <img :src="('assets/images/img2.png')" alt="">
                                    </div>
                                </div>

                                <div class="home-box mb-4">
                                    <div class="home-content">
                                        <div class="badges">
                                            <div class="badge info-badge">Dance</div>
                                            <div class="badge black-badge">0,60 point</div>
                                        </div>
                                        <h6 class="home-title mt-3">Casting dancer from <br>
                                            18 years old for famous <br>
                                            Parisian club</h6>
                                        <span class="locotion"><i class="fa-solid fa-location-dot me-2"></i>London,
                                            United Kingdom</span>
                                        <div class="timeline">2 days ago</div>
                                    </div>
                                    <div class="home-img">
                                        <img :src="('assets/images/img1.png')" alt="">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card-footer">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                    <img :src="('assets/images/f1.png')" alt="">
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                    <img :src="('assets/images/f2.png')" alt="">
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                    <img :src="('assets/images/f3.png')" alt="">
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                    <img :src="('assets/images/f4.png')" alt="">
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                    <img :src="('assets/images/f5.png')" alt="">
                                </a>
                            </li>


                        </ul>
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