<template>
  <section
    id="identity"
    aria-labelledby="heading-identity"
    role="region"
    class="py-24 even:bg-base-100 odd:bg-base-200 px-6 border-t border-base-300/20"
  >
    <div class="text-center mb-20">
      <h2
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 280, // Etwas straffer für einen knackigeren Start
              damping: 28, // Leichte Dämpfung, gut ausbalanciert
              delay: 80, // Schnellerer Start der Headline
            },
          },
        }"
        id="heading-identity"
        tabindex="-1"
        class="text-3xl font-bold mb-4"
      >
        Unsere Identität
      </h2>
      <p
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 30,
              delay: 180, // Folgt der Überschrift
            },
          },
        }"
        class="text-base text-base-content/70 max-w-2xl mx-auto leading-relaxed text-balance"
      >
        Wir bauen keine Plattformen – wir bauen digitale Räume mit Würde.
        Technologie als Verantwortung, nicht als Spiel.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-for="(item, index) in identity"
        :key="item.title"
        v-motion="{
          initial: { opacity: 0, y: 60 }, // Etwas größerer Y-Versatz für deutlicheres Hochschweben
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180, // Etwas weicher als Header, aber immer noch reaktionsfreudig
              damping: 20, // Geringere Dämpfung für einen subtilen Bounce
              mass: 1, // Fügt etwas 'Gewicht' hinzu für einen natürlicheren Sprung
              delay: 300 + index * 150, // Beginnend nach dem Intro-Text, mit DEUTLICHEREM Staggering
            },
          },
        }"
        class="group bg-base-200/30 border border-base-300/20 rounded-xl p-8 text-center hover:shadow-xl transition-all"
      >
        <div class="mb-4 flex justify-center">
          <div
            class="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center"
          >
            <component :is="item.icon" class="w-7 h-7" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-base-content mb-2">
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
  BuildingLibraryIcon,
  PaintBrushIcon,
} from "@heroicons/vue/24/outline";

const identity = [
  {
    title: "Der Hüter",
    desc: "Wir wahren, was verletzlich ist – mit Klarheit, Haltung und Schutz.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Der Architekt",
    desc: "Wir entwerfen tragfähige Strukturen – modular, verständlich und dauerhaft.",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Der Gestalter",
    desc: "Technologie ist Gestaltung mit Bedeutung. Sie dient dem Menschen, nicht dem Selbstzweck.",
    icon: PaintBrushIcon,
  },
];
</script>
