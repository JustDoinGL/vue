<template>
  <div class="toggle-wrapper">
    <input type="checkbox" id="theme-toggle" v-model="theme" @change="toggleTheme" />
    <label for="theme-toggle" class="toggle-label">
      <div class="toggle-handle"></div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { ToggleThemeProps } from './ToggleTheme.type';

const props = defineProps<ToggleThemeProps>()

const { theme, toggleTheme } = toRefs(props)
</script>

<style scoped src="./ToggleTheme.style.scss"></style>