<template>
  <section class="min-h-screen bg-base-200 text-base-content py-8 lg:py-16">
    <div class="max-w-6xl mx-auto px-4 lg:px-6">
      <div class="text-center mb-8">
        <h1
          v-motion="{
            initial: { opacity: 0, y: -20 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 30,
                delay: 50,
              },
            },
          }"
          class="text-3xl lg:text-4xl font-extrabold text-primary mb-3"
        >
          {{ website.title }}
        </h1>
        <p
          v-motion="{
            initial: { opacity: 0, y: -10 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                delay: 150,
              },
            },
          }"
          class="text-lg opacity-70"
        >
          {{ website.shortDescription }}
        </p>
      </div>

      <div
        v-motion="{
          initial: { opacity: 0, y: 20 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 20,
              delay: 250,
            },
          },
        }"
        class="bg-warning text-warning-content rounded-lg p-4 mb-8"
      >
        <p class="font-semibold">{{ website.notice.title }}</p>
        <p class="text-sm">{{ website.notice.description }}</p>
        <p class="text-xs opacity-80 mt-1">{{ website.notice.details }}</p>
      </div>

      <div class="overflow-x-auto hidden lg:block">
        <table class="table w-full rounded-md shadow-sm">
          <thead
            v-motion="{
              initial: { opacity: 0, y: -10 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                  delay: 350,
                },
              },
            }"
            class="bg-base-300 text-base-content"
          >
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
            <template v-for="(mod, idx) in websiteModules" :key="mod.id">
              <tr
                v-motion="{
                  initial: { opacity: 0, x: -30 },
                  visibleOnce: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 150,
                      damping: 20,
                      delay: 450 + idx * 70, // Stagger rows
                    },
                  },
                }"
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
          v-for="(mod, idx) in websiteModules"
          :key="mod.id"
          v-motion="{
            initial: { opacity: 0, y: 30 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20,
                delay: 100 + idx * 80, // Stagger mobile cards
              },
            },
          }"
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

      <div
        v-motion="{
          initial: { opacity: 0, y: 40 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 18,
              delay: 100,
            },
          },
        }"
        class="mt-8 bg-base-100 rounded-lg p-4 shadow-md"
      >
        <h2 class="text-xl font-bold text-primary mb-2">
          Finanzierungsmöglichkeiten
        </h2>
        <p class="opacity-70">{{ website.financing.description }}</p>
        <ul class="list-disc list-inside mt-2 text-sm opacity-70">
          <li
            v-for="(adv, idx) in website.financing.advantages"
            :key="idx"
            v-motion="{
              initial: { opacity: 0, x: -20 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 200 + idx * 50, // Stagger financing advantages
                },
              },
            }"
          >
            {{ adv }}
          </li>
        </ul>
      </div>
      <CallToAction />
    </div>
    <NetPriceNote />
  </section>
</template>

<script setup>
import { getWebsiteProduct } from "~/data/products/website/website.ts";
import { getWebsiteModules } from "~/data/products/website/website-modules.ts";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import NetPriceNote from "~/components/sections/products/NetPriceNote.vue";
import { useI18n } from "vue-i18n";
import CallToAction from "~/components/sections/products/CallToAction.vue";

const { locale } = useI18n();

const expandedModules = ref([]);

const website = getWebsiteProduct(locale.value);
const websiteModules = getWebsiteModules(locale.value);

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
  /* For the expanded row, remove transition for instant appearance */
  .table tbody tr.bg-base-200 td {
    padding: 1.5rem;
    transition: none; /* Important to prevent animation on expansion */
  }
}

/* Mobile-Stile */
@media (max-width: 1023px) {
  /* No specific table styles for mobile */
}

/* Common styles */
.badge-neutral {
  background-color: var(--base-300);
  color: var(--base-content);
}
</style>
