<template>
  <div class="search-bar">
    <input
      class="search-input"
      placeholder=" Enter your search term..."
      type="text"
      v-model="textSearch"
      @input="store.handleInput()"
    />
    <div class="search">
      <SearchUsers />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchUsers from '@/assets/svg/Search/SearchUsers.vue'
import { useUsersStore } from '@/stores/getUsers'
import { storeToRefs } from 'pinia'

const store = useUsersStore()
const { textSearch } = storeToRefs(store)
</script>

<style scoped="scss" src="./SearchUser.style.scss"></style>
