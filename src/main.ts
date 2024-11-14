import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import * as echarts from 'echarts'

const app = createApp(App)

// app.config.globalProperties.$echarts = function (el: HTMLElement) {
//   return echarts.init(el, null, { renderer: 'canvas' })
// }
app.use(createPinia())
app.use(router)

app.mount('#app')
