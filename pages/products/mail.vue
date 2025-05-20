<template>
  <section class="pt-20 pb-16 bg-base-200">
    <div class="container mx-auto px-4 max-w-screen-lg">
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
          class="text-4xl font-bold text-primary"
        >
          {{ mail.title }}
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
          class="text-lg text-base-content/70 mt-2"
        >
          {{ mail.shortDescription }}
        </p>
        <p
          v-motion="{
            initial: { opacity: 0, y: -10 },
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
          class="text-sm text-base-content/50 mt-1"
        >
          {{ mail.tagline }}
        </p>
      </div>

      <div class="mb-8">
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
        <ul class="list-disc list-inside space-y-2">
          <li
            v-for="(advantage, index) in mail.advantages"
            :key="index"
            v-motion="{
              initial: { opacity: 0, x: -30 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + index * 70, // Staggered entry for each advantage
                },
              },
            }"
          >
            {{ advantage }}
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
              delay: 100,
            },
          },
        }"
        class="alert alert-warning text-black shadow-lg mb-8"
      >
        <div class="flex items-center space-x-3">
          <div>
            <h3 class="text-lg font-semibold">
              {{ mail.supportNote.title }}
            </h3>
            <p class="text-sm">
              {{ mail.supportNote.content }}
            </p>
          </div>
        </div>
      </div>

      <article class="mb-8">
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
          class="text-2xl font-semibold text-primary mb-4 text-center"
        >
          {{ mail.pricing.title }}
        </h2>
        <p
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 22,
                delay: 200,
              },
            },
          }"
          class="text-center max-w-md mx-auto mb-6"
        >
          {{ mail.pricing.description }}
        </p>
        <div class="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
          <div
            v-for="(plan, index) in mail.pricing.table"
            :key="index"
            v-motion="{
              initial: { opacity: 0, y: 40 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                  delay: 300 + index * 100, // Staggered entry for pricing plans
                },
              },
            }"
            class="card shadow-md bg-base-100 hover:shadow-xl transition-all"
          >
            <div class="card-body">
              <h3 class="text-xl font-bold">{{ plan.type }}</h3>
              <p class="text-sm">{{ plan.description }}</p>
              <p class="mt-2 font-medium">Speicher: {{ plan.storage }}</p>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li v-for="feature in plan.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
              <p class="text-2xl font-bold mt-4 text-primary">
                {{ plan.price }}
              </p>
              <p class="text-sm">{{ plan.idealFor }}</p>
            </div>
          </div>
        </div>
      </article>

      <section class="mb-8">
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
          RiegerMail Zusatzleistungen & Erweiterungen
        </h2>
        <div class="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
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
            class="card bg-base-100 shadow-md p-4"
          >
            <h3 class="text-xl font-semibold mb-2 text-primary">
              Einmalige Leistungen
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li
                v-for="(addon, idx) in mail.addons.oneTimeServices"
                :key="addon.name"
                v-motion="{
                  initial: { opacity: 0, x: -10 },
                  visibleOnce: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                      delay: 300 + idx * 50, // Staggered entry for list items
                    },
                  },
                }"
              >
                <strong>{{ addon.name }}</strong
                >: {{ addon.price }} - {{ addon.description }}
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
                  delay: 300, // Slightly delayed compared to the first card
                },
              },
            }"
            class="card bg-base-100 shadow-md p-4"
          >
            <h3 class="text-xl font-semibold mb-2 text-primary">
              Individuelle Leistungen
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li
                v-for="(addon, idx) in mail.addons.individualServices"
                :key="addon.name"
                v-motion="{
                  initial: { opacity: 0, x: -10 },
                  visibleOnce: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                      delay: 400 + idx * 50, // Staggered entry for list items
                    },
                  },
                }"
              >
                <strong>{{ addon.name }}</strong
                >: {{ addon.price }} - {{ addon.description }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-8">
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
          Sicherheit & Datenschutz
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li
            v-for="(point, idx) in mail.security.points"
            :key="point"
            v-motion="{
              initial: { opacity: 0, x: -30 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 70, // Staggered entry for each point
                },
              },
            }"
          >
            {{ point }}
          </li>
        </ul>
      </section>

      <section class="mb-8">
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
          Vertragslaufzeit & Kündigung
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li
            v-for="(detail, idx) in mail.contract.details"
            :key="detail"
            v-motion="{
              initial: { opacity: 0, x: -30 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 70, // Staggered entry for each detail
                },
              },
            }"
          >
            {{ detail }}
          </li>
        </ul>
      </section>

      <aside
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
        class="text-center mt-8 p-4 bg-base-100 shadow-lg rounded-lg"
      >
        <h3 class="text-xl font-semibold">{{ mail.contact.title }}</h3>
        <p>{{ mail.contact.content }}</p>
        <a
          :href="`mailto:${mail.contact.email}`"
          class="link link-primary block mt-2"
        >
          {{ mail.contact.email }}
        </a>
        <a
          :href="mail.contact.website"
          target="_blank"
          class="btn btn-primary btn-sm mt-2"
        >
          Mehr erfahren
        </a>
      </aside>
    </div>
    <NetPriceNote />
  </section>
</template>

<script setup>
import { mail } from "@/data/products/mail";
import NetPriceNote from "~/components/sections/products/NetPriceNote.vue";
</script>

<style scoped>
/* Keeping your existing hover animation for the cards as it's a direct CSS hover */
.card:hover {
  transform: scale(1.03);
  background-color: rgba(105, 109, 39, 0.1); /* Subtilerer Farbwechsel */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Reduzierter Schatten */
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
}
</style>
