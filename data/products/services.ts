// ~/data/products/services.ts
import { ServerStackIcon } from "@heroicons/vue/24/outline";

const services_de = {
  title: "Hosting, Support & Wartung – Ihre sorgenfreie Komplettlösung",
  shortDescription: "Umfassendes Hosting mit proaktivem Support & Wartung.",
  description:
    "Mit Rieger Systems erhalten Sie Hosting, proaktiven Support und umfassende Wartung nahtlos aus einer Hand. Egal ob einfache Web-Visitenkarte, anspruchsvolle Plattform oder mission-kritische Anwendung – wir kümmern uns um die Technik.",
  link: "/products/services",
  icon: ServerStackIcon,
  tagline: "Ihre sorgenfreie Komplettlösung – alles aus einer Hand",
  i18nKey: "products.services",
  advantages: [
    "Alles aus einer Hand: Infrastruktur, Support & Wartung perfekt verzahnt.",
    "Transparente Kosten: Klare Service-Pauschalen und transparente Serverkosten.",
    "Proaktives Monitoring: Früherkennung und Behebung von Problemen.",
    "Persönlicher Ansprechpartner: Direkter Kontakt und feste Ansprechpartner.",
    "Skalierbar & flexibel: Anpassbar an wachsende Anforderungen.",
    "Security-Fokus: Monatliche Sicherheitsupdates auf Betriebssystem-Ebene.",
  ],
  packages: [
    {
      name: "Starter",
      target: "Portfolio, Blogs, Visitenkarten",
      serviceFee: "43,54 €",
      serverInstance: "CX22 (2 vCPU / 4 GB RAM)",
      estimatedCost: "49,00 €",
      supportHours: "bis zu 1 Std.",
      monitoring: "Security-Updates, Basis-Monitoring",
    },
    {
      name: "Business Pro",
      target: "Firmen- & Agentur-Websites",
      serviceFee: "69,21 €",
      serverInstance: "CX32 (4 vCPU / 8 GB RAM)",
      estimatedCost: "79,00 €",
      supportHours: "bis zu 1 Std.",
      monitoring: "Performance-Check, Monitoring",
    },
    {
      name: "Business Plus",
      target: "Kunden- & Mitarbeiter-Portale, Web-Apps",
      serviceFee: "63,73 €",
      serverInstance: "CCX23 (4 vCPU / 16 GB RAM)",
      estimatedCost: "99,00 €",
      supportHours: "bis zu 2 Std.",
      monitoring: "Erweitertes Monitoring",
    },
    {
      name: "High-Load",
      target: "E-Commerce, stark frequentierte Systeme",
      serviceFee: "79,17 €",
      serverInstance: "CCX33 (8 vCPU / 32 GB RAM)",
      estimatedCost: "149,00 €",
      supportHours: "bis zu 3 Std.",
      monitoring: "Monitoring inkl. Load Balancer",
    },
    {
      name: "Enterprise",
      target: "Global Player, SaaS, FinTech",
      serviceFee: "ab 221,81 €",
      serverInstance: "CCX53 (32 vCPU / 128 GB RAM)",
      estimatedCost: "ab 499,00 €",
      supportHours: "individuell",
      monitoring: "24/7 Monitoring, Alerts & Proaktives Management",
    },
  ],
  servers: [
    {
      name: "CX22",
      vCPU: 2,
      ram: "4 GB",
      ssd: "40 GB",
      traffic: "20 TB",
      cost: "5,46 €",
    },
    {
      name: "CX32",
      vCPU: 4,
      ram: "8 GB",
      ssd: "80 GB",
      traffic: "20 TB",
      cost: "9,79 €",
    },
    {
      name: "CCX23",
      vCPU: 4,
      ram: "16 GB",
      ssd: "160 GB",
      traffic: "20 TB",
      cost: "35,27 €",
    },
    {
      name: "CCX33",
      vCPU: 8,
      ram: "32 GB",
      ssd: "240 GB",
      traffic: "30 TB",
      cost: "69,83 €",
    },
    {
      name: "CCX53",
      vCPU: 32,
      ram: "128 GB",
      ssd: "600 GB",
      traffic: "50 TB",
      cost: "277,19 €",
    },
    {
      name: "CCX63",
      vCPU: 48,
      ram: "192 GB",
      ssd: "960 GB",
      traffic: "60 TB",
      cost: "415,43 €",
    },
  ],
  support: {
    standard: {
      response: "Innerhalb eines Werktags (Mo–Fr, 9–17 Uhr)",
      availability: "Während der Geschäftszeiten (Mo–Fr, 9–17 Uhr)",
      priority: "Bearbeitung nach Dringlichkeit und Priorität",
    },
    premiumSLA: {
      responseTime: "Innerhalb 4 Stunden (Mo–Fr, 9–17 Uhr)",
      critical: "Innerhalb 8 Stunden (System nicht erreichbar)",
      high: "Innerhalb 24 Stunden (wichtige Funktion gestört)",
      reporting: "Monatliche Status-E-Mail zur Verfügbarkeit",
    },
    additionalSupport: [
      {
        package: "Kleines Paket",
        price: "299 €/Monat",
        hours: 5,
        rate: "59,80 €/Std.",
      },
      {
        package: "Mittleres Paket",
        price: "549 €/Monat",
        hours: 10,
        rate: "54,90 €/Std.",
      },
      {
        package: "Großes Paket",
        price: "999 €/Monat",
        hours: 20,
        rate: "49,95 €/Std.",
      },
      {
        package: "Enterprise Support Bundle",
        price: "ab 2 000 €/Jahr",
        hours: 50,
        rate: "ab 40,00 €/Std.",
      },
      { package: "Einzelstunde", price: "79 €/Std.", hours: 1 },
    ],
    emergency:
      "24/7 Notfall-Support für unternehmenskritische Anwendungen (Details auf Anfrage)",
  },
  contact: {
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/services",
  },
};

const services_en = {
  title: "Hosting, Support & Maintenance – Your Worry-Free Solution",
  shortDescription:
    "Comprehensive hosting with proactive support & maintenance.",
  description:
    "With Rieger Systems you get hosting, proactive support, and comprehensive maintenance seamlessly from a single source. Whether it's a simple web business card, complex platform, or mission-critical application – we handle the technology.",
  link: "/products/services",
  icon: ServerStackIcon,
  tagline: "Your all-in-one worry-free solution",
  i18nKey: "products.services",
  advantages: [
    "All-in-one: Infrastructure, support & maintenance perfectly coordinated.",
    "Transparent costs: Clear service fees and transparent server pricing.",
    "Proactive monitoring: Early detection and resolution of problems.",
    "Personal contact: Direct line and fixed contact persons.",
    "Scalable & flexible: Adaptable to growing demands.",
    "Security focus: Monthly OS-level security updates.",
  ],
  packages: [
    {
      name: "Starter",
      target: "Portfolio, blogs, business cards",
      serviceFee: "€43.54",
      serverInstance: "CX22 (2 vCPU / 4 GB RAM)",
      estimatedCost: "€49.00",
      supportHours: "up to 1 hr.",
      monitoring: "Security updates, basic monitoring",
    },
    {
      name: "Business Pro",
      target: "Company & agency websites",
      serviceFee: "€69.21",
      serverInstance: "CX32 (4 vCPU / 8 GB RAM)",
      estimatedCost: "€79.00",
      supportHours: "up to 1 hr.",
      monitoring: "Performance check, monitoring",
    },
    {
      name: "Business Plus",
      target: "Customer & employee portals, web apps",
      serviceFee: "€63.73",
      serverInstance: "CCX23 (4 vCPU / 16 GB RAM)",
      estimatedCost: "€99.00",
      supportHours: "up to 2 hrs.",
      monitoring: "Advanced monitoring",
    },
    {
      name: "High-Load",
      target: "E-commerce, high-traffic systems",
      serviceFee: "€79.17",
      serverInstance: "CCX33 (8 vCPU / 32 GB RAM)",
      estimatedCost: "€149.00",
      supportHours: "up to 3 hrs.",
      monitoring: "Monitoring incl. load balancer",
    },
    {
      name: "Enterprise",
      target: "Global player, SaaS, FinTech",
      serviceFee: "from €221.81",
      serverInstance: "CCX53 (32 vCPU / 128 GB RAM)",
      estimatedCost: "from €499.00",
      supportHours: "custom",
      monitoring: "24/7 monitoring, alerts & proactive management",
    },
  ],
  servers: [
    {
      name: "CX22",
      vCPU: 2,
      ram: "4 GB",
      ssd: "40 GB",
      traffic: "20 TB",
      cost: "€5.46",
    },
    {
      name: "CX32",
      vCPU: 4,
      ram: "8 GB",
      ssd: "80 GB",
      traffic: "20 TB",
      cost: "€9.79",
    },
    {
      name: "CCX23",
      vCPU: 4,
      ram: "16 GB",
      ssd: "160 GB",
      traffic: "20 TB",
      cost: "€35.27",
    },
    {
      name: "CCX33",
      vCPU: 8,
      ram: "32 GB",
      ssd: "240 GB",
      traffic: "30 TB",
      cost: "€69.83",
    },
    {
      name: "CCX53",
      vCPU: 32,
      ram: "128 GB",
      ssd: "600 GB",
      traffic: "50 TB",
      cost: "€277.19",
    },
    {
      name: "CCX63",
      vCPU: 48,
      ram: "192 GB",
      ssd: "960 GB",
      traffic: "60 TB",
      cost: "€415.43",
    },
  ],
  support: {
    standard: {
      response: "Within one business day (Mon–Fri, 9am–5pm)",
      availability: "During business hours (Mon–Fri, 9am–5pm)",
      priority: "Processed by urgency and priority",
    },
    premiumSLA: {
      responseTime: "Within 4 hours (Mon–Fri, 9am–5pm)",
      critical: "Within 8 hours (system not available)",
      high: "Within 24 hours (important function disrupted)",
      reporting: "Monthly status email on availability",
    },
    additionalSupport: [
      {
        package: "Small package",
        price: "€299/month",
        hours: 5,
        rate: "€59.80/hr.",
      },
      {
        package: "Medium package",
        price: "€549/month",
        hours: 10,
        rate: "€54.90/hr.",
      },
      {
        package: "Large package",
        price: "€999/month",
        hours: 20,
        rate: "€49.95/hr.",
      },
      {
        package: "Enterprise Support Bundle",
        price: "from €2,000/year",
        hours: 50,
        rate: "from €40.00/hr.",
      },
      { package: "Single hour", price: "€79/hr.", hours: 1 },
    ],
    emergency:
      "24/7 emergency support for business-critical applications (details on request)",
  },
  contact: {
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/services",
  },
};

export function getServicesProduct(lang: string = "de") {
  switch ((lang || "").substring(0, 2).toLowerCase()) {
    case "en":
      return services_en;
    case "de":
    default:
      return services_de;
  }
}
