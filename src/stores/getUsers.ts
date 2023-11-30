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
  const isSearch = ref(false)
  const isFound = ref(true)
  const totalUsers = ref(Infinity)
  const usersPerPage = ref(5)
  const currentPage = ref(1)
  let searchTimeout: number | null = null

  const getUsers = async (
    url = `https://jsonplaceholder.typicode.com/users?_limit=${usersPerPage.value}&_page=${currentPage.value}`,
    search = false
  ) => {
    if (isError.value || isLoading.value) return

    if (currentPage.value * usersPerPage.value <= totalUsers.value || search === true) {
      try {
        isLoading.value = true
        isError.value = false
        isFound.value = true

        const response = await axios.get(url)

        const newUsers = response.data

        if (search && textSearch.value.length > 0) {
          users.value = newUsers
          if (newUsers.length === 0) {
            isFound.value = false
          }
        } else {
          users.value = [...users.value, ...newUsers]
          totalUsers.value = parseInt(response.headers['x-total-count'])
          currentPage.value++
        }
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

  const searchPosts = async () => {
    if (textSearch.value.length > 0) {
      isSearch.value = true
      await getUsers(`https://jsonplaceholder.typicode.com/users?q=${textSearch.value}`, true)
    } else {
      currentPage.value = 0
      await getUsers()
    }
  }

  const handleInput = () => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
    searchTimeout = setTimeout(() => {
      searchPosts()
    }, 600)
  }

  return {
    textSearch,
    users,
    isLoading,
    isError,
    isEnd,
    isSearch,
    isFound,
    getUsers,
    searchPosts,
    handleInput
  }
})
