import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCurrentUser, getLogin } from '../api/users'
import { getToken, setToken, removeToken } from '../utils/token.ts'
import { type User } from '../types/users.ts'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(getToken()) // 由于 localStorage 的设计，如果没有值则可能返回 null
  const user = ref<User | null>(null)
  const isLoggedIn = computed(() => !!token.value)

  async function login(payload: {username: string, password: string}) {
    /**
     * TODO: 使用错误捕获来处理这里的逻辑（401 422）
     * 响应拦截器中进行了处理，这里不确定是否需要同步处理
     */
    const res = await getLogin(payload) 
    user.value = res.data?.user
    token.value = res.data?.user.token
    setToken(user.value!.token)
  }

  async function fetchMe() {
    if (!token) return 
    /**
     * TODO: 这里需要考虑是否要做错误处理
     */
    const res = await getCurrentUser()
    user.value = res.data?.user
  }

  function logout() {
    token.value = null
    user.value = null
    removeToken()
  }

  return { token, user, isLoggedIn, login, fetchMe, logout }
})