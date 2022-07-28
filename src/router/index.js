import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Front/Home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/Front/About.vue'),
      },
      {
        path: 'theno9',
        name: 'theno9',
        component: () => import('../views/Front/TheNo9.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
