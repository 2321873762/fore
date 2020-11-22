import Vue from 'vue'
import VueRouter from 'vue-router'
import gywm from '../views/高祥/gywm.vue'
import Stylist from "../views/董国强/stylist.vue"
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
  },{
    path:"/budget",
    name:"budget",
    component:()=> import('../views/董国强/budget.vue')
  },{
    path:"/stylist",
    name:"stylist",
    component:Stylist
  },
  {
    path:"/hfxindex",
    name:"hfxindex",
    component:()=> import('../views/hfx/index')
  },
  {
    path:"/hfxlist",
    name:"hfxlist",
    component:()=> import('../views/hfx/list')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
