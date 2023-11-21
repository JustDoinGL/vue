<template>
  <header>
    <div>
      <router-link to="/">
        <LogoHeader />
      </router-link>
    </div>
    <nav>
      <template v-for="link in linksHeader" :key="link.url">
        <router-link :to="{ path: link.url, query: $route.query }" active-class="active">{{
          link.nameUrl
        }}</router-link>
      </template>
    </nav>
    <div>
      <ToggleTheme :theme="theme" :toggle-theme="store.toggleTheme" />
    </div>
  </header>
</template>

<script setup lang="ts">
import ToggleTheme from '@/ui/ToggleTheme/ToggleTheme.vue'
import LogoHeader from '@/assets/svg/Logo/LogoHeader.vue'
import { storeToRefs } from 'pinia'
import { useLinksHeaderFooterStore } from '@/stores/linksHeaderFooter'
import { useThemeStore } from '@/stores/theme'

const store = useThemeStore()
const linksStore = useLinksHeaderFooterStore()
const { linksHeader } = storeToRefs(linksStore)
const { theme } = storeToRefs(store)
</script>

<style src="./HeaderCommon.style.scss" lang="scss" scoped></style>
