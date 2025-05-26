<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import stats from "~/data/statistics/amarawell/financialImpact.js";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const { t, locale } = useI18n();
const fiKey = "projects.amarawell.financialImpact";

// Farben
const barColors = ["#406AFF", "#4BC9B6", "#FFBB6C", "#A68BFA", "#8E9BAE"];
const savingsColors = ["#1e40af", "#0f766e", "#b45309", "#6d28d9", "#475569"];

// Computed Chart Data
const chartData = computed(() => {
  let labelsRaw = t(`${fiKey}.labels`, { returnObjects: true });
  // Fallback: Wenn es kein Array ist (sondern z. B. ein String), Default-Labels nutzen
  const labels =
    Array.isArray(labelsRaw) && labelsRaw.every((l) => typeof l === "string")
      ? (labelsRaw as string[])
      : ["Deutschland", "Österreich", "Schweiz", "EU", "Weltweit"];
  return {
    labels,
    datasets: [
      {
        label: t(`${fiKey}.legend.cost`) ?? "Kosten pro Kopf/Jahr (€)",
        data: stats.data,
        backgroundColor: barColors,
        borderRadius: 16,
        maxBarThickness: 48,
      },
      {
        label:
          t(`${fiKey}.legend.savings`) ?? "Potentielle Einsparungen (ca. 10%)",
        data: stats.data.map((val: number) => +(val * 0.1).toFixed(2)),
        backgroundColor: savingsColors,
        borderRadius: 16,
        maxBarThickness: 48,
      },
    ],
  };
});

const chartOptions = computed(
  () =>
    ({
      responsive: true,
      aspectRatio: 1.45,
      plugins: {
        legend: {
          position: "top" as const, // <-- das behebt das Problem!
          labels: {
            color: "hsl(var(--bc))",
            font: { size: 14, weight: "bold" },
          },
        },
        title: {
          display: true,
          text: t(`${fiKey}.title`),
          color: "hsl(var(--bc))",
          font: {
            size: 22,
            weight: "bold",
            family: "'Inter', 'Segoe UI', sans-serif",
          },
          padding: { top: 18, bottom: 16 },
        },
        tooltip: {
          backgroundColor: "hsl(var(--b3))",
          titleFont: {
            family: "'Inter', 'Segoe UI', sans-serif",
            size: 15,
            weight: "bold",
          },
          bodyFont: { family: "'Inter', 'Segoe UI', sans-serif", size: 14 },
          borderColor: "hsl(var(--p))",
          borderWidth: 1,
          caretSize: 7,
          padding: 16,
          callbacks: {
            label: (ctx: any) =>
              `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString(
                locale.value === "de" ? "de-DE" : "en-US",
                { maximumFractionDigits: 2 }
              )} €`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: Math.max(...stats.data) * 1.15,
          title: {
            display: true,
            text: t(`${fiKey}.axes.y`),
            color: "hsl(var(--bc) / 0.7)",
            font: { size: 15, weight: "bold", family: "'Inter', 'sans-serif'" },
          },
          ticks: {
            color: "hsl(var(--bc) / 0.6)",
            font: { size: 13 },
            callback: (value: number) => value + " €",
            stepSize: 500,
          },
          grid: { color: "hsl(var(--b2))" },
        },
        x: {
          title: {
            display: true,
            text: t(`${fiKey}.axes.x`),
            color: "hsl(var(--bc) / 0.7)",
            font: { size: 14, weight: "bold", family: "'Inter', 'sans-serif'" },
          },
          ticks: {
            color: "hsl(var(--bc) / 0.9)",
            font: { size: 14, weight: "bold" },
          },
          grid: { display: false },
        },
      },
    } as import("chart.js").ChartOptions<"bar">)
);

// Quellen aus i18n holen
const sourceEntries = computed(() =>
  stats.sources.map((src) => ({
    name: t(`${fiKey}.sources.${src.key}`),
    url: src.url,
  }))
);

const explanationLabel = computed(
  () => t(`${fiKey}.explanationLabel`) ?? "Erklärung:"
);
const noteLabel = computed(() => t(`${fiKey}.noteLabel`) ?? "Hinweis:");
const sourcesLabel = computed(() => t(`${fiKey}.sourcesLabel`) ?? "Quellen:");
</script>

<template>
  <div
    class="w-full mx-auto px-8 py-10"
    style="box-shadow: 0 8px 36px 0 rgba(40, 52, 61, 0.07)"
  >
    <NuxtTransition name="fade" mode="out-in" appear>
      <client-only>
        <!-- Unbedingt .value im Template -->
        <Bar :data="chartData" :options="chartOptions" />
      </client-only>
    </NuxtTransition>

    <div class="space-y-4 text-base mt-8">
      <p class="text-base-content text-center leading-relaxed">
        <span class="font-semibold">{{ explanationLabel }}</span>
        {{ t(`${fiKey}.explanation`) }}
      </p>

      <div
        v-if="t(`${fiKey}.note`)"
        class="bg-warning/10 border-l-4 border-warning text-warning px-6 py-3 rounded mb-2 text-sm text-center italic font-semibold select-none"
      >
        {{ noteLabel }} {{ t(`${fiKey}.note`) }}
      </div>

      <div class="text-center text-base-content/80 text-sm">
        <span class="font-semibold">{{ sourcesLabel }}</span>
        <span v-for="(src, idx) in sourceEntries" :key="idx">
          <a
            :href="src.url"
            target="_blank"
            rel="noopener"
            class="underline hover:text-primary transition"
            >{{ src.name }}</a
          >
          <span v-if="idx < sourceEntries.length - 1">| </span>
        </span>
      </div>
    </div>
  </div>
</template>
