import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { Posts } from '@/interface/posts'

export const usePostsStore = defineStore('post', () => {
  const posts = ref<Posts>([])
  const isLoading = ref(false)
  const isError = ref(false)
  const isEnd = ref(false)
  const totalPosts = ref(100)
  const postsPerPage = ref(10)
  const currentPage = ref(1)

  const getPosts = async () => {
    if (currentPage.value * postsPerPage.value <= totalPosts.value) {
      try {
        isLoading.value = true
        isError.value = false
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage.value}&_page=${currentPage.value}`
        )
        const newPosts = response.data
        posts.value = [...posts.value, ...newPosts]
        totalPosts.value = parseInt(response.headers['x-total-count'])
        currentPage.value++
      } catch (error) {
        console.error('Ошибка при получении постов:', error)
        isError.value = true
      } finally {
        isLoading.value = false
      }
    } else {
      isEnd.value = true
    }
  }

  return {
    posts,
    isLoading,
    isError,
    isEnd,
    getPosts
  }
})
