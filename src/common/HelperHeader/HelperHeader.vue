<template>
  <div class="container">
    <nav>
      <router-link :to="{ path: Links.POSTS, query: $route.query }" active-class="active">
        {{ `<- Back` }}
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Links } from '@/router/enum'
</script>

<style src="./HelperHeader.style.scss" lang="scss" scoped></style>
