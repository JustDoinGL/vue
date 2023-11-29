<template>
  <div class="user">
    <h2 class="user-title">{{ id }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { UserMainProps } from './UserMain.type'

const props = defineProps<UserMainProps>()
const { id } = props.user
</script>

<style scoped="scss" src="./UserMain.style.scss"></style>
