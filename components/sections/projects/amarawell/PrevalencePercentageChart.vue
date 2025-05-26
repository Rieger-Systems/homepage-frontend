<script setup>
import { Bar } from "vue-chartjs";
import stats from "~/data/statistics/amarawell/prevalence.js";
import { useI18n } from "vue-i18n";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

// Register Chart.js components globally for efficiency
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  annotationPlugin
);

const { t, locale } = useI18n();
const i18nKey = "projects.amarawell.prevalence"; // Renamed for clarity

// --- Chart Configuration Variables ---
const barColors = ["#406AFF", "#4BC9B6", "#FFBB6C", "#A68BFA", "#8E9BAE"];

// Use computed properties for i18n labels to ensure reactivity if locale changes
const chartLabels = computed(() => {
  const labels = t(`${i18nKey}.labels`, undefined, { returnObjects: true });
  // Provide robust fallback labels
  const fallbackLabels = {
    de: ["Deutschland", "Österreich", "Schweiz", "EU", "Weltweit"],
    en: ["Germany", "Austria", "Switzerland", "EU", "Worldwide"],
  };
  return Array.isArray(labels)
    ? labels
    : fallbackLabels[locale.value] || fallbackLabels.de;
});

const chartTitle = computed(() => t(`${i18nKey}.title`));
const legendPercentLabel = computed(() => t(`${i18nKey}.legend.percent`));
const xAxisLabel = computed(() => t(`${i18nKey}.axes.x`));
const yAxisLabel = computed(() => t(`${i18nKey}.axes.y`));
const worldAvgLabel = computed(() => t(`${i18nKey}.worldAvgLabel`));
const unitLabel = computed(() => t(`${i18nKey}.unit`));
const unitPercentLabel = computed(() => t(`${i18nKey}.unitPercent`));

// Source entries for dynamic rendering
const sourceEntries = computed(() =>
  stats.sources.map((src) => ({
    name: t(`${i18nKey}.sources.${src.key}`),
    url: src.url,
  }))
);

const chartData = computed(() => ({
  labels: chartLabels.value,
  datasets: [
    {
      label: legendPercentLabel.value,
      data: stats.percent,
      backgroundColor: barColors,
      borderRadius: 16,
      maxBarThickness: 48,
    },
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  aspectRatio: 1.45,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: chartTitle.value,
      color: "white",
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
        label: (ctx) => {
          const abs = stats.data[ctx.dataIndex];
          const percent = stats.percent[ctx.dataIndex];
          const formattedAbs =
            abs !== undefined
              ? `(${abs.toLocaleString(
                  locale.value === "de" ? "de-DE" : "en-US",
                  { maximumFractionDigits: 2 }
                )} ${unitLabel.value})`
              : "";
          return [
            `• ${ctx.label}: ${percent} ${unitPercentLabel.value}`,
            formattedAbs,
          ];
        },
      },
    },
    annotation: {
      annotations: {
        worldAvg: {
          type: "line",
          yMin: stats.percent[4], // Index for "Weltweit"
          yMax: stats.percent[4],
          borderColor: "white",
          borderWidth: 2,
          borderDash: [7, 5],
          label: {
            enabled: true,
            content: worldAvgLabel.value,
            position: "start",
            backgroundColor: "hsl(var(--b3))",
            color: "hsl(var(--ac))",
            font: { size: 13, weight: "bold" },
            padding: 7,
            yAdjust: -13,
            xAdjust: 12,
          },
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 35,
      title: {
        display: true,
        text: yAxisLabel.value,
        color: "white",
        font: { size: 15, weight: "bold", family: "'Inter', sans-serif" },
      },
      ticks: {
        color: "white",
        font: { size: 13 },
        callback: (value) => value + " %",
        stepSize: 5,
      },
      grid: { color: "hsl(var(--b2))" },
    },
    x: {
      title: {
        display: true,
        text: xAxisLabel.value,
        color: "white",
        font: { size: 14, weight: "bold", family: "'Inter', sans-serif" },
      },
      ticks: {
        color: "white",
        font: { size: 14, weight: "bold" },
      },
      grid: { display: false },
    },
  },
}));
</script>
<template>
  <div
    class="chart-container bg-base-100 rounded-lg overflow-hidden"
    style="box-shadow: 0 8px 36px 0 rgba(40, 52, 61, 0.07)"
  >
    <div class="p-7">
      <client-only>
        <Bar :data="chartData" :options="chartOptions" />
      </client-only>
    </div>

    <div class="px-7 pt-4 pb-7 text-base space-y-3">
      <p class="text-base-content text-center leading-relaxed">
        <span class="font-bold text-lg block mb-1">{{
          t(`${i18nKey}.explanationLabel`)
        }}</span>
        {{ t(`${i18nKey}.explanation`) }}
      </p>

      <div
        v-if="t(`${i18nKey}.note`)"
        class="bg-warning/10 border-l-4 border-warning text-warning px-5 py-3 rounded-md text-sm text-center italic"
      >
        <span class="font-semibold">{{ t(`${i18nKey}.noteLabel`) }}</span>
        {{ t(`${i18nKey}.note`) }}
      </div>

      <div class="text-center text-base-content/70 text-sm pt-2">
        <span class="font-semibold">{{ t(`${i18nKey}.sourcesLabel`) }}: </span>
        <span v-for="(src, idx) in sourceEntries" :key="idx">
          <a
            :href="src.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-primary transition-colors duration-200"
            >{{ src.name }}</a
          >
          <span v-if="idx < sourceEntries.length - 1"> | </span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can add component-specific styles here if needed */
.chart-container {
  max-width: 900px; /* Limit max width for better readability on large screens */
  margin: 2rem auto; /* Center the container with some margin */
}
</style>
