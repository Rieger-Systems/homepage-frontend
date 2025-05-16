// src/data/products/website.ts
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import { websiteModules } from "./website-modules";
import type { WebsiteProduct } from "~/data/types/product";

export const website: WebsiteProduct = {
  title: "Websites & Webanwendungen",
  shortDescription:
    "Maßgeschneiderte Websites für Unternehmen & Institutionen.",
  description:
    "Maßgeschneiderte Websites und interaktive Webanwendungen für jede Anforderung.",
  link: "/products/website",
  icon: GlobeAltIcon,
  notice: {
    title: "Hinweis zu den Preisen",
    description:
      "Die angegebenen Preise dienen als Richtwerte und stellen den Startpreis für die jeweilige Paketgröße dar.",
    details:
      "Nach einem persönlichen Gespräch erstellen wir ein individuelles Angebot, das optimal auf Sie zugeschnitten ist.",
  },
  packages: [
    {
      name: "Starter Website",
      type: "Basis",
      target: "Kleine Unternehmen, Selbstständige, persönliche Projekte",
      features: [1],
      startPrice: "ab 990 €",
      benefit: "Enhält Modul 1",
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
      features: [1, 2, 3, 4],
      startPrice: "ab 2.900 €",
      benefit: "440 € Ersparnis",
      useCases: [
        "Mehrseitige Unternehmenswebsite",
        "Dienstleistungsplattform",
        "Startup-Präsentation",
      ],
    },
    {
      name: "Advanced Website",
      type: "Flexibel & Interaktiv",
      target: "Unternehmen mit spezifischen Anforderungen",
      features: [1, 2, 3, 4, 5, 6, 7],
      startPrice: "ab 4.900 €",
      benefit: "940 € Ersparnis",
      useCases: [
        "Interaktive Unternehmensplattform",
        "Kundenportal mit Login",
        "Dynamische Inhalte und Formulare",
      ],
    },
    {
      name: "Enterprise Website",
      type: "Komplett & Maßgeschneidert",
      target: "Große Unternehmen, Institutionen, komplexe Projekte",
      features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      startPrice: "ab 7.500 €",
      benefit: "2.540 € Ersparnis",
      useCases: [
        "Großprojekt mit Backend-Integration",
        "Enterprise-Portal mit API-Anbindung",
        "Individuelle Funktionen und Dashboards",
      ],
    },
  ],
  modules: websiteModules,
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
