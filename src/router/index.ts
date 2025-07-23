import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('@/views/data.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/index.vue'),
    },
    {
      path: '/mytest',
      name: 'mytest',
      component: () => import('@/views/test1.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/game.vue'),
    },
  ],
})

export default router
