import VueRouter from 'vue-router'
import About from '../views/About'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
