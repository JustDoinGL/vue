import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/Login/LoginView.vue'
import PostsView from '@/views/Posts/PostsView.vue'
import { Links, PathNames } from './enum'
import PostView from '@/views/Post/PostView.vue'
import { useLoginStore } from '@/stores/login'
import UsersView from '@/views/Users/UsersView.vue'

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
      component: PostsView,
      meta: { requiresAuth: true }
    },
    {
      path: Links.POST,
      name: PathNames.POST,
      component: PostView,
      meta: { requiresAuth: true }
    },
    {
      path: Links.USERS,
      name: PathNames.USERS,
      component: UsersView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = [`${Links.LOGIN}`]
  const authRequired = !publicPages.includes(to.path)
  const auth = useLoginStore()

  if (authRequired && !auth.isLoggedIn) {
    return `${Links.LOGIN}`
  }
})

export default router
