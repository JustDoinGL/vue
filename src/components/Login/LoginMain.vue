<template>
  <div class="form">
    <div v-if="isLoggedIn">Good</div>
    <div v-if="!isLoggedIn">login 1 pass 1</div>
    <h2>Authorization</h2>
    <form @submit.prevent="submitForm">
      <label for="username">Login:</label>
      <input v-model="username" type="text" id="username" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />

      <button type="submit">Entrance</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'

const store = useLoginStore()

const { isLoggedIn, password, username } = storeToRefs(store)

const submitForm = () => {
  store.loginUser()
}
</script>

<style scoped src="./LoginMain.style.scss"></style>
