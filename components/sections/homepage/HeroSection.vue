<!-- HeroSection.vue -->
<template>
  <section class="min-h-screen bg-base-100 text-base-content px-8 py-24">
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
    >
      <div class="w-full lg:w-1/2 text-left">
        <h1 class="text-5xl font-extrabold leading-tight mb-6">
          Technologie mit Haltung.
        </h1>
        <p class="text-lg text-base-content/80 mb-8 leading-relaxed">
          Wir entwickeln Systeme, die tragen – stabil, dokumentiert und
          menschenfreundlich. Von IT-Infrastruktur bis erklärbarer KI.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/products" class="btn btn-primary btn-lg">
            Unsere Leistungen
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline btn-lg">
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>

      <div class="w-full lg:w-1/2 h-[400px] flex items-center justify-center">
        <HeroCanvas />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroCanvas from "~/components/sections/homepage/HeroCanvas.vue";
</script>
