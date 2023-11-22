<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: PathNames.POST, query: $route.query, params: { id: post.id } }">
        <PostMain :post="post" />
      </router-link>
    </div>
    <div>
      <LoadingErrorEnd
        :isLoading="isLoading"
        :isError="isError"
        :isEnd="isEnd"
        error-message="Error"
        end-message="End"
      />
    </div>
    <div ref="el"></div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'
import PostMain from './Post/PostMain.vue'
import LoadingErrorEnd from '@/ui/LoadingErrorEnd/LoadingErrorEnd.vue'

import { useInfiniteScroll } from '@vueuse/core'
import { ref } from 'vue'
import { PathNames } from '@/router/enum'

const store = usePostsStore()
const { posts, isLoading, isError, isEnd } = storeToRefs(store)

const el = ref<HTMLElement | null>(null)

useInfiniteScroll(
  el,
  () => {
    store.getPosts()
  },
  { distance: 10 }
)
</script>
