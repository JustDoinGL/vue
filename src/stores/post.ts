import { defineStore } from 'pinia'
import axios from 'axios'
import type { Post } from '@/interface/posts'
import { ref } from 'vue'

export const usePostStore = defineStore('post', () => {
  const post = ref<Post>()
  const isLoading = ref(false)
  const isError = ref(false)

  const getPost = async (id: string) => {
    try {
      post.value = undefined
      isLoading.value = true
      isError.value = false
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      post.value = response.data
      isLoading.value = false
    } catch (error) {
      console.error('Ошибка при получении поста:', error)
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    post,
    isLoading,
    isError,
    getPost
  }
})
