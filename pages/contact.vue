<template>
  <section
    class="max-w-screen-lg mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 text-base"
  >
    <header
      v-motion="{
        initial: { opacity: 0, y: 20 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 280,
            damping: 28,
            delay: 100, // Frühzeitig starten
          },
        },
      }"
      class="text-center mb-10 sm:mb-14"
    >
      <h1
        class="text-3xl sm:text-4xl font-semibold tracking-tight inline-flex items-center gap-2 sm:gap-3 justify-center"
      >
        <EnvelopeIcon class="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
        {{ t("contact.pageTitle") }}
      </h1>
      <p
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 30,
              delay: 200, // Folgt der Überschrift
            },
          },
        }"
        class="text-base-content/60 mt-3 sm:mt-2 text-base max-w-lg mx-auto"
      >
        {{ t("contact.pageDescription") }}
      </p>
    </header>

    <div
      class="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-8 md:gap-10 bg-base-200 border border-base-300 rounded-2xl shadow-xl px-3 py-7 sm:px-8 sm:py-12 md:p-14 min-h-[340px] md:min-h-[480px] transition-all"
    >
      <div
        v-motion="{
          initial: { opacity: 0, x: -80, y: 0 }, // Startet links (Desktop)
          'md:initial': { opacity: 0, y: 80, x: 0 }, // Startet unten (Mobile)
          visibleOnce: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 20,
              delay: 400, // Nach dem Header
            },
          },
        }"
        class="h-full flex items-center justify-center"
      >
        <BrandingPanel />
      </div>

      <div
        v-motion="{
          initial: { opacity: 0 },
          visibleOnce: {
            opacity: 1,
            transition: {
              duration: 0.8, // Etwas längerer Fade
              delay: 500, // Zwischen den Panels
            },
          },
        }"
        class="hidden md:flex items-center justify-center h-full"
      >
        <div
          class="w-px h-5/6 bg-gradient-to-b from-transparent via-primary/40 to-transparent self-center"
        ></div>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, x: 80, y: 0 }, // Startet rechts (Desktop)
          'md:initial': { opacity: 0, y: 80, x: 0 }, // Startet unten (Mobile)
          visibleOnce: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 20,
              delay: 600, // Nach der Trennlinie
            },
          },
        }"
        class="h-full flex items-center justify-center"
      >
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import ContactForm from "~/components/sections/contact/ContactForm.vue";
import BrandingPanel from "~/components/sections/contact/BrandingPanel.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
