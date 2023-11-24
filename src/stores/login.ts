import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const loginPassword = ref([{ login: '1', password: '1' }])
  const isLoggedIn = ref(false)
  const username = ref('')
  const password = ref('')

  const loginUser = () => {
    const user = loginPassword.value.find(
      (user) => user.login === username.value && user.password === password.value
    )
    isLoggedIn.value = !!user
    if (user) {
      username.value = ''
      password.value = ''
    }
  }

  const logoutUser = () => {
    isLoggedIn.value = false
  }

  return {
    isLoggedIn,
    loginUser,
    logoutUser,
    username,
    password
  }
})
