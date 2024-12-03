<template>
  <Header :isSticky="isSticky" />
  <RouterView @updateSticky="updateSticky"/>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/layout/header1.vue';

const isSticky = ref(false)  // 绑定给子组件的值
const updateSticky = (value: boolean) => {
  isSticky.value = value
}
</script>
<style scoped>

</style>
