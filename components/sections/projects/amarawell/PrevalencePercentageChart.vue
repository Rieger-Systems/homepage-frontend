<script setup>
import { Bar } from "vue-chartjs";
import stats from "~/data/statistics/amarawell/prevalence.js";
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

// Beibehalten der ursprünglichen Balkenfarben.
// Diese sollten für die Datenvisualisierung selbst kontrastreich genug sein
// und können oft unabhängig vom Theme bleiben, solange der Hintergrund passt.
const barColors = [
  "#406AFF", // DE: elegantes Indigo
  "#4BC9B6", // AT: modern Türkis
  "#FFBB6C", // CH: edles Apricot
  "#A68BFA", // EU: zartes Lila
  "#8E9BAE", // Weltweit: cooles Blau-Grau
];

const chartData = {
  labels: stats.labels,
  datasets: [
    {
      label: "12-Monats-Prävalenz (%)",
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
    legend: { display: false }, // Legende bleibt ausgeblendet
    title: {
      display: true,
      text: stats.title,
      // Titeltextfarbe passt sich dem Theme an
      color: "hsl(var(--bc))", // base-content color from DaisyUI
      font: {
        size: 22,
        weight: "bold",
        family: "'Inter', 'Segoe UI', sans-serif",
      },
      padding: { top: 18, bottom: 16 },
    },
    tooltip: {
      // Hintergrund des Tooltips, dunkler als base-100 für Kontrast
      backgroundColor: "hsl(var(--b3))", // A darker base color from DaisyUI
      titleFont: {
        family: "'Inter', 'Segoe UI', sans-serif",
        size: 15,
        weight: "bold",
      },
      // Textfarbe des Tooltips, passt sich automatisch an den dunklen Tooltip-Hintergrund an
      bodyFont: { family: "'Inter', 'Segoe UI', sans-serif", size: 14 },
      // Randfarbe des Tooltips, z.B. Primary oder Accent Color
      borderColor: "hsl(var(--p))", // Primary color from DaisyUI for border
      borderWidth: 1,
      caretSize: 7,
      padding: 16,
      callbacks: {
        label: (ctx) => {
          const abs = stats.data[ctx.dataIndex];
          const percent = stats.percent[ctx.dataIndex];
          return [
            `• ${ctx.label}: ${percent} %`,
            abs !== undefined
              ? `(${abs.toLocaleString("de-DE", {
                  maximumFractionDigits: 2,
                })} Mio.)`
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
          // Linienfarbe passt sich dem Theme an, z.B. eine gedämpfte Akzentfarbe
          borderColor: "hsl(var(--a) / 0.7)", // Accent color with some transparency
          borderWidth: 2,
          borderDash: [7, 5],
          label: {
            enabled: true,
            content: "Weltweiter Durchschnitt",
            position: "start",
            // Hintergrund des Labels, dunkler als base-100
            backgroundColor: "hsl(var(--b3))",
            // Textfarbe des Labels, passt sich an den dunklen Hintergrund an
            color: "hsl(var(--ac))", // Accent content color
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
        text: "Betroffene pro Jahr (% der Bevölkerung)",
        // Achsentitel-Farbe passt sich dem Theme an
        color: "hsl(var(--bc) / 0.7)", // base-content, leicht transparenter
        font: { size: 15, weight: "bold", family: "'Inter', sans-serif" },
      },
      ticks: {
        // Achsen-Ticks-Farbe passt sich dem Theme an
        color: "hsl(var(--bc) / 0.6)", // base-content, noch transparenter
        font: { size: 13 },
        callback: (value) => value + " %",
        stepSize: 5,
      },
      grid: {
        // Gitterlinien-Farbe passt sich dem Theme an, sehr dezent
        color: "hsl(var(--b2))", // A lighter base color for subtle grids
      },
    },
    x: {
      title: {
        display: true,
        text: "Region / Land",
        // Achsentitel-Farbe passt sich dem Theme an
        color: "hsl(var(--bc) / 0.7)",
        font: { size: 14, weight: "bold", family: "'Inter', sans-serif" },
      },
      ticks: {
        // Achsen-Ticks-Farbe passt sich dem Theme an
        color: "hsl(var(--bc) / 0.9)", // slightly stronger than grid
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
        <span class="font-semibold">Erklärung:</span>
        {{ stats.explanation }}
      </p>
      <div
        v-if="stats.note"
        class="bg-warning/10 border-l-4 border-warning text-warning px-5 py-2 rounded mb-1 text-xs text-center italic"
      >
        {{ stats.note }}
      </div>
      <div class="text-center text-base-content/80 text-sm">
        <span class="font-semibold">Quellen:</span>
        <span v-for="(src, idx) in stats.sources" :key="idx">
          <a
            :href="src.url"
            target="_blank"
            rel="noopener"
            class="underline hover:text-primary transition"
            >{{ src.name }}</a
          >
          <span v-if="idx < stats.sources.length - 1">| </span>
        </span>
      </div>
      <div
        v-if="stats.extraSources"
        class="text-center mt-1 text-base-content/80 text-sm"
      >
        <span class="font-semibold">Weitere Daten:</span>
        <span v-for="(src, idx) in stats.extraSources" :key="'ex' + idx">
          <a
            :href="src.url"
            target="_blank"
            rel="noopener"
            class="underline hover:text-primary transition"
            >{{ src.name }}</a
          >
          <span v-if="idx < stats.extraSources.length - 1">| </span>
        </span>
      </div>
    </div>
  </div>
</template>
