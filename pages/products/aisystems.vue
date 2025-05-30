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
            <a :href="localePath('/contact')" class="btn btn-outline btn-lg">
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
            v-for="(adv, idx) in advantages"
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
        <div class="">
          <table
            class="table w-full bg-base-100 rounded-2xl shadow-lg border-separate border-spacing-y-2"
          >
            <thead>
              <tr>
                <th class="text-primary text-lg bg-base-200">Use Case</th>
                <th class="text-lg bg-base-200"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(uc, idx) in useCases"
                :key="idx"
                v-motion="{
                  initial: { opacity: 0, x: 40 },
                  visibleOnce: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 150,
                      damping: 22,
                      delay: 150 + idx * 60,
                    },
                  },
                }"
                class="group hover:bg-primary/10 transition duration-200"
              >
                <!-- Farbakzent am linken Rand -->
                <td class="font-semibold relative rounded-l-xl pl-4 md:pl-6">
                  <div
                    class="absolute left-0 top-0 h-full w-1 bg-primary rounded-l-xl"
                  ></div>
                  {{ uc.title }}
                </td>

                <td class="text-base-content/80 rounded-r-xl">{{ uc.desc }}</td>
              </tr>
            </tbody>
          </table>
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
                Feedback
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
      <CallToAction />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
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
import CallToAction from "~/components/sections/products/CallToAction.vue";
import { useLocalePath } from "#i18n";

const { t, locale } = useI18n();
const localePath = useLocalePath();

const activeUseCase = ref(-1);

const techStack = computed(() => {
  if (locale.value === "en") {
    return [
      {
        icon: Cog6ToothIcon,
        title: "Microservices architecture",
        desc: "Java & Python",
      },
      {
        icon: ServerStackIcon,
        title: "Qdrant & Neo4j",
        desc: "Vector & graph databases",
      },
      {
        icon: GlobeEuropeAfricaIcon,
        title: "100% EU hosting",
        desc: "No US clouds, GDPR-compliant",
      },
      {
        icon: SparklesIcon,
        title: "Open-source LLMs",
        desc: "Fine-tuned european models",
      },
      {
        icon: ShieldCheckIcon,
        title: "Auditable AI",
        desc: "Transparent processes",
      },
      {
        icon: CheckCircleIcon,
        title: "API, REST & gRPC",
        desc: "Fast integration",
      },
    ];
  }
  // Default: Deutsch
  return [
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
      title: "Open-Source LLMs",
      desc: "Feingetunte europäische Modelle",
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
});

const advantages = computed(() =>
  locale.value === "en"
    ? [
        "100% GDPR-compliant & EU hosting",
        "No black box: Auditable & transparent",
        "Open source & vendor lock-in free",
        "True integration via REST & gRPC",
        "Scalable for any business size",
        "Personal consulting & support",
        "Fast implementation and flexible adaptation",
        "Modular and grows with your requirements",
        "Ethics and sustainability in focus",
        "Interdisciplinary teams & experience",
      ]
    : [
        "100 % DSGVO-konform & EU-Hosting",
        "Keine Black-Box: Auditierbar & transparent",
        "Open Source & Vendor Lock-in-frei",
        "Echte Integration via REST & gRPC",
        "Skalierbar für jede Unternehmensgröße",
        "Persönliche Beratung & Support",
        "Schnelle Implementierung und flexible Anpassung",
        "Modular erweiterbar – wächst mit Ihren Anforderungen",
        "Ethik und Nachhaltigkeit im Fokus",
        "Interdisziplinäre Teams & Erfahrung",
      ]
);

const useCases = computed(() =>
  locale.value === "en"
    ? [
        {
          title: "Automated patient assistance",
          desc: "24/7 support for patients via chat, voice, or digital diary.",
        },
        {
          title: "AI-powered data analysis",
          desc: "Turn raw data into actionable insights for healthcare, admin, or business.",
        },
        {
          title: "Data privacy-compliant communication",
          desc: "Secure, GDPR-compliant messaging and documentation between all parties.",
        },
        {
          title: "Custom AI for your company",
          desc: "Bespoke AI solutions for unique challenges – no black box.",
        },
        {
          title: "Intelligent document processing and classification",
          desc: "Automate paperwork: recognize, sort, and understand complex documents.",
        },
        {
          title: "Personalized health recommendations",
          desc: "Deliver safe, data-driven guidance tailored to each individual.",
        },
        {
          title: "Ethics-compliant chatbots and virtual assistants",
          desc: "Helpful, human-like digital companions that respect your values.",
        },
        {
          title: "Integration with existing IT via REST or gRPC",
          desc: "Easy, secure connectivity with your current digital infrastructure.",
        },
        {
          title: "Predictive analytics for therapy planning",
          desc: "AI helps professionals identify trends and improve care quality.",
        },
        {
          title: "Emotion and sentiment analysis in conversations",
          desc: "Detect moods, stress, and needs early – always transparent.",
        },
        {
          title: "Early warning systems for mental health",
          desc: "Recognize warning signs and provide timely support suggestions.",
        },
        {
          title: "GDPR-compliant automation of routine tasks",
          desc: "Save time on repetitive processes – with full legal security.",
        },
        {
          title: "Real-time support for therapists and doctors",
          desc: "AI as a silent assistant: summarizing, structuring, or prepping cases.",
        },
        {
          title: "Secure, explainable AI for sensitive sectors",
          desc: "Audit-proof, transparent, and safe for health, finance, and more.",
        },
        {
          title: "Audit trails for every AI decision",
          desc: "Every AI suggestion is documented, traceable, and explainable.",
        },
      ]
    : [
        {
          title: "Automatisierte Patientenassistenz",
          desc: "24/7-Unterstützung für Patienten per Chat, Sprache oder digitales Tagebuch.",
        },
        {
          title: "KI-gestützte Datenanalyse",
          desc: "Rohdaten werden zu konkreten Erkenntnissen – im Gesundheitswesen, Verwaltung oder Business.",
        },
        {
          title: "Datenschutzkonforme Kommunikation",
          desc: "Sichere, DSGVO-konforme Nachrichten und Dokumentation für alle Beteiligten.",
        },
        {
          title: "Individuelle KI-Lösungen für Ihr Unternehmen",
          desc: "Maßgeschneiderte KI für Ihre besonderen Herausforderungen – ohne Black-Box.",
        },
        {
          title: "Intelligente Dokumentenverarbeitung und Klassifikation",
          desc: "Papierkram automatisieren: erkennen, sortieren und verstehen – auch komplexe Fälle.",
        },
        {
          title: "Personalisierte Gesundheitsempfehlungen",
          desc: "Sichere, datengestützte Empfehlungen – auf jede Person zugeschnitten.",
        },
        {
          title: "Ethikkonforme Chatbots und virtuelle Assistenten",
          desc: "Hilfreiche, menschlich wirkende Begleiter – immer im Einklang mit Ihren Werten.",
        },
        {
          title: "Integration in bestehende IT via REST oder gRPC",
          desc: "Einfache, sichere Anbindung an Ihre bestehende Systemlandschaft.",
        },
        {
          title: "Prädiktive Analysen für Therapieplanung",
          desc: "Trends und Muster erkennen, Versorgung gezielt verbessern.",
        },
        {
          title: "Emotions- und Sentimentanalyse in Gesprächen",
          desc: "Stimmungen, Stress und Bedürfnisse frühzeitig erkennen – immer transparent.",
        },
        {
          title: "Frühwarnsysteme für psychische Gesundheit",
          desc: "Warnsignale erkennen und zeitnah Unterstützung vorschlagen.",
        },
        {
          title: "DSGVO-konforme Automatisierung von Routinetätigkeiten",
          desc: "Zeitersparnis bei Standardprozessen – mit voller Rechtssicherheit.",
        },
        {
          title: "Echtzeit-Unterstützung für Therapeuten und Ärzte",
          desc: "KI als stiller Assistent: Zusammenfassen, strukturieren, vorbereiten.",
        },
        {
          title: "Sichere, erklärbare KI für sensible Bereiche",
          desc: "Prüfbar, transparent und sicher – für Gesundheit, Finanzen und mehr.",
        },
        {
          title: "Lückenlose Audit-Trails für jede KI-Entscheidung",
          desc: "Jeder Vorschlag ist dokumentiert, nachvollziehbar und erklärbar.",
        },
      ]
);

const faqs = computed(() => {
  if (locale.value === "en") {
    return [
      {
        q: "How is A.M.A.R.A. different from other AI solutions?",
        a: "A.M.A.R.A. is fully transparent, explainable, and compliant with European data protection standards – no vendor lock-in, no black box.",
      },
      {
        q: "How is my data protected?",
        a: "Data stays in Europe, is pseudonymized, and is never shared with third parties. You decide how and where your data is processed.",
      },
      {
        q: "Can I integrate A.M.A.R.A. into my existing IT?",
        a: "Yes, via API, gRPC, or REST – flexible and modular.",
      },
      {
        q: "What does an AI integration cost?",
        a: "The cost depends on scope and modules – we advise honestly and provide transparent offers without surprises.",
      },
    ];
  }
  // Standard: Deutsch
  return [
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
      a: "Ja, via API, gRPC oder REST - flexibel und modular.",
    },
    {
      q: "Was kostet eine KI-Integration?",
      a: "Die Kosten richten sich nach Umfang und Modul - wir beraten ehrlich und erstellen transparente Angebote ohne Überraschungen.",
    },
  ];
});
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
