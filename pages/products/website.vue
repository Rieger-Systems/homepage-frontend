<script setup>
import { website } from "~/data/products/website/website.ts";
import { websiteModules } from "~/data/products/website/website-modules.ts";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import NetPriceNote from "~/components/sections/products/NetPriceNote.vue";

const expandedModules = ref([]);

// Toggle für Detailansicht
function toggleDetails(moduleId) {
  if (expandedModules.value.includes(moduleId)) {
    expandedModules.value = expandedModules.value.filter(
      (id) => id !== moduleId
    );
  } else {
    expandedModules.value.push(moduleId);
  }
}

// Prüfen, ob ein Modul ausgeklappt ist
function isExpanded(moduleId) {
  return expandedModules.value.includes(moduleId);
}

// Robustere Funktion zum Finden der Pakete
function findPackagesForModule(moduleId) {
  if (!website?.packages) return [];
  return website.packages.filter((pkg) => pkg.features?.includes(moduleId));
}
</script>
<template>
  <section class="min-h-screen bg-base-200 text-base-content py-8 lg:py-16">
    <div class="max-w-6xl mx-auto px-4 lg:px-6">
      <div class="text-center mb-8">
        <h1 class="text-3xl lg:text-4xl font-extrabold text-primary mb-3">
          {{ website.title }}
        </h1>
        <p class="text-lg opacity-70">{{ website.shortDescription }}</p>
      </div>

      <div class="bg-warning text-warning-content rounded-lg p-4 mb-8">
        <p class="font-semibold">{{ website.notice.title }}</p>
        <p class="text-sm">{{ website.notice.description }}</p>
        <p class="text-xs opacity-80 mt-1">{{ website.notice.details }}</p>
      </div>

      <div class="overflow-x-auto hidden lg:block">
        <table class="table w-full rounded-md shadow-sm">
          <thead class="bg-base-300 text-base-content">
            <tr>
              <th class="py-4 px-6 text-left">Modul</th>
              <th
                v-for="pkg in website.packages"
                :key="pkg.name"
                class="py-4 text-center"
              >
                <div class="font-semibold">{{ pkg.name }}</div>
                <div class="text-sm opacity-70">{{ pkg.startPrice }}</div>
                <div
                  v-if="pkg.benefit"
                  class="text-xs font-semibold text-success mt-1"
                >
                  {{ pkg.benefit }}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="mod in websiteModules" :key="mod.id">
              <tr
                class="bg-base-100 cursor-pointer hover:bg-base-300 transition-colors duration-200"
                @click="toggleDetails(mod.id)"
              >
                <td class="py-4 px-6 font-semibold text-primary">
                  <div class="flex items-center justify-between">
                    <div>
                      {{ mod.name }}
                      <p class="text-sm opacity-60">{{ mod.description }}</p>
                    </div>
                    <div class="flex items-center gap-1">
                      <ChevronDownIcon
                        v-if="!isExpanded(mod.id)"
                        class="w-4 h-4 opacity-60"
                      />
                      <ChevronUpIcon
                        v-if="isExpanded(mod.id)"
                        class="w-4 h-4 opacity-60"
                      />
                    </div>
                  </div>
                </td>
                <td
                  v-for="pkg in website.packages"
                  :key="pkg.name"
                  class="text-center"
                >
                  <template v-if="pkg.features?.includes(mod.id)">
                    <CheckIcon
                      class="w-5 h-5 text-success inline-block opacity-70"
                    />
                  </template>
                </td>
              </tr>

              <tr v-if="isExpanded(mod.id)" class="bg-base-200">
                <td :colspan="1 + website.packages.length" class="p-6">
                  <div class="mb-2">
                    <h6 class="font-semibold text-sm opacity-80">
                      Detaillierte Beschreibung:
                    </h6>
                    <p class="text-sm opacity-80">
                      {{ mod.detailedDescription }}
                    </p>
                    <span class="ml-2 text-success font-semibold text-sm">
                      (Einzelpreis: {{ mod.price }})
                    </span>
                  </div>

                  <div>
                    <h6 class="font-semibold text-sm opacity-80">
                      Zielgruppen:
                    </h6>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span
                        v-for="pkg in findPackagesForModule(mod.id) || []"
                        :key="pkg.name"
                        class="badge badge-neutral badge-xs"
                      >
                        {{ pkg.target }}
                      </span>
                      <span
                        v-if="findPackagesForModule(mod.id)?.length === 0"
                        class="text-sm opacity-70"
                      >
                        Nicht zugeordnet
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div class="lg:hidden">
        <div
          v-for="mod in websiteModules"
          :key="mod.id"
          class="bg-base-100 rounded-lg p-4 mb-4 shadow-md"
        >
          <h3 class="font-semibold text-lg text-primary">{{ mod.name }}</h3>
          <p class="text-sm opacity-70">{{ mod.description }}</p>
          <p class="text-sm font-semibold text-success">
            Einzelpreis: {{ mod.price }}
          </p>
          <div class="mt-2">
            <h6 class="font-semibold text-sm">Enthalten in:</h6>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="pkg in findPackagesForModule(mod.id) || []"
                :key="pkg.name"
                :class="`badge badge-sm ${
                  pkg.name === 'Starter Website'
                    ? 'badge-primary'
                    : pkg.name === 'Business Website'
                    ? 'badge-secondary'
                    : pkg.name === 'Advanced Website'
                    ? 'badge-primary'
                    : pkg.name === 'Enterprise Website'
                    ? 'badge-secondary'
                    : 'badge-neutral'
                }`"
              >
                {{ pkg.name.replace(" Website", "") }}
              </span>
              <span
                v-if="findPackagesForModule(mod.id)?.length === 0"
                class="text-sm opacity-70"
              >
                Nicht enthalten
              </span>
            </div>
          </div>
          <button
            @click="toggleDetails(mod.id)"
            class="btn btn-outline btn-sm mt-2 w-full"
          >
            Details anzeigen
          </button>
          <div v-if="isExpanded(mod.id)" class="mt-2 text-sm opacity-80">
            <p>{{ mod.detailedDescription }}</p>
            <div class="mt-2">
              <h6 class="font-semibold text-sm">Zielgruppen:</h6>
              <p class="text-xs opacity-70">
                <span
                  v-for="pkg in findPackagesForModule(mod.id) || []"
                  :key="pkg.name"
                  class="mr-2 badge badge-neutral badge-xs"
                >
                  {{ pkg.target }}
                </span>
                <span
                  v-if="findPackagesForModule(mod.id)?.length === 0"
                  class="text-sm opacity-70"
                >
                  Nicht zugeordnet
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-base-100 rounded-lg p-4 shadow-md">
        <h2 class="text-xl font-bold text-primary mb-2">
          Finanzierungsmöglichkeiten
        </h2>
        <p class="opacity-70">{{ website.financing.description }}</p>
        <ul class="list-disc list-inside mt-2 text-sm opacity-70">
          <li v-for="adv in website.financing.advantages" :key="adv">
            {{ adv }}
          </li>
        </ul>
      </div>

      <div class="mt-12 py-6 text-center opacity-70">
        Möchten Sie mehr erfahren?
        <a
          href="/contact"
          class="font-semibold text-primary hover:underline ml-1"
          >Kontaktieren Sie uns</a
        >
        oder senden Sie eine E-Mail an
        <a
          href="mailto:kontakt@rieger-systems.eu"
          class="font-semibold text-primary hover:underline ml-1"
          >kontakt@rieger-systems.eu</a
        >.
      </div>
    </div>
    <NetPriceNote />
  </section>
</template>

<style scoped>
/* Desktop-Stile */
@media (min-width: 1024px) {
  .table th {
    text-align: center;
  }
  .table td {
    vertical-align: middle;
  }
  .table thead th:first-child {
    text-align: left;
  }
  .table tr:nth-child(even) {
    background-color: var(--base-200);
  }
  .table tbody tr:hover td {
    background-color: var(--base-300);
  }
  .table tbody tr.bg-base-200 td {
    padding: 1.5rem;
  }
}

/* Mobile-Stile */
@media (max-width: 1023px) {
  /* Keine spezifischen Tabellenstile für Mobile */
}

/* Gemeinsame Stile */
.badge-neutral {
  background-color: var(--base-300);
  color: var(--base-content);
}
</style>
