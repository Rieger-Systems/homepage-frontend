<template>
  <section
    class="py-24 relative z-10 text-base-content overflow-hidden bg-cover bg-center md:bg-fixed"
    :style="{ backgroundImage: 'url(/img/project-background.jpg)' }"
    aria-labelledby="highlight-section-title"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-base-300/80 to-base-300/90 z-20 backdrop-blur-sm"
    ></div>

    <div class="relative z-30 text-center mb-16 px-6 max-w-4xl mx-auto">
      <h2
        id="highlight-section-title"
        class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 drop-shadow-lg"
        v-motion="{
          initial: { opacity: 0, y: 30, scale: 0.98 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 30,
              delay: 150,
            },
          },
        }"
      >
        {{ t("homepage.highlight.sectionTitle") }}
      </h2>
      <p
        class="text-lg md:text-xl text-base-content/90 leading-relaxed max-w-3xl mx-auto tracking-wide"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 22,
              delay: 250,
            },
          },
        }"
      >
        {{ t("homepage.highlight.sectionDescription") }}
      </p>
    </div>

    <div class="relative z-30 max-w-xl mx-auto px-6">
      <NuxtLink
        v-if="projectExists"
        :to="`/projects/${highlightedProjectSlug}`"
        class="card bg-base-100 shadow-2xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.04] hover:shadow-3xl group relative cursor-pointer"
        v-motion="{
          initial: { opacity: 0, y: 40, scale: 0.95 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 130,
              damping: 20,
              delay: 300,
            },
          },
        }"
      >
        <div class="card-body p-8 md:p-10">
          <h3
            class="card-title text-2xl md:text-3xl font-extrabold text-primary mb-3 relative pb-2"
          >
            {{ t(`projects.${highlightedProjectSlug}.title`) }}
            <span
              class="absolute bottom-0 left-0 w-1/3 h-1 rounded-full bg-primary transition-all duration-300 group-hover:w-full"
            ></span>
          </h3>
          <p
            class="text-base-content/80 leading-relaxed text-base md:text-lg mb-6 tracking-wide"
          >
            {{ t(`projects.${highlightedProjectSlug}.description`) }}
          </p>
          <div class="card-actions justify-end">
            <button
              class="btn btn-ghost text-primary hover:bg-primary/20 hover:text-primary-focus flex items-center gap-2 font-semibold px-4 py-2 rounded-lg transition-all duration-300 group-hover:translate-x-1"
            >
              {{ t("homepage.highlight.button") }}
              <ArrowRightIcon
                class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
        <div
          v-if="t(`projects.${highlightedProjectSlug}.status`).length > 0"
          class="absolute top-4 right-4 bg-primary text-primary-content px-3 py-1 text-xs font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {{ t(`projects.${highlightedProjectSlug}.status`) }}
        </div>
      </NuxtLink>
    </div>

    <div class="relative z-30 text-center mt-20 w-1/2 m-auto">
      <NuxtLink
        to="/projects"
        class="btn btn-outline btn-primary rounded-full px-8 py-3 text-lg flex items-center justify-center mx-auto gap-3 transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-content focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-base-300"
        v-motion="{
          initial: { opacity: 0, scale: 0.9 },
          visibleOnce: {
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 18,
              delay: 400,
            },
          },
        }"
      >
        {{ t("homepage.highlight.toAll") }}
        <ArrowRightIcon class="w-6 h-6" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, te } = useI18n();

const highlightedProjectSlug = "amara";

const projectExists = computed(() =>
  te(`projects.${highlightedProjectSlug}.title`)
);
</script>
