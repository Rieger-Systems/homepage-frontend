<template>
  <section class="max-w-screen-sm mx-auto px-6 py-24 text-sm">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-semibold tracking-tight">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>
      <p class="text-gray-400 mt-2 text-base">
        Stand: {{ new Date().getFullYear() }}
      </p>
    </div>

    <div class="prose prose-invert dark:prose-invert space-y-6">
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
        vertraglichen Beziehungen mit der
        <strong>Rieger Systems GmbH (in Gründung)</strong>, sofern nicht
        ausdrücklich abweichende Vereinbarungen getroffen wurden. Mit der
        Nutzung unserer Website, der Kontaktaufnahme oder der Inanspruchnahme
        von Leistungen erklären Sie sich mit diesen Bedingungen einverstanden.
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese AGB gelten für alle gegenwärtigen und künftigen Leistungen der
        Rieger Systems GmbH, insbesondere in den Bereichen Softwareentwicklung,
        künstliche Intelligenz, digitale Produkte, Beratung sowie technische
        Dienstleistungen.
      </p>

      <h2>2. Vertragsabschluss</h2>
      <p>
        Ein Vertrag kommt zustande durch schriftliche Bestätigung, Annahme eines
        Angebots oder Projektbeginn auf Basis einer Vereinbarung. Anfragen über
        unsere Website, E-Mail oder andere Kanäle stellen kein verbindliches
        Angebot dar.
      </p>

      <h2>3. Leistungsumfang</h2>
      <p>
        Art, Umfang und Ziel der Leistung ergeben sich aus dem jeweiligen
        Angebot, der schriftlichen Vereinbarung oder dem Projektvertrag.
        Änderungen und Erweiterungen bedürfen der schriftlichen Zustimmung
        beider Parteien.
      </p>

      <h2>4. Preise und Zahlungsbedingungen</h2>
      <p>
        Alle Preise verstehen sich exklusive gesetzlicher Umsatzsteuer. Sofern
        nicht anders vereinbart, ist der Rechnungsbetrag innerhalb von 14 Tagen
        ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug
        behalten wir uns die Sperrung oder Verzögerung weiterer Leistungen vor.
      </p>

      <h2>5. Nutzungsrechte</h2>
      <p>
        Sofern nicht explizit schriftlich übertragen, verbleiben sämtliche
        Urheberrechte, Nutzungsrechte und Schutzrechte an entwickelten
        Konzepten, Quellcodes, KI-Modellen oder Dokumentationen bei Rieger
        Systems. Der Kunde erhält ein einfaches, nicht übertragbares,
        zweckgebundenes Nutzungsrecht im vertraglich vereinbarten Umfang.
      </p>

      <h2>6. Haftung</h2>
      <p>
        Rieger Systems haftet ausschließlich bei Vorsatz oder grober
        Fahrlässigkeit. Für leichte Fahrlässigkeit, mittelbare Schäden,
        Folgeschäden, Datenverluste oder entgangenen Gewinn wird keine Haftung
        übernommen. Die Nutzung unserer Systeme und Software erfolgt auf eigenes
        Risiko des Kunden. Eine Haftung für Inhalte, Handlungen oder
        Entscheidungen, die auf KI-basierten Empfehlungen beruhen, ist
        ausgeschlossen.
      </p>

      <h2>7. Datenschutz</h2>
      <p>
        Die Verarbeitung personenbezogener Daten erfolgt ausschließlich im
        Rahmen der geltenden Datenschutzgesetze. Nähere Informationen finden Sie
        in unserer
        <NuxtLink to="/privacy" class="underline hover:text-primary"
          >Datenschutzerklärung</NuxtLink
        >.
      </p>

      <h2>8. Vertraulichkeit</h2>
      <p>
        Beide Parteien verpflichten sich, sämtliche im Rahmen der Zusammenarbeit
        erlangten Informationen, die nicht öffentlich zugänglich sind,
        vertraulich zu behandeln – auch über das Ende der Geschäftsbeziehung
        hinaus.
      </p>

      <h2>9. Gerichtsstand und anwendbares Recht</h2>
      <p>
        Es gilt ausschließlich österreichisches Recht unter Ausschluss des
        UN-Kaufrechts. Gerichtsstand ist – soweit gesetzlich zulässig – [Ort
        ergänzen]. Sollte eine Bestimmung dieser AGB ganz oder teilweise
        unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen
        unberührt.
      </p>

      <h2>10. Kontakt</h2>
      <p>
        Rieger Systems GmbH (in Gründung)<br />
        Musterstraße 12<br />
        1234 Beispielstadt, Österreich<br />
        E-Mail:
        <a href="mailto:kontakt@rieger-systems.eu">kontakt@rieger-systems.eu</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: "AGB – Rieger Systems",
  description:
    "Allgemeine Geschäftsbedingungen für Leistungen und Angebote von Rieger Systems.",
  robots: "index,follow",
});
</script>
