<template>
  <div class="theme-toggle">
    <input type="checkbox" id="theme-checkbox" class="theme-checkbox" @change="toggleTheme" />
    <label for="theme-checkbox" class="theme-toggle-label">
      <template v-if="theme !== 'dark'">
        <span class="sun">
          <SunToggle :theme="theme" />
        </span>
      </template>
      <template v-else>
        <span class="moon">
          <MoonToggle :theme="theme" />
        </span>
      </template>
    </label>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { ToggleThemeProps } from './ToggleTheme.type'
import SunToggle from '@/assets/svg/ToggleMoonSun/SunToggle.vue'
import MoonToggle from '@/assets/svg/ToggleMoonSun/MoonToggle.vue'

const props = defineProps<ToggleThemeProps>()

const { theme, toggleTheme } = toRefs(props)
</script>

<style scoped src="./ToggleTheme.style.scss"></style>
