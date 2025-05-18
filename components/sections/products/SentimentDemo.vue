<script setup lang="ts">
import { ref } from "vue";
import {
  analyzeSentiment,
  type SentimentResult,
} from "~/utils/SentimentAnalyzer";
import { SparklesIcon, ArrowDownCircleIcon } from "@heroicons/vue/24/solid";

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
  <div class="py-8">
    <!-- Titel & Beta-Badge -->
    <h2
      class="text-2xl font-semibold text-primary mb-2 text-center flex items-center justify-center gap-2"
    >
      <SparklesIcon class="w-7 h-7 text-warning" />
      Live-Demo: Stimmungsanalyse
      <span
        class="badge badge-warning badge-lg ml-3 flex items-center gap-1 text-warning-content text-xs px-3 py-2 rounded"
      >
        Beta
      </span>
    </h2>

    <!-- Warnhinweis -->
    <div class="max-w-xl mx-auto mb-4">
      <div
        class="alert alert-warning flex items-center gap-3 shadow-lg rounded-lg mb-3"
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
          <b>Dieses Feature befindet sich noch in Entwicklung.</b>
          <div class="text-xs opacity-80">
            Die Analyse simuliert beispielhaft eine KI-Auswertung. Das finale
            Feature wird umfangreicher und genauer!
          </div>
        </div>
      </div>

      <!-- Test-Sätze -->
      <div class="flex items-center justify-center gap-2 mb-2">
        <ArrowDownCircleIcon class="w-5 h-5 text-primary" />
        <span class="text-sm font-medium text-base-content/80"
          >Beispielsätze testen:</span
        >
      </div>
      <div class="grid gap-2 mb-4">
        <button
          v-for="(ex, idx) in examples"
          :key="idx"
          @click="loadExample(ex.text)"
          class="transition bg-base-100 border border-base-300 hover:bg-primary hover:text-primary-content text-base-content text-left px-4 py-2 rounded-md shadow-sm flex flex-col cursor-pointer group"
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
      class="bg-yellow-50 dark:bg-yellow-900 shadow-lg rounded-xl p-6 max-w-xl mx-auto flex flex-col items-center border-2 border-dashed border-warning"
    >
      <label class="mb-2 font-semibold block"
        >Text eingeben und auswerten lassen:</label
      >
      <textarea
        v-model="demoText"
        class="textarea textarea-bordered w-full mb-4"
        rows="3"
        placeholder="Schreibe einen Satz..."
      ></textarea>
      <button
        class="btn btn-primary mb-3"
        @click="analyze"
        :disabled="demoLoading"
      >
        {{ demoLoading ? "Analysiere..." : "Analyse starten" }}
      </button>
      <div
        v-if="demoResult"
        class="alert shadow-lg mb-2 w-full"
        :class="{
          'alert-success': demoResult.label === 'Positiv',
          'alert-error': demoResult.label === 'Negativ',
          'alert-info': demoResult.label === 'Neutral',
          'alert-warning': demoResult.label === 'Unsicher',
        }"
      >
        <span>
          <b>{{ demoResult.label }} {{ demoResult.emoji }}</b>
          <span v-if="demoResult.score !== 0" class="ml-2"
            >(Score: {{ demoResult.score > 0 ? "+" : ""
            }}{{ demoResult.score }})</span
          >
          <br />
          <span class="text-xs opacity-80">{{ demoResult.detail }}</span>
        </span>
      </div>
      <div class="text-xs text-base-content/60 italic mt-2">
        Demo läuft komplett im Browser. Keine Daten werden gespeichert.
      </div>
    </div>
  </div>
</template>
