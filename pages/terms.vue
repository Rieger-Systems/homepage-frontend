<template>
  <section
    class="max-w-screen-sm mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-base"
    role="main"
    aria-labelledby="agb-heading"
  >
    <header v-motion-fade class="text-center mb-10 sm:mb-14">
      <h1
        id="agb-heading"
        class="text-3xl sm:text-4xl font-semibold tracking-tight mb-1"
        tabindex="0"
      >
        {{ t("terms.headerTitle") }}
      </h1>
      <p
        class="text-base-content/70 text-base max-w-prose mx-auto"
        tabindex="0"
      >
        {{ t("terms.headerDate") }}
      </p>
    </header>

    <article
      v-motion-slide-bottom
      class="relative bg-base-100 border-l-4 border-primary/70 rounded-lg px-4 sm:px-8 py-7 sm:py-10 flex flex-col gap-7 prose prose-invert dark:prose-invert max-w-prose mx-auto transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-base-100"
      tabindex="0"
      :aria-label="t('terms.headerTitle')"
    >
      <div
        class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent rounded-l-lg pointer-events-none"
      ></div>

      <template v-for="(section, i) in sections" :key="section.titleKey">
        <section
          v-motion-fade
          :style="{ transitionDelay: `${0.09 + i * 0.04}s` }"
          class="flex flex-col gap-2 last:pb-0"
          tabindex="0"
          :aria-label="t(section.titleKey)"
        >
          <h2
            v-if="section.titleKey"
            class="!mb-1 !mt-0 !text-primary !text-lg font-semibold"
          >
            {{ t(section.titleKey) }}
          </h2>
          <template v-if="section.contentKey === 'terms.section7Content'">
            <p class="leading-relaxed">
              <i18n-t :keypath="section.contentKey" tag="span">
                <template #privacyPolicyLink>
                  <NuxtLink
                    :to="localePath('/privacy')"
                    class="text-primary hover:underline focus:underline outline-none"
                    tabindex="0"
                  >
                    {{ t("terms.privacyPolicyLinkText") }}
                  </NuxtLink>
                </template>
              </i18n-t>
            </p>
          </template>
          <template v-else-if="section.contentKey === 'terms.section10Content'">
            <p class="leading-relaxed">
              {{ t("terms.section10Company") }}<br />
              {{ t("terms.section10AddressLine1") }}<br />
              {{ t("terms.section10AddressLine2") }}<br />
              {{ t("terms.section10EmailLabel") }}
              <a
                :href="'mailto:' + emailAddress"
                class="text-primary hover:underline focus:underline outline-none"
                tabindex="0"
              >
                {{ emailAddress }}
              </a>
            </p>
          </template>
          <template v-else-if="Array.isArray(section.contentKey)">
            <p
              v-for="(key, idx) in section.contentKey"
              :key="idx"
              class="leading-relaxed"
            >
              {{ t(key) }}
            </p>
          </template>
          <template v-else>
            <p class="leading-relaxed">
              {{ t(section.contentKey) }}
            </p>
          </template>
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
.prose ul {
  padding-left: 1.2em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { NuxtLink } from "#components";
import { useHead } from "#app";
import { useLocalePath } from "#i18n";

const { t } = useI18n();
const localePath = useLocalePath();

const emailAddress = "kontakt@rieger-systems.eu"; // Keep email here

interface Section {
  titleKey: string;
  contentKey: string | string[]; // Can be a single key or an array of keys
}

const sections: Section[] = [
  {
    titleKey: "terms.section1Title",
    contentKey: "terms.section1Content",
  },
  {
    titleKey: "terms.section2Title",
    contentKey: "terms.section2Content",
  },
  {
    titleKey: "terms.section3Title",
    contentKey: "terms.section3Content",
  },
  {
    titleKey: "terms.section4Title",
    contentKey: "terms.section4Content",
  },
  {
    titleKey: "terms.section5Title",
    contentKey: "terms.section5Content",
  },
  {
    titleKey: "terms.section6Title",
    contentKey: "terms.section6Content",
  },
  {
    titleKey: "terms.section7Title",
    contentKey: "terms.section7Content", // This will be handled by i18n-t
  },
  {
    titleKey: "terms.section8Title",
    contentKey: "terms.section8Content",
  },
  {
    titleKey: "terms.section9Title",
    contentKey: [
      // Split into multiple content keys for better flexibility
      "terms.section9Content1",
      "terms.section9Content2",
      "terms.section9Content3",
    ],
  },
  {
    titleKey: "terms.section10Title",
    contentKey: "terms.section10Content", // Handled separately in template for address/email
  },
];

useHead({
  title: t("terms.pageTitle"),
  meta: [
    { name: "description", content: t("terms.pageDescription") },
    { name: "robots", content: "index,follow" },
  ],
});
</script>
