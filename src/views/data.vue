<template>
  <div class="container scroll">
    <div class="scroll-box">
      <breathBox class="breathBox">呼吸灯盒子</breathBox>
    </div>
    <div class="scroll-box">
      <picWall></picWall>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreathBox from '@/components/data/breathBox.vue'
import PicWall from '@/components/data/picWall.vue';
import { onMounted } from 'vue'

onMounted(() => {
  document.body.style.backgroundColor = '#212534'
})
</script>

<style scoped lang="less">
.container {
  max-height: 100vh;
  box-sizing: border-box;
  padding: 2rem;
}
.scroll {
  scroll-snap-type: y mandatory; /* y: 垂直滚动, mandatory: 强制吸附 */
  overflow-y: scroll; /* 需要设置滚动区域 */
  .scroll-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    scroll-snap-align: start; /* start: 吸附到容器的开始位置 */
  }
}
</style>
