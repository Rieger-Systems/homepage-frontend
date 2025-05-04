<template>
  <section class="max-w-screen-lg mx-auto px-6 py-24 text-sm">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1
        class="text-4xl font-semibold tracking-tight inline-flex items-center gap-3 justify-center"
      >
        <EnvelopeIcon class="w-7 h-7 text-primary" />
        Kontakt
      </h1>
      <p class="text-base-content/60 mt-2 text-base">
        Du hast eine Frage oder möchtest uns etwas mitteilen? Wir freuen uns auf
        deine Nachricht.
      </p>
    </div>

    <!-- Zwei-Spalten-Layout mit Trennstrich -->
    <div
      class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 bg-base-200 border border-base-300 rounded-2xl shadow-xl p-10"
    >
      <BrandingPanel />

      <!-- Vertikaler Trennstrich (nur auf md+) -->
      <div class="hidden md:flex items-center justify-center">
        <div
          class="w-px h-5/6 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        ></div>
      </div>

      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import ContactForm from "~/components/sections/contact/ContactForm.vue";
import BrandingPanel from "~/components/sections/contact/BrandingPanel.vue";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
