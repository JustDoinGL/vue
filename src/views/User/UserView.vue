<template>
  <MainLayout>
    <div class="main" v-if="user">
      <HelperHeader backTo="users" />
      <UserMain :user="user" />
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
import HelperHeader from '@/common/HelperHeader/HelperHeader.vue'
import UserMain from '@/components/Users/User/UserMain.vue'
import MainLayout from '@/layouts/MainLayout/MainLayout.vue'
import { useUserStore } from '@/stores/getUser'
import ErrorUI from '@/ui/LoadingErrorEnd/Error/ErrorUI.vue'
import LoadingUI from '@/ui/LoadingErrorEnd/Loading/LoadingUI.vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = String(route.params.id)
const store = useUserStore()
store.getUser(id)
const { user, isError, isLoading } = storeToRefs(store)
</script>

<style scoped="scss" src="./UserView.style.scss"></style>
