import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import type { WebsiteProduct } from "~/data/types/product";
import { getWebsiteModules } from "./website-modules";

// Website-Produkte mehrsprachig (DE/EN)
const website_de: Omit<WebsiteProduct, "modules"> = {
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
  i18nKey: "products.website",
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

const website_en: Omit<WebsiteProduct, "modules"> = {
  title: "Websites & Web Applications",
  shortDescription: "Tailor-made websites for companies & institutions.",
  description:
    "Custom websites and interactive web applications for any requirement.",
  link: "/products/website",
  icon: GlobeAltIcon,
  notice: {
    title: "Note on prices",
    description:
      "The prices shown are guide values and represent the starting price for each package size.",
    details:
      "After a personal meeting, we will prepare an individual offer optimally tailored to you.",
  },
  i18nKey: "products.website",
  packages: [
    {
      name: "Starter Website",
      type: "Basic",
      target: "Small businesses, freelancers, personal projects",
      features: [1],
      startPrice: "from €990",
      benefit: "Includes module 1",
      useCases: [
        "Online business card",
        "Product or service landing page",
        "Event registration page",
      ],
    },
    {
      name: "Business Website",
      type: "Advanced",
      target: "Medium-sized companies, service providers, startups",
      features: [1, 2, 3, 4],
      startPrice: "from €2,900",
      benefit: "Save €440",
      useCases: [
        "Multi-page company website",
        "Service platform",
        "Startup presentation",
      ],
    },
    {
      name: "Advanced Website",
      type: "Flexible & Interactive",
      target: "Companies with specific requirements",
      features: [1, 2, 3, 4, 5, 6, 7],
      startPrice: "from €4,900",
      benefit: "Save €940",
      useCases: [
        "Interactive company platform",
        "Customer portal with login",
        "Dynamic content and forms",
      ],
    },
    {
      name: "Enterprise Website",
      type: "Complete & Custom",
      target: "Large companies, institutions, complex projects",
      features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      startPrice: "from €7,500",
      benefit: "Save €2,540",
      useCases: [
        "Large-scale project with backend integration",
        "Enterprise portal with API connection",
        "Custom functions and dashboards",
      ],
    },
  ],
  financing: {
    description:
      "For larger projects, we offer financing through our partner banks. You pay a 30% deposit and finance the remaining amount through a partner bank.",
    advantages: [
      "Immediate implementation: Start without liquidity bottlenecks.",
      "Plannable installments: Monthly costs instead of a high one-time payment.",
      "Security: Processing via well-known banks.",
      "Accessibility: Financing also for freelancers and small companies.",
    ],
  },
  contact: {
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/website",
  },
};

// Factory für Website-Produkt
export function getWebsiteProduct(lang: string = "de"): WebsiteProduct {
  const product =
    (lang || "").substring(0, 2).toLowerCase() === "en"
      ? website_en
      : website_de;
  return {
    ...product,
    modules: getWebsiteModules(lang),
  };
}
