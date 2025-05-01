<template>
  <section class="bg-base-200 py-28 border-t border-base-300/20">
    <!-- 🧭 Heading -->
    <div class="text-center mb-16 px-6">
      <h2 class="text-4xl font-bold text-base-content mb-3 animate-fade-up">
        Was uns besonders macht
      </h2>
      <p
        class="text-base text-base-content/70 max-w-2xl mx-auto animate-fade-up delay-100"
      >
        Wir setzen auf Werte statt Buzzwords – mit Technik, die Vertrauen
        verdient.
      </p>
    </div>

    <!-- 🌟 Grid mit Differenzierungsmerkmalen -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 text-center"
    >
      <div
        v-for="(item, i) in features"
        :key="item.title"
        class="space-y-4 animate-fade-up"
        :style="{ animationDelay: `${i * 100}ms` }"
      >
        <div
          class="w-14 h-14 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center"
        >
          <component :is="item.icon" class="w-6 h-6" />
        </div>
        <p class="font-medium text-base-content">{{ item.title }}</p>
      </div>
    </div>

    <!-- 🔗 CTA-Link -->
    <div class="text-center mt-14 animate-fade-up delay-300">
      <NuxtLink to="/technology" class="btn btn-link text-sm text-primary"
        >Unsere Technologieprinzipien</NuxtLink
      >
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

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.8s ease-out both;
}
.animate-fade-up.delay-100 {
  animation-delay: 0.1s;
}
.animate-fade-up.delay-300 {
  animation-delay: 0.3s;
}
</style>
