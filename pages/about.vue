<template>
  <div class="relative bg-base-100 text-base-content" role="main">
    <!-- 🔝 Seitliche Navigation -->
    <SideNavigation :active-id="activeId" />

    <!-- 📌 Abschnitte -->
    <ClaimSection />
    <VisionMissionSection />
    <IdentitySection />
    <ValuesSection />
    <EthicsSection />
  </div>
</template>

<script setup lang="ts">
import SideNavigation from "~/components/sections/about/SideNavigation.vue";
import ClaimSection from "~/components/sections/about/ClaimSection.vue";
import VisionMissionSection from "~/components/sections/about/VisionMissionSection.vue";
import IdentitySection from "~/components/sections/about/IdentitySection.vue";
import ValuesSection from "~/components/sections/about/ValuesSection.vue";
import EthicsSection from "~/components/sections/about/EthicsSection.vue";

import { useScrollSpy } from "~/composables/useScrollSpy";

// 📌 IDs der Abschnitte
const sectionIds = ["claim", "vision", "identity", "values", "ethics"];

// 🎯 Aktive Section über Scrolltracking ermitteln
const { activeId } = useScrollSpy(sectionIds, 120);
</script>
