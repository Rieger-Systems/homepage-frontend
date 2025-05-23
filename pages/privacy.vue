<template>
  <section
    class="max-w-screen-sm mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-base"
    role="main"
    aria-labelledby="privacy-heading"
  >
    <header v-motion-fade class="text-center mb-10 sm:mb-14">
      <h1
        id="privacy-heading"
        class="text-3xl sm:text-4xl font-semibold tracking-tight mb-1"
        tabindex="0"
      >
        {{ t("privacy.headerTitle") }}
      </h1>
      <p
        class="text-base-content/70 text-base max-w-prose mx-auto"
        tabindex="0"
      >
        {{ t("privacy.headerSubtitle") }}
      </p>
    </header>

    <article
      v-motion-slide-bottom
      class="relative bg-base-100 border-l-4 border-primary/70 rounded-lg px-4 sm:px-8 py-7 sm:py-10 flex flex-col gap-7 prose prose-invert dark:prose-invert max-w-prose mx-auto transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-base-100"
      tabindex="0"
      :aria-label="t('privacy.headerTitle')"
    >
      <div
        class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent rounded-l-lg pointer-events-none"
      ></div>

      <template v-for="(block, i) in sections" :key="block.titleKey">
        <section
          v-motion-fade
          :style="{ transitionDelay: `${0.09 + i * 0.04}s` }"
          class="flex flex-col gap-2 last:pb-0"
          tabindex="0"
          :aria-label="t(block.titleKey)"
        >
          <h2
            v-if="block.titleKey"
            class="!mb-1 !mt-0 !text-primary !text-lg font-semibold"
          >
            {{ t(block.titleKey) }}
          </h2>

          <template v-if="block.contentKey === 'section1'">
            <p class="leading-relaxed">
              {{ t("privacy.section1Company") }}<br />
              {{ t("privacy.section1Address") }}<br />
              {{ t("privacy.section1EmailLabel") }}
              <a
                :href="'mailto:' + emailAddress"
                class="text-primary hover:underline focus:underline outline-none"
                tabindex="0"
              >
                {{ emailAddress }}
              </a>
            </p>
          </template>

          <template
            v-else-if="
              block.contentKey === 'section4' ||
              block.contentKey === 'section6' ||
              block.contentKey === 'section9'
            "
          >
            <p v-if="block.contentKey === 'section4'" class="leading-relaxed">
              {{ t("privacy.section4Content1") }}
            </p>
            <p v-if="block.contentKey === 'section6'" class="leading-relaxed">
              <i18n-t keypath="privacy.section6Content1" tag="span">
                <template #umamiHighlight>
                  <strong>Umami</strong>
                </template>
              </i18n-t>
            </p>
            <p v-if="block.contentKey === 'section9'" class="leading-relaxed">
              {{ t("privacy.section9Content1") }}
            </p>

            <ul class="list-disc pl-5 mt-2 mb-2 leading-relaxed">
              <li
                v-for="(itemKey, idx) in block.listItems"
                :key="idx"
                class="mb-1"
              >
                {{ t(itemKey) }}
              </li>
            </ul>

            <p v-if="block.contentKey === 'section4'" class="leading-relaxed">
              {{ t("privacy.section4Content2") }}
            </p>
            <p v-if="block.contentKey === 'section4'" class="leading-relaxed">
              <strong>{{ t("privacy.section4LegalBasis") }}</strong>
            </p>
            <p v-if="block.contentKey === 'section6'" class="leading-relaxed">
              {{ t("privacy.section6Content2") }}
            </p>
            <p v-if="block.contentKey === 'section6'" class="leading-relaxed">
              <strong>{{ t("privacy.section6LegalBasis") }}</strong>
            </p>

            <template v-if="block.contentKey === 'section9'">
              <p class="leading-relaxed mt-4">
                {{ t("privacy.section9AuthorityLabel") }}<br />
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:underline focus:underline outline-none"
                  tabindex="0"
                >
                  {{ t("privacy.section9AuthorityLinkText") }}
                </a>
              </p>
            </template>
          </template>

          <template v-else-if="block.contentKey === 'section8a'">
            <p class="leading-relaxed">
              <i18n-t keypath="privacy.section8aContent1" tag="span">
                <template #notStoredHighlight>
                  <strong>nicht im Klartext gespeichert</strong>
                </template>
              </i18n-t>
            </p>
            <p class="leading-relaxed">
              {{ t("privacy.section8aContent2") }}
            </p>
            <p class="leading-relaxed">
              <i18n-t keypath="privacy.section8aContent3" tag="span">
                <template #noProfileHighlight>
                  <strong>keine Profilbildung</strong>
                </template>
                <template #noDataMergeHighlight>
                  <strong>keine Zusammenführung mit anderen Daten</strong>
                </template>
                <template #noThirdPartyHighlight>
                  <strong>keine Weitergabe an Dritte</strong>
                </template>
              </i18n-t>
            </p>
            <p class="leading-relaxed">
              <strong>{{ t("privacy.section8aLegalBasis") }}</strong>
            </p>
          </template>

          <template v-else>
            <p
              v-for="(contentKey, idx) in Array.isArray(block.contentKey)
                ? block.contentKey
                : [block.contentKey]"
              :key="idx"
              class="leading-relaxed"
            >
              {{ t(contentKey) }}
            </p>
          </template>
        </section>
      </template>
    </article>
  </section>
</template>

<style scoped>
/* Your existing styles */
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
.prose ul {
  padding-left: 1.2em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useHead } from "#app";

const { t } = useI18n();

const emailAddress = "kontakt@rieger-systems.eu"; // Keep email here

// Define interfaces for better type safety
interface PrivacySection {
  titleKey: string;
  contentKey: string | string[]; // Can be a single key or an array of keys
  listItems?: string[]; // Optional array of keys for list items
}

const sections: PrivacySection[] = [
  {
    titleKey: "privacy.section1Title",
    contentKey: "section1", // Special handling for address/email
  },
  {
    titleKey: "privacy.section2Title",
    contentKey: "privacy.section2Content",
  },
  {
    titleKey: "privacy.section3Title",
    contentKey: ["privacy.section3Content1", "privacy.section3Content2"], // Array of keys for multiple paragraphs
  },
  {
    titleKey: "privacy.section4Title",
    contentKey: "section4", // Special handling for list
    listItems: [
      "privacy.section4ListItem1",
      "privacy.section4ListItem2",
      "privacy.section4ListItem3",
      "privacy.section4ListItem4",
    ],
  },
  {
    titleKey: "privacy.section5Title",
    contentKey: [
      "privacy.section5Content1",
      "privacy.section5Content2",
      "privacy.section5LegalBasis",
    ], // Array of keys
  },
  {
    titleKey: "privacy.section6Title",
    contentKey: "section6", // Special handling for list and highlight
    listItems: [
      "privacy.section6ListItem1",
      "privacy.section6ListItem2",
      "privacy.section6ListItem3",
      "privacy.section6ListItem4",
    ],
  },
  {
    titleKey: "privacy.section7Title",
    contentKey: "privacy.section7Content",
  },
  {
    titleKey: "privacy.section8Title",
    contentKey: "privacy.section8Content",
  },
  {
    titleKey: "privacy.section8aTitle",
    contentKey: "section8a", // Special handling for highlights
  },
  {
    titleKey: "privacy.section9Title",
    contentKey: "section9", // Special handling for list and external link
    listItems: [
      "privacy.section9ListItem1",
      "privacy.section9ListItem2",
      "privacy.section9ListItem3",
      "privacy.section9ListItem4",
      "privacy.section9ListItem5",
      "privacy.section9ListItem6",
      "privacy.section9ListItem7",
    ],
  },
  {
    titleKey: "privacy.section10Title",
    contentKey: "privacy.section10Content",
  },
];

useHead({
  title: t("privacy.pageTitle"),
  meta: [
    { name: "description", content: t("privacy.pageDescription") },
    { name: "robots", content: "index,follow" },
  ],
});
</script>
