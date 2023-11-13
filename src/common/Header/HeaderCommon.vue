<template>
  <header>
    <nav>
      <template v-for="link in links" :key="link.url">
        <router-link :to="link.url" active-class="active">{{ link.nameUrl }}</router-link>
      </template>
    </nav>
    <div>
      <div>
       <ToggleTheme :toggleTheme="toggleTheme" theme="theme"  @toggleTheme="toggleTheme" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { HeaderCommonProps } from './HeaderCommon.types'
import ToggleTheme from '@/ui/ToggleTheme.vue'


const props = defineProps<HeaderCommonProps>()

const { links } = toRefs(props)

</script>

<style src="./HeaderCommon.style.scss" lang="scss" scoped></style>
