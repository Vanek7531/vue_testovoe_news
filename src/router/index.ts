import { createRouter, createWebHistory } from 'vue-router'
import AllNews from '@/components/AllNews.vue'
import CreateNews from '@/components/CreateNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllNews
    },
    {
      path: '/create',
      name: '/create',
      component: CreateNews
    }
  ]
})

export default router
