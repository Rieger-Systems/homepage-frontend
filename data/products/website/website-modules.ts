import type { BaseModule } from "~/data/types/productModules";

const websiteModules_de: BaseModule[] = [
  {
    id: 1,
    name: "Basis Webdesign & Responsive",
    description:
      "Konzeption, Design-Umsetzung und responsive Entwicklung einer modernen Landing Page inkl. Basis-SEO.",
    price: "990 €",
    detailedDescription: `
      Dieses Modul bietet ein modernes, responsives Design für eine Landing Page. 
      Ideal für kleine Projekte oder Einsteiger, die eine professionelle Online-Präsenz benötigen.
      Enthält grundlegende SEO-Optimierung für bessere Auffindbarkeit in Suchmaschinen.
    `,
  },
  {
    id: 2,
    name: "Multi-Page Erweiterung",
    description:
      "Ausbau von Modul 1 zu einer Website mit mehreren statischen Unterseiten (Basis-Design & Responsive auf weitere Seiten).",
    price: "810 €",
    detailedDescription: `
      Mit der Multi-Page Erweiterung erhalten Sie eine Website mit mehreren Seiten, z.B. Startseite, Über uns, Kontakt.
      Diese Erweiterung baut auf dem Basis-Webdesign auf und bietet zusätzliche Struktur und Flexibilität.
      Ideal für Unternehmen, die mehr Informationen darstellen möchten.
    `,
  },
  {
    id: 3,
    name: "Grundlegendes CMS",
    description:
      "Integration eines einfachen Content Management Systems zur selbstständigen Pflege von Inhalten (z.B. Blog/News-Bereich).",
    price: "900 €",
    detailedDescription: `
      Ein einfaches CMS zur selbstständigen Pflege von Inhalten, ideal für Blogs oder News-Bereiche.
      Ermöglicht die Verwaltung von Texten, Bildern und anderen Medien ohne technische Vorkenntnisse.
    `,
  },
  {
    id: 4,
    name: "Kontaktformular Pro",
    description:
      "DSGVO-konformes, erweitertes Kontaktformular mit individuellen Feldern und optionaler Ablage/Export-Funktion.",
    price: "640 €",
    detailedDescription: `
      Ein erweitertes Kontaktformular, das DSGVO-konform ist und individuell angepasst werden kann.
      Bietet die Möglichkeit zur Datenspeicherung und Export der Kontaktanfragen.
    `,
  },
  {
    id: 5,
    name: "Benutzerverwaltung Basis",
    description:
      "Implementierung eines einfachen Login-/Logout-Bereichs für Benutzer.",
    price: "800 €",
    detailedDescription: `
      Bietet die Möglichkeit, Benutzerkonten anzulegen, sich anzumelden und auszuloggen.
      Ideal für Websites mit geschützten Bereichen oder personalisierten Inhalten.
    `,
  },
  {
    id: 6,
    name: "Interaktive Elemente Basis",
    description:
      "Integration spezifischer interaktiver Funktionen (z.B. erweiterte Formulare, einfache Rechner, dynamische Karten).",
    price: "900 €",
    detailedDescription: `
      Dieses Modul bietet interaktive Features wie Formulare mit Validierung, einfache Berechnungsfunktionen 
      und dynamische Karten zur Visualisierung von Standorten oder Daten.
    `,
  },
  {
    id: 7,
    name: "Erweiterbare Frontend-Module Basis",
    description:
      "Integration gängiger Module wie Eventkalender, FAQs mit Suche, oder Basis-Mehrsprachigkeit (manuelle Übersetzung).",
    price: "800 €",
    detailedDescription: `
      Erweiterbare Frontend-Komponenten für eine dynamische Website: Eventkalender, FAQ-Seiten mit Suchfunktion 
      und die Möglichkeit zur manuellen Mehrsprachigkeit.
    `,
  },
  {
    id: 8,
    name: "Backend-Integration Basis",
    description:
      "Anbindung an einfache Backendsysteme oder Aufbau eines einfachen Datenmodells inkl. grundlegender CRUD-Operationen.",
    price: "1.200 €",
    detailedDescription: `
      Bietet die Verbindung zu einfachen Backendsystemen, um Daten speichern und abrufen zu können.
      Ideal für Websites mit Formularen, die Daten persistent speichern sollen.
    `,
  },
  {
    id: 9,
    name: "API-Integration Standard",
    description:
      "Anbindung an eine externe API (z.B. Payment-Provider, Standard-Schnittstellen – 1 Schnittstelle).",
    price: "1.200 €",
    detailedDescription: `
      Ermöglicht die Anbindung an externe Dienste, wie z.B. Zahlungsanbieter oder spezielle Datenschnittstellen.
      Eine professionelle Lösung für Geschäftswebsites mit erweiterten Integrationen.
    `,
  },
  {
    id: 10,
    name: "Datenvisualisierung Basis",
    description:
      "Umsetzung grundlegender Dashboards oder grafischer Darstellungen von strukturierten Daten.",
    price: "800 €",
    detailedDescription: `
      Dieses Modul bietet die Erstellung von Dashboards zur Visualisierung von Daten in Form von Diagrammen oder Tabellen.
      Ideal für Unternehmenswebsites, die ihre KPIs oder statistische Daten anschaulich präsentieren möchten.
    `,
  },
  {
    id: 11,
    name: "Individuelle Funktionsentwicklung Basis",
    description:
      "Realisierung spezifischer, nicht von Standardmodulen abgedeckter Logik oder komplexerer Verknüpfungen im Basis-Umfang.",
    price: "1.000 €",
    detailedDescription: `
      Individuelle Funktionen, die speziell auf die Anforderungen des Kunden zugeschnitten sind.
      Geeignet für Projekte mit speziellen Anforderungen, die über Standardmodule hinausgehen.
    `,
  },
];

const websiteModules_en: BaseModule[] = [
  {
    id: 1,
    name: "Basic Web Design & Responsive",
    description:
      "Concept, design implementation and responsive development of a modern landing page incl. basic SEO.",
    price: "€990",
    detailedDescription: `
      This module provides a modern, responsive design for a landing page.
      Ideal for small projects or beginners who need a professional online presence.
      Includes basic SEO optimization for better discoverability in search engines.
    `,
  },
  {
    id: 2,
    name: "Multi-Page Extension",
    description:
      "Upgrade module 1 to a website with multiple static subpages (basic design & responsive for further pages).",
    price: "€810",
    detailedDescription: `
      With the multi-page extension, you get a website with several pages, e.g. home, about us, contact.
      This extension builds on the basic web design and offers additional structure and flexibility.
      Ideal for companies that want to present more information.
    `,
  },
  {
    id: 3,
    name: "Basic CMS",
    description:
      "Integration of a simple content management system for self-managed content (e.g. blog/news section).",
    price: "€900",
    detailedDescription: `
      A simple CMS for self-managed content, ideal for blogs or news sections.
      Allows management of text, images, and other media without technical knowledge.
    `,
  },
  {
    id: 4,
    name: "Contact Form Pro",
    description:
      "GDPR-compliant, advanced contact form with individual fields and optional storage/export function.",
    price: "€640",
    detailedDescription: `
      An advanced contact form that is GDPR-compliant and can be customized.
      Offers the possibility to store and export contact requests.
    `,
  },
  {
    id: 5,
    name: "Basic User Management",
    description: "Implementation of a simple login/logout area for users.",
    price: "€800",
    detailedDescription: `
      Offers the possibility to create user accounts, log in, and log out.
      Ideal for websites with protected areas or personalized content.
    `,
  },
  {
    id: 6,
    name: "Basic Interactive Elements",
    description:
      "Integration of specific interactive functions (e.g. advanced forms, simple calculators, dynamic maps).",
    price: "€900",
    detailedDescription: `
      This module provides interactive features such as forms with validation, simple calculation functions,
      and dynamic maps for visualizing locations or data.
    `,
  },
  {
    id: 7,
    name: "Basic Extensible Frontend Modules",
    description:
      "Integration of common modules such as event calendar, FAQs with search, or basic multilingualism (manual translation).",
    price: "€800",
    detailedDescription: `
      Extensible frontend components for a dynamic website: event calendar, FAQ pages with search function,
      and the possibility for manual multilingualism.
    `,
  },
  {
    id: 8,
    name: "Basic Backend Integration",
    description:
      "Connection to simple backend systems or setup of a simple data model incl. basic CRUD operations.",
    price: "€1,200",
    detailedDescription: `
      Provides connection to simple backend systems for storing and retrieving data.
      Ideal for websites with forms that need to store data persistently.
    `,
  },
  {
    id: 9,
    name: "Standard API Integration",
    description:
      "Connection to an external API (e.g. payment provider, standard interface – 1 interface).",
    price: "€1,200",
    detailedDescription: `
      Enables integration with external services, such as payment providers or special data interfaces.
      A professional solution for business websites with extended integrations.
    `,
  },
  {
    id: 10,
    name: "Basic Data Visualization",
    description:
      "Implementation of basic dashboards or graphical representation of structured data.",
    price: "€800",
    detailedDescription: `
      This module offers the creation of dashboards for visualizing data in the form of charts or tables.
      Ideal for company websites that want to present their KPIs or statistical data in a clear way.
    `,
  },
  {
    id: 11,
    name: "Basic Custom Function Development",
    description:
      "Implementation of specific logic or more complex links not covered by standard modules in the basic scope.",
    price: "€1,000",
    detailedDescription: `
      Custom functions specifically tailored to the customer's requirements.
      Suitable for projects with special requirements that go beyond standard modules.
    `,
  },
];

// Factory function for current locale
export function getWebsiteModules(lang: string = "de"): BaseModule[] {
  switch ((lang || "").substring(0, 2).toLowerCase()) {
    case "en":
      return websiteModules_en;
    case "de":
    default:
      return websiteModules_de;
  }
}
