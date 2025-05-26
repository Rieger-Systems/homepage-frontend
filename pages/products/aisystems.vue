<template>
  <section class="bg-base-200 min-h-screen pt-16 pb-20">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Hero -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 50, scale: 0.98 },
          enter: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 50,
            },
          },
        }"
        class="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary to-secondary text-primary-content shadow-lg p-10 mb-16"
      >
        <div class="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div class="relative z-10 text-center max-w-2xl mx-auto">
          <SparklesIcon class="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h1 class="text-5xl text-primary font-bold mb-4 drop-shadow">
            {{ t("ai.hero.title") }}
          </h1>
          <p class="text-xl mb-6">
            {{ t("ai.hero.subtitle") }}
          </p>
          <div class="flex justify-center gap-4 mb-4 flex-wrap">
            <a href="#demo" class="btn btn-secondary btn-lg">
              {{ t("ai.hero.demo") }}
            </a>
            <a href="#beratung" class="btn btn-outline btn-lg">
              {{ t("ai.hero.consult") }}
            </a>
          </div>
        </div>
      </div>

      <!-- Warum A.M.A.R.A. -->
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
        class="prose prose-invert mx-auto mb-14 text-center"
      >
        <h2>{{ t("ai.why.headline") }}</h2>
        <p>
          <strong>{{ t("ai.why.text1") }}</strong>
        </p>
        <p>{{ t("ai.why.text2") }}</p>
      </div>

      <!-- Vorteile -->
      <div class="mb-14">
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
                delay: 200,
              },
            },
          }"
          class="text-2xl font-semibold text-primary mb-6 text-center"
        >
          {{ t("ai.advantagesTitle") }}
        </h2>
        <ul class="grid md:grid-cols-2 gap-4">
          <li
            v-for="(adv, idx) in t('ai.advantages')"
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
                  delay: 300 + idx * 80,
                },
              },
            }"
            class="flex items-start bg-base-100 shadow rounded-lg p-4"
          >
            <CheckCircleIcon
              class="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0"
            />
            <span>{{ adv }}</span>
          </li>
        </ul>
      </div>

      <!-- Use Cases -->
      <div>
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
          class="text-2xl font-semibold text-primary mb-6 text-center"
        >
          {{ t("ai.goalsTitle") }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(usecase, idx) in t('ai.useCases')"
            :key="idx"
            v-motion="{
              initial: { opacity: 0, y: 30 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 100,
                },
              },
            }"
            class="card bg-base-100 shadow border border-base-300 cursor-pointer transition-transform hover:scale-105"
            @click="activeUseCase = idx"
          >
            <div class="card-body">
              <h3 class="card-title text-primary">{{ usecase }}</h3>
              <p class="text-base-content/70">{{ usecase }}</p>
              <div
                v-if="activeUseCase === idx"
                class="mt-2 text-sm text-success"
              >
                <b>Mehr dazu:</b> {{ usecase }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Demo -->
      <div id="demo" class="pt-20 mb-16">
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
          class="text-2xl font-semibold text-primary mb-6 text-center"
        >
          {{ t("ai.liveDemo.title") }}
        </h2>
        <SentimentDemo
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
        />
      </div>

      <!-- Ethik -->
      <div class="mb-14">
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
          class="text-2xl font-semibold text-primary mb-6 text-center"
        >
          {{ t("ai.ethicsTitle") }}
        </h2>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="(eth, idx) in t('ai.ethics')"
            :key="idx"
            v-motion="{
              initial: { opacity: 0, scale: 0.8 },
              visibleOnce: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 70,
                },
              },
            }"
            class="bg-base-100 p-4 rounded-lg shadow flex items-center gap-2"
          >
            <ShieldCheckIcon class="w-6 h-6 text-primary" />
            <span>{{ eth }}</span>
          </div>
        </div>
      </div>

      <!-- Technische Basis -->
      <div class="mb-14">
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
          class="text-2xl font-semibold text-primary mb-6 text-center"
        >
          {{ t("ai.techTitle") }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(tech, idx) in techStack"
            :key="idx"
            v-motion="{
              initial: { opacity: 0, y: 40 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 200 + idx * 80,
                },
              },
            }"
            class="bg-base-100 p-6 rounded-lg shadow flex flex-col items-center"
          >
            <component :is="tech.icon" class="w-10 h-10 text-primary mb-2" />
            <span class="font-semibold text-base-content">{{
              tech.title
            }}</span>
            <span class="text-xs text-base-content/60 mt-1">{{
              tech.desc
            }}</span>
          </div>
        </div>
      </div>

      <!-- Stimmen / Testimonials -->
      <div class="mb-14 text-center">
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
          class="text-2xl font-semibold text-primary mb-6"
        >
          {{ t("ai.testimonialsTitle") }}
        </h2>
        <div
          v-motion="{
            initial: { opacity: 0, scale: 0.95 },
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
          class="flex justify-center"
        >
          <div
            class="max-w-xl bg-base-100 rounded-xl shadow-lg px-8 py-8 flex flex-col items-center opacity-80"
          >
            <ChatBubbleLeftEllipsisIcon class="w-10 h-10 text-secondary mb-4" />
            <p class="italic text-lg mb-2 leading-relaxed">
              {{ t("ai.noTestimonial") }}
            </p>
            <div class="mt-4">
              <a
                href="mailto:kontakt@rieger-systems.eu?subject=Feedback%20zu%20A.M.A.R.A."
                class="btn btn-secondary btn-sm"
              >
                Feedback geben
              </a>
            </div>
          </div>
        </div>
        <div
          v-motion="{
            initial: { opacity: 0, y: 10 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20,
                delay: 300,
              },
            },
          }"
          class="mt-6 text-base-content/60 text-sm"
        >
          {{ t("ai.firstTester") }}
        </div>
      </div>

      <!-- FAQ -->
      <div class="mb-16 max-w-2xl mx-auto">
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
          class="text-2xl font-semibold text-primary mb-6 text-center"
        >
          {{ t("ai.faqTitle") }}
        </h2>
        <div
          class="collapse bg-base-100 mb-2"
          v-for="(faq, idx) in faqs"
          :key="idx"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20,
                delay: 200 + idx * 80,
              },
            },
          }"
        >
          <input type="checkbox" class="peer" />
          <div class="collapse-title font-medium">
            {{ faq.q }}
          </div>
          <div class="collapse-content">
            <p>{{ faq.a }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        id="beratung"
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
        class="bg-primary text-primary-content rounded-xl p-8 text-center mt-16 shadow-lg"
      >
        <h3 class="text-2xl font-bold mb-2">
          {{ t("ai.consultCtaTitle") }}
        </h3>
        <p class="mb-4">
          {{ t("ai.consultCtaText") }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kontakt@rieger-systems.eu?subject=Beratung A.M.A.R.A."
            class="btn btn-secondary btn-lg"
            >{{ t("ai.consult") }}</a
          >
          <a
            href="/files/amara-whitepaper.pdf"
            class="btn btn-outline btn-lg"
            download
            >{{ t("ai.whitepaper") }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  SparklesIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  GlobeEuropeAfricaIcon,
  Cog6ToothIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";
import SentimentDemo from "~/components/sections/products/SentimentDemo.vue";

// i18n-Setup
const { t } = useI18n();

// UseCases und Advantages kommen direkt aus i18n:
const activeUseCase = ref(-1);

// Technischer Stack kann weiterhin als JS-Objekt gepflegt werden,
// da Icons nicht im i18n stehen sollten (sondern hier gemappt)
const techStack = [
  {
    icon: Cog6ToothIcon,
    title: "Microservices-Architektur",
    desc: "Java & Python",
  },
  {
    icon: ServerStackIcon,
    title: "Qdrant & Neo4j",
    desc: "Vektor- & Graphdatenbanken",
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: "100 % EU-Hosting",
    desc: "Keine US-Clouds, DSGVO",
  },
  {
    icon: SparklesIcon,
    title: "Open Source LLMs",
    desc: "Mistral, GBERT, BLOOM",
  },
  {
    icon: ShieldCheckIcon,
    title: "Auditierbare KI",
    desc: "Transparente Prozesse",
  },
  {
    icon: CheckCircleIcon,
    title: "API, REST & gRPC",
    desc: "Schnelle Integration",
  },
];

// Beispiel für FAQ-Mehrsprachigkeit
const faqs = [
  {
    q: "Wie unterscheidet sich A.M.A.R.A. von anderen KI-Lösungen?",
    a: "A.M.A.R.A. setzt auf vollständige Transparenz, nachvollziehbare Entscheidungen und europäischen Datenschutz – kein Vendor Lock-in, keine Black-Box.",
  },
  {
    q: "Wie werden meine Daten geschützt?",
    a: "Daten bleiben in Europa, werden pseudonymisiert und nie an Dritte weitergegeben. Sie entscheiden, wie und wo Daten verarbeitet werden.",
  },
  {
    q: "Kann ich A.M.A.R.A. in meine bestehende IT integrieren?",
    a: "Ja, via API, gRPC oder REST – flexibel und modular.",
  },
  {
    q: "Was kostet eine KI-Integration?",
    a: "Die Kosten richten sich nach Umfang und Modul – wir beraten ehrlich und erstellen transparente Angebote ohne Überraschungen.",
  },
];
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
.animate-pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
