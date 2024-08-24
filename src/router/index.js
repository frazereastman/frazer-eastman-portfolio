import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import MyWorkView from '../views/MyWorkView.vue'

const routes = [
  { 
    path: '/', 
    component: HomeView 
  },
  {
    path: '/contact',
    component: ContactView
  },
  {
    path: '/my-work',
    component: MyWorkView
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router