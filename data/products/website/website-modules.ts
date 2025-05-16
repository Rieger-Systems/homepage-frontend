import type { BaseModule } from "~/data/types/productModules";

export const websiteModules: BaseModule[] = [
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
