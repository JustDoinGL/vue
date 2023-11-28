<template>
  <div class="container">
    <h2>
      Your username: <span>{{ loginPasswordNowUser.login }}</span>
    </h2>
    <h2>
      Your password: <span>{{ loginPasswordNowUser.password }}</span>
    </h2>
    <LogOut />
  </div>
</template>

<script setup lang="ts">
import LogOut from '@/assets/svg/LogOut/LogOut.vue'
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'

const store = useLoginStore()

const { loginPasswordNowUser } = storeToRefs(store)
</script>

<style scoped src="./ProfileMain.style.scss"></style>
