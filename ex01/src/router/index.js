import { createRouter, createWebHistory } from 'vue-router'
import DevMix from '@/views/DevMix.vue' // @->src 밑
import MyPage from '@/views/mypage/MyPage.vue'
import ProjectList from '@/views/project/ProjectList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'devmix',
      component: DevMix
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    },
    {
      path: '/projectlist',
      name: 'projectlist',
      component: ProjectList
    }
  ]
})

export default router
