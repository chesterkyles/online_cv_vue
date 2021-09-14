import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Education from '../views/Education'
import Experience from '../views/Experience'
import Skills from '../views/Skills'
import Achievements from '../views/Achievements'
import Conferences from '../views/Conferences'
import Projects from '../views/Projects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements,
  },
  {
    path: '/conferences',
    name: 'Conferences',
    component: Conferences,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
