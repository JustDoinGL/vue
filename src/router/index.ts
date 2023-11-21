import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/Login/LoginView.vue'
import PostsView from '@/views/Posts/PostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: PostsView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
