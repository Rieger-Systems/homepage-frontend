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
const key = "projects.amarawell.prevalence";

const barColors = ["#406AFF", "#4BC9B6", "#FFBB6C", "#A68BFA", "#8E9BAE"];

// i18n-Labels robust holen:
const labels = t(`${key}.labels`, undefined, { returnObjects: true });
const legendPercent = t(`${key}.legend.percent`);
const title = t(`${key}.title`);
const axes = {
  x: t(`${key}.axes.x`),
  y: t(`${key}.axes.y`),
};

// Für Quellen
const sourceEntries = stats.sources.map((src) => ({
  name: t(`${key}.sources.${src.key}`),
  url: src.url,
}));

const fallbackLabels = {
  de: ["Deutschland", "Österreich", "Schweiz", "EU", "Weltweit"],
  en: ["Germany", "Austria", "Switzerland", "EU", "Worldwide"],
};

const chartData = {
  labels: Array.isArray(labels)
    ? labels
    : fallbackLabels[locale.value] || fallbackLabels.de,
  datasets: [
    {
      label: legendPercent,
      data: stats.percent,
      backgroundColor: barColors,
      borderRadius: 16,
      maxBarThickness: 48,
    },
  ],
};

const chartOptions = {
  responsive: true,
  aspectRatio: 1.45,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: title,
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
        label: (ctx) => {
          const abs = stats.data[ctx.dataIndex];
          const percent = stats.percent[ctx.dataIndex];
          return [
            `• ${ctx.label}: ${percent} ${t(`${key}.unitPercent`)}`,
            abs !== undefined
              ? `(${abs.toLocaleString(
                  locale.value === "de" ? "de-DE" : "en-US",
                  {
                    maximumFractionDigits: 2,
                  }
                )} ${t(`${key}.unit`)})`
              : "",
          ];
        },
      },
    },
    annotation: {
      annotations: {
        worldAvg: {
          type: "line",
          yMin: stats.percent[4], // Weltweit
          yMax: stats.percent[4],
          borderColor: "hsl(var(--a) / 0.7)",
          borderWidth: 2,
          borderDash: [7, 5],
          label: {
            enabled: true,
            content: t(`${key}.worldAvgLabel`),
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
        text: axes.y,
        color: "hsl(var(--bc) / 0.7)",
        font: { size: 15, weight: "bold", family: "'Inter', sans-serif" },
      },
      ticks: {
        color: "hsl(var(--bc) / 0.6)",
        font: { size: 13 },
        callback: (value) => value + " %",
        stepSize: 5,
      },
      grid: { color: "hsl(var(--b2))" },
    },
    x: {
      title: {
        display: true,
        text: axes.x,
        color: "hsl(var(--bc) / 0.7)",
        font: { size: 14, weight: "bold", family: "'Inter', sans-serif" },
      },
      ticks: {
        color: "hsl(var(--bc) / 0.9)",
        font: { size: 14, weight: "bold" },
      },
      grid: { display: false },
    },
  },
};
</script>

<template>
  <div
    class="w-full mx-auto px-7 py-10"
    style="box-shadow: 0 8px 36px 0 rgba(40, 52, 61, 0.07)"
  >
    <div class="mb-8">
      <client-only>
        <Bar :data="chartData" :options="chartOptions" />
      </client-only>
    </div>
    <div class="space-y-2 text-base">
      <p class="text-base-content text-center mb-3 leading-relaxed">
        <span class="font-semibold">{{ t(`${key}.explanationLabel`) }}</span>
        {{ t(`${key}.explanation`) }}
      </p>
      <div
        v-if="t(`${key}.note`)"
        class="bg-warning/10 border-l-4 border-warning text-warning px-5 py-2 rounded mb-1 text-xs text-center italic"
      >
        {{ t(`${key}.noteLabel`) }} {{ t(`${key}.note`) }}
      </div>
      <div class="text-center text-base-content/80 text-sm">
        <span class="font-semibold">{{ t(`${key}.sourcesLabel`) }}</span>
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
