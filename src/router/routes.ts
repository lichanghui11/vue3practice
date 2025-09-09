import { type RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home', 
    component: () => import('../components/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/personal-feed',
    name: 'PersonalFeed',
    component: () => import('../components/YourFeed.vue'),
    meta: {authRequired: true}
  },
  {
    path: '/global-feed',
    name: 'GlobalFeed',
    component: () => import('../components/GlobalFeed.vue')
  },
  {
    path: '/article/:slug',
    name: 'Article',
    component: () => import('../components/Article.vue')
  },
]