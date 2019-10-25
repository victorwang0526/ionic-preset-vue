import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue';

import Home from '../views/Home.vue'

Vue.use(IonicVueRouter);

const routes = [
  {path: '/', redirect: '/home'},
  {
    path: '/home',
    redirect: '/tab1',
    component: Home,
    children: [
      {path: '/tab1', name: 'tab1'},
      {path: '/tab2', name: 'tab2'}
    ]
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
