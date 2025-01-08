import { createWebHistory, createRouter, useRoute } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import MyWorkView from '../views/MyWorkView.vue'
import AboutMeView from '../views/AboutMeView.vue'

const routes = [
  { 
    path: '/', 
    component: HomeView 
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/my-work',
    name: 'my-work',
    component: MyWorkView
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: AboutMeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router