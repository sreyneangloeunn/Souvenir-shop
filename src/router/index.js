import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue'
import SreyneangView from '@/views/SreyneangView.vue'
import RingView from '@/views/RingView.vue'
import ClothView from '@/views/ClothView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/clothes',
      name: 'Clothes',
      component: ClothView,
    },
    {
      path: '/ring',
      name: 'Ring',
      component: RingView,
    },
     {
    path: '/sreyneang',
    name: 'Sreyneang',
    component: SreyneangView,
  },
    {
      path: '/flower',
      name: 'Flower',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FlowerView.vue'),
    },
  ],
})

export default router
