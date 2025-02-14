<template>
  <div class="container">
    <keep-alive>
      <Suspense>
        <!-- 两种写法都可以 -->
        <async-com></async-com>
        <!-- <component :is="asyncCom"></component> -->
        <template #fallback>
          <asyncLoading></asyncLoading>
        </template>
      </Suspense>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import asyncCom from '@/components/test/async-com.vue'
import asyncLoading from '@/components/test/async-loading.vue'


import mainWorker from '/src/utils/worker.ts?worker'
const worker = new mainWorker()
// 也可以写成这样
// import workerURL from '/src/utils/worker.ts?url'
// const worker = new Worker(workerURL)
onMounted(() => {
  const modules = import.meta.glob(['/src/utils/*.ts', '!**/worker.ts']) as Record<
    string,
    () => Promise<{ default: () => void }>
  >
  for (const path in modules) {
    modules[path]().then(mod => {
      console.log(path, mod)
      mod.default()
    })
  }
  console.log(worker)
  worker.postMessage('Hello Worker')
  worker.onmessage = function (event) {
    console.log('Message from worker:', event.data)
  }
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
