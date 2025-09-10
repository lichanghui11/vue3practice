import { type RouteRecordRaw } from 'vue-router';
import Layout from '../components/Layout.vue';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout', 
    component: Layout,
    children: [
      {
        path: '/',
        name: "Home",
        component: () => import('../components/Home.vue'),
        children: [
          {
            path: '',
            redirect: '/global-feed'
          },
          {
            path: 'personal-feed',
            name: 'PersonalFeed',
            component: () => import('../components/YourFeed.vue'),
            meta: {authRequired: true}
          },
          {
            path: 'global-feed',
            name: 'GlobalFeed',
            component: () => import('../components/GlobalFeed.vue')
          },
        ]
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
        path: '/new-article/:slug',
        name: 'NewArticle',
        component: () => import('../components/NewArticle.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('../components/Setting.vue')
      },
      {
        path: '/me',
        name: 'Me',
        component: () => import('../components/Me.vue')
      },
    ]
  },
]