<template>
  <div class="container">
    <breathBox class="breathBox">呼吸灯盒子</breathBox>
  </div>
</template>

<script setup lang="ts">
import BreathBox from '@/components/breathBox.vue'
import { onMounted } from 'vue';

onMounted(() => {
  // 将body的背景颜色设置为#fafafa
  document.body.style.backgroundColor = '#212534';
})
</script>

<style scoped>
.container {
  height: 100vh;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
