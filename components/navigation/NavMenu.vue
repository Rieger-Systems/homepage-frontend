<template>
  <div class="flex items-center gap-8">
    <div class="flex gap-4 md:gap-8">
      <NavLink
        v-for="item in firstNavItems"
        :key="item.to"
        :to="item.to"
        @click="$emit('select')"
      >
        {{ item.label }}
      </NavLink>
    </div>
    <ProductsDropdown
      label="Produkte"
      :items="productItems"
      @select="$emit('select')"
    />
    <div class="flex gap-4 md:gap-8">
      <NavLink
        v-for="item in otherNavItems"
        :key="item.to"
        :to="item.to"
        @click="$emit('select')"
      >
        {{ item.label }}
      </NavLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavLink from "~/components/navigation/NavLink.vue";
import ProductsDropdown from "./ProductsDropdown.vue";
import { products } from "~/data/products";
import type { Product } from "~/data/types/product";

defineEmits(["select"]);

const firstNavItems = [{ key: "home", label: "Startseite", to: "/" }];

// Dynamisches Laden der Produkte
const navItems = Object.keys(products).map((key) => {
  const product = products[key] as Product;
  return {
    key,
    label: product.title.split(" - ")[0], // Nehme den ersten Teil des Titels
    to: `/${product.link}`,
  };
});

// Weitere Navigationspunkte
const otherNavItems = [
  { key: "projects", label: "Projekte", to: "/projects" },
  { key: "about", label: "Über uns", to: "/about" },
  { key: "contact", label: "Kontakt", to: "/contact" },
];

// Filterung der Produkt- und sonstigen Navigationspunkte
const productItems = navItems;
</script>
