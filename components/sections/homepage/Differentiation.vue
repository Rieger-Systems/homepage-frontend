<template>
  <section class="bg-base-200 py-28 border-t border-base-300/20">
    <div class="text-center mb-16 px-6">
      <h2
        class="text-4xl font-bold text-base-content mb-3"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25,
              delay: 100,
            },
          },
        }"
      >
        Was uns besonders macht
      </h2>
      <p
        class="text-base text-base-content/70 max-w-2xl mx-auto"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 22,
              delay: 200,
            },
          },
        }"
      >
        Wir setzen auf Werte statt Buzzwords – mit Technik, die Vertrauen
        verdient.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 text-center"
    >
      <div
        v-for="(item, i) in features"
        :key="item.title"
        v-motion="{
          initial: { opacity: 0, y: 40 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 18,
              delay: 300 + i * 100, // Staggered entry for each feature card
            },
          },
        }"
        class="space-y-4"
      >
        <div
          class="w-14 h-14 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center"
        >
          <component :is="item.icon" class="w-6 h-6" />
        </div>
        <p class="font-medium text-base-content">{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ShieldCheckIcon,
  ScaleIcon,
  GlobeEuropeAfricaIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    title: "Schutz statt Ausbeutung",
    icon: ShieldCheckIcon,
  },
  {
    title: "Ethik & DSGVO von Anfang an",
    icon: ScaleIcon,
  },
  {
    title: "Europäische Entwicklung",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    title: "Wartbar & dokumentiert",
    icon: WrenchScrewdriverIcon,
  },
];
</script>
