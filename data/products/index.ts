// /data/products/index.ts
import { getAISystemsProduct } from "./aisystems";
import { getMailProduct } from "./mail";
import { getServicesProduct } from "./services";
import { getSoftwareProduct } from "./software/software";
import { getWebsiteProduct } from "./website/website";
import type { Product } from "~/data/types/product";

export function getProducts(locale: string): Record<string, Product> {
  return {
    mail: getMailProduct(locale),
    services: getServicesProduct(locale),
    software: getSoftwareProduct(locale),
    website: getWebsiteProduct(locale),
    aisystems: getAISystemsProduct(locale),
  };
}
