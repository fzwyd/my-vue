<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const msg = ref<string>('')
await new Promise((resolve, reject) => {
  setTimeout(() => {
    // 随机resolve和reject
    if (Math.random() > 0.5) {
      resolve('异步组件加载成功！！')
    } else {
      reject('异步组件加载失败！！')
    }
  }, 3000)
})
  .then((data:any) => (msg.value = data))
  .catch(err => {
    msg.value = err
    console.log(err)
  })


</script>

<style scoped lang="less">
h1 {
  color: red;
}
</style>
