<template>
  <div class="main">
    <LoadingUI v-if="isLoading" />
    <ErrorUI v-if="isError" :message="errorMessage" />
    <EndUI v-if="isEnd" :message="endMessage" />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { LoadingErrorEndProps } from './LoadingErrorEnd.type'
import LoadingUI from './Loading/LoadingUI.vue'
import ErrorUI from './Error/ErrorUI.vue'
import EndUI from './End/EndUI.vue'

const props = defineProps<LoadingErrorEndProps>()
const { isLoading, isError, isEnd, endMessage, errorMessage } = toRefs(props)
</script>

<style scoped="scss" src="./LoadingErrorEnd.style.scss"></style>
