import { CpuChipIcon } from "@heroicons/vue/24/outline";
import type { AISystemsProduct } from "~/data/types/product";

const aisystems_de: Omit<AISystemsProduct, "i18nKey"> = {
  title: "Künstliche Intelligenz (A.M.A.R.A) – Intelligente Assistenzlösungen",
  shortDescription: "KI-basierte Systeme zur Prozessautomatisierung.",
  description:
    "Mit unseren A.I. Systems bieten wir intelligente Assistenzlösungen, die Prozesse automatisieren und fundierte Entscheidungen ermöglichen.",
  link: "/products/aisystems",
  icon: CpuChipIcon,
  contact: {
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/aisystems",
  },
};

const aisystems_en: Omit<AISystemsProduct, "i18nKey"> = {
  title:
    "Artificial Intelligence (A.M.A.R.A) – Intelligent Assistance Solutions",
  shortDescription: "AI-based systems for process automation.",
  description:
    "Our A.I. Systems provide intelligent assistant solutions to automate processes and enable well-founded decisions.",
  link: "/products/aisystems",
  icon: CpuChipIcon,
  contact: {
    email: "kontakt@rieger-systems.eu",
    website: "https://www.rieger-systems.eu/products/aisystems",
  },
};

export function getAISystemsProduct(lang: string = "de") {
  switch ((lang || "").substring(0, 2).toLowerCase()) {
    case "en":
      return { ...aisystems_en, i18nKey: "products.ai" };
    case "de":
    default:
      return { ...aisystems_de, i18nKey: "products.ai" };
  }
}
