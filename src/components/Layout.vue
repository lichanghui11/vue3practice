<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer class="mt-auto" />
  </div>
</template>
<script setup lang="ts">
  import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';
</script>