<template>
  <div :class="[theme === 'light' ? 'light-theme' : 'dark-theme']">
    <HeaderCommon :toggleTheme="toggleTheme" :links="links" :theme="theme" @toggleTheme="toggleTheme" />
    <main>
      Hello!
    </main>
    <footer>xxxxxx</footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderCommon from '@/common/Header/HeaderCommon.vue'
import type { HeaderLinks } from '@/interface/links'
import { linksHeader } from '@/utils/links'

const theme = ref('dark')
const links = ref<HeaderLinks[]>(linksHeader)

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

</script>


<style scoped="scss" src="./HomeView.style.scss"></style>
