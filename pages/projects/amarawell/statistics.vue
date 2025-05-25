<script lang="ts" setup>
import PrevalenceChart from "~/components/sections/projects/amarawell/PrevalencePercentageChart.vue";
import { useLocalePath } from "#i18n";
import FinancialImpact from "~/components/sections/projects/amarawell/FinancialImpact.vue";

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div class="bg-base-300">
    <div class="max-w-5xl mx-auto pt-20 pb-12 px-4">
      <div class="mb-6">
        <NuxtLink
          :to="localePath('/projects/amarawell')"
          class="btn btn-outline btn-primary btn-sm"
        >
          ← Zurück zu AmaraWell
        </NuxtLink>
      </div>

      <section
        class="bg-base-100 rounded-lg shadow-xl p-6 md:p-10 mb-8 border border-base-200"
      >
        <PrevalenceChart />
      </section>
      <section
        class="bg-base-100 rounded-lg shadow-xl p-6 md:p-10 mb-8 border border-base-200"
      >
        <FinancialImpact />
      </section>
    </div>
  </div>
</template>
