<template>
  <section class="bg-base-200 min-h-screen pt-16 pb-20">
    <div class="container mx-auto px-4 max-w-7xl">
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
          <SparklesIcon
            v-motion="{
              initial: { opacity: 0, scale: 0.8 },
              enter: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 250,
                  damping: 25,
                  delay: 200,
                },
              },
            }"
            class="w-16 h-16 mx-auto mb-4 animate-pulse"
          />
          <h1
            v-motion="{
              initial: { opacity: 0, y: 20 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                  delay: 300,
                },
              },
            }"
            class="text-5xl text-primary font-bold mb-4 drop-shadow"
          >
            A.M.A.R.A. – KI mit Haltung
          </h1>
          <p
            v-motion="{
              initial: { opacity: 0, y: 20 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 180,
                  damping: 25,
                  delay: 400,
                },
              },
            }"
            class="text-xl mb-6"
          >
            Entwickelt für Menschen, nicht für Märkte.<br />
            KI, die Verantwortung trägt. Für Sie, für Europa, für die Zukunft.
          </p>
          <div
            v-motion="{
              initial: { opacity: 0, y: 20 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 500,
                },
              },
            }"
            class="flex justify-center gap-4 mb-4 flex-wrap"
          >
            <a href="#demo" class="btn btn-secondary btn-lg"
              >Live-Demo ausprobieren</a
            >
            <a href="#beratung" class="btn btn-outline btn-lg"
              >Jetzt beraten lassen</a
            >
          </div>
        </div>
      </div>

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
        <h2>Warum A.M.A.R.A.?</h2>
        <p>
          <b
            >Künstliche Intelligenz darf nicht nur mächtig, sondern muss auch
            menschlich und nachvollziehbar sein.</b
          ><br />
          Unsere KI begleitet, analysiert, empfiehlt – aber sie ersetzt und
          manipuliert niemals. A.M.A.R.A. wurde geschaffen, um den Menschen zu
          stärken und Technologie wieder ins Zentrum der europäischen Werte zu
          rücken.
        </p>
      </div>

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
          Ihre Vorteile mit A.M.A.R.A.
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
                  delay: 300 + idx * 80, // Staggered from left
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

      <div class="">
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
          Was möchten Sie erreichen?
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(usecase, idx) in useCases"
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
                  delay: 200 + idx * 100, // Staggered from bottom
                },
              },
            }"
            class="card bg-base-100 shadow border border-base-300 cursor-pointer transition-transform hover:scale-105"
            @click="activeUseCase = idx"
          >
            <div class="card-body">
              <h3 class="card-title text-primary">{{ usecase.title }}</h3>
              <p class="text-base-content/70">{{ usecase.desc }}</p>
              <div
                v-if="activeUseCase === idx"
                class="mt-2 text-sm text-success"
              >
                <b>Mehr dazu:</b> {{ usecase.details }}
              </div>
            </div>
          </div>
        </div>
      </div>

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
          Live-Demo: Stimmungsanalyse
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
          Ethische Prinzipien
        </h2>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="(eth, idx) in ethics"
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
                  delay: 200 + idx * 70, // Staggered scale/fade
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
          Technische Basis & Architektur
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
                  delay: 200 + idx * 80, // Staggered from bottom
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
          Stimmen aus der Praxis
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
              Noch keine Erfahrungsberichte vorhanden.<br />
              <span class="text-base-content/60">
                Wir freuen uns auf Ihr Feedback!
              </span>
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
          Sie sind einer der ersten Tester. Ihre Meinung hilft uns, besser zu
          werden!
        </div>
      </div>

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
          Häufige Fragen
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
                delay: 200 + idx * 80, // Staggered collapse items
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
          Bereit für verantwortungsvolle KI?
        </h3>
        <p class="mb-4">
          Jetzt Demo buchen, Whitepaper anfordern oder persönlich beraten
          lassen:
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kontakt@rieger-systems.eu?subject=Beratung A.M.A.R.A."
            class="btn btn-secondary btn-lg"
            >Beratung anfragen</a
          >
          <a
            href="/files/amara-whitepaper.pdf"
            class="btn btn-outline btn-lg"
            download
            >Whitepaper downloaden</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

const advantages = [
  "Keine Black-Box – Entscheidungen nachvollziehbar",
  "DSGVO-konform, keine Datenübertragung in Drittländer",
  "Modular & flexibel für individuelle Use Cases",
  "Pseudonymisierung & Datenschutz garantiert",
  "Integration via API, gRPC, REST",
  "Betreut & entwickelt in Europa",
];

const useCases = [
  {
    title: "Textanalyse (NLP)",
    desc: "Stimmungs-, Themen- und Sentiment-Analyse für Ihre Texte.",
    details:
      "Unsere KI erkennt Themen, Emotionen und Stimmungen in beliebigen Texten, egal ob Feedback, Supportanfragen oder medizinische Dokumentation.",
  },
  {
    title: "Spracherkennung & Transkription",
    desc: "Automatische Transkription von Sprache in Text.",
    details:
      "Ideal für Arztbriefe, Meetings, Dokumentation oder Barrierefreiheit. DSGVO-konform, keine US-Cloud.",
  },
  {
    title: "Individuelle KI-Workflows",
    desc: "Spezielle Lösungen für Unternehmen, Forschung & Medizin.",
    details:
      "Von Chatbots bis Workflow-Automatisierung. Auf Wunsch auch komplett On-Premise.",
  },
  {
    title: "Ethikberatung für KI-Projekte",
    desc: "Unterstützung bei der Einführung und Auditierung von KI-Systemen.",
    details:
      "Workshops, Gutachten und Reviews – damit Ihre KI fair, transparent und rechtssicher bleibt.",
  },
];

const activeUseCase = ref(-1);

const demoText = ref("");
const demoResult = ref("");
const demoLoading = ref(false);
function normalizeText(text: string) {
  // Entfernt Sonderzeichen/Umlaute, nur Wortstämme
  return text
    .toLowerCase()
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^a-zA-Z0-9\s]/g, " ");
}

const positiveWords = [
  "danke",
  "super",
  "gluecklich",
  "glücklich",
  "zufrieden",
  "toll",
  "gut",
  "prima",
  "liebe",
  "stark",
  "positiv",
  "begeistert",
  "genial",
  "empfohlen",
  "schoen",
  "schön",
  "hilfreich",
  "freundlich",
  "top",
  "empfehlen",
  "exzellent",
];

const negativeWords = [
  "schlecht",
  "problem",
  "traurig",
  "unzufrieden",
  "stress",
  "wut",
  "boese",
  "böse",
  "haesslich",
  "hässlich",
  "negativ",
  "kritik",
  "enttäuscht",
  "enttaeuscht",
  "mist",
  "enttaeuschend",
  "fehler",
  "genervt",
  "schrecklich",
  "alarm",
  "warnung",
];

function analyzeDemo() {
  demoLoading.value = true;
  setTimeout(() => {
    const text = demoText.value;
    if (!text.trim()) {
      demoResult.value = "Bitte Text eingeben.";
      demoLoading.value = false;
      return;
    }
    const norm = normalizeText(text);

    let posScore = 0,
      negScore = 0;
    positiveWords.forEach((word) => {
      if (norm.includes(word)) posScore++;
    });
    negativeWords.forEach((word) => {
      if (norm.includes(word)) negScore++;
    });

    let result, emoji, score;
    if (posScore === 0 && negScore === 0) {
      result = "Neutral 🤔";
      score = 0;
    } else if (posScore > 0 && negScore === 0) {
      emoji = posScore > 2 ? "😃" : "🙂";
      result = `Positiv ${emoji}`;
      score = posScore;
    } else if (negScore > 0 && posScore === 0) {
      emoji = negScore > 2 ? "😡" : "🙁";
      result = `Negativ ${emoji}`;
      score = -negScore;
    } else {
      result = "Unsicher/zwiespältig 😐";
      score = posScore - negScore;
    }
    // Optionale Score-Anzeige
    demoResult.value = `${result} ${score !== 0 ? `(Score: ${score})` : ""}`;
    demoLoading.value = false;
  }, 500);
}

const ethics = [
  "Kein US-Hosting, keine Black-Box-Modelle",
  "Transparente, auditierbare Prozesse",
  "Entwickelt & betreut in Europa",
  "Entscheidungen jederzeit nachvollziehbar",
  "100 % DSGVO-konform",
  "Technik, die Menschen stärkt – nicht ersetzt",
];

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

const testimonials = [
  {
    text: "A.M.A.R.A. hat uns erstmals ermöglicht, KI wirklich nachvollziehbar und sicher einzusetzen – ein echtes Vorzeigeprojekt!",
    name: "Dr. Anna Weber",
    role: "Leitung Digitalisierung, Klinikverbund",
  },
  {
    text: "Mit der Ethikberatung von Rieger Systems konnten wir unser Forschungsprojekt EU-konform und transparent gestalten.",
    name: "Prof. Markus Eder",
    role: "Forschung KI & Ethik, Universität",
  },
  {
    text: "Die Integration war überraschend schnell – und unser Support wird endlich entlastet!",
    name: "J. Mayer",
    role: "IT-Leitung, Mittelständisches Unternehmen",
  },
];
const activeTestimonial = ref(0);

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
/* Nur @keyframes für 'pulse' behalten, da dies eine spezifische CSS-Animation ist */
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
