import router from '@/router'
import { Links } from '@/router/enum'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const loginPasswordList = ref([{ login: '1', password: '1' }])
  const loginPasswordNowUser = ref({ login: '', password: '' })
  const isFailLogin = ref(false)
  const isLoggedIn = ref(false)
  const isRegistration = ref(false)
  const isLengthPassUsername = ref(false)
  const username = ref('')
  const password = ref('')

  const loginUser = () => {
    isFailLogin.value = false
    const user = loginPasswordList.value.find(
      (user) => user.login === username.value && user.password === password.value
    )
    isLoggedIn.value = !!user
    if (user) {
      loginPasswordNowUser.value = {
        login: username.value,
        password: password.value
      }
      clearCredentials()
    } else {
      isFailLogin.value = true
    }
  }

  const registerUser = () => {
    if (username.value.length > 0 && password.value.length > 0) {
      loginPasswordList.value.push({ login: username.value, password: password.value })
      isRegistration.value = false
      clearCredentials()
    } else {
      isLengthPassUsername.value = true
    }
  }

  const toggleRegistration = () => {
    isRegistration.value = !isRegistration.value
    clearCredentials()
  }

  const logoutUser = () => {
    isLoggedIn.value = false
    loginPasswordNowUser.value = { login: '', password: '' }
    router.push({ path: Links.LOGIN, query: router.currentRoute.value.query })
  }

  const clearCredentials = () => {
    isFailLogin.value = false
    isLengthPassUsername.value = false
    username.value = ''
    password.value = ''
  }

  const toggleLogin = () => {
    isRegistration.value = !isRegistration.value
    clearCredentials()
  }

  return {
    isLoggedIn,
    isRegistration,
    isFailLogin,
    isLengthPassUsername,
    username,
    password,
    loginPasswordNowUser,
    loginPasswordList,
    loginUser,
    logoutUser,
    toggleRegistration,
    registerUser,
    toggleLogin
  }
})
