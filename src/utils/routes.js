import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})

export default router
