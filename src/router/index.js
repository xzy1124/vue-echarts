import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/homePage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page',
      name: 'page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/homePage.vue'),
    },
    {
      path: '/',
      redirect: '/page',
    }
  ],
})

export default router
