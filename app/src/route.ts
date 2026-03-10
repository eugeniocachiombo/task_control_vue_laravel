import { createRouter, createWebHistory } from "vue-router"
import About from "./About.vue"
import Home from './Home.vue'

const routes = [
  { path: "/home", component: Home},
  { path: "/test", component: About},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router