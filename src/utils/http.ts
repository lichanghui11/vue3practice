import axios, { type AxiosRequestConfig } from 'axios'
import { getToken, setToken, removeToken } from './token.ts'
import { ElMessage } from 'element-plus'

// 为 axios 增加类型声明
declare module 'axios' {
  export interface AxiosRequestConfig { 
    // 在调用 axios interceptor 的时候，传入这个字段标识是否需要鉴权
    AuthRequired?: boolean
  }
}


export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000
})

http.interceptors.request.use(config => {
  if (config.AuthRequired) {
    const token = getToken()
    if (token) {
      // 有 token ，则把 token 挂到 请求体的 header 上面
      config.headers = config.headers || {} // 如果请求没有设置 header ，这里的 headers 可能为 undefined, 所以在这里做一个兜底
      config.headers.Authorization = `Token ${token}`
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  return response
}, error => { 
  // 这里根据数据的返回结构处理 401 422
  const { status } = error.response
  if (status === 401) {
    // No authorization
    ElMessage.error('请重新登录')
    removeToken()
  } else if (status === 422) {
    // Wrong data format
    ElMessage.warning('数据格式错误！')
    return Promise.reject(error)
  }
  return Promise.reject(error)
})