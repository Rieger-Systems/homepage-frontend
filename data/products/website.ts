import { GlobeAltIcon } from "@heroicons/vue/24/outline";

export const website = {
  title: "Websites & Webanwendungen",
  shortDescription:
    "Maßgeschneiderte Websites für Unternehmen & Institutionen.",
  description:
    "Maßgeschneiderte Websites und interaktive Webanwendungen für jede Anforderung. Ob einfache Präsentationsseite oder komplexe Webplattform – wir erstellen Ihre digitale Lösung, die perfekt zu Ihren Zielen passt.",
  link: "/products/website",
  icon: GlobeAltIcon,
  notice: {
    title: "💡 Hinweis zu den Preisen",
    description:
      "Die angegebenen Preise dienen als Richtwerte und stellen den Startpreis für die jeweilige Paketgröße dar. Die tatsächlichen Kosten können je nach individuellem Projektumfang, technischen Anforderungen und Wünschen abweichen.",
    details:
      "Nach einem persönlichen Gespräch erstellen wir ein individuelles Angebot, das optimal auf Sie zugeschnitten ist.",
  },
  packages: [
    {
      name: "Starter Website",
      type: "Basis",
      target: "Kleine Unternehmen, Selbstständige, persönliche Projekte",
      description: [
        "Professionelles Webdesign mit prägnanter Online-Präsenz",
        "Einseitige Website (Landing Page) zur kompakten Vorstellung",
        "Mobiloptimierung (Responsive Design)",
        "Basis-SEO zur besseren Auffindbarkeit",
      ],
      startPrice: "ab 990 €",
      useCases: [
        "Online-Visitenkarte",
        "Produkt- oder Dienstleistungs-Landing Page",
        "Anmeldeseite für eine Veranstaltung",
      ],
    },
    {
      name: "Business Website",
      type: "Erweitert",
      target: "Mittelständische Unternehmen, Dienstleister, Startups",
      description: [
        "Mehrseitige Website mit typischen Unterseiten (Start, Über uns, Leistungen, Kontakt, Impressum/Datenschutz)",
        "Mobiloptimierung (Responsive Design)",
        "Grundlegendes CMS zur einfachen Pflege von Inhalten",
        "Kontaktformular Pro mit individuellen Feldern und DSGVO-Konformität",
        "Basis-SEO mit technischen Optimierungen und ersten On-Page-Elementen",
      ],
      startPrice: "ab 2.900 €",
      benefit: "440 € Ersparnis gegenüber Einzelmodulen",
    },
    {
      name: "Advanced Website",
      type: "Flexibel & Interaktiv",
      target: "Unternehmen mit spezifischen Anforderungen",
      description: [
        "Aufbau als erweiterbares System basierend auf der Business Website",
        "Erweiterbare Module (Eventkalender, einfache Listen/Kataloge, Basis-Mehrsprachigkeit)",
        "Benutzerverwaltung Basis für geschützte Bereiche",
        "Interaktive Elemente Basis (erweiterte Formulare, Rechner, dynamische Karten)",
        "Usability- und Conversion-Optimierung",
      ],
      startPrice: "ab 4.900 €",
      benefit: "940 € Ersparnis gegenüber Einzelmodulen",
    },
    {
      name: "Enterprise Website",
      type: "Komplett & Maßgeschneidert",
      target: "Große Unternehmen, Institutionen, komplexe Projekte",
      description: [
        "Komplett maßgeschneiderte Webanwendung oder umfangreiches Portal",
        "Tiefe Backend-Integration an bestehende Systeme (CRM, ERP)",
        "API-Integrationen von Drittdiensten (z.B. Payment, Wetterdienste)",
        "Interaktive Dashboards und Datenvisualisierung",
        "Individuelle Funktionsentwicklung für spezifische Anforderungen",
        "Optionale Mobile Companion App (+3.000 € Startpreis)",
      ],
      startPrice: "ab 7.500 €",
      benefit: "2.540 € Ersparnis gegenüber Einzelmodulen",
    },
  ],
  modules: [
    {
      id: 1,
      name: "Basis Webdesign & Responsive",
      description: "Moderne Landing Page inkl. Basis-SEO",
      price: "990 €",
    },
    {
      id: 2,
      name: "Multi-Page Erweiterung",
      description: "Mehrere statische Unterseiten im gleichen Design",
      price: "810 €",
    },
    {
      id: 3,
      name: "Grundlegendes CMS",
      description: "Einfache Verwaltung von Inhalten (z.B. Blog/News)",
      price: "900 €",
    },
    {
      id: 4,
      name: "Kontaktformular Pro",
      description: "DSGVO-konformes Formular mit individuellen Feldern",
      price: "640 €",
    },
    {
      id: 5,
      name: "Benutzerverwaltung Basis",
      description: "Login-/Logout-Bereich für Benutzer",
      price: "800 €",
    },
    {
      id: 6,
      name: "Interaktive Elemente Basis",
      description: "Formulare, Rechner, dynamische Karten",
      price: "900 €",
    },
    {
      id: 7,
      name: "Erweiterbare Frontend-Module",
      description: "Eventkalender, FAQs, Mehrsprachigkeit",
      price: "800 €",
    },
    {
      id: 8,
      name: "Backend-Integration Basis",
      description: "Einfaches Backend oder CRUD-System",
      price: "1.200 €",
    },
    {
      id: 9,
      name: "API-Integration Standard",
      description: "Anbindung an eine externe API",
      price: "1.200 €",
    },
    {
      id: 10,
      name: "Datenvisualisierung Basis",
      description: "Grundlegende Dashboards und Datenanzeige",
      price: "800 €",
    },
    {
      id: 11,
      name: "Individuelle Funktionsentwicklung Basis",
      description: "Spezifische, komplexere Logik",
      price: "1.000 €",
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
    website: "https://www.rieger-systems.eu/products/website",
  },
};
