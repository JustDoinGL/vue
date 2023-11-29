<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <router-link :to="{ name: PathNames.POST, query: $route.query, params: { id: user.id } }">
        <UserMain :user="user" />
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
import LoadingErrorEnd from '@/ui/LoadingErrorEnd/LoadingErrorEnd.vue'
import { useInfiniteScroll } from '@vueuse/core'
import { ref } from 'vue'
import { PathNames } from '@/router/enum'
import { useUsersStore } from '@/stores/getUsers'
import UserMain from './User/UserMain.vue'

const store = useUsersStore()
const { users, isLoading, isError, isEnd } = storeToRefs(store)

const el = ref<HTMLElement | null>(null)

useInfiniteScroll(
  el,
  () => {
    if (isLoading) {
      store.getUsers()
    }
  },
  { distance: 5 }
)
</script>

<style scoped="scss" src="./UsersMain.style.scss"></style>
