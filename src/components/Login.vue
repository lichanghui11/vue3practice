
<template>
  <div>
    <div class="text-center mb-[40px]">
      <p class="text-4xl my-[10px]">Sign in</p>
      <router-link to="/register" class="mt-[10px] mb-[40px] text-[#5db85b] hover:border-b-2 hover:border-[#5db85b]" >Need an account?</router-link>
    </div>
    <div class="px-[400px]">
      <el-form>
        <el-form-item>
          <el-input placeholder="email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="password"></el-input>
        </el-form-item>
        <div class="flex"><button class="rounded-[10px] bg-[#5db85b] px-[5px] py-[3px] text-white w-[90px] h-[50px] ml-auto cursor-pointer">Sign in</button></div>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>