<template>
  <div ref="scrollContainer" class="container scroll">
    <div class="scroll-box">
      <viewPort></viewPort>
    </div>
    <div class="map scroll-box">
      <Map />
    </div>
    <div class="item scroll-box">
      <div ref="test" style="width: 100%; height: 100%;"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from '@/components/home/map.vue'
import viewPort from '@/components/home/view-port.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
const emit = defineEmits<{
  (e: 'updateSticky', value: boolean): void
}>()
const scrollContainer = ref<HTMLElement | null>(null)
const test = ref<HTMLElement | null>(null)
const checkSticky = () => {
  if (scrollContainer.value) {
    emit('updateSticky', scrollContainer.value.scrollTop > 50) // 更新父组件的 sticky 状态
  }
}
onMounted(() => {
  // 将body的背景颜色设置为#fff
  document.body.style.backgroundColor = '#fff'
  scrollContainer.value?.addEventListener('scroll', checkSticky)
  // 初始化echarts
  const chart = echarts.init(test.value as HTMLElement)

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '10%',
      bottom: '10%',
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ['独处', '平静', '退缩', '直率', '乐观', '多疑', '服从', '退纯', '激动', '放纵'],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { margin: 10 },
      },
      {
        type: 'category',
        inverse: true,
        data: ['乐群', '活力', '勇敢', '世故', '忧虑', '信任', '领导', '敏感', '冷静', '自律'],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { margin: 10 },
      },
    ],
    series: [
      {
        name: '条形部分',
        type: 'bar',
        data: [4, 5, 6, 7, 5, 4, 6, 5, 7, 3],
        barWidth: 10,
        itemStyle: {
          color: '#91cc75',
        },
      },
      {
        name: '折线部分',
        type: 'line',
        data: [4, 5, 6, 7, 5, 4, 6, 5, 7, 3],
        lineStyle: {
          color: '#d14a61',
          width: 2,
        },
        symbol: 'circle',
        symbolSize: 8,
      },
    ],
  }

  chart.setOption(option)
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
