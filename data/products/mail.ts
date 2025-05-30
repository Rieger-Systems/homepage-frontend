// ~/data/products/mail.ts
import { EnvelopeIcon } from "@heroicons/vue/24/outline";

const mail_de = {
  title: "RiegerMail - Administrierter Business Mail Service",
  shortDescription: "DSGVO-konformer E-Mail-Service für Unternehmen und NGOs.",
  description:
    "Mit RiegerMail erhalten Sie einen technisch administrierten E-Mail-Service für Unternehmen, Praxen und NGOs auf Basis des datenschutzfreundlichen Anbieters mailbox.org.",
  link: "/products/mail",
  icon: EnvelopeIcon,
  tagline: "powered by mailbox.org – DSGVO-konform, sicher und zuverlässig",
  i18nKey: "products.mail",
  sections: {
    advantages: "Vorteile",
    oneTime: "Einmalige Leistungen",
    individual: "Individuelle Leistungen",
    security: "Sicherheit & Datenschutz",
    contract: "Vertragslaufzeit & Kündigung",
    learnMore: "Mehr erfahren",
  },
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
    title: "RiegerMail Zusatzleistungen & Erweiterungen",
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

const mail_en = {
  title: "RiegerMail – Managed Business Mail Service",
  shortDescription: "GDPR-compliant email service for companies and NGOs.",
  description:
    "With RiegerMail, you get a technically managed email service for companies, practices, and NGOs based on the privacy-friendly provider mailbox.org.",
  link: "/products/mail",
  icon: EnvelopeIcon,
  tagline: "powered by mailbox.org – GDPR-compliant, secure, and reliable",
  i18nKey: "products.mail",
  sections: {
    advantages: "Advantages",
    oneTime: "One-Time Services",
    individual: "Individual Services",
    security: "Security & Data Protection",
    contract: "Contract Term & Cancellation",
    learnMore: "Learn more",
  },
  advantages: [
    "Focus on your business: We handle all technical email administration for you.",
    "GDPR-compliant: Email made in Germany with strict data privacy standards.",
    "High availability: Reliable email operations with 99.9% uptime.",
    "Secure communication: Data is always transmitted in encrypted form.",
    "Centralized administration: Easy mailbox and settings management via Rieger Systems.",
    "Transparent pricing: Clear costs per mailbox, including administration.",
  ],
  supportNote: {
    title: "Important Note on Support Scope",
    content:
      "RiegerMail focuses on technical administration and setup (domain configuration, DNS records such as SPF/DKIM/DMARC, mailbox creation, quota adjustments, general infrastructure-level incidents). End-user support (e.g. using webmail, calendar, contacts) is not included. For these questions, please refer to the mailbox.org Help Center.",
  },
  pricing: {
    title: "Mailbox Pricing (monthly, net)",
    description:
      "All prices include the cost of mailbox.org mailboxes as well as our service for setup & ongoing technical administration.",
    table: [
      {
        type: "Light",
        description: "based on mailbox.org Light",
        storage: "2 GB",
        features: ["Email", "Webmail", "1 alias"],
        price: "€3.00",
        idealFor: "Info addresses, shared inboxes",
      },
      {
        type: "Standard",
        description: "based on mailbox.org Standard",
        storage: "10 GB",
        features: ["Email", "Webmail", "Calendar", "Contacts", "Office Basic"],
        price: "€6.00",
        idealFor: "Individuals, small practices",
      },
      {
        type: "Premium",
        description: "based on mailbox.org Premium",
        storage: "25 GB",
        features: [
          "Email",
          "Webmail",
          "Drive",
          "Video conferencing",
          "Chat",
          "Extended aliases",
        ],
        price: "€12.00",
        idealFor: "Organizations, demanding users",
      },
    ],
  },
  addons: {
    title: "RiegerMail Add-Ons & Extensions",
    oneTimeServices: [
      {
        name: "DNS setup for your domain",
        price: "€49.00 one-time",
        description: "Professional configuration of SPF, DKIM, and DMARC.",
      },
      {
        name: "Device setup (per device)",
        price: "€49.00 one-time",
        description:
          "Assistance with the initial setup of a mailbox on a smartphone, PC, or Mac.",
      },
      {
        name: "Domain registration",
        price: "1:1 passed on",
        description:
          "We register your desired domain and pass on the cost directly.",
      },
      {
        name: "Email signature template",
        price: "on request",
        description: "Creation of a GDPR-compliant signature template.",
      },
    ],
    individualServices: [
      {
        name: "Additional storage",
        price: "On request",
        description:
          "Expand your email or cloud storage beyond the package limit.",
      },
      {
        name: "Advanced configurations",
        price: "On request",
        description:
          "Custom settings for advanced security rules or group addresses.",
      },
      {
        name: "Integrations & migrations",
        price: "On request",
        description:
          "Support with migrating existing mailboxes or integrations.",
      },
      {
        name: "Other mailbox.org features",
        price: "On request",
        description:
          "Activation/configuration of optional mailbox.org features.",
      },
    ],
  },
  security: {
    title: "Security & Data Protection",
    points: [
      "GDPR compliance: Hosted in Germany with the highest security standards.",
      "Encrypted communication: Standard transport encryption and options for end-to-end encryption.",
      "Secure access: Supports two-factor authentication (2FA).",
      "Spam & virus protection included: Comprehensive protection as a standard.",
    ],
  },
  contract: {
    title: "Contract Term & Cancellation",
    details: [
      "Monthly billing: Simple and flexible.",
      "Cancellation: Possible anytime at the end of the month by written email.",
    ],
  },
  contact: {
    title: "Interested?",
    content: "Contact us for individual consulting or a tailored offer.",
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/mail",
  },
};

export function getMailProduct(lang: string = "de") {
  switch ((lang || "").substring(0, 2).toLowerCase()) {
    case "en":
      return mail_en;
    case "de":
    default:
      return mail_de;
  }
}
