<template>
  <Menu as="div" class="relative inline-block" v-slot="{ open }">
    <!-- Hauptmenü-Button -->
    <MenuButton
      class="transition duration-150 text-base-content/70 hover:text-primary inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
      :class="{ 'text-primary font-semibold': isParentActive }"
      aria-label="Produkte anzeigen"
    >
      <span>{{ label }}</span>
      <ChevronDownIcon
        class="w-4 h-4 opacity-70 transition-transform duration-200"
        :class="{ 'rotate-180': open }"
      />
    </MenuButton>

    <!-- Dropdown-Panel -->
    <Transition
      enter="transition ease-out duration-100"
      enter-from="opacity-0 translate-y-1"
      enter-to="opacity-100 translate-y-0"
      leave="transition ease-in duration-75"
      leave-from="opacity-100 translate-y-0"
      leave-to="opacity-0 translate-y-1"
    >
      <MenuItems
        class="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-base-100 border border-base-300 shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
      >
        <!-- Dynamische Menüeinträge -->
        <MenuItem
          v-for="item in productItems"
          :key="item.to"
          as="div"
          class="block px-4 py-2 text-sm text-left tracking-wide transition-colors"
          :class="[
            isChildActive(item)
              ? 'text-primary font-semibold bg-base-200'
              : 'text-base-content/70 hover:text-primary hover:font-semibold',
          ]"
        >
          <NuxtLink :to="item.to" @click="$emit('select')" class="block w-full">
            {{ item.label }}
          </NuxtLink>
        </MenuItem>
      </MenuItems>
    </Transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { products } from "~/data/products";

// Dynamische Produktauswahl aus Produktdateien
const productItems = Object.keys(products).map((key) => {
  const product = products[key];
  return {
    label: product.title.split(" - ")[0],
    to: product.link,
  };
});

const props = defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "select"): void;
}>();

const route = useRoute();
const isParentActive = computed(() =>
  productItems.some((item) => route.path.startsWith(item.to))
);

function isChildActive(item: { to: string }) {
  return route.path === item.to;
}
</script>
