<script setup lang="ts">
import { useLocaleStore } from "~/stores/locale";

const localeStore = useLocaleStore();

function switchToEnglish() {
  localeStore.setLocale("en");
}
</script>

<template>
  <div>
    <p>Aktuelle Sprache: {{ localeStore.locale }}</p>
    <button
      @click="switchToEnglish"
      class="mt-4 p-2 bg-primary-500 text-white rounded"
    >
      Switch to English
    </button>
  </div>
</template>
