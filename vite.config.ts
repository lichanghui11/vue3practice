import { defineConfig } from 'vitest/config'
import tailwindcss from "@tailwindcss/vite";
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  test: {
    globals: true, // 允许 describe/it/expect 全局可用
    environment: "jsdom", // Vue 组件测试需要 DOM 环境
  },
});
/**
 *  如果只写 smoke test（简单的逻辑测试），可以不加这个 test 字段。
 *  如果要写 组件测试（用 @vue/test-utils 挂载 Vue 组件），就必须要 environment: 'jsdom'，因为组件需要模拟 DOM 环境。
 *  globals: true 也是推荐的，不然你每个文件都得 import { describe, it, expect } from 'vitest'。
 */