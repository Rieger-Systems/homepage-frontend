<template>
  <section
    class="max-w-screen-sm mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-base"
    role="main"
    aria-labelledby="agb-heading"
  >
    <!-- Header: Motion Fade -->
    <header v-motion-fade class="text-center mb-10 sm:mb-14">
      <h1
        id="agb-heading"
        class="text-3xl sm:text-4xl font-semibold tracking-tight mb-1"
        tabindex="0"
      >
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>
      <p
        class="text-base-content/70 text-base max-w-prose mx-auto"
        tabindex="0"
      >
        Stand: 18.05.2025
      </p>
    </header>

    <!-- Card mit Slide Up -->
    <article
      v-motion-slide-bottom
      class="relative bg-base-100 border-l-4 border-primary/70 rounded-lg px-4 sm:px-8 py-7 sm:py-10 flex flex-col gap-7 prose prose-invert dark:prose-invert max-w-prose mx-auto transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-base-100"
      tabindex="0"
      aria-label="Allgemeine Geschäftsbedingungen"
    >
      <!-- Linker Farbverlauf als Akzent -->
      <div
        class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent rounded-l-lg pointer-events-none"
      ></div>

      <!-- Inhalt als Abschnitte: jeder Abschnitt einzeln gefadet -->
      <template v-for="(section, i) in sections" :key="section.title">
        <section
          v-motion-fade
          :style="{ transitionDelay: `${0.09 + i * 0.04}s` }"
          class="flex flex-col gap-2 last:pb-0"
          tabindex="0"
          :aria-label="section.title"
        >
          <h2
            v-if="section.title"
            class="!mb-1 !mt-0 !text-primary !text-lg font-semibold"
          >
            {{ section.title }}
          </h2>
          <div
            v-for="(content, idx) in section.contents"
            :key="idx"
            v-html="content"
            class="leading-relaxed"
          />
        </section>
      </template>
    </article>
  </section>
</template>

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

<script setup lang="ts">
const sections = [
  {
    title: "1. Geltungsbereich",
    contents: [
      `Diese AGB gelten für alle gegenwärtigen und künftigen Leistungen der Rieger Systems GmbH, insbesondere in den Bereichen Softwareentwicklung, künstliche Intelligenz, digitale Produkte, Beratung sowie technische Dienstleistungen.`,
    ],
  },
  {
    title: "2. Vertragsabschluss",
    contents: [
      `Ein Vertrag kommt zustande durch schriftliche Bestätigung, Annahme eines Angebots oder Projektbeginn auf Basis einer Vereinbarung. Anfragen über unsere Website, E-Mail oder andere Kanäle stellen kein verbindliches Angebot dar.`,
    ],
  },
  {
    title: "3. Leistungsumfang",
    contents: [
      `Art, Umfang und Ziel der Leistung ergeben sich aus dem jeweiligen Angebot, der schriftlichen Vereinbarung oder dem Projektvertrag. Änderungen und Erweiterungen bedürfen der schriftlichen Zustimmung beider Parteien.`,
    ],
  },
  {
    title: "4. Preise und Zahlungsbedingungen",
    contents: [
      `Alle Preise verstehen sich exklusive gesetzlicher Umsatzsteuer. Sofern nicht anders vereinbart, ist der Rechnungsbetrag innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug behalten wir uns die Sperrung oder Verzögerung weiterer Leistungen vor.`,
    ],
  },
  {
    title: "5. Nutzungsrechte",
    contents: [
      `Sofern nicht explizit schriftlich übertragen, verbleiben sämtliche Urheberrechte, Nutzungsrechte und Schutzrechte an entwickelten Konzepten, Quellcodes, KI-Modellen oder Dokumentationen bei Rieger Systems. Der Kunde erhält ein einfaches, nicht übertragbares, zweckgebundenes Nutzungsrecht im vertraglich vereinbarten Umfang.`,
    ],
  },
  {
    title: "6. Haftung",
    contents: [
      `Rieger Systems haftet ausschließlich bei Vorsatz oder grober Fahrlässigkeit. Für leichte Fahrlässigkeit, mittelbare Schäden, Folgeschäden, Datenverluste oder entgangenen Gewinn wird keine Haftung übernommen. Die Nutzung unserer Systeme und Software erfolgt auf eigenes Risiko des Kunden. Eine Haftung für Inhalte, Handlungen oder Entscheidungen, die auf KI-basierten Empfehlungen beruhen, ist ausgeschlossen.`,
    ],
  },
  {
    title: "7. Datenschutz",
    contents: [
      `Die Verarbeitung personenbezogener Daten erfolgt ausschließlich im Rahmen der geltenden Datenschutzgesetze. Nähere Informationen finden Sie in unserer <NuxtLink to="/privacy" class="text-primary hover:underline focus:underline outline-none" tabindex="0">Datenschutzerklärung</NuxtLink>.`,
    ],
  },
  {
    title: "8. Vertraulichkeit",
    contents: [
      `Beide Parteien verpflichten sich, sämtliche im Rahmen der Zusammenarbeit erlangten Informationen, die nicht öffentlich zugänglich sind, vertraulich zu behandeln – auch über das Ende der Geschäftsbeziehung hinaus.`,
    ],
  },
  {
    title: "9. Gerichtsstand und anwendbares Recht",
    contents: [
      `Es gilt ausschließlich österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist – soweit gesetzlich zulässig – [Ort ergänzen]. Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.`,
    ],
  },
  {
    title: "10. Kontakt",
    contents: [
      `Rieger Systems GmbH (in Gründung)<br>Musterstraße 12<br>1234 Beispielstadt, Österreich<br>
      E-Mail: <a href="mailto:kontakt@rieger-systems.eu" class="text-primary hover:underline focus:underline outline-none" tabindex="0">kontakt@rieger-systems.eu</a>`,
    ],
  },
];

definePageMeta({
  title: "AGB – Rieger Systems",
  description:
    "Allgemeine Geschäftsbedingungen für Leistungen und Angebote von Rieger Systems.",
  robots: "index,follow",
});
</script>
