<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import { useI18n } from "vue-i18n";
import { computed, ref, onMounted, onUnmounted } from "vue"; // 'ref', 'onMounted', 'onUnmounted' hinzugefügt
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

// annotationPlugin ist in der ersten Statistik, aber nicht in dieser verwendet.
// Wenn du ihn hier nicht benötigst, lassen wir ihn weg.
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

// Reactive property to check if it's a mobile view
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

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

// Computed Chart Options
const chartOptions = computed(
  () =>
    ({
      responsive: true,
      maintainAspectRatio: false, // Geändert von aspectRatio zu maintainAspectRatio: false
      plugins: {
        legend: {
          display: true, // Legend anzeigen
          position: "top" as const,
          labels: {
            color: "white",
            font: { size: isMobile.value ? 12 : 14, weight: "bold" }, // Schriftgröße an mobile anpassen
          },
        },
        title: {
          display: true,
          text: t(`${fiKey}.title`),
          color: "white",
          font: {
            size: isMobile.value ? 18 : 22, // Schriftgröße an mobile anpassen
            weight: "bold",
            family: "'Inter', 'Segoe UI', sans-serif",
          },
          padding: isMobile.value
            ? { top: 30, bottom: 16 } // Höherer Top-Padding auf Handy, wie bei erster Statistik
            : { top: 18, bottom: 16 },
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
            color: "white",
            font: {
              size: isMobile.value ? 10 : 15,
              weight: "bold",
              family: "'Inter', sans-serif",
            }, // Schriftgröße an mobile anpassen
            padding: { top: 0, bottom: 0, left: 0, right: 0 },
          },
          ticks: {
            color: "white",
            font: { size: isMobile.value ? 10 : 13 }, // Schriftgröße an mobile anpassen
            callback: (value: number) =>
              value.toLocaleString(locale.value === "de" ? "de-DE" : "en-US") +
              " €", // Zahlen formatieren
            stepSize: 500, // Beibehalten
            padding: isMobile.value ? 25 : 10, // Padding wie bei erster Statistik für mobile
          },
          grid: { color: "hsl(var(--b2))" },
        },
        x: {
          title: {
            display: true,
            text: t(`${fiKey}.axes.x`),
            color: "white",
            font: {
              size: isMobile.value ? 11 : 14,
              weight: "bold",
              family: "'Inter', sans-serif",
            }, // Schriftgröße an mobile anpassen
          },
          ticks: {
            color: "white",
            font: { size: isMobile.value ? 10 : 14, weight: "bold" }, // Schriftgröße an mobile anpassen
            maxRotation: isMobile.value ? 45 : 0, // Rotation für mobile
            minRotation: isMobile.value ? 45 : 0, // Rotation für mobile
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
    class="chart-container bg-base-100 rounded-lg overflow-hidden"
    style="box-shadow: 0 8px 36px 0 rgba(40, 52, 61, 0.07)"
  >
    <div
      class="chart-responsive-wrapper"
      :class="{ 'mobile-padding': isMobile }"
    >
      <client-only>
        <Bar :data="chartData" :options="chartOptions" />
      </client-only>
    </div>

    <div class="px-7 pt-4 pb-7 text-base space-y-3">
      <p class="text-base-content text-center leading-relaxed">
        <span class="font-bold text-lg block mb-1">{{ explanationLabel }}</span>
        {{ t(`${fiKey}.explanation`) }}
      </p>

      <div
        v-if="t(`${fiKey}.note`)"
        class="bg-warning/10 border-l-4 border-warning text-warning px-5 py-3 rounded-md text-sm text-center italic"
      >
        <span class="font-semibold">{{ noteLabel }}</span>
        {{ t(`${fiKey}.note`) }}
      </div>

      <div class="text-center text-base-content/70 text-sm pt-2">
        <span class="font-semibold">{{ sourcesLabel }}</span>
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
.chart-container {
  max-width: 900px;
  margin: 2rem auto;
  width: 100%;
}
.chart-responsive-wrapper {
  width: 100%;
  height: 340px; /* Desktop default */
  padding: 1.75rem; /* Equivalent to p-7 in Tailwind */
}
@media (max-width: 600px) {
  .chart-container {
    /* Padding-top kann hier gesetzt werden, um Abstand zum oberen Rand des Gesamtcontainers zu schaffen */
    /* Der Wert 1.6rem entspricht ca. 25.6px - passt zu top: 30px im Chart-Titel */
    padding-top: 1.6rem !important;
    padding-bottom: 0 !important;
  }
  .chart-responsive-wrapper {
    height: 250px; /* Mobile Höhe wie bei der ersten Statistik */
    padding: 0 !important; /* Wichtig: Gesamtes Padding auf 0 setzen, damit Chart.js den verfügbaren Platz optimal nutzen kann */
  }
}
</style>
