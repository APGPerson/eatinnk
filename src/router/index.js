import { createRouter, createWebHistory } from 'vue-router'
import NorthView from '../views/NorthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'north',
      component: NorthView,
      alias: '/north'
    },
    {
      path: '/south',
      name: 'south',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SouthView.vue'),
    },
  ],
})

export default router
