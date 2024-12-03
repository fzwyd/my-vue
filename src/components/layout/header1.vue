<template>
  <header :class="['sticky-header', { 'is-sticky': isSticky }]">
    <div class="container">
      <nav>
        <a href="#" class="logo">Logo</a>
        <ul class="nav-links">
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/data"><li>Data</li></router-link>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
defineProps({
  isSticky: Boolean // 通过 props 接收到App.vue传来的值
})
const headerHeight = ref(0)

onMounted(() => {
  const header = document.querySelector<HTMLElement>('.sticky-header')
  if (header) {
    headerHeight.value = header.offsetHeight
  }
})

</script>

<style scoped>
.sticky-header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.is-sticky {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}
</style>
