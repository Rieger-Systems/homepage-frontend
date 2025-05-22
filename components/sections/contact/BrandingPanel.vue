<template>
  <div
    class="flex flex-col justify-center items-center gap-5 text-center px-2 py-8"
  >
    <img
      v-motion="'fade-bottom'"
      :delay="50"
      :src="logo"
      :alt="t('contact.companyName') + ' Logo'"
      class="w-96 rounded shadow-lg border border-base-300"
    />

    <h2
      v-motion="'fade-bottom'"
      :delay="150"
      class="text-xl font-semibold text-primary mt-2"
    >
      {{ t("contact.companyName") }}
    </h2>
    <p
      v-motion="'fade-bottom'"
      :delay="250"
      class="text-base-content/60 text-sm leading-relaxed max-w-xs"
    >
      {{ t("contact.slogan") }}
    </p>
    <div
      v-motion="'fade-bottom'"
      :delay="350"
      class="divider w-full my-4"
    ></div>
    <div
      v-motion="'fade-bottom'"
      :delay="450"
      class="mt-2 text-sm text-base-content/70 space-y-1"
    >
      <p class="flex items-center justify-center gap-2">
        <MapPinIcon class="w-4 h-4 text-primary" />
        Teststraße 123, Teststadt, Österreich
      </p>
      <p class="flex items-center justify-center gap-2">
        <EnvelopeIcon class="w-4 h-4 text-primary" />
        <a
          :href="`mailto:kontakt@rieger-systems.eu`"
          class="underline hover:text-primary"
        >
          kontakt@rieger-systems.eu
        </a>
      </p>
      <p class="flex items-center justify-center gap-2">
        <PhoneIcon class="w-4 h-4 text-primary" />
        <a :href="`tel:0664 1234567`" class="underline hover:text-primary">
          0664 1234567
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline"; // PhoneIcon hinzugefügt
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { logo } = useAssets();
</script>
