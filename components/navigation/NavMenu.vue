<template>
  <nav class="flex flex-col gap-2 md:flex-row md:items-center md:gap-8 w-full">
    <div class="flex flex-col gap-2 md:flex-row md:gap-8">
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
    <div class="flex flex-col gap-2 md:flex-row md:gap-8">
      <NavLink
        v-for="item in otherNavItems"
        :key="item.to"
        :to="item.to"
        @click="$emit('select')"
      >
        {{ item.label }}
      </NavLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
// wie gehabt, keine Änderungen nötig im Script!
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
