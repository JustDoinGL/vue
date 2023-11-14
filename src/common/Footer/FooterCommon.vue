<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} My Website</p>
      <p>
        <a :href="link" target="_blank">GitHub</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import type { FooterCommonProps } from './FooterCommon.types'

const props = defineProps<FooterCommonProps>()

const { link } = toRefs(props)

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped src="./FooterCommon.style.scss"></style>
