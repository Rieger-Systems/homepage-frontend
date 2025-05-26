// src/data/products/software.ts
import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";
import type { SoftwareProduct } from "~/data/types/product";

// --- Deutsch ---
const software_de: Omit<SoftwareProduct, "i18nKey"> = {
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
  advantages: [
    "Verstehen statt verkaufen: Ihre Bedürfnisse stehen im Mittelpunkt.",
    "Individuelle Lösungen: Keine Standardpakete – nur das, was Sie wirklich brauchen.",
    "Gemeinsam zum Ziel: Enge Zusammenarbeit, damit die Lösung zu Ihnen passt.",
    "Langfristige Partnerschaft: Wir begleiten Sie von der Idee bis zur Weiterentwicklung.",
    "Verlässlichkeit und Sicherheit: Qualität und Datenschutz haben oberste Priorität.",
  ],
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

// --- English ---
const software_en: Omit<SoftwareProduct, "i18nKey"> = {
  title: "Rieger Software – Your Individual Solution",
  shortDescription:
    "Standard software doesn’t always fit – we develop solutions tailored to your business.",
  description: `
    Whether lightweight desktop app, web platform or mobile application – we build software that fits your processes:
    - Efficient and reliable
    - Secure and privacy-compliant
    - Future-proof and scalable
  `,
  link: "/products/software",
  icon: WrenchScrewdriverIcon,
  notice: {
    title: "Why choose custom software?",
    description: `
      Every company has unique processes and requirements – that’s why standard solutions are often not suitable.
      We know your software needs to adapt to your reality, not the other way around.
    `,
    details: `
      With our custom-built software you gain:
      - More efficiency: Your processes are mapped exactly.
      - Maximum flexibility: Adaptable to your company’s growth.
      - Future-proof: Scalable and integratable.
      - Cost control: No unnecessary features, just what you need.
    `,
  },
  services: [
    {
      category: "Consulting and Concept Development",
      items: [
        "Requirements analysis: We listen and understand your vision.",
        "Personalized consulting: We create a concept that fits you perfectly.",
        "Prototyping: Early visualization of your solution for tangible ideas.",
      ],
    },
    {
      category: "Development and Implementation",
      items: [
        "Desktop applications: Custom tools for your internal workflows.",
        "Web-based platforms: Company portals with secure access.",
        "Mobile applications: iOS, Android and cross-platform solutions.",
        "API integration: Seamless connection with existing systems.",
        "Security and privacy: GDPR-compliant architecture with user and rights management.",
      ],
    },
    {
      category: "Data Management and Reporting",
      items: [
        "Data analysis tools: Visualization of your business KPIs.",
        "Reporting systems: Automated reports and data dashboards.",
        "Cloud synchronization: Always access current data – securely and reliably.",
      ],
    },
    {
      category: "Further Development and Support",
      items: [
        "Maintenance and updates: Always up-to-date.",
        "Scalability: Your software grows with your requirements.",
        "Long-term support: Personal contact for changes and extensions.",
      ],
    },
  ],
  pricing: {
    title: "Pricing & Calculation – Absolutely Transparent",
    description: `
      The cost of your custom software depends on several factors:
      - Project complexity: How extensive is the solution?
      - Features: What exactly do you need?
      - System integration: Need to connect with existing systems?
      - Design & usability: How user-friendly should it be?
      - Long-term support: Do you want regular maintenance and development?
    `,
    details: `
      How do we calculate?
      1. Initial consultation: We collect your requirements and develop a first concept.
      2. Transparent offer: Based on the requirements, we create a clear offer.
      3. Implementation plan: You know exactly what to expect.
      4. Flexibility: Adjustments and extensions are always possible.

      Our promise: You only pay for what you really need – no hidden costs.
    `,
  },
  financing: {
    title: "Flexible Financing – Secure and Plannable",
    description: `
      We know larger investments must be planned. That’s why we offer custom financing:
      - 30% deposit: Start without major upfront costs.
      - Flexible installments: Terms from 6 to 60 months – adapted to your budget.
      - Predictable costs: No hidden fees.
      - Partnering with major banks: Your security comes first.
    `,
    callToAction: "Let’s talk – we’ll support you with financing options!",
  },
  advantages: [
    "Understanding over selling: Your needs come first.",
    "Individual solutions: No standard packages – just what you need.",
    "Collaboration: We work closely together to ensure the solution fits.",
    "Long-term partnership: From idea to further development.",
    "Reliability and security: Quality and data protection are top priority.",
  ],
  contact: {
    title: "Let’s start together!",
    description: `
      Talk to us about your ideas and requirements. Together we’ll create the optimal solution for your business.
      Book a non-binding consultation now:
    `,
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/software",
    callToAction: "Your challenge – our solution. Contact us!",
  },
};

export function getSoftwareProduct(lang: string = "de"): SoftwareProduct {
  switch ((lang || "").substring(0, 2).toLowerCase()) {
    case "en":
      return { ...software_en, i18nKey: "products.software" };
    case "de":
    default:
      return { ...software_de, i18nKey: "products.software" };
  }
}
