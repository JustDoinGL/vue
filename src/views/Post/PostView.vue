<template>
  <MainLayout>
    <div class="main" v-if="post">
      <PostMain :post="post" />
    </div>
    <template v-if="isLoading">
      <LoadingUI :isLoading="isLoading" />
    </template>
    <template v-if="isError">
      <ErrorUI message="Ошибка" />
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import PostMain from '@/components/Posts/Post/PostMain.vue'
import MainLayout from '@/layouts/MainLayout/MainLayout.vue'
import { usePostStore } from '@/stores/post'
import ErrorUI from '@/ui/LoadingErrorEnd/Error/ErrorUI.vue'
import LoadingUI from '@/ui/LoadingErrorEnd/Loading/LoadingUI.vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = String(route.params.id)
const store = usePostStore()
store.getPost(id)
const { post, isError, isLoading } = storeToRefs(store)
</script>

<style scoped="scss" src="./PostView.style.scss"></style>
