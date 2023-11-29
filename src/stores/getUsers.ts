import type { Users } from '@/interface/users'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const textSearch = ref('')
  const users = ref<Users>([])
  const isLoading = ref(false)
  const isError = ref(false)
  const isEnd = ref(false)
  const totalUsers = ref(Infinity)
  const usersPerPage = ref(5)
  const currentPage = ref(1)

  const getUsers = async () => {
    if (isError.value || isLoading.value) return

    if (currentPage.value * usersPerPage.value <= totalUsers.value) {
      try {
        isLoading.value = true
        isError.value = false

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?_limit=${usersPerPage.value}&_page=${currentPage.value}`
        )

        const newUsers = response.data
        users.value = [...users.value, ...newUsers]
        totalUsers.value = parseInt(response.headers['x-total-count'])
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
    textSearch,
    users,
    isLoading,
    isError,
    isEnd,
    getUsers
  }
})
