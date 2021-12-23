import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cool',
    name: 'CoolLogos',
    component: () => import(/* webpackChunkName: "about" */ '../components/CoolLogos.vue')
  },
  {
    path: '/cute',
    name: 'CuteLogos',
    component: () => import(/* webpackChunkName: "about" */ '../components/CuteLogos.vue')
  },
  {
    path: '/funny',
    name: 'FunnyLogos',
    component: () => import(/* webpackChunkName: "about" */ '../components/FunnyLogos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
