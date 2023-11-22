<template>
  <div class="error">
    <span class="error-icon">❌</span>
    <span class="error-message">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { ErrorUIProps } from './ErrorUI.type'

const props = defineProps<ErrorUIProps>()
const { message } = toRefs(props)
</script>

<style scoped="scss" src="./ErrorUI.style.scss"></style>
