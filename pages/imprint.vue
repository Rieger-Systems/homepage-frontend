<template>
  <section class="max-w-screen-sm mx-auto px-6 py-24 text-sm">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-semibold tracking-tight">Impressum</h1>
      <p class="text-gray-400 mt-2 text-base">
        Rechtliche Angaben gemäß §5 ECG, §14 UGB und §25 Mediengesetz
      </p>
    </div>

    <!-- Inhalt -->
    <dl class="space-y-6 prose prose-invert dark:prose-invert">
      <div>
        <dt class="font-semibold">Unternehmensname</dt>
        <dd>Rieger Systems GmbH (in Gründung)</dd>
      </div>

      <div>
        <dt class="font-semibold">Unternehmensform</dt>
        <dd>
          Gesellschaft mit beschränkter Haftung (GmbH), gründungsprivilegiert
        </dd>
      </div>

      <div>
        <dt class="font-semibold">Anschrift</dt>
        <dd>
          <!-- TODO: Adresse ergänzen -->
          Musterstraße 12<br />
          1234 Beispielstadt, Österreich
        </dd>
      </div>

      <div>
        <dt class="font-semibold">Kontakt</dt>
        <dd>
          E-Mail:
          <a
            href="mailto:kontakt@rieger-systems.eu"
            class="text-primary hover:underline"
          >
            kontakt@rieger-systems.eu </a
          ><br />
          Tel: +43 660 1234567
        </dd>
      </div>

      <div>
        <dt class="font-semibold">Firmenbuchnummer</dt>
        <dd>in Vorbereitung</dd>
      </div>

      <div>
        <dt class="font-semibold">Firmenbuchgericht</dt>
        <dd>Handelsgericht Wien</dd>
        <!-- TODO: ggf. anpassen -->
      </div>

      <div>
        <dt class="font-semibold">UID-Nummer</dt>
        <dd>in Vorbereitung</dd>
      </div>

      <div>
        <dt class="font-semibold">Geschäftsführer</dt>
        <dd>Tobias Rieger</dd>
      </div>

      <div>
        <dt class="font-semibold">Unternehmensgegenstand</dt>
        <dd>Entwicklung und Betrieb von Software- und KI-Systemen</dd>
      </div>

      <div>
        <dt class="font-semibold">Mitglied der Wirtschaftskammer</dt>
        <dd>Wirtschaftskammer Österreich – Sparte Information & Consulting</dd>
      </div>

      <div>
        <dt class="font-semibold">
          Inhaltlich verantwortlich gemäß §25 MedienG
        </dt>
        <dd>Tobias Rieger, Anschrift wie oben</dd>
      </div>

      <div>
        <dt class="font-semibold">Online-Streitbeilegung (EU)</dt>
        <dd>
          Plattform der EU-Kommission:
          <a
            href="https://ec.europa.eu/consumers/odr"
            class="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </dd>
      </div>

      <div>
        <dt class="font-semibold">Haftungsausschluss</dt>
        <dd>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Impressum – Rieger Systems",
  description:
    "Rechtliche Angaben gemäß §5 ECG für die Website von Rieger Systems.",
  robots: "index,follow",
});
</script>
