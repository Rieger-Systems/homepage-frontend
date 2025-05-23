<script setup lang="ts">
import FaqItem from "~/components/sections/faq/FaqItem.vue";
import { NuxtLink } from "#components";
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";

const { t } = useI18n();
const localePath = useLocalePath();

// Define the email address directly in the component script
const emailAddress = "kontakt@rieger-systems.eu";

// Define an interface for the link object to include isEmail as optional
interface FaqLink {
  textKey: string;
  to: string;
  isEmail?: boolean; // Make isEmail optional
}

// Define an interface for each FAQ item
interface FaqItemData {
  questionKey: string;
  answerKey: string;
  link1?: FaqLink; // Make link1 optional
  link2?: FaqLink; // Make link2 optional
}

const faqs: FaqItemData[] = [
  // Apply the FaqItemData type to the faqs array
  {
    questionKey: "faq.question1",
    answerKey: "faq.answer1",
  },
  {
    questionKey: "faq.question2",
    answerKey: "faq.answer2",
  },
  {
    questionKey: "faq.question3",
    answerKey: "faq.answer3",
  },
  {
    questionKey: "faq.question4",
    answerKey: "faq.answer4",
  },
  {
    questionKey: "faq.question5",
    answerKey: "faq.answer5",
  },
  {
    questionKey: "faq.question6",
    answerKey: "faq.answer6",
  },
  {
    questionKey: "faq.question7",
    answerKey: "faq.question7",
    link1: {
      textKey: "faq.careerLinkText",
      to: localePath("/jobs"),
      // isEmail is implicitly false (undefined) if not present, which is correct for NuxtLink
    },
  },
  {
    questionKey: "faq.question8",
    answerKey: "faq.question8",
    link1: {
      textKey: "faq.contactFormText",
      to: localePath("/contact"),
    },
    link2: {
      textKey: emailAddress,
      to: "mailto:" + emailAddress,
      isEmail: true, // Explicitly true for email links
    },
  },
  {
    questionKey: "faq.question9",
    answerKey: "faq.answer9",
  },
  {
    questionKey: "faq.question10",
    answerKey: "faq.answer10",
  },
];

import { useHead } from "#app";
useHead({
  title: t("faq.pageTitle"),
  meta: [
    { name: "description", content: t("faq.pageDescription") },
    { name: "robots", content: "index,follow" },
  ],
});
</script>

<template>
  <section class="max-w-screen-md mx-auto px-6 py-24 text-sm">
    <div class="text-center mb-12">
      <h1 v-motion-fade class="text-4xl font-semibold tracking-tight">
        {{ t("faq.headerTitle") }}
      </h1>
      <p
        v-motion-fade
        :style="{ transitionDelay: '0.13s' }"
        class="text-gray-400 mt-2 text-base"
      >
        {{ t("faq.headerSubtitle") }}
      </p>
    </div>

    <div class="join join-vertical w-full space-y-2">
      <template v-for="(faq, i) in faqs" :key="faq.questionKey">
        <div v-motion-fade :style="{ transitionDelay: `${0.09 + i * 0.04}s` }">
          <FaqItem :question="t(faq.questionKey)">
            <p class="text-sm text-base-content/70 leading-relaxed">
              {{ t(faq.answerKey) }}
            </p>

            <div class="mt-4 flex flex-col gap-2" v-if="faq.link1 || faq.link2">
              <template v-if="faq.link1">
                <NuxtLink
                  v-if="!faq.link1.isEmail"
                  :to="faq.link1.to"
                  class="underline hover:text-primary"
                >
                  {{ t(faq.link1.textKey) }}
                </NuxtLink>
                <a
                  v-else
                  :href="faq.link1.to"
                  class="underline hover:text-primary"
                >
                  {{ t(faq.link1.textKey) }}
                </a>
              </template>
              <template v-if="faq.link2">
                <NuxtLink
                  v-if="!faq.link2.isEmail"
                  :to="faq.link2.to"
                  class="underline hover:text-primary"
                >
                  {{ t(faq.link2.textKey) }}
                </NuxtLink>
                <a
                  v-else
                  :href="faq.link2.to"
                  class="underline hover:text-primary"
                >
                  {{ t(faq.link2.textKey) }}
                </a>
              </template>
            </div>
          </FaqItem>
        </div>
      </template>
    </div>
  </section>
</template>
