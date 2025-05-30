<template>
  <Menu as="div" class="relative inline-block text-left" v-slot="{ open }">
    <MenuButton
      type="button"
      class="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded hover:text-primary text-base-content transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
      aria-label="Choose language"
    >
      <span class="capitalize">{{ currentLocaleName }}</span>
      <ChevronDownIcon
        class="w-4 h-4 opacity-70 transition-transform duration-200"
        :class="{ 'rotate-180': open }"
      />
    </MenuButton>
    <Transition
      enter="transition ease-out duration-150"
      enter-from="opacity-0 translate-y-2"
      enter-to="opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leave-from="opacity-100 translate-y-0"
      leave-to="opacity-0 translate-y-2"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-base-100 border border-base-300 shadow-xl ring-1 ring-black/10 focus:outline-none z-50"
      >
        <MenuItem v-for="loc in locales" :key="loc.code" v-slot="{ active }">
          <button
            @click="setLocale(loc.code)"
            type="button"
            class="flex justify-between items-center w-full px-4 py-2 text-sm text-left tracking-wide rounded transition-colors focus-visible:outline-none"
            :class="[
              active ? 'bg-base-200 text-primary' : 'text-base-content',
              locale === loc.code ? 'font-semibold' : 'font-normal',
            ]"
          >
            <!-- Optional: Flag oder Icon für jede Sprache -->
            <!-- <span class="mr-2">
              <LanguageIcon v-if="loc.code === 'en'" />
              <FlagDe v-if="loc.code === 'de'" />
            </span> -->
            <span>{{ loc.name }}</span>
            <CheckIcon
              v-if="locale === loc.code"
              class="w-4 h-4 text-primary ml-2"
            />
          </button>
        </MenuItem>
      </MenuItems>
    </Transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, CheckIcon } from "@heroicons/vue/20/solid";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale, locales, setLocale } = useI18n();

const currentLocaleName = computed(() => {
  const current = locales.value.find((l) => l.code === locale.value);
  return current?.name || locale.value?.toUpperCase() || "DE";
});
</script>
