<script setup lang="ts">
import { computed } from "vue";
import NavLink from "~/components/navigation/NavLink.vue";
import ProductsDropdown from "./ProductsDropdown.vue";
import { getProducts } from "~/data/products";
import { PRODUCT_KEYS } from "~/data/products/PRODUCT_KEYS";
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";

const { t, locale } = useI18n();
const localePath = useLocalePath();

defineEmits(["select"]);

// Produkte werden immer für die aktuelle Locale geladen!
const products = computed(() => getProducts(locale.value));

const firstNavItems = computed(() => [
  { key: "home", label: t("header.home"), to: localePath("/") },
]);

const productItems = computed(() =>
  PRODUCT_KEYS.map((key) => {
    const product = products.value[key];
    return {
      key,
      label: t(product?.i18nKey),
      to: localePath(product?.link),
    };
  })
);

const otherNavItems = computed(() => [
  { key: "projects", label: t("header.projects"), to: localePath("/projects") },
  { key: "about", label: t("header.about"), to: localePath("/about") },
  { key: "contact", label: t("header.contact"), to: localePath("/contact") },
]);
</script>

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
      :label="t('header.products')"
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
