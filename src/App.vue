<template>
  <Header :isSticky="isSticky" v-if="route.name !== 'game'" />
  <RouterView @updateSticky="updateSticky" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import Header from './components/layout/header1.vue'

const isSticky = ref(false) // 绑定给子组件的值
const route = useRoute()
const updateSticky = (value: boolean) => {
  isSticky.value = value
}
</script>
<style scoped></style>
