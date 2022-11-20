import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebase';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/');
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login');
    return;
  }

  next();
});

export default router;
