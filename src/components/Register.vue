<template>
  <div>
    <div class="text-center mb-[40px]">
      <p class="text-4xl my-[10px]">Sign up</p>
      <router-link to="/login" class="mt-[10px] mb-[40px] text-[#5db85b] hover:border-b-2 hover:border-[#5db85b]" >Have an account?</router-link>
    </div>
    <div class="px-[400px]">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item prop="username" label="username:">
          <el-input placeholder="username" clearable v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="email:">
          <el-input placeholder="email" clearable v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="password:">
          <el-input placeholder="password" show-password clearable v-model="form.password"></el-input>
        </el-form-item>
        <div class="flex"><el-button class="rounded-[10px] px-[5px] py-[3px] text-white w-[90px] h-[50px] ml-auto cursor-pointer" type="success" :loading="loadingRef" onclick="onRegister">Sign up</el-button></div>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formRef = ref<FormInstance>()
const form = reactive({
  username: '',
  email: '',
  password: ''  
})
const rules: FormRules = {
  username: [
    { required: true, message: 'username is required', trigger: 'blur' },
    { max: 6, message: 'No more than 6 characters', trigger: 'blur'}
  ],
  email: [
    { required: true, message: 'email is required', trigger: 'blur' },
    { type: 'email', message: 'Invalid email', trigger: ['blur', 'change']}
  ],
  password: [
    { required: true, message: 'password is required', trigger: 'blur' },
    { min: 6, message: 'At least 6 characters', trigger: 'blur'}
  ]
}
const loadingRef = ref<boolean>(false)
async function onRegister() {
  if (!formRef.value) return
  const isValid = await formRef.value.validate()
  if (!isValid) return 
  loadingRef.value = true
  try {
    
  } catch (e) {

  }
}
</script>
<style scoped></style>