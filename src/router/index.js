import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HelloWorld.vue'
import Projectf from '@/components/projects/projectf.vue'
import Projectel from '@/components/projects/projectel.vue'
import Projectcf from '@/components/projects/projectcf.vue'
import Projectwel from '@/components/projects/projectwel.vue'
import Projectwec from '@/components/projects/projectwec.vue'
import Contact from '@/components/contact/contact.vue'
import About from '@/components/about/about.vue'
import Career from '@/components/career/career.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projectf',
    name: 'projectf',
    component: Projectf
  },
  {
    path: '/projectel',
    name: 'projectel',
    component: Projectel
  },
  {
    path: '/projectcf',
    name: 'projectcf',
    component: Projectcf
  },
  {
    path: '/projectwel',
    name: 'projectwel',
    component: Projectwel
  },
  {
    path: '/projectwec',
    name: 'projectwec',
    component: Projectwec
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/career',
    name: 'career',
    component: Career
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
