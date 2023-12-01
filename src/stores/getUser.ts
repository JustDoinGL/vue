import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import type { User } from '@/interface/users'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const isLoading = ref(false)
  const isError = ref(false)

  const getUser = async (id: string) => {
    try {
      user.value = undefined
      isLoading.value = true
      isError.value = false
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      user.value = response.data
      isLoading.value = false
    } catch (error) {
      console.error('Ошибка при получении поста:', error)
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    isError,
    user,
    getUser
  }
})
