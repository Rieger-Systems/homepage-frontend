<template>
  <!-- Branding-Panel -->
  <div class="flex flex-col justify-center items-center gap-5 text-center px-2">
    <img
      :src="logo"
      alt="Rieger Systems Logo"
      class="w-96 rounded shadow-lg border border-base-300"
    />

    <h2 class="text-xl font-semibold text-primary mt-2">Rieger Systems</h2>
    <p class="text-base-content/60 text-sm leading-relaxed max-w-xs">
      Technologie, die trägt – klar, sicher und menschlich.
    </p>
    <div class="divider w-full my-4"></div>
    <div class="mt-2 text-sm text-base-content/70 space-y-1">
      <p class="flex items-center justify-center gap-2">
        <MapPinIcon class="w-4 h-4 text-primary" />
        Musterstraße 12, 1234 Beispielstadt
      </p>
      <p class="flex items-center justify-center gap-2">
        <EnvelopeIcon class="w-4 h-4 text-primary" />
        <a
          href="mailto:kontakt@rieger-systems.eu"
          class="underline hover:text-primary"
        >
          kontakt@rieger-systems.eu
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
const { logo } = useAssets();
</script>
