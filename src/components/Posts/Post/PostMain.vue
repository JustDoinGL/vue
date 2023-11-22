<template>
  <div class="post">
    <h2 class="post-title">{{ title }}</h2>
    <h3>User id - {{ userId }}</h3>
    <p class="post-body">{{ body }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PostMainProps } from './PostMain.type'

const props = defineProps<PostMainProps>()
const { body, title, userId } = props.post
</script>

<style scoped="scss" src="./PostMain.style.scss"></style>
