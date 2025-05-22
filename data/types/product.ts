export interface BaseProduct {
  title: string;
  shortDescription: string;
  description: string;
  link: string;
  icon: object;
  contact: {
    email: string;
    website: string;
  };
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
  packages: {
    name: string;
    type: string;
    target: string;
    description: string[];
    startPrice: string;
    useCases?: string[];
  }[];
  modules: {
    name: string;
    description: string;
    price: string;
  }[];
}

// data/types/product.ts
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
