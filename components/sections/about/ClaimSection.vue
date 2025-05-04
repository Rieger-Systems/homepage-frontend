<template>
  <section
    id="claim"
    aria-labelledby="heading-claim"
    role="banner"
    class="scroll-mt-28 pt-32 pb-24 px-6 border-b border-base-300/20 bg-base-100"
  >
    <div class="text-center max-w-3xl mx-auto space-y-8">
      <!-- 🦁 Löwen-Symbol -->
      <div class="text-primary animate-fade-up">
        <BuildingLibraryIcon class="w-10 h-10 mx-auto" />
      </div>

      <!-- 🧭 Headline -->
      <h1
        id="heading-claim"
        tabindex="-1"
        class="text-5xl font-extrabold tracking-tight text-balance animate-fade-up"
      >
        Technologie, die trägt.
      </h1>

      <!-- ✨ Unterzeile -->
      <p
        class="text-base text-base-content/70 leading-relaxed text-balance animate-fade-up delay-100"
      >
        Für Menschen. Mit Verantwortung. Kein Slogan – unser Maßstab.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BuildingLibraryIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.6s ease-out both;
}
</style>
