import { createRouter, createWebHistory } from 'vue-router'
import TheFirst from '../views/TheFirst.vue'

import TheSecond from '../views/TheSecond.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: TheFirst
    },
    {
      path: '/second',
      name: 'second',
      component: TheSecond
    }
  ]
})

export default router
