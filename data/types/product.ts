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

export interface WebsiteProduct extends BaseProduct {
  packages: {
    name: string;
    type: string;
    target: string;
    description: string[];
    startPrice: string;
    benefit?: string;
  }[];
  modules: {
    id: number;
    name: string;
    description: string;
    price: string;
  }[];
}

export interface AISystemsProduct extends BaseProduct {}

export type Product =
  | MailProduct
  | ServiceProduct
  | SoftwareProduct
  | WebsiteProduct
  | AISystemsProduct;
