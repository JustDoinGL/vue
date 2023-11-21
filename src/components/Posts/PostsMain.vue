<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <PostMain :post="post" />
    </div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="isError">Error...</div>
    <button @click="store.getPosts()">cccc</button>
    <div v-if="isEnd">End...</div>
    <!-- 
    <div ref="scrollTarget" style="height: 200px; overflow-y: scroll" @scroll="handleScroll">
      <div style="height: 1000px"></div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { watch, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'
import PostMain from './Post/PostMain.vue'

const store = usePostsStore()
const { posts, isLoading, isError, isEnd } = storeToRefs(store)

// const scrollTarget = ref<HTMLElement | null>(null)

// watch(posts, () => {
//   const target = scrollTarget.value
//   if (target) {
//     target.scrollTop = 0
//   }
// })

// const handleScroll = () => {
//   const target = scrollTarget.value
//   if (target) {
//     const { scrollTop, clientHeight, scrollHeight } = target

//     if (scrollTop + clientHeight >= scrollHeight) {
//       store.getPosts()
//     }
//   }
// }
</script>
