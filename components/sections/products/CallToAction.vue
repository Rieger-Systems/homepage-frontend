<template>
  <div
    class="bg-primary text-primary-content rounded-xl p-8 text-center mt-16 shadow-lg"
    v-motion="{
      initial: { opacity: 0, y: 40 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 18,
          delay: 100,
        },
      },
    }"
  >
    <h3 class="text-2xl font-bold mb-2">
      {{ t("services.ctaTitle") }}
    </h3>
    <p class="mb-4">
      {{ t("services.ctaText") }}
    </p>
    <NuxtLink
      :to="localePath('/contact')"
      class="btn btn-secondary btn-lg"
      v-motion="{
        initial: { opacity: 0, scale: 0.9 },
        visibleOnce: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 150,
            damping: 20,
            delay: 200,
          },
        },
      }"
    >
      {{ t("services.contactButton") }}
    </NuxtLink>
    <p
      class="mt-2 opacity-80 text-xs"
      v-motion="{
        initial: { opacity: 0, y: 10 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 300,
          },
        },
      }"
    >
      {{ t("services.notice") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";
import { getServicesProduct } from "~/data/products/services";

const { t } = useI18n();
const localePath = useLocalePath();
</script>
