// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../components/WelcomePage.vue';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import CompleteProfile from '../components/CompleteProfile.vue'
import WomenProfile from '../components/WomenProfile.vue';
import CastingProfile from '../components/CastingProfile.vue';
import CastingProfile2 from '../components/CastingProfile2.vue';
import AdressProfile from '../components/AdressProfile.vue';
import PictureProfile from '../components/PictureProfile.vue';
import HomeExplore from '@/components/HomeExplore.vue';
import HomePage from '@/components/HomePage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/completeProfile', component: CompleteProfile},
  { path: '/WomenProfile', component: WomenProfile},
  { path: '/CastingProfile', component: CastingProfile},
  { path: '/CastingProfile2', component: CastingProfile2},
  { path: '/AdressProfile', component: AdressProfile},
  { path: '/PictureProfile', component: PictureProfile},
  { path: '/HomePage', component: HomePage},
  { path: '/HomeExplore', component: HomeExplore}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
