<template>
  <div class="theme-toggle">
    <input
      type="checkbox"
      id="theme-checkbox"
      class="theme-checkbox"
      @click="() => toggleTheme()"
    />
    <label for="theme-checkbox" class="theme-toggle-label">
      <template v-if="theme !== 'dark'">
        <span class="sun">
          <SunToggle />
        </span>
      </template>
      <template v-else>
        <span class="moon">
          <MoonToggle />
        </span>
      </template>
    </label>
  </div>
</template>

<script setup lang="ts">
import SunToggle from '@/assets/svg/ToggleMoonSun/SunToggle.vue'
import MoonToggle from '@/assets/svg/ToggleMoonSun/MoonToggle.vue'
import { toRefs } from 'vue'
import type { ToggleThemeProps } from './ToggleTheme.type'

const props = defineProps<ToggleThemeProps>()
const { theme, toggleTheme } = toRefs(props)
</script>

<style scoped="scss" src="./ToggleTheme.style.scss"></style>
