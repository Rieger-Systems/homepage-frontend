<template>
  <Menu as="div" class="relative inline-block" v-slot="{ open }">
    <MenuButton
      class="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded hover:text-primary text-base-content transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label="Sprache wählen"
    >
      <span>{{ localeLabel }}</span>
      <ChevronDownIcon
        class="w-4 h-4 opacity-70 transition-transform duration-200"
        :class="{ 'rotate-180': open }"
      />
    </MenuButton>

    <Transition
      enter="transition ease-out duration-100"
      enter-from="opacity-0 translate-y-1"
      enter-to="opacity-100 translate-y-0"
      leave="transition ease-in duration-75"
      leave-from="opacity-100 translate-y-0"
      leave-to="opacity-0 translate-y-1"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-base-100 border border-base-300 shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
      >
        <MenuItem v-slot="{ active }">
          <button
            @click="setLocale('de')"
            class="flex justify-between items-center w-full px-4 py-2 text-sm text-left tracking-wide transition-colors"
            :class="[
              active ? 'bg-base-200 text-primary' : 'text-base-content',
              localeStore.locale === 'de' ? 'font-semibold' : '',
            ]"
          >
            Deutsch
            <CheckIcon
              v-if="localeStore.locale === 'de'"
              class="w-4 h-4 text-primary"
            />
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
            @click="setLocale('en')"
            class="flex justify-between items-center w-full px-4 py-2 text-sm text-left tracking-wide transition-colors"
            :class="[
              active ? 'bg-base-200 text-primary' : 'text-base-content',
              localeStore.locale === 'en' ? 'font-semibold' : '',
            ]"
          >
            English
            <CheckIcon
              v-if="localeStore.locale === 'en'"
              class="w-4 h-4 text-primary"
            />
          </button>
        </MenuItem>
      </MenuItems>
    </Transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useLocaleStore } from "~/stores/locale";
import { ChevronDownIcon, CheckIcon } from "@heroicons/vue/20/solid";

const localeStore = useLocaleStore();
const setLocale = (lang: string) => (localeStore.locale = lang);
const localeLabel = computed(() => localeStore.locale?.toUpperCase() || "DE");
</script>
