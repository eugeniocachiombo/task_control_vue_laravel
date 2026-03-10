import { createRouter, createWebHistory } from "vue-router"
import Login from "@/user/login.vue"
import Signup from "@/user/signup.vue"

const routes = [
  { path: "/", component: Login},
  { path: "/login", name:'login', component: Login},
  { path: "/criar-conta", name:'signup', component: Signup},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 