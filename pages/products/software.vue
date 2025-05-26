<template>
  <section
    class="min-h-screen bg-base-200 text-base-content py-12 lg:py-20"
    id="software"
    aria-labelledby="software-heading"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="text-center mb-14">
        <h1
          id="software-heading"
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
          class="text-4xl lg:text-5xl font-extrabold text-primary mb-3"
        >
          {{ software.title }}
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
          class="text-lg lg:text-xl text-base-content/70 max-w-2xl mx-auto"
        >
          {{ software.shortDescription }}
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
          class="text-base-content/60 mt-2 text-sm font-medium"
        >
          {{ software.description }}
        </p>
      </div>

      <div
        role="alert"
        class="alert alert-warning shadow-lg mb-10"
        id="warum"
        aria-labelledby="warum-heading"
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
      >
        <InformationCircleIcon
          class="h-6 w-6 text-info-content stroke-current shrink-0"
          aria-hidden="true"
        />
        <div>
          <h3 id="warum-heading" class="font-bold">
            {{ software.notice.title }}
          </h3>
          <div class="text-sm">{{ software.notice.description }}</div>
          <p v-if="software.notice.details" class="text-xs opacity-80 mt-1">
            {{ software.notice.details }}
          </p>
        </div>
      </div>

      <div class="mb-12" id="leistungen">
        <h2
          class="text-3xl font-bold text-center text-primary mb-7"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
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
          Was wir für Sie tun können
        </h2>
        <div class="space-y-1">
          <div
            v-for="(service, idx) in software.services"
            :key="service.category"
            class="collapse collapse-arrow bg-base-100 shadow-sm rounded-lg border border-base-300"
            v-motion="{
              initial: { opacity: 0, x: -30 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 100, // Staggered entry for each accordion item
                },
              },
            }"
          >
            <input
              type="radio"
              :name="'software-leistungen-accordion'"
              :id="'service-radio-' + idx"
              :checked="idx === 0"
              aria-controls="'service-content-' + idx"
            />
            <label
              :for="'service-radio-' + idx"
              class="collapse-title text-xl font-semibold text-primary-focus cursor-pointer"
            >
              {{ service.category }}
            </label>
            <div :id="'service-content-' + idx" class="collapse-content">
              <ul class="list-none pl-4 pr-4 pb-4 pt-2 space-y-2">
                <li
                  v-for="(item, itemIndex) in service.items"
                  :key="itemIndex"
                  class="flex items-start"
                  v-motion="{
                    initial: { opacity: 0, x: -10 },
                    // This will only animate when the parent collapse opens,
                    // not on initial page scroll unless the collapse is already open
                    // You could also add a 'visibleOnce' here if you want them to fade in
                    // when the content becomes visible even if the collapse is already expanded.
                    // For now, we'll keep it simple for immediate toggle response.
                    enter: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: 'spring',
                        stiffness: 120,
                        damping: 15,
                        delay: 50 + itemIndex * 30, // Staggered entry for list items
                      },
                    },
                  }"
                >
                  <CheckIcon
                    class="h-5 w-5 text-success mr-2 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span class="text-base-content/80">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-12" id="kosten">
        <div
          class="card bg-base-100 shadow-xl"
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
          <div class="card-body">
            <h2 class="card-title text-2xl text-primary">
              {{ software.pricing.title }}
            </h2>
            <p class="text-base-content/80 whitespace-pre-line">
              {{ software.pricing.description }}
            </p>
            <p
              v-if="software.pricing.details"
              class="text-sm mt-2 text-base-content/70 whitespace-pre-line"
            >
              {{ software.pricing.details }}
            </p>
          </div>
        </div>
        <div
          class="card bg-base-100 shadow-xl"
          v-motion="{
            initial: { opacity: 0, y: 40 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 120,
                damping: 18,
                delay: 200, // Slightly delayed compared to the first card
              },
            },
          }"
        >
          <div class="card-body">
            <h2 class="card-title text-2xl text-primary">
              {{ software.financing.title }}
            </h2>
            <p class="text-base-content/80 whitespace-pre-line">
              {{ software.financing.description }}
            </p>
            <p
              v-if="software.financing.callToAction"
              class="text-sm mt-2 font-semibold text-accent"
            >
              {{ software.financing.callToAction }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="card bg-base-100 shadow-xl mb-14"
        id="vorteile"
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 100,
            },
          },
        }"
      >
        <div class="card-body">
          <h2 class="card-title text-2xl text-primary mb-2">
            <LockClosedIcon
              class="w-7 h-7 text-primary mb-2"
              aria-hidden="true"
            />
            Warum Sie sich für Rieger Software entscheiden sollten
          </h2>
          <ul class="space-y-2 mt-3">
            <li
              v-for="(adv, advIndex) in software.advantages"
              :key="advIndex"
              class="flex items-center"
              v-motion="{
                initial: { opacity: 0, x: -20 },
                visibleOnce: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: 200 + advIndex * 60, // Staggered entry for advantages
                  },
                },
              }"
            >
              <CheckIcon
                class="h-6 w-6 text-success mr-3 shrink-0"
                aria-hidden="true"
              />
              <span class="text-base-content/90">{{ adv }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="text-center py-10 border-t border-base-300"
        id="kontakt"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 100,
            },
          },
        }"
      >
        <h2 class="text-2xl font-bold text-primary mb-2">
          {{ software.contact.title }}
        </h2>
        <p class="text-base-content/70 mb-5 max-w-lg mx-auto">
          {{ software.contact.description }}
        </p>
        <NuxtLink
          href="/contact"
          class="btn btn-primary btn-wide mb-3"
          v-motion="{
            initial: { opacity: 0, scale: 0.9 },
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
          Zum Kontaktformular
        </NuxtLink>
        <p
          class="text-xl font-semibold text-success"
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
          {{ software.contact.callToAction }}
        </p>
      </div>
    </div>
    <NetPriceNote />
  </section>
</template>

<script setup>
import {
  CheckIcon,
  InformationCircleIcon,
  LockClosedIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  WrenchScrewdriverIcon, // Although imported, WrenchScrewdriverIcon is not used in the template. Consider removing if not needed.
} from "@heroicons/vue/24/outline";
import NetPriceNote from "~/components/sections/products/NetPriceNote.vue";
import { getSoftwareProduct } from "~/data/products/software/software";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const software = getSoftwareProduct(locale.value);
</script>

<style scoped>
/* No specific styles are needed for v-motion. All animations are handled by the directive. */
</style>
