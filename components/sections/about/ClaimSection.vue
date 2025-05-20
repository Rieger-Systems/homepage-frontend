<template>
  <section
    id="claim"
    aria-labelledby="heading-claim"
    role="banner"
    class="scroll-mt-28 pt-32 pb-24 px-6 border-b border-base-300/20 bg-base-100"
  >
    <div class="text-center max-w-3xl mx-auto space-y-8">
      <div
        v-motion="{
          initial: { opacity: 0, y: 20 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 50,
            },
          },
        }"
        class="text-primary"
      >
        <BuildingLibraryIcon class="w-10 h-10 mx-auto" />
      </div>

      <h1
        v-motion="{
          initial: { opacity: 0, y: 30 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 150,
            },
          },
        }"
        id="heading-claim"
        tabindex="-1"
        class="text-5xl font-extrabold tracking-tight text-balance"
      >
        Technologie, die trägt.
      </h1>

      <p
        v-motion="{
          initial: { opacity: 0, y: 40 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 250,
            },
          },
        }"
        class="text-base text-base-content/70 leading-relaxed text-balance"
      >
        Für Menschen. Mit Verantwortung. Kein Slogan – unser Maßstab.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BuildingLibraryIcon } from "@heroicons/vue/24/outline";
</script>
