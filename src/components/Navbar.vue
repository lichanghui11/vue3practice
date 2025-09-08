<template>
  <header class="navbar flex justify-between items-center px-[20px] pt-[20px]">
    <router-link to="/" class="hover:cursor-pointer font-bold text-2xl text-[#5db85b]">Conduit</router-link>
    <nav class="flex gap-6 text-[#9c9c9c]">
      <router-link to="/" class="hover:text-black">Home</router-link>
      <router-link to="/login" class="hover:text-black">Sign in</router-link>
      <router-link to="/register" class="hover:text-black">Sign up</router-link>
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped></style>
