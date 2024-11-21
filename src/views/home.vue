<template>

  <div class="container">
    <Header />
    <!-- 添加一个空盒子，将header的位置撑起来 -->
    <div style="height: 100vh;"></div>
    <div class="map">
      <Map />
    </div>
    <div class="item"></div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/header1.vue'
import Map from '@/components/map.vue'
</script>

<style lang="less">
.container {
  width: 100%;
  margin: 0 auto;
  // max-height: 100vh;
  .map {
    width: 100%;
    height: 100vh;
    // scroll-snap-align: start; /* start: 吸附到容器的开始位置 */
  }
  .item {
    // scroll-snap-align: start; /* start: 吸附到容器的开始位置 */
    height: 100vh;
  }
}
// .scroll {
//   scroll-snap-type: y mandatory; /* y: 垂直滚动, mandatory: 强制吸附 */
//   overflow-y: scroll; /* 需要设置滚动区域 */
// }
</style>
