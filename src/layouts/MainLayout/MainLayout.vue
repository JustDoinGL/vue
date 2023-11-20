<template>
  <div :class="[themeClass]">
    <HeaderCommon :links="links" />
    <main>
      <slot></slot>
    </main>
    <FooterCommon :link="url" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import HeaderCommon from '@/common/Header/HeaderCommon.vue'
import type { HeaderLinks } from '@/interface/links'
import { linkFooter, linksHeader } from '@/utils/links'
import FooterCommon from '@/common/Footer/FooterCommon.vue'
import { useThemeStore } from '@/stores/theme'

const links = ref<HeaderLinks[]>(linksHeader)
const url = ref<string>(linkFooter)
const { theme } = useThemeStore()

const themeClass = computed(() => (theme === 'light' ? 'light-theme' : 'dark-theme'))
</script>

<style scoped="scss" src="./MainLayout.style.scss"></style>
