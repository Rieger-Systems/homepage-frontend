<template>
  <div class="max-w-5xl mx-auto py-20 px-2">
    <div class="mb-12 text-center">
      <h1
        class="text-4xl lg:text-5xl font-extrabold text-primary mb-2 tracking-tight"
      >
        {{ t("projects.amarawell.statistics.headline") }}
      </h1>
      <p class="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto mb-1">
        {{ t("projects.amarawell.statistics.intro") }}
      </p>
    </div>
    <div class="flex flex-col gap-12">
      <PrevalencePercentageChart />
      <FinancialImpact />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import FinancialImpact from "~/components/sections/projects/amarawell/FinancialImpact.vue";
import PrevalencePercentageChart from "~/components/sections/projects/amarawell/PrevalencePercentageChart.vue";

const { t } = useI18n();
</script>
