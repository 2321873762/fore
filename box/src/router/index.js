import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from "../views/张庆/shop"

Vue.use(VueRouter)

const routes = [
  {
    path: '/shop',
    name: 'Shop',
    component:Shop
  },
  {
    path: '/gywm',
    name: 'gywm',
    component: () => import('../views/高祥/gywm.vue')
  },
  {
    path: '/lxwm',
    name: 'lxwm',
    component: () => import('../views/高祥/lxwm.vue')
  },
  {
    path: '/culture',
    name: 'Culture',
    component: () => import('../views/李洪涛/Culture.vue')
  },
  {
    path: '/designer',
    name: 'Designer',
    component: () => import('../views/李洪涛/designer.vue')
  }, {
    path: "/budget",
    name: "budget",
    component: () => import('../views/董国强/budget.vue')
  }, {
    path: "/stylist",
    name: "stylist",
    component: () => import('../views/董国强/stylist.vue')
  },
  {
    path: "/hfxindex",
    name: "hfxindex",
    component: () => import('../views/hfx/index')
  },
  {
    path: "/hfxlist",
    name: "hfxlist",
    component: () => import('../views/hfx/list')
  }, 
  {
    path: '/three',
    name: "three",
    component: () => import('../views/郑文甫/three')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
