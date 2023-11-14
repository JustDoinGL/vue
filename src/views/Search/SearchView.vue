<template>
  <div :class="[theme === 'light' ? 'light-theme' : 'dark-theme']">
    <HeaderCommon
      :toggleTheme="toggleTheme"
      :links="links"
      :theme="theme"
      @toggleTheme="toggleTheme"
    />
    <main>Search!</main>
    <FooterCommon :link="url" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderCommon from '@/common/Header/HeaderCommon.vue'
import type { HeaderLinks } from '@/interface/links'
import { linkFooter, linksHeader } from '@/utils/links'
import FooterCommon from '@/common/Footer/FooterCommon.vue'

const theme = ref('light')
const links = ref<HeaderLinks[]>(linksHeader)
const url = linkFooter

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped="scss" src="./SearchView.style.scss"></style>
