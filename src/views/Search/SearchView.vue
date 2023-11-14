<template>
  <div :class="[theme === 'light' ? 'light-theme' : 'dark-theme']">
    <HeaderCommon
      :toggleTheme="toggleTheme"
      :links="links"
      :theme="theme"
      @toggleTheme="toggleTheme"
    />
    <main>
      <SearchMain />
    </main>
    <FooterCommon :link="url" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderCommon from '@/common/Header/HeaderCommon.vue'
import type { HeaderLinks } from '@/interface/links'
import { linkFooter, linksHeader } from '@/utils/links'
import FooterCommon from '@/common/Footer/FooterCommon.vue'
import SearchMain from '@/components/Search/SearchMain.vue'
import { useRouter } from 'vue-router'

const theme = ref('dark')
const links = ref<HeaderLinks[]>(linksHeader)
const url = linkFooter
const router = useRouter()

router.beforeEach(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') theme.value = 'light'
})

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}
</script>

<style scoped="scss" src="./SearchView.style.scss"></style>
