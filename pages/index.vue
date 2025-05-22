<template>
  <div class="bg-base-100 text-base-content">
    <HeroSection />
    <ServicesOverview />
    <ProjectShowcase />
    <Differentiation />
    <ContactTeaser />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/sections/homepage/HeroSection.vue";
import ServicesOverview from "~/components/sections/homepage/ServicesOverview.vue";
import ProjectShowcase from "~/components/sections/homepage/ProjectShowcase.vue";
import Differentiation from "~/components/sections/homepage/Differentiation.vue";
import ContactTeaser from "~/components/sections/homepage/ContactTeaser.vue";

definePageMeta({
  i18n: {
    messages: {
      de: () =>
        import("~/i18n/locales/de/homepage.json").then((r) => r.default),
      en: () =>
        import("~/i18n/locales/en/homepage.json").then((r) => r.default),
      // Füge hier weitere Sprachen hinzu, falls du sie hast
    },
  },
});
</script>
