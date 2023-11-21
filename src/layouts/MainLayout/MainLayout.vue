<template>
  <div :class="[themeClass]">
    <HeaderCommon />
    <main>
      <slot></slot>
    </main>
    <FooterCommon />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HeaderCommon from '@/common/Header/HeaderCommon.vue'
import FooterCommon from '@/common/Footer/FooterCommon.vue'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const store = useThemeStore()
const { theme } = storeToRefs(store)

const themeClass = computed(() => (theme.value === 'light' ? 'light-theme' : 'dark-theme'))
</script>

<style scoped="scss" src="./MainLayout.style.scss"></style>
