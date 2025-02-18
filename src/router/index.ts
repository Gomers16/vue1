import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicesView from '../views/ServicesView.vue';
import PricingView from '../views/PricingView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ResetPasswordView from '../views/ResetPasswordView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/servicios', component: ServicesView },
  { path: '/info', component: PricingView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/reset-password', component: ResetPasswordView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
