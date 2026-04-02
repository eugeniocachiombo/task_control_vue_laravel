import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: import('@/login/Index.vue') },
  { path: "/login", name: 'login', component: import('@/login/Index.vue') },
  { path: "/criar-conta", name: 'signup', component: import('@/signup/Index.vue') },
  {
    path: "/main",
    component: () =>import('@/main/Index.vue'),
    children: [
      { path: "/painel", name: 'dashboard', component: import('@/dashboard/Index.vue') },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router 