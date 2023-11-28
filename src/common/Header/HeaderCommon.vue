<template>
  <header>
    <div>
      <router-link :to="{ path: Links.LOGIN, query: $route.query }">
        <LogoHeader />
      </router-link>
    </div>
    <nav v-if="isLoggedIn">
      <template v-for="link in linksHeader" :key="link.url">
        <router-link :to="{ path: link.url, query: $route.query }" active-class="active">{{
          link.nameUrl
        }}</router-link>
      </template>
    </nav>
    <div class="helpers">
      <ToggleTheme :theme="theme" :toggle-theme="storeTheme.toggleTheme" />
      <div v-if="isLoggedIn">
        <LogOut />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ToggleTheme from '@/ui/ToggleTheme/ToggleTheme.vue'
import LogoHeader from '@/assets/svg/Logo/LogoHeader.vue'
import LogOut from '@/assets/svg/LogOut/LogOut.vue'
import { storeToRefs } from 'pinia'
import { useLinksHeaderFooterStore } from '@/stores/linksHeaderFooter'
import { useThemeStore } from '@/stores/theme'
import { useLoginStore } from '@/stores/login'
import { Links } from '@/router/enum'

const storeTheme = useThemeStore()
const linksStore = useLinksHeaderFooterStore()
const storeLogin = useLoginStore()
const { linksHeader } = storeToRefs(linksStore)
const { theme } = storeToRefs(storeTheme)
const { isLoggedIn } = storeToRefs(storeLogin)
</script>

<style src="./HeaderCommon.style.scss" lang="scss" scoped></style>
