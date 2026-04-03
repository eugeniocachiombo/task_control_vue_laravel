import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/:pathMatch(.*)*', component: () => import('@/views/error/Index.vue') },
  { path: "/", component: () => import('@/views/login/Index.vue') },
  { path: "/login", name: 'login', component: () => import('@/views/login/Index.vue') },
  { path: "/criar-conta", name: 'signup', component: () => import('@/views/signup/Index.vue') },
  {
    path: "/main",
    component: () => import('@/views/main/Index.vue'),
    children: [
      { path: "/painel", name: 'dashboard', component: () => import('@/views/dashboard/Index.vue') },
      { path: "/tarefas", name: 'tasks', component: () => import('@/views/tasks/Index.vue') },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router 