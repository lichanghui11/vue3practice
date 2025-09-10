import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.ts'
import { getToken } from '../utils/token.ts'

const router = createRouter({
  history: createWebHistory(),
  routes 
}) 

// 全局路由守卫
router.beforeEach(to => {
  const token = getToken()
  if (to.meta.authRequired && !Boolean(token)) {
    // 需要权限 && 本地有 token
    return {name: 'Login', query: {redirect: to.fullPath}}
  }
  return true
})

export default router