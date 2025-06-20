import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/GrabView.vue'
import ServiceView from '@/views/BananaView.vue'
import ContactView from '@/views/MichhaView.vue'
import BananaView from '@/views/BananaView.vue'
import BrahokView from '../views/BrahokView.vue'
import GrabView from '@/views/GrabView.vue'
import MichhaView from '@/views/MichhaView.vue'
import SreyneangView from '@/views/SreyneangView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/grab',
      name: 'Grab',
      component: GrabView,
    },
    {
      path: '/banana',
      name: 'Banana',
      component: BananaView,
    },
    {
      path: '/michha',
      name: 'Michha',
      component: MichhaView,
    },
     {
    path: '/sreyneang',
    name: 'Sreyneang',
    component: SreyneangView,
  },
    {
      path: '/brahok',
      name: 'Brahok',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BrahokView.vue'),
    },
  ],
})

export default router
