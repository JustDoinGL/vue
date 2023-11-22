<template>
  <div class="end">
    <span class="end-message">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { EndUIProps } from './EndUI.type'

const props = defineProps<EndUIProps>()
const { message } = toRefs(props)
</script>

<style scoped="scss" src="./EndUI.style.scss"></style>
