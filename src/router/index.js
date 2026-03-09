import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import MyWorkView from '../views/MyWorkView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import BlogsView from '../views/BlogsView.vue'

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
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router