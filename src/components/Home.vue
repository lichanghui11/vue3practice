<template>
  <div>
    <!-- 顶部 Banner -->
    <div class="h-[180px] bg-[#5db85b] flex flex-col items-center justify-around text-white">
      <p class="font-bold text-7xl">conduit</p>
      <p class="text-2xl">A place to share your Angular knowledge.</p>
    </div>

    <!-- 内容区域 -->
    <div class="flex mt-4 gap-4">
      <!-- 左侧 Feed -->
      <div class="flex-1 min-h-screen">
        <el-menu
          :default-active="activeKey"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
          :key="activeKey"
        >
          <el-menu-item index="your">Your Feed</el-menu-item>
          <el-menu-item index="global">Global Feed</el-menu-item>
        </el-menu>

        <div class="mt-4">
          <div v-if="activeKey === 'your'">
            <YourFeed :datas="mockArticles" />
          </div>
          <div v-else-if="activeKey === 'global'">
            <GlobalFeed :datas="mockArticles" />
          </div>
        </div>
      </div>

      <!-- 右侧 Tags -->
      <div class="w-[230px]">
        <el-card class="" :body-style="{ padding: '5px', marginTop: '0px'}">
          <h3>Popular Tags</h3>
          <div>
            <el-tag
              v-for="tag in tags"
              :key="tag"
              class="mx-[2px] my-[2px] text-[#fcfcfd] bg-[#818a91]"
            >
              {{ tag }}
            </el-tag>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import GlobalFeed from './GlobalFeed.vue'
import YourFeed from './YourFeed.vue'
import { ref } from 'vue'
import { type Article } from '../types'

const activeKey = ref<'your' | 'global'>('global')
function handleSelect(key: 'your' | 'global') {
  activeKey.value = key  
}

const tags = [
  "ai", "api", "architecture", "backend",
  "beginners", "datascience", "frontend",
  "hooks", "javascript", "machinelearning",
  "nodejs", "programming", "python", "react", "webdev"
]


const mockArticles: Article[] = [
  {
    id: 1,
    author: {
      username: "johndoe",
      avatar: "https://api.realworld.io/images/smiley-cyrus.jpeg"
    },
    createdAt: "2025-09-08",
    title: "How to Learn JavaScript Efficiently",
    description: "A comprehensive guide to mastering JavaScript from beginner to advanced level",
    tags: ["beginners", "javascript", "programming", "webdev"],
    favoritesCount: 2,
    favorited: true
  },
  {
    id: 2,
    author: {
      username: "janesmith",
      avatar: "https://api.realworld.io/images/demo-avatar.png"
    },
    createdAt: "2025-09-08",
    title: "React Hooks: Best Practices and Common Pitfalls",
    description: "Essential patterns and anti-patterns when working with React Hooks",
    tags: ["frontend", "hooks", "javascript", "react"],
    favoritesCount: 2,
    favorited: true
  },
  {
    id: 3,
    author: {
      username: "alice",
      avatar: "https://api.realworld.io/images/demo-avatar2.png"
    },
    createdAt: "2025-09-07",
    title: "Understanding TypeScript Generics",
    description: "Learn how to use generics in TypeScript to write reusable and flexible code.",
    tags: ["typescript", "generics", "frontend"],
    favoritesCount: 5,
    favorited: false
  },
  {
    id: 4,
    author: {
      username: "bob",
      avatar: "https://api.realworld.io/images/demo-avatar3.png"
    },
    createdAt: "2025-09-06",
    title: "CSS Grid vs Flexbox: When to Use Which?",
    description: "A practical comparison between CSS Grid and Flexbox with real-world use cases.",
    tags: ["css", "frontend", "webdev"],
    favoritesCount: 3,
    favorited: true
  }
]
</script>
<style scoped></style>