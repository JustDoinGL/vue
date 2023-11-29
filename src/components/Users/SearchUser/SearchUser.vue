<template>
  <div>
    <input
      type="text"
      v-model="textSearch"
      @change="
        () => {
          searchPost()
          console.log('f')
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'

const store = usePostsStore()
const { textSearch } = storeToRefs(store)

const searchPost = () => {
  setTimeout(() => store.searchPosts(), 0)
}
</script>

<style scoped="scss" src="./SearchMain.style.scss"></style>
