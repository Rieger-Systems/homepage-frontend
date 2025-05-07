<script setup lang="ts">
import type { NuxtError } from "#app";
import { computed } from "vue";

// Fehlerobjekt abrufen
const props = defineProps<{ error: NuxtError }>();

// Dynamische Fehlerinformationen
const statusCode = computed(() => props.error?.statusCode || 500);
const errorTitle = computed(() =>
  statusCode.value === 404 ? "404" : `Fehler ${statusCode.value}`
);
const errorMessage = computed(
  () =>
    ({
      404: "Die angeforderte Seite existiert nicht oder wurde entfernt.",
      500: "Interner Serverfehler. Bitte versuche es später erneut.",
      503: "Der Service ist vorübergehend nicht verfügbar (Wartungsmodus).",
    }[statusCode.value] ?? "Ein unerwarteter Fehler ist aufgetreten.")
);
</script>

<template>
  <section
    class="flex flex-col items-center justify-center min-h-screen text-center space-y-4"
  >
    <!-- Fehlercode und Nachricht -->
    <h1 class="text-6xl font-bold text-warning">{{ errorTitle }}</h1>
    <p class="text-xl text-base-content/70">{{ errorMessage }}</p>

    <!-- Zurück zur Startseite -->
    <NuxtLink to="/" class="btn btn-warning mt-4"
      >Zurück zur Startseite</NuxtLink
    >
  </section>
</template>
