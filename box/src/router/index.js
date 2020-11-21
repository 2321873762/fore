import Vue from 'vue'
import VueRouter from 'vue-router'
import gywm from '../views/高祥/gywm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/gywm',
    name: 'gywm',
    component: gywm
  },
  {
    path: '/lxwm',
    name: 'lxwm',
    component: () => import('../views/高祥/lxwm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
