<template>
  <div class="container">
    <nav>
      <router-link :to="{ path: path, query: $route.query }" active-class="active">
        {{ `<- Back` }}
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Links } from '@/router/enum'
import type { HelperHeaderProps } from './HelperHeader.types'

const props = defineProps<HelperHeaderProps>()
const { backTo } = props

const path = backTo === 'users' ? Links.USERS : Links.POSTS
</script>

<style src="./HelperHeader.style.scss" lang="scss" scoped></style>
