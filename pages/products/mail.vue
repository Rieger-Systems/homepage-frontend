<template>
  <section class="pt-20 pb-16 bg-base-200">
    <div class="container mx-auto px-4 max-w-screen-lg">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-primary">{{ mail.title }}</h1>
        <p class="text-lg text-base-content/70 mt-2">
          {{ mail.shortDescription }}
        </p>
        <p class="text-sm text-base-content/50 mt-1">
          {{ mail.tagline }}
        </p>
      </div>

      <!-- Vorteile -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">
          {{ mail.sections.advantages }}
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="(advantage, index) in mail.advantages" :key="index">
            {{ advantage }}
          </li>
        </ul>
      </div>

      <!-- Support Hinweis -->
      <div class="alert alert-warning text-black shadow-lg mb-8">
        <div class="flex items-center space-x-3">
          <div>
            <h3 class="text-lg font-semibold">
              {{ mail.supportNote.title }}
            </h3>
            <p class="text-sm">{{ mail.supportNote.content }}</p>
          </div>
        </div>
      </div>

      <!-- Pricing -->
      <article class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4 text-center">
          {{ mail.pricing.title }}
        </h2>
        <p class="text-center max-w-md mx-auto mb-6">
          {{ mail.pricing.description }}
        </p>
        <div class="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
          <div
            v-for="(plan, index) in mail.pricing.table"
            :key="index"
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

      <!-- Add-ons -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">
          {{ mail.addons.title }}
        </h2>
        <div class="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
          <div class="card bg-base-100 shadow-md p-4">
            <h3 class="text-xl font-semibold mb-2 text-primary">
              {{ mail.sections.oneTime }}
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li
                v-for="(addon, idx) in mail.addons.oneTimeServices"
                :key="addon.name"
              >
                <strong>{{ addon.name }}</strong
                >: {{ addon.price }} - {{ addon.description }}
              </li>
            </ul>
          </div>
          <div class="card bg-base-100 shadow-md p-4">
            <h3 class="text-xl font-semibold mb-2 text-primary">
              {{ mail.sections.individual }}
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li
                v-for="(addon, idx) in mail.addons.individualServices"
                :key="addon.name"
              >
                <strong>{{ addon.name }}</strong
                >: {{ addon.price }} - {{ addon.description }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Security -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">
          {{ mail.sections.security }}
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="(point, idx) in mail.security.points" :key="point">
            {{ point }}
          </li>
        </ul>
      </section>

      <!-- Contract -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">
          {{ mail.sections.contract }}
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="(detail, idx) in mail.contract.details" :key="detail">
            {{ detail }}
          </li>
        </ul>
      </section>

      <!-- Contact/CTA -->
      <aside class="text-center mt-8 p-4 bg-base-100 shadow-lg rounded-lg">
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
          {{ mail.sections.learnMore }}
        </a>
      </aside>
    </div>
    <NetPriceNote />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { getMailProduct } from "@/data/products/mail";
import NetPriceNote from "~/components/sections/products/NetPriceNote.vue";

const { locale } = useI18n();
const mail = computed(() => getMailProduct(locale.value));
</script>

<style scoped>
.card:hover {
  transform: scale(1.03);
  background-color: rgba(105, 109, 39, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
}
</style>
