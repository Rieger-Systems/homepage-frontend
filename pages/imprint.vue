<template>
  <section
    class="max-w-screen-sm mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-base"
    role="main"
    aria-labelledby="imprint-heading"
  >
    <header v-motion-fade class="text-center mb-10 sm:mb-14">
      <h1
        id="imprint-heading"
        class="text-3xl sm:text-4xl font-semibold tracking-tight mb-1"
        tabindex="0"
      >
        {{ t("imprint.headerTitle") }}
      </h1>
      <p
        class="text-base-content/70 text-base max-w-prose mx-auto"
        tabindex="0"
      >
        {{ t("imprint.headerSubtitle") }}
      </p>
    </header>

    <article
      v-motion-slide-bottom
      class="relative bg-base-100 border-l-4 border-primary/70 rounded-lg px-4 sm:px-8 py-7 sm:py-10 flex flex-col gap-7 prose prose-invert dark:prose-invert max-w-prose mx-auto transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-base-100"
      tabindex="0"
      :aria-label="t('imprint.headerTitle')"
    >
      <div
        class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent rounded-l-lg pointer-events-none"
      ></div>

      <template v-for="(field, i) in fields" :key="field.titleKey">
        <section
          v-motion-fade
          :style="{ transitionDelay: `${0.09 + i * 0.04}s` }"
          class="flex flex-col gap-2 last:pb-0"
          tabindex="0"
          :aria-label="t(field.titleKey)"
        >
          <h2 class="!mb-1 !mt-0 !text-primary !text-lg font-semibold">
            {{ t(field.titleKey) }}
          </h2>

          <div class="leading-relaxed">
            <template v-if="field.isAddress">
              {{ t("imprint.addressLine1") }}<br />
              {{ t("imprint.addressLine2") }}
            </template>
            <template v-else-if="field.isContact">
              {{ t("imprint.contactEmailLabel") }}
              <a
                :href="'mailto:' + emailAddress"
                class="text-primary hover:underline focus:underline outline-none"
                tabindex="0"
              >
                {{ emailAddress }} </a
              ><br />
              {{ t("imprint.contactPhoneLabel") }} {{ phoneNumber }}
            </template>
            <template v-else-if="field.isOnlineDisputeResolution">
              {{ t("imprint.onlineDisputeResolutionLinkText") }}
              <a
                href="https://ec.europa.eu/consumers/odr"
                class="text-primary hover:underline focus:underline outline-none"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="0"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </template>
            <template v-else-if="field.contentKey">
              {{ t(field.contentKey) }}
            </template>
          </div>
        </section>
      </template>
    </article>
  </section>
</template>

<style scoped>
/* Keep your styles as they are */
.prose > * {
  line-height: 1.6;
}
article:focus {
  outline-offset: 4px;
}
a:hover,
a:focus {
  text-decoration-thickness: 2px;
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useHead } from "#app";

const { t } = useI18n();

// Define contact details directly in the component script
const emailAddress = "kontakt@rieger-systems.eu";
const phoneNumber = "+43 660 1234567"; // Example number

// Define an interface for structured imprint fields
interface ImprintField {
  titleKey: string;
  contentKey?: string; // For simple text content from JSON
  isAddress?: boolean; // Special flag for address formatting
  isContact?: boolean; // Special flag for contact info (email, phone)
  isOnlineDisputeResolution?: boolean; // Special flag for ODR link
}

const fields: ImprintField[] = [
  {
    titleKey: "imprint.companyNameTitle",
    contentKey: "imprint.companyNameContent",
  },
  {
    titleKey: "imprint.companyFormTitle",
    contentKey: "imprint.companyFormContent",
  },
  {
    titleKey: "imprint.addressTitle",
    isAddress: true, // Mark for special rendering
  },
  {
    titleKey: "imprint.contactTitle",
    isContact: true, // Mark for special rendering
  },
  {
    titleKey: "imprint.companyRegisterNumberTitle",
    contentKey: "imprint.companyRegisterNumberContent",
  },
  {
    titleKey: "imprint.companyRegisterCourtTitle",
    contentKey: "imprint.companyRegisterCourtContent",
  },
  {
    titleKey: "imprint.uidNumberTitle",
    contentKey: "imprint.uidNumberContent",
  },
  {
    titleKey: "imprint.managingDirectorTitle",
    contentKey: "imprint.managingDirectorContent",
  },
  {
    titleKey: "imprint.businessPurposeTitle",
    contentKey: "imprint.businessPurposeContent",
  },
  {
    titleKey: "imprint.chamberMembershipTitle",
    contentKey: "imprint.chamberMembershipContent",
  },
  {
    titleKey: "imprint.mediaResponsibilityTitle",
    contentKey: "imprint.mediaResponsibilityContent",
  },
  {
    titleKey: "imprint.onlineDisputeResolutionTitle",
    isOnlineDisputeResolution: true, // Mark for special rendering
  },
  {
    titleKey: "imprint.disclaimerTitle",
    contentKey: "imprint.disclaimerContent",
  },
];

useHead({
  title: t("imprint.pageTitle"),
  meta: [
    { name: "description", content: t("imprint.pageDescription") },
    { name: "robots", content: "index,follow" },
  ],
});
</script>
