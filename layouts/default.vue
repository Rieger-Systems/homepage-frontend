<template>
  <div class="min-h-screen flex flex-col bg-base-100 text-base-content">
    <Header />
    <ScrollProgress />
    <main id="main" class="flex-grow">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/navigation/Header.vue";
import Footer from "~/components/navigation/Footer.vue";
import ScrollProgress from "~/components/ui/ScrollProgress.vue";
</script>
