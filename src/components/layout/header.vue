<template>
<div class="header">Header</div>
</template>

<script setup>

</script>

<style scoped lang="less">
@keyframes sticky-header {
  from {
    height: 100vh;
    background-position: 50% 0;
    opacity: 1;
  }
  to {
    height: 10vh;
    background-position: 50% 100%;
    opacity: 0;
  }
}
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: sticky-header linear forwards;
  animation-timeline: scroll();
  animation-range: 0 100%;
}
</style>