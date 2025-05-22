<template>
  <section
    class="relative w-full min-h-screen bg-base-100 overflow-hidden pt-20"
  >
    <div class="absolute inset-0 z-0">
      <HeroCanvas />
    </div>

    <div
      class="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent blur-[120px] z-0 pointer-events-none"
    />

    <div
      class="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6"
    >
      <div
        class="max-w-2xl w-full bg-base-100/40 backdrop-blur-[8px] rounded-2xl shadow-xl border border-white/10 border-t border-t-white/10 p-6 sm:p-8 lg:p-10"
        style="box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3)"
        v-motion="{
          initial: { opacity: 0, y: 30, scale: 0.98 },
          enter: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 50,
            },
          },
        }"
      >
        <h1
          class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-center text-base-content"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 120,
                damping: 16,
                delay: 200,
              },
            },
          }"
        >
          {{ t("homepage.hero.headline") }}
        </h1>
        <p
          class="text-base sm:text-lg text-base-content/80 leading-relaxed mb-8 text-center"
          v-motion="{
            initial: { opacity: 0, y: 15 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 110,
                damping: 15,
                delay: 350,
              },
            },
          }"
        >
          {{ t("homepage.hero.description") }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services-carousel"
            class="btn btn-primary btn-lg"
            v-motion="{
              initial: { opacity: 0, y: 10 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 14,
                  delay: 500,
                },
              },
            }"
          >
            {{ t("homepage.hero.primaryButton") }}
          </a>
          <NuxtLink
            to="/contact"
            class="btn btn-outline btn-lg"
            v-motion="{
              initial: { opacity: 0, y: 10 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 14,
                  delay: 600,
                },
              },
            }"
          >
            {{ t("homepage.hero.secondaryButton") }}
          </NuxtLink>
        </div>
        <p
          class="mt-10 text-xs text-center text-base-content/50"
          v-motion="{
            initial: { opacity: 0, y: 10 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 90,
                damping: 13,
                delay: 750,
              },
            },
          }"
        >
          {{ t("homepage.hero.claim") }}
        </p>
      </div>
    </div>

    <button
      aria-label="Scrollen"
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-base-content/50 hover:text-primary transition animate-bounce"
      v-motion="{
        initial: { opacity: 0, y: 20 },
        enter: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 80,
            damping: 12,
            delay: 900,
          },
        },
      }"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeroCanvas from "~/components/sections/homepage/HeroCanvas.vue";
const { t } = useI18n();
</script>
