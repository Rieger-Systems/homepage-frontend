<template>
  <section
    id="ethics"
    aria-labelledby="heading-ethics"
    role="region"
    class="scroll-mt-28 min-h-screen py-32 px-6 border-t border-base-300/20 bg-base-100"
  >
    <div class="text-center mb-24">
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
        id="heading-ethics"
        tabindex="-1"
        class="text-4xl font-bold mb-4"
      >
        {{ t("about.ethics.title") }}
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
              delay: 200,
            },
          },
        }"
        class="text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed text-balance"
      >
        {{ t("about.ethics.description") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
              delay: 350, // Erster Block
            },
          },
        }"
        class="border-l-4 border-primary pl-6 space-y-3"
      >
        <div class="flex items-center gap-2 text-primary font-semibold">
          <component :is="UserIcon" class="w-5 h-5" />
          <h3 class="text-lg font-bold text-base-content">
            {{ t("about.ethics.principles.autonomy.title") }}
          </h3>
        </div>
        <p class="text-base text-base-content/80 leading-relaxed">
          {{ t("about.ethics.principles.autonomy.desc") }}
        </p>
        <p class="text-sm text-base-content/70 italic leading-relaxed">
          {{ t("about.ethics.principles.autonomy.explanation") }}
        </p>
        <p class="text-sm text-base-content/60 leading-relaxed">
          <strong>{{ t("about.ethics.examplePrefix") }}:</strong>
          {{ t("about.ethics.principles.autonomy.example") }}
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
              delay: 500, // Zweiter Block (350 + 150)
            },
          },
        }"
        class="border-l-4 border-primary pl-6 space-y-3"
      >
        <div class="flex items-center gap-2 text-primary font-semibold">
          <component :is="EyeIcon" class="w-5 h-5" />
          <h3 class="text-lg font-bold text-base-content">
            {{ t("about.ethics.principles.responsibility.title") }}
          </h3>
        </div>
        <p class="text-base text-base-content/80 leading-relaxed">
          {{ t("about.ethics.principles.responsibility.desc") }}
        </p>
        <p class="text-sm text-base-content/70 italic leading-relaxed">
          {{ t("about.ethics.principles.responsibility.explanation") }}
        </p>
        <p class="text-sm text-base-content/60 leading-relaxed">
          <strong>{{ t("about.ethics.examplePrefix") }}:</strong>
          {{ t("about.ethics.principles.responsibility.example") }}
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
              delay: 650, // Dritter Block (350 + 2*150)
            },
          },
        }"
        class="border-l-4 border-primary pl-6 space-y-3"
      >
        <div class="flex items-center gap-2 text-primary font-semibold">
          <component :is="LightBulbIcon" class="w-5 h-5" />
          <h3 class="text-lg font-bold text-base-content">
            {{ t("about.ethics.principles.transparency.title") }}
          </h3>
        </div>
        <p class="text-base text-base-content/80 leading-relaxed">
          {{ t("about.ethics.principles.transparency.desc") }}
        </p>
        <p class="text-sm text-base-content/70 italic leading-relaxed">
          {{ t("about.ethics.principles.transparency.explanation") }}
        </p>
        <p class="text-sm text-base-content/60 leading-relaxed">
          <strong>{{ t("about.ethics.examplePrefix") }}:</strong>
          {{ t("about.ethics.principles.transparency.example") }}
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
              delay: 800, // Vierter Block (350 + 3*150)
            },
          },
        }"
        class="border-l-4 border-primary pl-6 space-y-3"
      >
        <div class="flex items-center gap-2 text-primary font-semibold">
          <component :is="LockClosedIcon" class="w-5 h-5" />
          <h3 class="text-lg font-bold text-base-content">
            {{ t("about.ethics.principles.noExploitation.title") }}
          </h3>
        </div>
        <p class="text-base text-base-content/80 leading-relaxed">
          {{ t("about.ethics.principles.noExploitation.desc") }}
        </p>
        <p class="text-sm text-base-content/70 italic leading-relaxed">
          {{ t("about.ethics.principles.noExploitation.explanation") }}
        </p>
        <p class="text-sm text-base-content/60 leading-relaxed">
          <strong>{{ t("about.ethics.examplePrefix") }}:</strong>
          {{ t("about.ethics.principles.noExploitation.example") }}
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
              delay: 950, // Fünfter Block (350 + 4*150)
            },
          },
        }"
        class="border-l-4 border-primary pl-6 space-y-3"
      >
        <div class="flex items-center gap-2 text-primary font-semibold">
          <component :is="ScaleIcon" class="w-5 h-5" />
          <h3 class="text-lg font-bold text-base-content">
            {{ t("about.ethics.principles.longTermThinking.title") }}
          </h3>
        </div>
        <p class="text-base text-base-content/80 leading-relaxed">
          {{ t("about.ethics.principles.longTermThinking.desc") }}
        </p>
        <p class="text-sm text-base-content/70 italic leading-relaxed">
          {{ t("about.ethics.principles.longTermThinking.explanation") }}
        </p>
        <p class="text-sm text-base-content/60 leading-relaxed">
          <strong>{{ t("about.ethics.examplePrefix") }}:</strong>
          {{ t("about.ethics.principles.longTermThinking.example") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  UserIcon,
  EyeIcon,
  LightBulbIcon,
  LockClosedIcon,
  ScaleIcon,
} from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Die Icons werden nun direkt im Template mit <component :is="IconName" /> verwendet.
// Das ethicsPrinciples computed property ist nicht mehr nötig.
</script>
