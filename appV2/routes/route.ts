import { createRouter, createWebHistory } from "vue-router"
import Login from "@/user/login.vue";
import Signup from "@/user/signup.vue";
import Dash from "@/painel/dash.vue";

const routes = [
  { path: "/", component: Login},
  { path: "/login", name:'login', component: Login},
  { path: "/criar-conta", name:'signup', component: Signup},
  { path: "/painel", name:'dash', component: Dash},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router 