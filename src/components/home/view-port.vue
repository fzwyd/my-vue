<template>
  <div class="view-port container">
    <div class="card" v-for="i in 3" :key="i">
      <div class="content">
        <h2>title</h2>
        <h3>card</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'
onMounted(() => {
  VanillaTilt.init((document.querySelectorAll('.card') as any), {
    max: 15,
    speed: 1000,
    glare: true,
    'max-glare': 0.5
  })
})
</script>

<style scoped lang="less">
.view-port {
  width: 100%;
  height: 100%;
  background-color: #161626;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  .card {
    /* 相对定位 */
    position: relative;
    width: 280px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 30px;
    border-radius: 15px;
    /* 阴影 */
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    /* 溢出隐藏 */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 边框 */
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    /* 背景模糊 */
    backdrop-filter: blur(5px);
    .content {
      padding: 20px;
      text-align: center;
      /* 默认下移+隐藏 */
      transform: translateY(100px);
      opacity: 0;
      transition: 0.5s;
      h2 {
        position: absolute;
        top: -80px;
        right: 25px;
        font-size: 128px;
        color: rgba(255, 255, 255, 0.05);
      }
      h3 {
        font-size: 28px;
        color: #fff;
      }
      p {
        font-size: 16px;
        color: #fff;
        font-weight: 300;
        margin: 10px 0 15px 0;
      }
      a {
        /* 相对定位 */
        position: relative;
        /* 显示为内联块 */
        display: inline-block;
        /* 内边距 */
        padding: 8px 20px;
        /* 顶部外边距 */
        margin-top: 15px;
        /* 背景颜色 */
        background-color: #fff;
        /* 文字颜色 */
        color: #000;
        /* 文本装饰 */
        text-decoration: none;
        /* 圆角 */
        border-radius: 20px;
        /* 字体粗细 */
        font-weight: 500;
        /* 盒子阴影 */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .card:hover .content {
    /* 鼠标悬停时上移+显示 */
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
