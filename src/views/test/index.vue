<template>
  <div class="container">
    <keep-alive>
      <Suspense>
        <!-- 两种写法都可以 -->
        <async-com></async-com>
        <!-- <component :is="asyncCom"></component> -->
        <template #fallback>
          <async-loading></async-loading>
        </template>
      </Suspense>
    </keep-alive>
    <div class="anchor-element" v-highlight="'red'"></div>
    <div class="positioned-element"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import asyncCom from '@/components/test/async-com.vue'
import asyncLoading from '@/components/test/async-loading.vue'

import mainWorker from '/src/utils/worker.ts?worker'
const worker = new mainWorker()
const vHighlight = {
  mounted: (el: HTMLElement,binding:any) => {
    el.style.backgroundColor = binding.value
  },
  updated: (el: HTMLElement,binding:any) => {
    el.style.backgroundColor = binding.value
  }
}
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
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.anchor-element {
  anchor-name: --my-anchor; /* 定义锚点 */
  width: 100px;
  height: 50px;
  background-color: lightblue;
  margin: 20px;
}
.positioned-element {
  position: absolute;
  top: anchor(--my-anchor center); /* 定位到锚点的底部 */
  left: anchor(--my-anchor right); /* 定位到锚点的左侧 */
  width: 80px;
  height: 30px;
  background-color: orange;
}
</style>
