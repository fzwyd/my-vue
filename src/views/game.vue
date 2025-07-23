<template>
  <div class="game">
    <div>
      <p>可以请我喝一杯奶茶吗？</p>
      <div class="buttons">
        <button class="yes" @click="handleYes">可以</button>
        <button class="no" @click="clickTimes++">不可以</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const clickTimes = ref(0)
const handleYes = () => {
  clickTimes.value = 0
}
</script>

<style scoped lang="less">
.game {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.yes,
.no {
  border: none;
  border-radius: 24px;
  width: 80px;
  padding: 16px 0;
  transition: all 0.2s ease;
}
.buttons {
  display: flex;
  gap: 10px;
  margin-top: 48px;
}
.yes {
  transform: scale(calc(1 + 0.2 * v-bind(clickTimes)));
}
.no {
  transform: scale(calc(1 - 0.2 * v-bind(clickTimes)));
}
</style>
