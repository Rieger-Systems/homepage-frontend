<script setup lang="ts">
import { useI18n } from "vue-i18n";

// Kein definePageMeta mehr hier!
const { t } = useI18n();
</script>

<template>
  <section
    class="py-28 bg-base-100 border-t border-base-300/20 text-center relative z-10 px-6"
  >
    <h2
      class="text-4xl font-bold text-base-content mb-4"
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
      {{ t("homepage.cta.headline") }}
    </h2>
    <p
      class="text-base text-base-content/70 mb-10 max-w-xl mx-auto"
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
      {{ t("homepage.cta.description") }}
    </p>

    <div
      class="flex flex-col sm:flex-row justify-center gap-4"
      v-motion="{
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 150,
            damping: 20,
            delay: 300,
          },
        },
      }"
    >
      <a href="mailto:kontakt@rieger-systems.eu" class="btn btn-primary btn-lg">
        {{ t("homepage.cta.emailButton") }}
      </a>
      <NuxtLink to="/contact" class="btn btn-outline btn-lg">
        {{ t("homepage.cta.contactButton") }}
      </NuxtLink>
    </div>
  </section>
</template>
