<template>
  <div
    class="min-h-screen flex flex-col bg-surface-0 text-p-text-color font-sans"
  >
    <Header />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
