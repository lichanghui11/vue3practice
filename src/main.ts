import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App)

const pinia = createPinia()
for (const [key, val] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, val)
}

app.use(pinia)
.use(router)
.mount('#app')
