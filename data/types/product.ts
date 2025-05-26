// Ein gemeinsames Contact-Interface für alle Produkte
export interface ProductContact {
  email: string;
  website: string;
  title?: string;
  description?: string;
  callToAction?: string;
}

// Basistyp für alle Produkte
export interface BaseProduct {
  title: string;
  shortDescription: string;
  description: string;
  link: string;
  icon: object;
  contact: ProductContact; // <-- angepasster Typ!
  i18nKey: string;
}

export interface MailProduct extends BaseProduct {
  tagline: string;
  advantages: string[];
}

export interface ServiceProduct extends BaseProduct {
  packages: {
    name: string;
    target: string;
    serviceFee: string;
    serverInstance: string;
    estimatedCost: string;
    supportHours: string;
    monitoring: string;
  }[];
  servers: {
    name: string;
    vCPU: number;
    ram: string;
    ssd: string;
    traffic: string;
    cost: string;
  }[];
}

export interface SoftwareProduct extends BaseProduct {
  notice: {
    title: string;
    description: string;
    details: string;
  };
  services: {
    category: string;
    items: string[];
  }[];
  pricing: {
    title: string;
    description: string;
    details: string;
  };
  financing: {
    title: string;
    description: string;
    callToAction: string;
  };
  advantages: string[];
  contact: {
    title: string;
    description: string;
    email: string;
    website: string;
    callToAction: string;
  };
}

export interface WebsiteProduct extends BaseProduct {
  notice: {
    title: string;
    description: string;
    details: string;
  };
  packages: {
    name: string;
    type: string;
    target: string;
    features: number[]; // Verweis auf Modul-IDs
    startPrice: string;
    benefit?: string;
    useCases?: string[];
  }[];
  modules: {
    id: number;
    name: string;
    description: string;
    price: string;
  }[];
  financing: {
    description: string;
    advantages: string[];
  };
}

export interface AISystemsProduct extends BaseProduct {}

export type Product =
  | MailProduct
  | ServiceProduct
  | SoftwareProduct
  | WebsiteProduct
  | AISystemsProduct;
