import './assets/main.css'
import './utils/rem.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入echarts

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
