import { createRouter, createWebHistory } from 'vue-router'
import ProjectList from '@/views/project/ProjectList.vue'
import ProjectCreate from '@/views/project/ProjectCreate.vue'
import MyPage from '@/views/mypage/MyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projectlist',
      component: ProjectList
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    },
    {
      path: '/projectcreate',
      name: 'projectcreate',
      component: ProjectCreate
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    }
  ]
})

export default router
