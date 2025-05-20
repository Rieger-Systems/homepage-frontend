<script setup lang="ts">
import { ref } from "vue";
import {
  analyzeSentiment,
  type SentimentResult,
} from "~/utils/SentimentAnalyzer";
import {
  SparklesIcon,
  ArrowDownCircleIcon,
  LanguageIcon,
} from "@heroicons/vue/24/solid";

const demoText = ref("");
const demoResult = ref<SentimentResult | null>(null);
const demoLoading = ref(false);

function analyze() {
  demoLoading.value = true;
  setTimeout(() => {
    demoResult.value = analyzeSentiment(demoText.value);
    demoLoading.value = false;
  }, 400);
}

const examples = [
  {
    text: "Nicht schlecht! Ich bin positiv überrascht.",
    label: "Positiv",
  },
  {
    text: "Das war ja mal wieder richtig super… NICHT! Aber immerhin wurde das Problem irgendwann gelöst.",
    label: "Negativ (Sarkasmus)",
  },
  {
    text: "Erst war ich kritisch, aber mittlerweile bin ich richtig zufrieden.",
    label: "Positiv / Wandel",
  },
  {
    text: "Die App sieht schön aus, aber die ständigen Fehler nerven extrem und ich bin enttäuscht.",
    label: "Negativ / Unsicher",
  },
  {
    text: "Ich kann mich über die Leistung nicht beschweren, aber begeistert bin ich auch nicht.",
    label: "Neutral / Unsicher",
  },
];
function loadExample(txt: string) {
  demoText.value = txt;
  demoResult.value = null;
}
</script>

<template>
  <div class="py-10">
    <!-- Titel & Beta-Badge -->
    <div class="flex flex-col items-center mb-4">
      <div class="flex items-center gap-3 mb-2">
        <SparklesIcon class="w-8 h-8 text-warning animate-pulse" />
        <h2 class="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          Live-Demo: Stimmungsanalyse
        </h2>
        <span
          class="badge badge-warning badge-lg ml-2 flex items-center gap-1 text-warning-content text-xs px-3 py-2 rounded uppercase"
        >
          Beta
        </span>
      </div>
      <div
        class="flex items-center gap-2 text-base-content/70 mt-1 text-sm sm:text-base"
      >
        <LanguageIcon class="w-5 h-5 text-primary" />
        <span>
          <b>Aktuell nur auf Deutsch</b> – Englisch & weitere Sprachen folgen.
        </span>
      </div>
    </div>

    <!-- Warnhinweis -->
    <div class="max-w-xl mx-auto mb-6">
      <div
        class="alert alert-warning flex items-center gap-3 shadow-md rounded-lg mb-4 border-2 border-warning/60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-warning"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1 4h.01M12 8h.01"
          />
        </svg>
        <div>
          <span class="font-semibold"
            >Dieses Feature befindet sich noch in Entwicklung.</span
          >
          <div class="text-xs opacity-80 leading-snug mt-0.5">
            Die Analyse simuliert beispielhaft eine KI-Auswertung. Das finale
            System erkennt bald auch Englisch und weitere Sprachen – und wird
            noch viel genauer!
          </div>
        </div>
      </div>

      <!-- Test-Sätze -->
      <div class="flex items-center justify-center gap-2 mb-2">
        <ArrowDownCircleIcon class="w-5 h-5 text-primary" />
        <span class="text-sm font-medium text-base-content/80"
          >Beispielsätze ausprobieren:</span
        >
      </div>
      <div class="grid gap-2 mb-5 grid-cols-1 sm:grid-cols-2">
        <button
          v-for="(ex, idx) in examples"
          :key="idx"
          @click="loadExample(ex.text)"
          class="transition bg-base-100 border border-base-300/80 hover:bg-primary hover:text-primary-content text-base-content text-left px-4 py-2 rounded-md shadow-sm flex flex-col cursor-pointer group focus:ring-2 focus:ring-primary/40"
        >
          <span class="text-sm leading-snug group-hover:font-semibold">{{
            ex.text
          }}</span>
          <span class="text-xs text-base-content/50 italic mt-1">{{
            ex.label
          }}</span>
        </button>
      </div>
    </div>

    <!-- Demo-Bereich -->
    <div
      class="bg-yellow-50 dark:bg-yellow-900/80 shadow-xl rounded-2xl p-7 max-w-xl mx-auto flex flex-col items-center border-2 border-dashed border-warning/80"
    >
      <label
        class="mb-2 font-semibold block text-warning tracking-wide text-base"
        >Dein Text – sofort analysiert:</label
      >
      <textarea
        v-model="demoText"
        class="textarea textarea-bordered w-full mb-4 focus:outline-primary/80 resize-none text-base shadow-inner"
        rows="3"
        maxlength="300"
        placeholder="Schreibe einen Satz, z. B. „Ich bin zufrieden, aber…“"
        @keydown.enter.exact.prevent="analyze"
      ></textarea>
      <button
        class="btn btn-primary mb-3 w-full font-semibold text-base tracking-wide"
        @click="analyze"
        :disabled="demoLoading || !demoText.trim()"
      >
        {{ demoLoading ? "Analysiere..." : "Analyse starten" }}
      </button>
      <transition name="fade">
        <div
          v-if="demoResult"
          class="alert shadow-lg mb-2 w-full font-semibold text-base"
          :class="{
            'alert-success': demoResult.label === 'Positiv',
            'alert-error': demoResult.label === 'Negativ',
            'alert-info': demoResult.label === 'Neutral',
            'alert-warning': demoResult.label === 'Unsicher',
          }"
        >
          <span>
            <b>{{ demoResult.label }} {{ demoResult.emoji }}</b>
            <span
              v-if="demoResult.score !== 0"
              class="ml-2 font-mono font-normal"
              >(Score: {{ demoResult.score > 0 ? "+" : ""
              }}{{ demoResult.score }})</span
            >
            <br />
            <span class="text-xs opacity-80 font-normal">{{
              demoResult.detail
            }}</span>
          </span>
        </div>
      </transition>
      <div class="text-xs text-base-content/60 italic mt-3">
        Die Demo läuft komplett im Browser – es werden
        <b>keine Daten übertragen oder gespeichert</b>.
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
