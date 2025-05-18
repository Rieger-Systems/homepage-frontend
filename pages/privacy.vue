<template>
  <section
    class="max-w-screen-sm mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-base"
    role="main"
    aria-labelledby="privacy-heading"
  >
    <!-- Header animiert -->
    <FadeIn>
      <header class="text-center mb-10 sm:mb-14">
        <h1
          id="privacy-heading"
          class="text-3xl sm:text-4xl font-semibold tracking-tight mb-1"
          tabindex="0"
        >
          Datenschutzerklärung
        </h1>
        <p
          class="text-base-content/70 text-base max-w-prose mx-auto"
          tabindex="0"
        >
          Informationen gemäß Art. 13 und 14 DSGVO
        </p>
      </header>
    </FadeIn>

    <!-- Card mit leichtem Schatten & Farbakzent, SlideFadeIn -->
    <SlideFadeIn :direction="'up'" :distance="36" :duration="0.7">
      <article
        class="relative bg-base-100 border-l-4 border-primary/70 rounded-lg px-4 sm:px-8 py-7 sm:py-10 flex flex-col gap-7 prose prose-invert dark:prose-invert max-w-prose mx-auto transition-all duration-300 outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-base-100"
        tabindex="0"
        aria-label="Datenschutzerklärung"
      >
        <!-- Vertikaler Farbverlauf an der linken Seite -->
        <div
          class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent rounded-l-lg pointer-events-none"
        ></div>

        <!-- Inhalt dynamisch mit Animation -->
        <template v-for="(block, i) in sections" :key="block.title">
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
                v-for="(content, idx) in block.contents"
                :key="idx"
                v-html="content"
                class="leading-relaxed"
              />
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

// DSGVO-Abschnitte als strukturierte Daten
const sections = [
  {
    title: "1. Verantwortlicher",
    contents: [
      `Rieger Systems GmbH (in Gründung)<br>Musterstraße 12, 1234 Beispielstadt, Österreich<br>
      E-Mail: <a href="mailto:kontakt@rieger-systems.eu" class="text-primary hover:underline focus:underline outline-none" tabindex="0">kontakt@rieger-systems.eu</a>`,
    ],
  },
  {
    title: "2. Allgemeine Grundsätze",
    contents: [
      `Wir verarbeiten personenbezogene Daten ausschließlich im Einklang mit der DSGVO und dem österreichischen Datenschutzgesetz. Wir verzichten bewusst auf Datenverarbeitung, die nicht erforderlich ist, und setzen auf Transparenz, Datensparsamkeit und technische Sicherheit.`,
    ],
  },
  {
    title: "3. Hosting",
    contents: [
      `Unsere Website wird bei der Hetzner Online GmbH (Industriestr. 25, 91710 Gunzenhausen, Deutschland) gehostet. Die Server befinden sich ausschließlich innerhalb der Europäischen Union. Es besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO mit dem Hostinganbieter.`,
    ],
  },
  {
    title: "4. Server-Logfiles",
    contents: [
      `Beim Aufruf unserer Website werden durch unseren Hosting-Provider automatisch folgende Daten erfasst und für maximal 7 Tage gespeichert:`,
      `<ul>
        <li>IP-Adresse des zugreifenden Geräts</li>
        <li>Datum und Uhrzeit der Serveranfrage</li>
        <li>Browsertyp und Betriebssystem</li>
        <li>Referrer-URL (die zuvor besuchte Seite)</li>
      </ul>`,
      `Diese Daten dienen der Gewährleistung eines sicheren und stabilen Serverbetriebs und der Erkennung von Angriffen. Eine Zusammenführung mit anderen Datenquellen oder Profilbildung findet nicht statt. Nach Ablauf der Speicherfrist werden die Daten automatisch gelöscht.`,
      `<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Website)`,
    ],
  },
  {
    title: "5. Kontakt-, Feedback- und Bewerbungsformulare",
    contents: [
      `Wenn Sie über ein Formular (z. B. Kontakt, Feedback oder Bewerbung) mit uns in Kontakt treten, verarbeiten wir die von Ihnen übermittelten Daten (z. B. Name, E-Mail, Nachricht, ggf. Anhänge) ausschließlich zur Bearbeitung Ihres Anliegens.`,
      `Die Daten werden nicht an Dritte weitergegeben und ausschließlich intern verarbeitet. Bewerbungsdaten werden spätestens 6 Monate nach Abschluss des Auswahlverfahrens gelöscht.`,
      `<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a (Einwilligung) und lit. b (vorvertragliche Maßnahmen)`,
    ],
  },
  {
    title: "6. Webanalyse mit Umami",
    contents: [
      `Wir verwenden das datenschutzfreundliche Analyse-Tool <strong>Umami</strong> in einer selbst gehosteten Version. Es werden keine Cookies gesetzt und keine personenbezogenen Daten gespeichert. Erfasst werden ausschließlich anonymisierte Nutzungsdaten:`,
      `<ul>
        <li>Besuchte Seiten</li>
        <li>Datum und Uhrzeit</li>
        <li>Referrer</li>
        <li>Gerätetyp und Browser (anonymisiert)</li>
      </ul>`,
      `Diese Daten dienen ausschließlich der technischen Verbesserung unserer Website. Es erfolgt keine Weitergabe an Dritte.`,
      `<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Reichweitenanalyse ohne Profilbildung)`,
    ],
  },
  {
    title: "7. Keine Cookies oder Dritt-Tracking",
    contents: [
      `Unsere Website setzt keine Cookies und nutzt keine Trackingdienste wie Google Analytics, Facebook Pixel oder ähnliche. Auch externe Ressourcen (z. B. Fonts oder Icons) werden ausschließlich lokal eingebunden.`,
    ],
  },
  {
    title: "8. Technische Sicherheit",
    contents: [
      `Der Zugriff auf unsere Website erfolgt ausschließlich verschlüsselt über HTTPS (TLS). Unsere Server und Dienste werden regelmäßig aktualisiert, überwacht und durch geeignete technische und organisatorische Maßnahmen (TOMs) abgesichert.`,
    ],
  },
  {
    title: "8a. IP-Anonymisierung im Captcha-System",
    contents: [
      `Um unser Kontaktformular vor automatisierten Angriffen (z. B. Spam oder Bots) zu schützen, verwenden wir ein eigens entwickeltes Captcha-System. Dabei wird die IP-Adresse des anfragenden Geräts <strong>nicht im Klartext gespeichert</strong>, sondern vor der Verarbeitung technisch anonymisiert.`,
      `Hierfür wird die IP-Adresse mit einem Einweg-Hashverfahren (SHA-256) anonymisiert und nur in dieser nicht rückführbaren Form temporär in unserem Sicherheitssystem verarbeitet. Die Speicherung erfolgt ausschließlich für die technische Erkennung von missbräuchlichen Mehrfachzugriffen und wird nach spätestens 10 Minuten automatisch gelöscht.`,
      `Es erfolgt <strong>keine Profilbildung</strong>, <strong>keine Zusammenführung mit anderen Daten</strong> und <strong>keine Weitergabe an Dritte</strong>.`,
      `<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit unserer Systeme)`,
    ],
  },
  {
    title: "9. Ihre Rechte",
    contents: [
      `Sie haben das Recht auf:`,
      `<ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde</li>
      </ul>`,
      `Zuständige Behörde in Österreich:
      <br />
      <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline focus:underline outline-none" tabindex="0">Datenschutzbehörde – www.dsb.gv.at</a>`,
    ],
  },
  {
    title: "10. Änderungen dieser Datenschutzerklärung",
    contents: [
      `Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, wenn sich die Rechtslage oder unser Angebot ändert. Die jeweils aktuelle Version finden Sie jederzeit auf dieser Seite.`,
    ],
  },
];

definePageMeta({
  title: "Datenschutzerklärung – Rieger Systems",
  description: "Informationen zum Datenschutz gemäß DSGVO bei Rieger Systems.",
  robots: "index,follow",
});
</script>

<style scoped>
/* Optional: zusätzliche Lesbarkeit durch leicht vergrößerten Zeilenabstand */
.prose > * {
  line-height: 1.6;
}

/* Fokusring & Outline verbessern */
article:focus {
  outline-offset: 4px;
}

/* Sanfter Hovereffekt auf Links */
a:hover,
a:focus {
  text-decoration-thickness: 2px;
}

/* Scrollbare lange Listen mit Padding */
.prose ul {
  padding-left: 1.2em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
</style>
