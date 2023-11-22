import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/Login/LoginView.vue'
import PostsView from '@/views/Posts/PostsView.vue'
import { Links, PathNames } from './enum'
import PostView from '@/views/Post/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Links.LOGIN,
      name: PathNames.LOGIN,
      component: LoginView
    },
    {
      path: Links.POSTS,
      name: PathNames.POSTS,
      component: PostsView
    },
    {
      path: Links.POST,
      name: PathNames.POST,
      component: PostView
    }
  ]
})

export default router
