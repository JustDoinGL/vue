<template>
  <div v-if="isLoggedIn">
    <ProfileMain />
  </div>
  <div v-else class="form">
    <div v-if="isLoggedIn">Good</div>
    <h2>{{ isRegistration === true ? 'Registration' : 'Authorization' }}</h2>
    <h3>{{ isFailLogin === true ? ' The password or login is not correct' : null }}</h3>

    <form @submit.prevent="submitForm">
      <label for="username">Login:</label>
      <input v-model="username" type="text" id="username" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />

      <button type="submit" v-if="!isRegistration">Sign in</button>
      <button @click="store.toggleRegistration" v-if="!isRegistration">Registration</button>

      <button @click="store.registerUser" v-if="isRegistration">Registration</button>
      <button @click="store.toggleLogin" v-if="isRegistration">Back to Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'
import ProfileMain from './Profile/ProfileMain.vue'

const store = useLoginStore()

const { isLoggedIn, isRegistration, isFailLogin, password, username } = storeToRefs(store)

const submitForm = () => {
  store.loginUser()
}
</script>

<style scoped src="./LoginMain.style.scss"></style>
