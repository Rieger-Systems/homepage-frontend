import { aisystems } from "./aisystems";
import { mail } from "./mail";
import { services } from "./services";
import { software } from "./software";
import { website } from "./website/website";
import type { Product } from "~/data/types/product";

export const products: Record<string, Product> = {
  mail,
  services,
  software,
  website,
  aisystems,
};
