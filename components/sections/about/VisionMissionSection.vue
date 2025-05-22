<template>
  <section
    id="vision"
    aria-labelledby="heading-vision"
    role="region"
    class="scroll-mt-28 py-32 px-6 border-t border-base-300/20 bg-base-200"
  >
    <div class="text-center mb-24">
      <h2
        v-motion="{
          initial: { opacity: 0, y: 24 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 22,
              delay: 100,
            },
          },
        }"
        id="heading-vision"
        tabindex="-1"
        class="text-4xl font-bold mb-4"
      >
        {{ t("about.vision.title") }}
      </h2>
      <p
        v-motion="{
          initial: { opacity: 0, y: 30 },
          enter: {
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
        class="text-base text-base-content/70 max-w-2xl mx-auto leading-relaxed text-balance"
      >
        {{ t("about.vision.description") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div
        v-motion="{
          initial: { opacity: 0, y: 36 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 160,
              damping: 24,
              delay: 300,
            },
          },
        }"
        class="bg-base-200/60 backdrop-blur-md border border-base-300/20 rounded-xl p-8 shadow-lg"
      >
        <h3 class="text-2xl font-semibold text-primary mb-4">
          {{ t("about.vision.visionCard.title") }}
        </h3>
        <p class="text-base text-base-content/80 leading-relaxed text-balance">
          {{ t("about.vision.visionCard.text") }}
        </p>
        <blockquote
          class="mt-6 pl-4 border-l-4 border-primary text-sm text-base-content/60 italic"
        >
          {{ t("about.vision.visionCard.quote") }}
        </blockquote>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 36 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 160,
              damping: 24,
              delay: 400,
            },
          },
        }"
        class="bg-base-200/40 border border-base-300/20 rounded-xl p-8 shadow-lg"
      >
        <h3 class="text-2xl font-semibold text-primary mb-4">
          {{ t("about.vision.missionCard.title") }}
        </h3>
        <p class="text-base text-base-content/80 leading-relaxed text-balance">
          {{ t("about.vision.missionCard.text") }}
        </p>
        <blockquote
          class="mt-6 pl-4 border-l-4 border-primary text-sm text-base-content/60 italic"
        >
          {{ t("about.vision.missionCard.quote") }}
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
