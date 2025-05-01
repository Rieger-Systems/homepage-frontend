<template>
  <div class="bg-base-100 text-base-content">
    <HeroSection />
    <MissionShort />
    <ServicesOverview />
    <ProjectShowcase />
    <Differentiation />
    <ContactTeaser />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/sections/homepage/HeroSection.vue";
import MissionShort from "~/components/sections/homepage/MissionShort.vue";
import ServicesOverview from "~/components/sections/homepage/ServicesOverview.vue";
import ProjectShowcase from "~/components/sections/homepage/ProjectShowcase.vue";
import Differentiation from "~/components/sections/homepage/Differentiation.vue";
import ContactTeaser from "~/components/sections/homepage/ContactTeaser.vue";
</script>
