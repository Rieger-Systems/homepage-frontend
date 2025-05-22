import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";

export const software = {
  title: "Rieger Software – Ihre individuelle Lösung",
  shortDescription:
    "Standardsoftware passt nicht immer – wir entwickeln Software, die sich Ihrem Unternehmen anpasst.",
  description: `
    Ob schlanke lokale Anwendung, webbasierte Plattform oder mobile Applikation – wir entwickeln Software, die genau zu Ihren Prozessen passt:
    - Effizient und zuverlässig
    - Sicher und datenschutzkonform
    - Zukunftssicher und skalierbar
  `,
  link: "/products/software",
  icon: WrenchScrewdriverIcon,
  i18nKey: "products.software",
  notice: {
    title: "Warum auf individuelle Software setzen?",
    description: `
      Jedes Unternehmen hat einzigartige Prozesse und Anforderungen – genau deshalb sind Standardlösungen oft unpassend.
      Wir verstehen, dass Ihre Software sich an Ihre Realität anpassen muss – und nicht umgekehrt.
    `,
    details: `
      Mit unserer maßgeschneiderten Software gewinnen Sie:
      - Mehr Effizienz: Ihre Prozesse werden exakt abgebildet.
      - Maximale Flexibilität: Anpassbar an Ihr Unternehmenswachstum.
      - Zukunftssicherheit: Skalierbar und integrationsfähig.
      - Kostenkontrolle: Keine unnötigen Funktionen, nur das, was Sie brauchen.
    `,
  },

  // 🔧 Leistungsübersicht
  services: [
    {
      category: "Beratung und Konzeptentwicklung",
      items: [
        "Analyse Ihrer Anforderungen: Wir hören zu und verstehen Ihre Vision.",
        "Individuelle Beratung: Wir erarbeiten ein Konzept, das perfekt zu Ihnen passt.",
        "Prototyping: Erste Visualisierung Ihrer Lösung, um konkrete Ideen greifbar zu machen.",
      ],
    },
    {
      category: "Entwicklung und Implementierung",
      items: [
        "Desktop-Anwendungen: Maßgeschneiderte Tools für Ihre internen Abläufe.",
        "Webbasierte Plattformen: Unternehmensportale mit sicherem Zugriff.",
        "Mobile Applikationen: iOS, Android und Cross-Plattform-Lösungen.",
        "API-Integration: Nahtlose Verbindung mit bestehenden Systemen.",
        "Sicherheit und Datenschutz: DSGVO-konforme Architektur mit Benutzer- und Rechteverwaltung.",
      ],
    },
    {
      category: "Datenmanagement und Reporting",
      items: [
        "Datenanalyse-Tools: Visualisierung Ihrer Geschäftskennzahlen.",
        "Reporting-Systeme: Automatisierte Berichte und Data-Dashboards.",
        "Cloud-Synchronisation: Jederzeit Zugriff auf aktuelle Daten – sicher und zuverlässig.",
      ],
    },
    {
      category: "Weiterentwicklung und Support",
      items: [
        "Wartung und Updates: Immer auf dem neuesten Stand.",
        "Skalierbarkeit: Ihre Software wächst mit Ihren Anforderungen.",
        "Langfristiger Support: Persönlicher Ansprechpartner für Anpassungen und Erweiterungen.",
      ],
    },
  ],

  // 💰 Kostenkalkulation
  pricing: {
    title: "Kosten und Kalkulation – absolut transparent",
    description: `
      Die Kosten für Ihre individuelle Softwarelösung hängen von verschiedenen Faktoren ab:
      - Projektkomplexität: Wie umfassend soll die Lösung werden?
      - Funktionen: Welche Features benötigen Sie konkret?
      - Systemintegration: Müssen bestehende Systeme angebunden werden?
      - Design und Usability: Wie benutzerfreundlich soll die Oberfläche sein?
      - Langzeitbetreuung: Möchten Sie regelmäßige Wartung und Weiterentwicklung?
    `,
    details: `
      Wie ermitteln wir die Kosten?
      1. Beratungsgespräch: Wir erfassen Ihre Anforderungen und entwickeln ein erstes Konzept.
      2. Konkretes Angebot: Basierend auf den Anforderungen erstellen wir ein transparentes Angebot.
      3. Umsetzungsplan: Sie wissen genau, welche Leistungen Sie erwarten können.
      4. Flexibilität: Anpassungen und Erweiterungen sind jederzeit möglich.

      Unser Versprechen: Sie zahlen nur für die Leistungen, die Sie wirklich brauchen – ohne versteckte Kosten.
    `,
  },

  // 💳 Finanzierung
  financing: {
    title: "Flexible Finanzierung – sicher und planbar",
    description: `
      Wir wissen, dass größere Investitionen gut geplant sein müssen. Daher bieten wir Ihnen eine maßgeschneiderte Finanzierung:
      - 30 % Anzahlung: Starten Sie ohne hohe Vorleistungen.
      - Flexible Ratenzahlung: Laufzeiten von 6 bis 60 Monaten – angepasst an Ihr Budget.
      - Planbare Kosten: Keine versteckten Gebühren.
      - Partnerschaft mit namhaften Banken: Ihre Sicherheit steht an erster Stelle.
    `,
    callToAction:
      "Sprechen Sie uns an – wir unterstützen Sie bei der Finanzierung!",
  },

  // 💡 Vorteile
  advantages: [
    "Verstehen statt verkaufen: Ihre Bedürfnisse stehen im Mittelpunkt.",
    "Individuelle Lösungen: Keine Standardpakete – nur das, was Sie wirklich brauchen.",
    "Gemeinsam zum Ziel: Enge Zusammenarbeit, damit die Lösung zu Ihnen passt.",
    "Langfristige Partnerschaft: Wir begleiten Sie von der Idee bis zur Weiterentwicklung.",
    "Verlässlichkeit und Sicherheit: Qualität und Datenschutz haben oberste Priorität.",
  ],

  // 📧 Kontaktinformationen
  contact: {
    title: "Lassen Sie uns gemeinsam starten!",
    description: `
      Sprechen Sie mit uns über Ihre Ideen und Anforderungen. Gemeinsam entwickeln wir die optimale Lösung für Ihr Unternehmen.
      Jetzt ein unverbindliches Beratungsgespräch buchen:
    `,
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/software",
    callToAction: "Ihre Herausforderung – unsere Lösung. Kontaktieren Sie uns!",
  },
};
