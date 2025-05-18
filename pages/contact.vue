<template>
  <section
    class="max-w-screen-lg mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 text-base"
  >
    <!-- Header -->
    <FadeIn>
      <header class="text-center mb-10 sm:mb-14">
        <h1
          class="text-3xl sm:text-4xl font-semibold tracking-tight inline-flex items-center gap-2 sm:gap-3 justify-center"
        >
          <EnvelopeIcon class="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
          Kontakt
        </h1>
        <p class="text-base-content/60 mt-3 sm:mt-2 text-base max-w-lg mx-auto">
          Du hast eine Frage oder möchtest uns etwas mitteilen? Wir freuen uns
          auf deine Nachricht.
        </p>
      </header>
    </FadeIn>

    <div
      class="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-8 md:gap-10 bg-base-200 border border-base-300 rounded-2xl shadow-xl px-3 py-7 sm:px-8 sm:py-12 md:p-14 min-h-[340px] md:min-h-[480px] transition-all"
    >
      <!-- Branding Panel -->
      <SlideFadeIn
        :direction="isMd ? 'left' : 'up'"
        :distance="isMd ? 64 : 28"
        :duration="0.65"
        :delay="0.08"
      >
        <div class="h-full flex items-center justify-center">
          <BrandingPanel />
        </div>
      </SlideFadeIn>

      <!-- Vertikale Trennlinie (5/6 der Elternhöhe) -->
      <FadeIn :delay="0.13">
        <div class="hidden md:flex items-center justify-center h-full">
          <div
            class="w-px h-5/6 bg-gradient-to-b from-transparent via-primary/40 to-transparent self-center"
          ></div>
        </div>
      </FadeIn>

      <!-- Kontaktformular -->
      <SlideFadeIn
        :direction="isMd ? 'right' : 'up'"
        :distance="isMd ? 64 : 28"
        :duration="0.65"
        :delay="0.18"
      >
        <div class="h-full flex items-center justify-center">
          <ContactForm />
        </div>
      </SlideFadeIn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import ContactForm from "~/components/sections/contact/ContactForm.vue";
import BrandingPanel from "~/components/sections/contact/BrandingPanel.vue";
import FadeIn from "~/components/ui/transition/FadeIn.vue";
import SlideFadeIn from "~/components/ui/transition/SlideFadeIn.vue";

import { useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints({ md: 768 });
const isMd = breakpoints.greater("md");
</script>
