<template>
  <section
    class="container mx-auto scroll-smooth px-6 py-16 lg:py-24 space-y-28 lg:space-y-32"
  >
    <!-- Hero -->
    <header class="text-center space-y-4">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
      >
        📬 RiegerMail – Administrierter Business Mail Service
      </h1>
      <p
        class="mx-auto max-w-3xl text-lg md:text-xl text-gray-300 lg:max-w-4xl"
      >
        <strong
          >powered by mailbox.org – DSGVO-konform, sicher und
          zuverlässig.</strong
        ><br />
        Wir übernehmen die technische Einrichtung und Verwaltung Ihrer
        E-Mail-Postfächer – Sie konzentrieren sich auf Ihr Geschäft.
      </p>
      <p class="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-400">
        Technisch administrierter E-Mail-Service für Unternehmen, Praxen und
        NGOs auf Basis des datenschutzfreundlichen Anbieters mailbox.org.
      </p>
    </header>

    <!-- Vorteile -->
    <section id="vorteile" class="scroll-mt-16 space-y-10">
      <h2 class="text-center text-2xl md:text-3xl font-bold text-white">
        Ihre Vorteile mit RiegerMail
      </h2>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none"
      >
        <li class="flex items-start gap-3">
          <BoltIcon class="mt-1 h-6 w-6 text-primary flex-shrink-0" />
          <p class="text-gray-300">
            <strong>Fokus aufs Geschäft:</strong> Wir übernehmen die technische
            E-Mail-Administration.
          </p>
        </li>
        <li class="flex items-start gap-3">
          <ShieldCheckIcon class="mt-1 h-6 w-6 text-primary flex-shrink-0" />
          <p class="text-gray-300">
            <strong>DSGVO-konform:</strong> E-Mail made in Germany mit höchsten
            Datenschutzstandards.
          </p>
        </li>
        <li class="flex items-start gap-3">
          <ServerIcon class="mt-1 h-6 w-6 text-primary flex-shrink-0" />
          <p class="text-gray-300">
            <strong>99,9 % Uptime:</strong> Zuverlässiger Betrieb mit hoher
            Verfügbarkeit.
          </p>
        </li>
        <li class="flex items-start gap-3">
          <LockClosedIcon class="mt-1 h-6 w-6 text-primary flex-shrink-0" />
          <p class="text-gray-300">
            <strong>Sichere Kommunikation:</strong> Standardmäßige
            End-to-End-Verschlüsselung.
          </p>
        </li>
        <li class="flex items-start gap-3">
          <CogIcon class="mt-1 h-6 w-6 text-primary flex-shrink-0" />
          <p class="text-gray-300">
            <strong>Zentrale Administration:</strong> Einheitliches Interface
            für Domain, Postfächer & DNS.
          </p>
        </li>
        <li class="flex items-start gap-3">
          <CurrencyDollarIcon class="mt-1 h-6 w-6 text-primary flex-shrink-0" />
          <p class="text-gray-300">
            <strong>Transparente Kosten:</strong> Klare Preise pro Postfach
            inkl. Administrationsaufwand.
          </p>
        </li>
      </ul>
    </section>

    <!-- Support-Hinweis -->
    <section
      id="support-hinweis"
      class="scroll-mt-16 bg-base-200 rounded-lg p-8 lg:p-10 shadow-lg space-y-4"
    >
      <h2 class="text-xl font-semibold text-white">
        Wichtiger Hinweis zum Support-Umfang
      </h2>
      <p class="text-gray-300">
        RiegerMail fokussiert sich auf die
        <strong>technische Administration</strong> (Domain-Setup,
        DNS/SPF/DKIM/DMARC, Postfach-Anlage, Quota-Anpassung,
        Infrastruktur-Störungen).
      </p>
      <p class="text-gray-300">
        Anwendungs-Support (Webmail, Kalender, Kontakte, Drive,
        Office-Funktionen) oder Themen außerhalb der Zustellung/Zugang sind
        <strong>nicht enthalten</strong>. Für diese Fälle verweisen wir auf das
        Hilfe-Center von mailbox.org.
      </p>
    </section>

    <section id="preise" class="space-y-12">
      <h2 class="text-center text-2xl md:text-3xl font-bold text-white">
        Postfachpreise (monatlich, netto)
      </h2>
      <p class="mx-auto max-w-3xl text-center text-gray-300">
        Alles inklusive mailbox.org-Gebühr und Administrationsaufwand.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Light -->
        <div
          class="card bg-base-200 shadow-md hover:shadow-lg transition p-6 flex flex-col"
        >
          <h3 class="text-xl font-semibold text-white">Light</h3>
          <p class="text-4xl font-extrabold my-4 text-primary">
            3,00 €<span class="text-sm font-normal"> / Monat</span>
          </p>
          <ul class="text-gray-300 space-y-2 mb-6 flex-1">
            <li>2 GB E-Mail-Speicher</li>
            <li>E-Mail, Webmail &amp; 1 Alias</li>
          </ul>
          <p class="text-sm text-gray-400 mb-4">
            <em>Ideal für Info-Adressen & Empfangspostfächer</em>
          </p>
          <NuxtLink to="/kontakt" class="btn btn-primary btn-block"
            >Beratung anfragen</NuxtLink
          >
        </div>

        <!-- Standard -->
        <div
          class="card bg-base-200 shadow-md hover:shadow-lg transition p-6 flex flex-col"
        >
          <h3 class="text-xl font-semibold text-white">Standard</h3>
          <p class="text-4xl font-extrabold my-4 text-primary">
            6,00 €<span class="text-sm font-normal"> / Monat</span>
          </p>
          <ul class="text-gray-300 space-y-2 mb-6 flex-1">
            <li>10 GB E-Mail-Speicher</li>
            <li>+ Kalender, Kontakte & Office Basic</li>
          </ul>
          <p class="text-sm text-gray-400 mb-4">
            <em>Ideal für Einzelpersonen & kleine Praxen</em>
          </p>
          <NuxtLink to="/kontakt" class="btn btn-primary btn-block"
            >Beratung anfragen</NuxtLink
          >
        </div>

        <!-- Premium -->
        <div
          class="card bg-base-200 shadow-md hover:shadow-lg transition p-6 flex flex-col"
        >
          <h3 class="text-xl font-semibold text-white">Premium</h3>
          <p class="text-4xl font-extrabold my-4 text-primary">
            12,00 €<span class="text-sm font-normal"> / Monat</span>
          </p>
          <ul class="text-gray-300 space-y-2 mb-6 flex-1">
            <li>25 GB E-Mail-Speicher</li>
            <li>+ Drive, Videokonf. & Chat</li>
          </ul>
          <p class="text-sm text-gray-400 mb-4">
            <em>Ideal für Organisationen & Power-User</em>
          </p>
          <NuxtLink to="/kontakt" class="btn btn-primary btn-block"
            >Beratung anfragen</NuxtLink
          >
        </div>
      </div>
    </section>

    <!-- Zusatzleistungen -->
    <section id="zusatzleistungen" class="scroll-mt-16 space-y-8">
      <h2 class="text-center text-2xl md:text-3xl font-bold text-white">
        Zusatzleistungen & Erweiterungen
      </h2>
      <p class="mx-auto max-w-3xl text-center text-gray-300">
        Individuelle Services oder Anpassungen? Sprechen Sie uns an.
      </p>

      <h3 class="text-xl font-semibold text-white">Einmalige Leistungen</h3>
      <div class="overflow-x-auto">
        <table class="table w-full text-gray-300">
          <thead>
            <tr class="text-white">
              <th>Leistung</th>
              <th>Preis</th>
              <th>Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-white">DNS-Setup</strong></td>
              <td><strong class="text-white">49 €</strong></td>
              <td>SPF/DKIM/DMARC-Konfiguration für sichere Zustellung.</td>
            </tr>
            <tr>
              <td><strong class="text-white">Geräteeinrichtung</strong></td>
              <td><strong class="text-white">49 €</strong></td>
              <td>
                Erst-Setup auf Smartphone, PC, Mac (Outlook, Thunderbird).
              </td>
            </tr>
            <tr>
              <td><strong class="text-white">Domainregistrierung</strong></td>
              <td><strong class="text-white">1:1 Weitergabe</strong></td>
              <td>Registrierung Ihrer Wunschdomain, Kostenweitergabe.</td>
            </tr>
            <tr>
              <td><strong class="text-white">Signatur-Vorlage</strong></td>
              <td><strong class="text-white">auf Anfrage</strong></td>
              <td>DSGVO-konforme Unternehmens-Signatur.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="mt-10 text-xl font-semibold text-white">
        Individuelle Anpassungen
      </h3>
      <div class="overflow-x-auto">
        <table class="table w-full text-gray-300">
          <thead>
            <tr class="text-white">
              <th>Anforderung</th>
              <th>Details</th>
              <th>Preis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong class="text-white">Zusätzlicher Speicher</strong></td>
              <td>Erweiterung über Paket-Limits hinaus.</td>
              <td><strong class="text-white">auf Anfrage</strong></td>
            </tr>
            <tr>
              <td>
                <strong class="text-white">Erweiterte Konfigurationen</strong>
              </td>
              <td>z. B. Gruppenadressen, Sicherheitsregeln.</td>
              <td><strong class="text-white">auf Anfrage</strong></td>
            </tr>
            <tr>
              <td>
                <strong class="text-white">Migration & Integrationen</strong>
              </td>
              <td>Bestehende Postfächer migrieren, Anbindungen.</td>
              <td><strong class="text-white">auf Anfrage</strong></td>
            </tr>
            <tr>
              <td><strong class="text-white">mailbox.org Features</strong></td>
              <td>Optionale Funktionen aktivieren/config.</td>
              <td><strong class="text-white">auf Anfrage</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Sicherheit -->
    <section
      id="sicherheit"
      class="scroll-mt-16 bg-base-200 rounded-lg p-8 lg:p-10 shadow-lg"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-white">
        Sicherheit & Datenschutz
      </h2>
      <ul
        class="list-inside list-disc space-y-3 text-gray-300 max-w-3xl mx-auto"
      >
        <li>
          <strong>DSGVO-konform:</strong> Betrieb in Deutschland mit höchsten
          Standards.
        </li>
        <li>
          <strong>Verschlüsselt:</strong> Transport- und
          Ende-zu-Ende-Verschlüsselung.
        </li>
        <li><strong>2FA-Support:</strong> Optionaler Zwei-Faktor-Login.</li>
        <li>
          <strong>Spam- & Virenschutz:</strong> Inklusive im Standardpaket.
        </li>
      </ul>
    </section>

    <!-- Vertrag -->
    <section
      id="vertrag"
      class="scroll-mt-16 space-y-4 text-center text-gray-300"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-white">
        Vertragslaufzeit & Kündigung
      </h2>
      <p><strong>Monatliche Abrechnung:</strong> Flexibel und transparent.</p>
      <p><strong>Kündigung:</strong> Jederzeit zum Monatsende per E-Mail.</p>
    </section>

    <!-- Warum RiegerMail -->
    <section
      id="warum-riegermail"
      class="scroll-mt-16 bg-primary text-primary-content rounded-2xl py-16 lg:py-20 shadow-lg"
    >
      <div class="max-w-3xl mx-auto px-6 space-y-8 lg:space-y-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Warum RiegerMail?</h2>
        <ul class="list-inside list-disc text-left space-y-2">
          <li>
            <strong>Technik abgenommen:</strong> Fokus auf Ihr Kerngeschäft.
          </li>
          <li>
            <strong>Sicher & DSGVO-konform:</strong> mailbox.org unter Rieger
            Systems.
          </li>
          <li>
            <strong>Transparente Kosten:</strong> Klare Preise pro Postfach.
          </li>
          <li><strong>Flexible Laufzeit:</strong> Monatlich kündbar.</li>
          <li>
            <strong>Erweiterbar:</strong> Individuelle Services auf Anfrage.
          </li>
        </ul>
        <div
          class="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center"
        >
          <NuxtLink to="/kontakt" class="btn btn-secondary btn-lg"
            >Beratung anfragen</NuxtLink
          >
          <a
            href="mailto:kontakt@rieger-systems.eu"
            class="btn btn-outline btn-lg"
            >kontakt@rieger-systems.eu</a
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import {
  BoltIcon,
  ShieldCheckIcon,
  ServerIcon,
  LockClosedIcon,
  CogIcon,
  CurrencyDollarIcon,
} from "@heroicons/vue/24/outline";

definePageMeta({
  title: "RiegerMail – Administrierter Business Mail Service",
  description:
    "RiegerMail powered by mailbox.org: administrierter DSGVO-konformer Business-Mail-Service mit transparenten Preisen und technischem Support.",
});
</script>
