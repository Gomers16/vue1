import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicesView from '../views/ServicesView.vue';
import PricingView from '../views/PricingView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/servicios', component: ServicesView },
  { path: '/precios', component: PricingView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
