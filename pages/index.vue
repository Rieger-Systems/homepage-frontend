<template>
  <div class="min-h-screen bg-surface-0 text-p-text-color font-sans">
    <HeroSection />
    <HeroSectionOld />
    <ValuesSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/sections/homepage/Hero.vue";
import HeroSectionOld from "~/components/sections/HeroSection.vue";
import ValuesSection from "~/components/sections/ValuesSection.vue";
</script>
