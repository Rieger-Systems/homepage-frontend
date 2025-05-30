<template>
  <section class="bg-base-200 min-h-screen py-20">
    <div class="container mx-auto px-4 max-w-screen-lg">
      <div class="text-center mb-12">
        <ServerStackIcon
          class="w-16 h-16 mx-auto text-primary mb-4"
          v-motion="{
            initial: { opacity: 0, scale: 0.8 },
            enter: {
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                delay: 50,
              },
            },
          }"
        />
        <h1
          class="text-4xl font-bold text-primary"
          v-motion="{
            initial: { opacity: 0, y: 20 },
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
        >
          {{ services.title }}
        </h1>
        <p
          class="text-lg text-base-content/70 mt-2"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 22,
                delay: 250,
              },
            },
          }"
        >
          {{ services.shortDescription }}
        </p>
        <p
          class="text-sm text-base-content/50 mt-1"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 160,
                damping: 20,
                delay: 350,
              },
            },
          }"
        >
          {{ services.tagline }}
        </p>
      </div>

      <!-- Vorteile -->
      <div class="mb-12">
        <h2
          class="text-2xl font-semibold text-primary mb-4"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                delay: 100,
              },
            },
          }"
        >
          {{ t("services.advantagesTitle") }}
        </h2>
        <ul class="grid md:grid-cols-2 gap-4">
          <li
            v-for="(adv, idx) in services.advantages"
            :key="idx"
            class="bg-base-100 shadow rounded-lg p-4 flex items-start"
            v-motion="{
              initial: { opacity: 0, x: -30 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 80,
                },
              },
            }"
          >
            <CheckCircleIcon
              class="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0"
            />
            <span>{{ adv }}</span>
          </li>
        </ul>
      </div>

      <!-- Pakete & Preise -->
      <div class="mb-16">
        <h2
          class="text-2xl font-semibold text-primary mb-4"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                delay: 100,
              },
            },
          }"
        >
          {{ t("services.packagesTitle") }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(pkg, idx) in services.packages"
            :key="idx"
            class="card bg-base-100 shadow-xl border border-base-300"
            v-motion="{
              initial: { opacity: 0, y: 40 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                  delay: 200 + idx * 100,
                },
              },
            }"
          >
            <div class="card-body">
              <h3 class="card-title text-primary">{{ pkg.name }}</h3>
              <p class="text-base-content/70 mb-2">{{ pkg.target }}</p>
              <ul class="text-sm space-y-1 mb-3">
                <li>
                  <b>{{ t("services.table.price") }}:</b> {{ pkg.serviceFee }}
                </li>
                <li>
                  <b>{{ t("services.table.server") || "Server:" }}</b>
                  {{ pkg.serverInstance }}
                </li>
                <li>
                  <b>{{ t("services.table.cost") }} (mtl.):</b>
                  <span class="font-bold">{{ pkg.estimatedCost }}</span>
                </li>
                <li><b>Support:</b> {{ pkg.supportHours }}</li>
                <li><b>Monitoring:</b> {{ pkg.monitoring }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Support & Zusatzleistungen -->
      <div class="mb-12">
        <h2
          class="text-2xl font-semibold text-primary mb-4"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                delay: 100,
              },
            },
          }"
        >
          {{ t("services.supportTitle") }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200,
                },
              },
            }"
          >
            <h3 class="font-semibold mb-2">
              {{ t("services.standardSupport") }}
            </h3>
            <ul class="text-sm space-y-1">
              <li>
                <b>{{ t("services.table.response") || "Reaktionszeit:" }}</b>
                {{ services.support.standard.response }}
              </li>
              <li>
                <b>{{
                  t("services.table.availability") || "Verfügbarkeit:"
                }}</b>
                {{ services.support.standard.availability }}
              </li>
              <li>
                <b>{{ t("services.table.priority") || "Priorität:" }}</b>
                {{ services.support.standard.priority }}
              </li>
            </ul>
          </div>
          <div
            v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 300,
                },
              },
            }"
          >
            <h3 class="font-semibold mb-2">{{ t("services.premiumSLA") }}</h3>
            <ul class="text-sm space-y-1">
              <li>
                <b>{{ t("services.table.response") || "Reaktionszeit:" }}</b>
                {{ services.support.premiumSLA.responseTime }}
              </li>
              <li>
                <b>{{
                  t("services.table.critical") || "Kritische Störung:"
                }}</b>
                {{ services.support.premiumSLA.critical }}
              </li>
              <li>
                <b>{{ t("services.table.high") || "Wichtige Funktion:" }}</b>
                {{ services.support.premiumSLA.high }}
              </li>
              <li>
                <b>{{ t("services.table.reporting") || "Reporting:" }}</b>
                {{ services.support.premiumSLA.reporting }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8">
          <h3 class="font-semibold mb-2">
            {{ t("services.additionalSupport") }}
          </h3>
          <div
            class="overflow-x-auto"
            v-motion="{
              initial: { opacity: 0, scale: 0.95 },
              visibleOnce: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                  delay: 500,
                },
              },
            }"
          >
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>{{ t("services.table.package") }}</th>
                  <th>{{ t("services.table.price") }}</th>
                  <th>{{ t("services.table.hours") }}</th>
                  <th>{{ t("services.table.rate") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(sup, idx) in services.support.additionalSupport"
                  :key="idx"
                  v-motion="{
                    initial: { opacity: 0, x: -10 },
                    visibleOnce: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 600 + idx * 50,
                      },
                    },
                  }"
                >
                  <td>{{ sup.package }}</td>
                  <td>{{ sup.price }}</td>
                  <td>{{ sup.hours }}</td>
                  <td v-if="sup.rate">{{ sup.rate }}</td>
                  <td v-else>–</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            class="mt-2 text-sm text-warning"
            v-motion="{
              initial: { opacity: 0, y: 10 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 700,
                },
              },
            }"
          >
            {{ t("services.emergencyNote") }}
          </p>
        </div>
      </div>

      <!-- Server-Modelle -->
      <div class="mb-12">
        <h2
          class="text-2xl font-semibold text-primary mb-4"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
                delay: 100,
              },
            },
          }"
        >
          {{ t("services.serverModels") }}
        </h2>
        <div
          class="overflow-x-auto"
          v-motion="{
            initial: { opacity: 0, scale: 0.95 },
            visibleOnce: {
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 120,
                damping: 18,
                delay: 200,
              },
            },
          }"
        >
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>{{ t("services.table.name") }}</th>
                <th>{{ t("services.table.vcpu") }}</th>
                <th>{{ t("services.table.ram") }}</th>
                <th>{{ t("services.table.ssd") }}</th>
                <th>{{ t("services.table.traffic") }}</th>
                <th>{{ t("services.table.cost") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(srv, idx) in services.servers"
                :key="idx"
                v-motion="{
                  initial: { opacity: 0, x: -10 },
                  visibleOnce: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                      delay: 300 + idx * 50,
                    },
                  },
                }"
              >
                <td>{{ srv.name }}</td>
                <td>{{ srv.vCPU }}</td>
                <td>{{ srv.ram }}</td>
                <td>{{ srv.ssd }}</td>
                <td>{{ srv.traffic }}</td>
                <td>{{ srv.cost }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Call to Action -->
      <CallToAction />
    </div>

    <NetPriceNote />
  </section>
</template>

<script setup lang="ts">
import { getServicesProduct } from "~/data/products/services";
import { ServerStackIcon } from "@heroicons/vue/24/outline";
import NetPriceNote from "~/components/sections/products/NetPriceNote.vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { useI18n } from "vue-i18n";
import CallToAction from "~/components/sections/products/CallToAction.vue";

const { t, locale } = useI18n();
const services = getServicesProduct(locale.value);
</script>

<style scoped>
/* No specific styles needed for v-motion. All handled by directive. */
</style>
