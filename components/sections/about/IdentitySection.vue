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
              stiffness: 280,
              damping: 28,
              delay: 80,
            },
          },
        }"
        id="heading-identity"
        tabindex="-1"
        class="text-3xl font-bold mb-4"
      >
        {{ t("about.identity.title") }}
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
              delay: 180,
            },
          },
        }"
        class="text-base text-base-content/70 max-w-2xl mx-auto leading-relaxed text-balance"
      >
        {{ t("about.identity.description") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-motion="{
          initial: { opacity: 0, y: 60 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 20,
              mass: 1,
              delay: 300, // Manuell angepasste Verzögerung
            },
          },
        }"
        class="group bg-base-200/30 border border-base-300/20 rounded-xl p-8 text-center hover:shadow-xl transition-all"
      >
        <div class="mb-4 flex justify-center">
          <div
            class="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center"
          >
            <component :is="ShieldCheckIcon" class="w-7 h-7" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-base-content mb-2">
          {{ t("about.identity.list.guardian.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.identity.list.guardian.desc") }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 60 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 20,
              mass: 1,
              delay: 450, // Manuell angepasste Verzögerung (300 + 150)
            },
          },
        }"
        class="group bg-base-200/30 border border-base-300/20 rounded-xl p-8 text-center hover:shadow-xl transition-all"
      >
        <div class="mb-4 flex justify-center">
          <div
            class="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center"
          >
            <component :is="BuildingLibraryIcon" class="w-7 h-7" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-base-content mb-2">
          {{ t("about.identity.list.architect.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.identity.list.architect.desc") }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 60 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 20,
              mass: 1,
              delay: 600, // Manuell angepasste Verzögerung (300 + 2*150)
            },
          },
        }"
        class="group bg-base-200/30 border border-base-300/20 rounded-xl p-8 text-center hover:shadow-xl transition-all"
      >
        <div class="mb-4 flex justify-center">
          <div
            class="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center"
          >
            <component :is="PaintBrushIcon" class="w-7 h-7" />
          </div>
        </div>
        <h3 class="text-xl font-bold text-base-content mb-2">
          {{ t("about.identity.list.designer.title") }}
        </h3>
        <p class="text-sm text-base-content/70 leading-relaxed">
          {{ t("about.identity.list.designer.desc") }}
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
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
