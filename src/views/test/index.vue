<template>
  <div class="container">
    <Suspense>
      <!-- 两种写法都可以 -->
      <async-com></async-com>
      <!-- <component :is="asyncCom"></component> -->
      <template #fallback>
        <h1>正在加载异步组件...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { Suspense, defineAsyncComponent } from 'vue'
import asyncCom from '@/components/test/async-com.vue'

const asyncCom1 = defineAsyncComponent({
  loader: () => import('@/components/test/async-com.vue'),
  // 加载中
  loadingComponent: () => import('@/components/test/async-loading.vue'),
  // 加载失败
  delay: 200,
  errorComponent: () => import('@/components/test/async-error.vue'),
  // 超时
  timeout: 5000,
})
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
