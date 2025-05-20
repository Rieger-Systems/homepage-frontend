<template>
  <section class="bg-base-200 min-h-screen py-20">
    <div class="container mx-auto px-4 max-w-screen-lg">
      <div class="text-center mb-12">
        <ServerStackIcon
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
          class="w-16 h-16 mx-auto text-primary mb-4"
        />
        <h1
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
          class="text-4xl font-bold text-primary"
        >
          {{ services.title }}
        </h1>
        <p
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
          class="text-lg text-base-content/70 mt-2"
        >
          {{ services.shortDescription }}
        </p>
        <p
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
          class="text-sm text-base-content/50 mt-1"
        >
          {{ services.tagline }}
        </p>
      </div>

      <div class="mb-12">
        <h2
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
          class="text-2xl font-semibold text-primary mb-4"
        >
          Vorteile
        </h2>
        <ul class="grid md:grid-cols-2 gap-4">
          <li
            v-for="(adv, idx) in services.advantages"
            :key="idx"
            v-motion="{
              initial: { opacity: 0, x: -30 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 80, // Staggered entry for each advantage
                },
              },
            }"
            class="bg-base-100 shadow rounded-lg p-4 flex items-start"
          >
            <CheckCircleIcon
              class="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0"
            />
            <span>{{ adv }}</span>
          </li>
        </ul>
      </div>

      <div class="mb-16">
        <h2
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
          class="text-2xl font-semibold text-primary mb-4"
        >
          Pakete & Preise
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(pkg, idx) in services.packages"
            :key="idx"
            v-motion="{
              initial: { opacity: 0, y: 40 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                  delay: 200 + idx * 100, // Staggered entry for each package card
                },
              },
            }"
            class="card bg-base-100 shadow-xl border border-base-300"
          >
            <div class="card-body">
              <h3 class="card-title text-primary">{{ pkg.name }}</h3>
              <p class="text-base-content/70 mb-2">{{ pkg.target }}</p>
              <ul class="text-sm space-y-1 mb-3">
                <li><b>Servicegebühr:</b> {{ pkg.serviceFee }}</li>
                <li><b>Server:</b> {{ pkg.serverInstance }}</li>
                <li>
                  <b>Gesamtpreis (mtl.):</b>
                  <span class="font-bold">{{ pkg.estimatedCost }}</span>
                </li>
                <li><b>Support:</b> {{ pkg.supportHours }}</li>
                <li><b>Monitoring:</b> {{ pkg.monitoring }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h2
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
          class="text-2xl font-semibold text-primary mb-4"
        >
          Support & Zusatzleistungen
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
            <h3 class="font-semibold mb-2">Standard Support</h3>
            <ul class="text-sm space-y-1">
              <li>
                <b>Reaktionszeit:</b> {{ services.support.standard.response }}
              </li>
              <li>
                <b>Verfügbarkeit:</b>
                {{ services.support.standard.availability }}
              </li>
              <li>
                <b>Priorität:</b> {{ services.support.standard.priority }}
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
                  delay: 300, // Slightly delayed
                },
              },
            }"
          >
            <h3 class="font-semibold mb-2">Premium SLA</h3>
            <ul class="text-sm space-y-1">
              <li>
                <b>Reaktionszeit:</b>
                {{ services.support.premiumSLA.responseTime }}
              </li>
              <li>
                <b>Kritische Störung:</b>
                {{ services.support.premiumSLA.critical }}
              </li>
              <li>
                <b>Wichtige Funktion:</b> {{ services.support.premiumSLA.high }}
              </li>
              <li>
                <b>Reporting:</b> {{ services.support.premiumSLA.reporting }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8">
          <h3
            v-motion="{
              initial: { opacity: 0, y: 20 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 180,
                  damping: 22,
                  delay: 400,
                },
              },
            }"
            class="font-semibold mb-2"
          >
            Zusätzliche Support-Pakete
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
                  <th>Paket</th>
                  <th>Preis</th>
                  <th>Inkl. Stunden</th>
                  <th>Stundensatz</th>
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
                        delay: 600 + idx * 50, // Staggered entry for table rows
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
            {{ services.support.emergency }}
          </p>
        </div>
      </div>

      <div class="mb-12">
        <h2
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
          class="text-2xl font-semibold text-primary mb-4"
        >
          Server-Modelle
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
                <th>Name</th>
                <th>vCPU</th>
                <th>RAM</th>
                <th>SSD</th>
                <th>Traffic</th>
                <th>Preis</th>
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
                      delay: 300 + idx * 50, // Staggered entry for server rows
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

      <div
        class="bg-primary text-primary-content rounded-xl p-8 text-center mt-16 shadow-lg"
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
      >
        <h3 class="text-2xl font-bold mb-2">
          Bereit für sorgenfreies Hosting?
        </h3>
        <p class="mb-4">Jetzt anfragen & individuelle Lösung sichern:</p>
        <a
          :href="'mailto:' + services.contact.email"
          class="btn btn-secondary btn-lg"
          v-motion="{
            initial: { opacity: 0, scale: 0.9 },
            visibleOnce: {
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20,
                delay: 200,
              },
            },
          }"
        >
          Kontakt aufnehmen
        </a>
        <p
          class="mt-2 text-sm opacity-80"
          v-motion="{
            initial: { opacity: 0, y: 10 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 300,
              },
            },
          }"
        >
          Oder mehr erfahren:
          <NuxtLink to="/contact" class="underline text-primary-content"
            >Kontaktseite</NuxtLink
          >
        </p>
      </div>
    </div>
    <NetPriceNote />
  </section>
</template>

<script setup lang="ts">
import { services } from "~/data/products/services";
import { ServerStackIcon } from "@heroicons/vue/24/outline";
import NetPriceNote from "~/components/sections/products/NetPriceNote.vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped>
/* No specific styles are needed for v-motion. All animations are handled by the directive. */
</style>
