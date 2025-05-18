<script setup>
import { products } from "~/data/products";
import {
  CheckIcon,
  InformationCircleIcon,
  LockClosedIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  WrenchScrewdriverIcon, // Although imported, WrenchScrewdriverIcon is not used in the template. Consider removing if not needed.
} from "@heroicons/vue/24/outline";

const software = products?.software || {};
</script>

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
          class="text-4xl lg:text-5xl font-extrabold text-primary mb-3"
        >
          {{ software.title }}
        </h1>
        <p class="text-lg lg:text-xl text-base-content/70 max-w-2xl mx-auto">
          {{ software.shortDescription }}
        </p>
        <p class="text-base-content/60 mt-2 text-sm font-medium">
          {{ software.description }}
        </p>
      </div>

      <div
        role="alert"
        class="alert alert-warning shadow-lg mb-10"
        id="warum"
        aria-labelledby="warum-heading"
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
        <h2 class="text-3xl font-bold text-center text-primary mb-7">
          Was wir für Sie tun können
        </h2>
        <div class="space-y-1">
          <div
            v-for="(service, idx) in software.services"
            :key="service.category"
            class="collapse collapse-arrow bg-base-100 shadow-sm rounded-lg border border-base-300"
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
        <div class="card bg-base-100 shadow-xl">
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
        <div class="card bg-base-100 shadow-xl">
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

      <div class="card bg-base-100 shadow-xl mb-14" id="vorteile">
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

      <div class="text-center py-10 border-t border-base-300" id="kontakt">
        <h2 class="text-2xl font-bold text-primary mb-2">
          {{ software.contact.title }}
        </h2>
        <p class="text-base-content/70 mb-5 max-w-lg mx-auto">
          {{ software.contact.description }}
        </p>
        <NuxtLink href="/contact" class="btn btn-primary btn-wide mb-3">
          Zum Kontaktformular
        </NuxtLink>
        <p class="text-xl font-semibold text-success">
          {{ software.contact.callToAction }}
        </p>
      </div>
    </div>
  </section>
</template>
