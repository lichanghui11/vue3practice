import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { useAuthStore } from './store/auth'
import "element-plus/dist/index.css";

const app = createApp(App)

const pinia = createPinia()
for (const [key, val] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, val)
}
app.use(pinia)
app.use(router)
// await useAuthStore().fetchMe() // 初始化先获取用户信息，成功与否都不阻塞登录
app.mount('#app')
