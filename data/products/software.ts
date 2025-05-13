import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";

export const software = {
  title: "Software - Desktop-Anwendungen & Plattformen",
  shortDescription:
    "Individuelle Softwarelösungen für professionelle Anforderungen.",
  description:
    "Individuelle Softwarelösungen für professionelle Anforderungen. Ob schlanke lokale Anwendung oder komplexe Unternehmensplattform – wir entwickeln maßgeschneiderte Software, die effizient, zuverlässig und exakt auf Ihre Bedürfnisse zugeschnitten ist.",
  link: "/products/software",
  icon: WrenchScrewdriverIcon,
  notice: {
    title: "💡 Hinweis zu den Preisen",
    description:
      "Die angegebenen Preise dienen als Richtwerte und stellen den Startpreis für die jeweilige Paketgröße dar. Die tatsächlichen Kosten können je nach individuellem Projektumfang, technischen Anforderungen und Wünschen erheblich variieren.",
    details:
      "Nach einem persönlichen Gespräch erstellen wir ein individuelles Angebot, das den genauen Aufwand für Ihr Projekt widerspiegelt.",
  },
  packages: [
    {
      name: "Essential Suite",
      type: "Basis Desktop-Anwendung",
      target: "Kleine Unternehmen, Einzelanwender",
      description: [
        "Entwicklung eines schlanken Software-Kernels",
        "Einfache lokale Programme für spezifische Aufgaben",
        "Basis-Benutzerverwaltung für den Zugang zur Anwendung",
        "Lokales Datenmodell und Speicherung auf dem Rechner des Anwenders",
      ],
      startPrice: "ab 3.900 €",
      useCases: [
        "Kleine Verwaltungstools",
        "Einfache Daten-Erfassungsprogramme",
        "Lokale Utility-Anwendungen",
      ],
    },
    {
      name: "Professional Suite",
      type: "Standard Business Software",
      target:
        "Unternehmen mit wiederkehrenden Prozessen und Notwendigkeit zur Datenverarbeitung",
      description: [
        "Stabile Anwendungsarchitektur",
        "Erweiterte Benutzerverwaltung mit Rollenmodellen",
        "Formularmanagement und Datenverarbeitung",
        "Lokale Speicherung kombiniert mit Basis Cloud-Synchronisation",
        "1 Wahlmodul aus einer definierten Auswahl (z.B. Datenanalyse, Offline-Funktion)",
      ],
      startPrice: "ab 6.900 €",
      benefit: "1.000 € Ersparnis gegenüber Einzelbeauftragung",
    },
    {
      name: "Enterprise Suite",
      type: "Umfassende Plattform",
      target:
        "Große Unternehmen, Institutionen mit komplexen Anforderungen und Prozessen",
      description: [
        "Umfassende Plattform-Architektur",
        "Nahtlose API-Integration zur Anbindung an andere Systeme",
        "Fortschrittliche Benutzerverwaltung und Rollenmanagement",
        "Optionale Offline-Funktionen",
        "2 Wahlmodule aus einer erweiterten Auswahl",
      ],
      startPrice: "ab 9.500 €",
      benefit: "1.500 € Ersparnis gegenüber Einzelbeauftragung",
    },
  ],
  modules: [
    {
      name: "Benutzerrechte-Verwaltung",
      description:
        "Detaillierte Steuerung von Zugriffsrechten basierend auf Benutzerrollen.",
      price: "+1.000 €",
    },
    {
      name: "Datenanalyse-Modul",
      description:
        "Auswertung und Visualisierung gesammelter Daten innerhalb der App.",
      price: "+1.500 €",
    },
    {
      name: "Offline-Funktionalität",
      description:
        "Nutzung von Kernfunktionen der Anwendung ohne Internetverbindung.",
      price: "+1.000 €",
    },
    {
      name: "API-Integration (erweitert)",
      description:
        "Anbindung an weitere oder komplexere externe Schnittstellen (APIs).",
      price: "Auf Anfrage",
    },
  ],
  mobileSolutions: [
    {
      name: "Eigenständige Mobile App",
      description:
        "Native oder hybride (Flutter) App unabhängig von einer Suite.",
      price: "ab 5.400 €",
    },
    {
      name: "Mobile App als Plattform-Komponente",
      description:
        "Entwicklung einer Mobile App als integrierter Bestandteil einer Suite (primär Enterprise).",
      price: "Auf Anfrage",
    },
  ],
  packageComparison: [
    {
      name: "Essential Suite",
      estimatedValue: "3.900 €",
      startPrice: "3.900 €",
      savings: "0 €",
    },
    {
      name: "Professional Suite",
      estimatedValue: "7.900 €",
      startPrice: "6.900 €",
      savings: "1.000 €",
    },
    {
      name: "Enterprise Suite",
      estimatedValue: "11.000 €",
      startPrice: "9.500 €",
      savings: "1.500 €",
    },
  ],
  financing: {
    description:
      "Für größere Projekte bieten wir die Möglichkeit einer Finanzierung über unsere Partnerbanken. Sie zahlen eine Anzahlung von 30 % und finanzieren den Restbetrag bequem über eine Partnerbank.",
    advantages: [
      "Sofortige Umsetzung: Starten Sie ohne Liquiditätsengpässe.",
      "Planbare Raten: Monatliche Kosten statt hoher Einmalzahlung.",
      "Sicherheit: Abwicklung über namhafte Banken.",
      "Zugänglichkeit: Finanzierung auch für Selbstständige und kleine Unternehmen.",
    ],
  },
  contact: {
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/software",
  },
};
