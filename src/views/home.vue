<template>
  <div ref="scrollContainer" class="container scroll">
    <div class="scroll-box"></div>
    <div class="map scroll-box">
      <Map />
    </div>
    <div class="item scroll-box">
      <code>app/page.tsx</code>
      <p>app/page.tsx</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from '@/components/map.vue'
import { ref,onMounted,onUnmounted } from 'vue'
const emit = defineEmits<{
  (e: 'updateSticky', value: boolean): void
}>()
const scrollContainer = ref<HTMLElement | null>(null)
const checkSticky = () => {
  if (scrollContainer.value) {
    emit('updateSticky', scrollContainer.value.scrollTop > 50) // 更新父组件的 sticky 状态
  }
}
onMounted(() => {
  // 将body的背景颜色设置为#fff
  document.body.style.backgroundColor = '#fff'
  scrollContainer.value?.addEventListener('scroll', checkSticky)
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', checkSticky)
})
</script>

<style lang="less">
.container {
  width: 100%;
  margin: 0 auto;
  max-height: 100vh;
  .map {
    width: 100%;
  }
}
.scroll {
  scroll-snap-type: y mandatory; /* y: 垂直滚动, mandatory: 强制吸附 */
  overflow-y: scroll; /* 需要设置滚动区域 */
  .scroll-box {
    height: 100vh;
    scroll-snap-align: start; /* start: 吸附到容器的开始位置 */
  }
}
</style>
