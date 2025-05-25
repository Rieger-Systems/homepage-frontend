<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import stats from "~/data/statistics/amarawell/financialImpact.js";
import type { ChartOptions } from "chart.js";
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

// Beibehalten der ursprünglichen Balkenfarben, da sie als Datenfarben
// oft unabhängig vom Theme gewählt werden und gut kontrastieren können.
const barColors = ["#406AFF", "#4BC9B6", "#FFBB6C", "#A68BFA", "#8E9BAE"]; // Leuchtende Farben

const savingsColors = ["#1e40af", "#0f766e", "#b45309", "#6d28d9", "#475569"]; // Dunklere Versionen der Hauptfarben

const chartData = {
  labels: stats.labels,
  datasets: [
    {
      label: "Kosten pro Kopf/Jahr (€)",
      data: stats.data,
      backgroundColor: barColors,
      borderRadius: 16,
      maxBarThickness: 48,
    },
    {
      label: "Potentielle Einsparungen durch AmaraWell (ca. 10%)",
      data: stats.data.map((val) => +(val * 0.1).toFixed(2)),
      backgroundColor: savingsColors, // Dunklere Farben für Einsparungen
      borderRadius: 16,
      maxBarThickness: 48,
    },
  ],
};

const chartOptions: ChartOptions<"bar"> = {
  responsive: true,
  aspectRatio: 1.45,
  plugins: {
    legend: {
      position: "top",
      labels: {
        // Textfarbe der Legende passt sich dem Theme an
        color: "hsl(var(--bc))", // base-content color
        font: { size: 14, weight: "bold" },
      },
    },
    title: {
      display: true,
      text: stats.title,
      // Titeltextfarbe passt sich dem Theme an
      color: "hsl(var(--bc))", // base-content color
      font: {
        size: 22,
        weight: "bold",
        family: "'Inter', 'Segoe UI', sans-serif",
      },
      padding: { top: 18, bottom: 16 },
    },
    tooltip: {
      // Hintergrund des Tooltips, dunkler als base-100 für Kontrast
      backgroundColor: "hsl(var(--b3))", // A darker base color
      titleFont: {
        family: "'Inter', 'Segoe UI', sans-serif",
        size: 15,
        weight: "bold",
      },
      // Textfarbe des Tooltips, hell im Dark Mode, dunkel im Light Mode
      bodyFont: { family: "'Inter', 'Segoe UI', sans-serif", size: 14 },
      // Randfarbe des Tooltips, z.B. Primary oder Accent Color
      borderColor: "hsl(var(--p))", // Primary color for border
      borderWidth: 1,
      caretSize: 7,
      padding: 16,
      callbacks: {
        label: (ctx) =>
          `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString("de-DE", {
            maximumFractionDigits: 2,
          })} €`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: Math.max(...stats.data) * 1.15, // Dynamischer Max-Wert
      title: {
        display: true,
        text: "Kosten pro Jahr (€)",
        // Achsentitel-Farbe passt sich dem Theme an
        color: "hsl(var(--bc) / 0.7)", // base-content, leicht transparenter
        font: { size: 15, weight: "bold", family: "'Inter', 'sans-serif'" },
      },
      ticks: {
        // Achsen-Ticks-Farbe passt sich dem Theme an
        color: "hsl(var(--bc) / 0.6)", // base-content, noch transparenter
        font: { size: 13 },
        callback: (value) => value + " €",
        stepSize: 500,
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
        font: { size: 14, weight: "bold", family: "'Inter', 'sans-serif'" },
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
    class="w-full mx-auto px-8 py-10"
    style="box-shadow: 0 8px 36px 0 rgba(40, 52, 61, 0.07)"
  >
    <NuxtTransition name="fade" mode="out-in" appear>
      <client-only>
        <Bar :data="chartData" :options="chartOptions" />
      </client-only>
    </NuxtTransition>

    <div class="space-y-4 text-base mt-8">
      <p class="text-base-content text-center leading-relaxed">
        <span class="font-semibold">Erklärung:</span> {{ stats.explanation }}
      </p>

      <div
        v-if="stats.note"
        class="bg-warning/10 border-l-4 border-warning text-warning px-6 py-3 rounded mb-2 text-sm text-center italic font-semibold select-none"
      >
        Hinweis: Die Kosten sind Durchschnittswerte pro Kopf aller Einwohner
        inklusive gesunder Personen. Die individuellen Kosten Betroffener sind
        deutlich höher.
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
    </div>
  </div>
</template>

<style scoped>
/* Beibehalten für NuxtTransition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
