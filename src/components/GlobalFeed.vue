<template>
  <div>
    <ul>
      <li v-for="data in datas" class="mx-[20px] mt-[10px] border-b-[1px] border-[#e5e5e5]">
        <div class="flex">
          <img class="w-[50px]" :src="data.author.avatar" alt="">
          <div class="mr-auto">
            <p>{{ data.author.username }}</p>
            <p>{{ data.createdAt }}</p>
          </div>
          <div>Likes: {{ data.favoritesCount }}</div>
        </div>
        <div>
          <p class="font-bold text-2xl">{{ data.title }}</p>
          <p class="text-[#7f7c7c]">{{ data.description }}</p>
        </div>
        <div class="flex text-[#e5e5e5] text-[14px] mb-[20px]">
          <span class="mr-auto">Read more</span>
          <span v-for="tag in (data.tags)" class="border-[1px] mx-[2px] rounded-2xl px-[3px]">{{ tag }}</span>
        </div>
      </li>
    </ul> 
  </div>

</template>
<script setup lang="ts">
import { type Article } from '@/types';
import { defineProps } from 'vue'

defineProps<{ datas: Article[] }>()
</script>
<style></style>