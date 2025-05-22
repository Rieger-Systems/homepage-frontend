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
        {{ t("about.values.title") }}
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
              damping: 25,
              // delay: 200, // Die Animationseinstellungen bleiben wie im Original
            },
          },
        }"
        class="text-base text-base-content/70 max-w-2xl mx-auto leading-relaxed"
      >
        {{ t("about.values.description") }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      <div
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 350, // Manuell angepasste Verzögerung
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <div class="mb-3 flex justify-center">
          <component :is="ShieldCheckIcon" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-base-content mb-2">
          {{ t("about.values.list.responsibility.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.values.list.responsibility.desc") }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 410, // Manuell angepasste Verzögerung (350 + 60)
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <div class="mb-3 flex justify-center">
          <component :is="UserIcon" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-base-content mb-2">
          {{ t("about.values.list.humanDignityEthics.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.values.list.humanDignityEthics.desc") }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 470, // Manuell angepasste Verzögerung (350 + 2*60)
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <div class="mb-3 flex justify-center">
          <component :is="MagnifyingGlassIcon" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-base-content mb-2">
          {{ t("about.values.list.transparency.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.values.list.transparency.desc") }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 530, // Manuell angepasste Verzögerung (350 + 3*60)
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <div class="mb-3 flex justify-center">
          <component :is="RocketLaunchIcon" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-base-content mb-2">
          {{ t("about.values.list.innovation.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.values.list.innovation.desc") }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 590, // Manuell angepasste Verzögerung (350 + 4*60)
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <div class="mb-3 flex justify-center">
          <component :is="ArrowPathIcon" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-base-content mb-2">
          {{ t("about.values.list.sustainability.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.values.list.sustainability.desc") }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 650, // Manuell angepasste Verzögerung (350 + 5*60)
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
      >
        <div class="mb-3 flex justify-center">
          <component :is="ScaleIcon" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="text-lg font-bold text-base-content mb-2">
          {{ t("about.values.list.legalCompliance.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.values.list.legalCompliance.desc") }}
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
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
