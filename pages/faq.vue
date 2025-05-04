<template>
  <section class="max-w-screen-md mx-auto px-6 py-24 text-sm">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-semibold tracking-tight">Häufige Fragen</h1>
      <p class="text-gray-400 mt-2 text-base">
        Antworten, die Klarheit schaffen.
      </p>
    </div>

    <div class="join join-vertical w-full space-y-2">
      <FaqItem
        question="Was unterscheidet Rieger Systems von anderen Softwarefirmen?"
      >
        <p>
          Wir entwickeln nicht nur funktionale Software, sondern Systeme mit
          Haltung. Unsere Lösungen sind bewusst klar, transparent und
          verantwortungsvoll gebaut – ohne Abhängigkeiten, ohne Datenhunger,
          dafür mit Struktur, Ethik und Substanz.
        </p>
      </FaqItem>

      <FaqItem question="Wo steht Rieger Systems aktuell in der Entwicklung?">
        <p>
          Wir befinden uns in der Aufbauphase und entwickeln unsere ersten
          Produkte – darunter ein KI-gestütztes System für den
          Gesundheitsbereich. Erste Partnerschaften und Pilotkunden werden
          derzeit aufgebaut.
        </p>
      </FaqItem>

      <FaqItem question="Bietet ihr individuelle Softwareentwicklung an?">
        <p>
          In ausgewählten Fällen ja. Wir realisieren Projekte, wenn sie unseren
          Werten entsprechen und technologisch herausfordern. Besonders im
          Bereich ethischer KI und sicherer digitaler Infrastruktur sind wir
          offen für Kooperationen.
        </p>
      </FaqItem>

      <FaqItem question="Wie geht ihr mit künstlicher Intelligenz um?">
        <p>
          Mit Verantwortung. Unsere KI-Systeme sind nicht laut, sondern präzise.
          Sie unterstützen, ohne zu manipulieren. Wir setzen auf Transparenz,
          Kontrolle und menschenzentriertes Design – keine Blackbox, kein
          Bullshit.
        </p>
      </FaqItem>

      <FaqItem question="Wie werden Daten bei euch verarbeitet?">
        <p>
          So wenig wie möglich. Wir hosten alles selbst, nutzen keine
          Cloud-Anbieter aus Drittstaaten und vermeiden unnötige Erfassung. Alle
          Verarbeitungen erfolgen DSGVO-konform auf Servern in der EU.
        </p>
      </FaqItem>

      <FaqItem
        question="Ist Rieger Systems auch für kleine Unternehmen interessant?"
      >
        <p>
          Absolut. Gerade kleinen Unternehmen fehlen oft sichere, skalierbare
          Tools. Unsere Systeme sind bewusst modular und fair gebaut – damit sie
          auch für kleinere Organisationen zugänglich sind.
        </p>
      </FaqItem>

      <FaqItem question="Kann ich bei euch einsteigen oder mitarbeiten?">
        <p>
          Wenn du denkst, dass du nicht nur etwas baust, sondern etwas bewirken
          willst – ja. Wir suchen Menschen, keine Rollen. Offene Stellen und
          Initiativbewerbungen findest du unter
          <NuxtLink to="/jobs" class="underline hover:text-primary"
            >Karriere</NuxtLink
          >.
        </p>
      </FaqItem>

      <FaqItem question="Wie kann ich euch erreichen?">
        <p>
          Am einfachsten über unser
          <NuxtLink to="/contact" class="underline hover:text-primary"
            >Kontaktformular</NuxtLink
          >
          oder direkt per E-Mail an
          <a
            href="mailto:kontakt@rieger-systems.eu"
            class="underline hover:text-primary"
            >kontakt@rieger-systems.eu</a
          >. Wir antworten persönlich, ohne Ticketnummern.
        </p>
      </FaqItem>

      <FaqItem question="Wird eure Software Open Source sein?">
        <p>
          Teile davon – ja. Besonders im Bereich Infrastruktur, Schnittstellen
          oder ethischer Komponenten streben wir Open Source an. Kritische
          Kernsysteme mit hoher Verantwortung werden kontrolliert entwickelt und
          betrieben.
        </p>
      </FaqItem>

      <FaqItem question="Was kostet eure Software?">
        <p>
          Unsere Produkte werden modular angeboten – ohne Lock-in, ohne
          versteckte Kosten. Preise sind abhängig von Nutzung, Umfang und
          Lizenzmodell. Für Pilotprojekte gelten individuelle Vereinbarungen.
        </p>
      </FaqItem>
    </div>
  </section>
</template>

<script setup lang="ts">
import FaqItem from "~/components/sections/faq/FaqItem.vue";

definePageMeta({
  title: "FAQ – Rieger Systems",
  description:
    "Antworten auf häufige Fragen rund um Rieger Systems, Technologie, Datenschutz und Zusammenarbeit.",
  robots: "index,follow",
});
</script>
