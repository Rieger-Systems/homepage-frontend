<template>
  <section
    class="flex flex-col items-center justify-center text-center min-h-screen p-8 space-y-6"
  >
    <h1 class="text-5xl md:text-6xl font-bold text-primary-500">
      Willkommen bei Rieger Systems
    </h1>
    <p class="text-lg md:text-xl text-surface-400 max-w-2xl mx-auto">
      Wir gestalten die Zukunft mit Verantwortung, Innovation und Technologie.
      Erleben Sie digitale Exzellenz neu gedacht.
    </p>
    <Button
      label="Jetzt entdecken"
      class="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
    />
  </section>
</template>

<script setup lang="ts">
import Button from "primevue/button";
</script>
