<template>
  <div class="user-profile">
    <h2 class="user-name">{{ name }}</h2>
    <p class="user-info"><span class="info-label">Username:</span> {{ username }}</p>
    <p class="user-info"><span class="info-label">Email:</span> {{ email }}</p>
    <p class="user-info">
      <span class="info-label">Address:</span> {{ address.street }}, {{ address.city }},
      {{ address.zipcode }}
    </p>
    <p class="user-info"><span class="info-label">Phone:</span> {{ phone }}</p>
    <p class="user-info"><span class="info-label">Website:</span> {{ website }}</p>
    <h3 class="company-name">{{ company.name }}</h3>
    <p class="company-info">{{ company.catchPhrase }}</p>
    <p class="company-info">{{ company.bs }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { UserMainProps } from './UserMain.type'

const props = defineProps<UserMainProps>()
const { name, address, company, email, phone, website, username } = props.user
</script>

<style scoped="scss" src="./UserMain.style.scss"></style>
