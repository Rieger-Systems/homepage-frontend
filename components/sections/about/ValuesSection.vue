<template>
  <section
    id="values"
    aria-labelledby="heading-values"
    role="region"
    class="py-24 even:bg-base-100 odd:bg-base-200 px-6 border-t border-base-300/20"
  >
    <div class="text-center mb-20">
      <h2
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            // Animation nur einmal, wenn sichtbar
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 25,
              delay: 100,
            },
          },
        }"
        id="heading-values"
        tabindex="-1"
        class="text-3xl font-bold mb-4"
      >
        Unsere Werte
      </h2>
      <p
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: {
            // Animation nur einmal, wenn sichtbar
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 25,
              delay: 200,
            },
          },
        }"
        class="text-base text-base-content/70 max-w-2xl mx-auto leading-relaxed"
      >
        Sie sind Entscheidungsfilter, Haltung und Orientierung zugleich – für
        jedes Produkt, jeden Code und jede Begegnung.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      <div
        v-for="(item, index) in values"
        :key="item.title"
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 350 + index * 60,
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <div class="mb-3 flex justify-center">
          <component :is="item.icon" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-base-content mb-2">
          {{ item.title }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ShieldCheckIcon,
  UserIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  ScaleIcon,
} from "@heroicons/vue/24/outline";

const values = [
  {
    title: "Verantwortung",
    desc: "Wir übernehmen Verantwortung für Auswirkungen unserer Technologien – auf Menschen, Gesellschaft und Umwelt.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Menschenwürde & Ethik",
    desc: "Unsere KI dient dem Menschen – sie ersetzt nicht, sie schützt.",
    icon: UserIcon,
  },
  {
    title: "Transparenz",
    desc: "Wir handeln nachvollziehbar – in Code, Kommunikation und Entscheidungen.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Innovation",
    desc: "Wir verbessern das Richtige – nicht das Falsche effizienter.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Nachhaltigkeit",
    desc: "Unsere Systeme sind wartbar, ressourcenschonend und menschenfreundlich.",
    icon: ArrowPathIcon,
  },
  {
    title: "Rechtskonformität",
    desc: "Wir leben DSGVO und KI-Verordnung – technisch und ideell.",
    icon: ScaleIcon,
  },
];
</script>
