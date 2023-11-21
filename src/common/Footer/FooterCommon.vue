<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} My Website</p>
      <p>
        <a :href="linksFooter" target="_blank">GitHub</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLinksHeaderFooterStore } from '@/stores/linksHeaderFooter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const linksStore = useLinksHeaderFooterStore()
const { linksFooter } = storeToRefs(linksStore)

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped src="./FooterCommon.style.scss"></style>
