<template>
  <header class="navbar flex justify-between items-center px-[20px] pt-[20px]">
    <router-link to="/" class="hover:cursor-pointer font-bold text-2xl" :style="{color: '#5db85b'}">Conduit</router-link>
    <nav v-if="!isLoggedIn" class="flex gap-6 text-[#9c9c9c]">
      <router-link to="/" class="hover:text-black">Home</router-link>
      <router-link to="/login" class="hover:text-black">Sign in</router-link>
      <router-link to="/register" class="hover:text-black">Sign up</router-link>
    </nav>

    <nav v-else class="flex gap-6 text-[#9c9c9c]">
      <router-link to="/auth-home" class="hover:text-black">Home</router-link>
      <router-link to="/new-article" class="hover:text-black">New Article</router-link>
      <router-link to="/settings" class="hover:text-black">Settings</router-link>
      <router-link to="/me" class="hover:text-black">{{ user.username || "no username"}}</router-link>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useAuthStore } from '../store/auth';
import { storeToRefs } from 'pinia';

// 这里直接解构出来的数据会失去动态绑定
const auth = useAuthStore()
const { isLoggedIn, user } = storeToRefs(auth)


</script>
<style scoped>
/* 高亮：当前路由匹配时 */
.router-link-active { 
  color: black;
  font-weight: 600;
 }
/* 完全匹配（尤其是 Home 的‘/’），避免 Home 在 /login 也被标成 active */
.router-link-exact-active {
  font-weight: 600;
}
</style>
