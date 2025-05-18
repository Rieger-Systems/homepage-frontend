<template>
  <section
    class="max-w-screen-sm mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-base"
    role="main"
    aria-labelledby="imprint-heading"
  >
    <!-- Header animiert -->
    <FadeIn>
      <header class="text-center mb-10 sm:mb-14">
        <h1
          id="imprint-heading"
          class="text-3xl sm:text-4xl font-semibold tracking-tight mb-1"
          tabindex="0"
        >
          Impressum
        </h1>
        <p
          class="text-base-content/70 text-base max-w-prose mx-auto"
          tabindex="0"
        >
          Rechtliche Angaben gemäß §5 ECG, §14 UGB und §25 Mediengesetz
        </p>
      </header>
    </FadeIn>

    <!-- Card mit Farbakzent, Animation, Fokus-Ring -->
    <SlideFadeIn :direction="'up'" :distance="36" :duration="0.7">
      <article
        class="relative bg-base-100 border-l-4 border-primary/70 rounded-lg px-4 sm:px-8 py-7 sm:py-10 flex flex-col gap-7 prose prose-invert dark:prose-invert max-w-prose mx-auto transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-base-100"
        tabindex="0"
        aria-label="Impressum"
      >
        <!-- Farbverlauf-Balken links -->
        <div
          class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent rounded-l-lg pointer-events-none"
        ></div>

        <!-- Dynamische Abschnitte mit FadeIn -->
        <template v-for="(block, i) in fields" :key="block.title">
          <FadeIn :delay="0.09 + i * 0.04">
            <section
              class="flex flex-col gap-2 last:pb-0"
              tabindex="0"
              :aria-label="block.title"
            >
              <h2
                v-if="block.title"
                class="!mb-1 !mt-0 !text-primary !text-lg font-semibold"
              >
                {{ block.title }}
              </h2>
              <div
                v-if="block.html"
                v-html="block.html"
                class="leading-relaxed"
              />
              <div v-else class="leading-relaxed">{{ block.content }}</div>
            </section>
          </FadeIn>
        </template>
      </article>
    </SlideFadeIn>
  </section>
</template>

<script setup lang="ts">
import FadeIn from "~/components/ui/transition/FadeIn.vue";
import SlideFadeIn from "~/components/ui/transition/SlideFadeIn.vue";

const fields = [
  { title: "Unternehmensname", content: "Rieger Systems GmbH (in Gründung)" },
  {
    title: "Unternehmensform",
    content:
      "Gesellschaft mit beschränkter Haftung (GmbH), gründungsprivilegiert",
  },
  {
    title: "Anschrift",
    html: `Musterstraße 12<br>1234 Beispielstadt, Österreich`,
  },
  {
    title: "Kontakt",
    html: `E-Mail: <a href="mailto:kontakt@rieger-systems.eu" class="text-primary hover:underline focus:underline outline-none" tabindex="0">kontakt@rieger-systems.eu</a><br>Tel: +43 660 1234567`,
  },
  { title: "Firmenbuchnummer", content: "in Vorbereitung" },
  { title: "Firmenbuchgericht", content: "Handelsgericht Wien" },
  { title: "UID-Nummer", content: "in Vorbereitung" },
  { title: "Geschäftsführer", content: "Tobias Rieger" },
  {
    title: "Unternehmensgegenstand",
    content: "Entwicklung und Betrieb von Software- und KI-Systemen",
  },
  {
    title: "Mitglied der Wirtschaftskammer",
    content: "Wirtschaftskammer Österreich – Sparte Information & Consulting",
  },
  {
    title: "Inhaltlich verantwortlich gemäß §25 MedienG",
    content: "Tobias Rieger, Anschrift wie oben",
  },
  {
    title: "Online-Streitbeilegung (EU)",
    html: `Plattform der EU-Kommission: <a href="https://ec.europa.eu/consumers/odr" class="text-primary hover:underline focus:underline outline-none" target="_blank" rel="noopener noreferrer" tabindex="0">https://ec.europa.eu/consumers/odr</a>`,
  },
  {
    title: "Haftungsausschluss",
    content:
      "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
  },
];

definePageMeta({
  title: "Impressum – Rieger Systems",
  description:
    "Rechtliche Angaben gemäß §5 ECG für die Website von Rieger Systems.",
  robots: "index,follow",
});
</script>

<style scoped>
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
