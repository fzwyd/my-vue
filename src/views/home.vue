<template>
  <Header />
  <div class="container">
    <div style="height: 100vh;"></div>
    <div class="map">
      <Map />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/header.vue';
import Map from '@/components/map.vue'
</script>

<style lang="less">
.container {
  width: 1000px;
  margin: 0 auto;
  .map {
    width: 100%;
    height: 100vh;
  }
}
</style>
