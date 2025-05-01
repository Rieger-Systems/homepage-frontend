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
import SideNavigation from "~/components/sections/philosophy/SideNavigation.vue";
import ClaimSection from "~/components/sections/philosophy/ClaimSection.vue";
import VisionMissionSection from "~/components/sections/philosophy/VisionMissionSection.vue";
import IdentitySection from "~/components/sections/philosophy/IdentitySection.vue";
import ValuesSection from "~/components/sections/philosophy/ValuesSection.vue";
import EthicsSection from "~/components/sections/philosophy/EthicsSection.vue";

import { useScrollSpy } from "~/composables/useScrollSpy";

// 📌 IDs der Abschnitte
const sectionIds = ["claim", "vision", "identity", "values", "ethics"];

// 🎯 Aktive Section über Scrolltracking ermitteln
const { activeId } = useScrollSpy(sectionIds, 120);
</script>
