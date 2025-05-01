<template>
  <section class="relative w-full min-h-screen bg-base-100 overflow-hidden">
    <!-- 🌐 Three.js Hintergrund -->
    <div class="absolute inset-0 z-0">
      <HeroCanvas />
    </div>

    <!-- ✨ Sanfter Glow unterhalb -->
    <div
      class="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent blur-3xl z-0"
    />

    <!-- 🧊 Textbox -->
    <div
      class="relative z-10 flex items-center justify-center min-h-screen px-6 py-12"
    >
      <div
        class="max-w-2xl w-full bg-base-100/60 backdrop-blur-lg rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-base-300/40 animate-fade-in"
      >
        <h1
          class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-center"
        >
          Technologie mit Haltung.
        </h1>
        <p
          class="text-base sm:text-lg text-base-content/80 leading-relaxed mb-8 text-center"
        >
          Wir entwickeln Systeme, die tragen – stabil, dokumentiert und
          menschenfreundlich. Von IT-Infrastruktur bis erklärbarer KI.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/products" class="btn btn-primary btn-lg">
            Unsere Leistungen
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline btn-lg">
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ⬇️ Scroll Indicator -->
    <div
      class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-base-content/50 animate-bounce"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroCanvas from "~/components/sections/homepage/HeroCanvas.vue";
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1.2s ease-out both;
}
</style>
