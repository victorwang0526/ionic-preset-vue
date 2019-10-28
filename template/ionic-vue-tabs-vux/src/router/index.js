import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue';

import Home from '../views/Home.vue'

Vue.use(IonicVueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: () => import(/* webpackChunkName: "tab1" */ '../views/Tab1.vue')
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: () => import(/* webpackChunkName: "tab2" */ '../views/Tab2.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
