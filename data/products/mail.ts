import { EnvelopeIcon } from "@heroicons/vue/24/outline";

export const mail = {
  title: "RiegerMail - Administrierter Business Mail Service",
  shortDescription: "DSGVO-konformer E-Mail-Service für Unternehmen und NGOs.",
  description:
    "Mit RiegerMail erhalten Sie einen technisch administrierten E-Mail-Service für Unternehmen, Praxen und NGOs auf Basis des datenschutzfreundlichen Anbieters mailbox.org.",
  link: "/products/mail",
  icon: EnvelopeIcon,
  tagline: "powered by mailbox.org – DSGVO-konform, sicher und zuverlässig",
  advantages: [
    "Fokus aufs Geschäft: Wir übernehmen die technische E-Mail-Administration für Sie.",
    "DSGVO-konform: E-Mail made in Germany mit hohen Datenschutzstandards.",
    "Hohe Verfügbarkeit: Zuverlässiger E-Mail-Betrieb mit 99,9 % Uptime.",
    "Sichere Kommunikation: Standardmäßig verschlüsselte Datenübertragung.",
    "Zentrale Administration: Einfache Verwaltung von Postfächern und Einstellungen über Rieger Systems.",
    "Transparente Kosten: Klare Preise pro Postfach inklusive Administrationsaufwand.",
  ],
  supportNote: {
    title: "Wichtiger Hinweis zum Support-Umfang",
    content:
      "RiegerMail konzentriert sich auf die technische Administration und Einrichtung (Domain-Konfiguration, DNS-Einstellungen wie SPF/DKIM/DMARC, Postfach-Erstellung, Quota-Anpassung, allgemeine Störungen auf Infrastruktur-Ebene). Support bei Anwendungsfragen (z.B. Nutzung von Webmail, Kalender, Kontakten) ist nicht im Service enthalten. Für solche Anliegen verweisen wir auf das Hilfe-Center von mailbox.org.",
  },
  pricing: {
    title: "Postfachpreise (monatlich, netto)",
    description:
      "Alle Preise beinhalten die Kosten für die mailbox.org Postfächer sowie unsere Dienstleistung für die technische Einrichtung & laufende Administration.",
    table: [
      {
        type: "Light",
        description: "basiert auf mailbox.org Light",
        storage: "2 GB",
        features: ["E-Mail", "Webmail", "1 Alias"],
        price: "3,00 €",
        idealFor: "Info-Adressen, Empfangspostfächer",
      },
      {
        type: "Standard",
        description: "basiert auf mailbox.org Standard",
        storage: "10 GB",
        features: ["E-Mail", "Webmail", "Kalender", "Kontakte", "Office Basic"],
        price: "6,00 €",
        idealFor: "Einzelpersonen, kleine Praxen",
      },
      {
        type: "Premium",
        description: "basiert auf mailbox.org Premium",
        storage: "25 GB",
        features: [
          "E-Mail",
          "Webmail",
          "Drive",
          "Videokonferenz",
          "Chat",
          "erweiterte Aliasse",
        ],
        price: "12,00 €",
        idealFor: "Organisationen, anspruchsvolle Nutzer",
      },
    ],
  },
  addons: {
    title: "🛠️ RiegerMail Zusatzleistungen & Erweiterungen",
    oneTimeServices: [
      {
        name: "DNS-Setup für Ihre Domain",
        price: "49,00 € einmalig",
        description: "Professionelle Konfiguration von SPF, DKIM, DMARC.",
      },
      {
        name: "Geräteeinrichtung (pro Gerät)",
        price: "49,00 € einmalig",
        description:
          "Unterstützung bei der erstmaligen Einrichtung eines Postfachs am Smartphone, PC, Mac.",
      },
      {
        name: "Domainregistrierung",
        price: "1:1 Weitergabe",
        description:
          "Wir registrieren Ihre Wunschdomain und geben die Kosten direkt weiter.",
      },
      {
        name: "E-Mail-Signatur-Vorlage",
        price: "auf Anfrage",
        description: "Erstellung einer DSGVO-konformen Signatur-Vorlage.",
      },
    ],
    individualServices: [
      {
        name: "Zusätzlicher Speicherplatz",
        price: "Auf Anfrage",
        description:
          "Erweiterung des E-Mail- oder Cloud-Speichers über das Paket-Limit hinaus.",
      },
      {
        name: "Erweiterte Konfigurationen",
        price: "Auf Anfrage",
        description:
          "Spezifische Einstellungen für erweiterte Sicherheitsregeln oder Gruppenadressen.",
      },
      {
        name: "Integrationen & Migrationen",
        price: "Auf Anfrage",
        description:
          "Unterstützung bei der Migration bestehender Postfächer oder Integrationen.",
      },
      {
        name: "Weitere mailbox.org Funktionen",
        price: "Auf Anfrage",
        description:
          "Aktivierung/Konfiguration von optionalen mailbox.org Features.",
      },
    ],
  },
  security: {
    title: "Sicherheit & Datenschutz",
    points: [
      "DSGVO-Konformität: Betrieben in Deutschland mit höchsten Sicherheitsstandards.",
      "Verschlüsselte Kommunikation: Standardmäßige Transportverschlüsselung und Optionen für Ende-zu-Ende-Verschlüsselung.",
      "Sicherer Zugriff: Unterstützung von Zwei-Faktor-Authentifizierung (2FA).",
      "Inkludierter Spam- & Virenschutz: Umfassender Schutz bereits im Standard enthalten.",
    ],
  },
  contract: {
    title: "Vertragslaufzeit & Kündigung",
    details: [
      "Monatliche Abrechnung: Einfach und flexibel.",
      "Kündigung: Jederzeit zum Monatsende schriftlich per E-Mail möglich.",
    ],
  },
  contact: {
    title: "Interesse geweckt?",
    content:
      "Kontaktieren Sie uns für eine individuelle Beratung oder ein maßgeschneidertes Angebot.",
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/mail",
  },
};
