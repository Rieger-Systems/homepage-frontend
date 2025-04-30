<template>
  <header class="bg-base-100 border-b border-base-300">
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-xl font-bold text-primary tracking-tight leading-none"
      >
        Rieger Systems
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <NavMenu />
      </div>

      <!-- Desktop-Sprache & Burger -->
      <div class="flex items-center gap-3">
        <!-- Desktop Sprache -->
        <div class="hidden md:block">
          <LocaleSwitcher />
        </div>

        <!-- Mobile Burger -->
        <button
          @click="toggleMobile"
          aria-label="Menü öffnen"
          class="btn btn-ghost btn-square md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition
      enter="transition ease-out duration-150"
      enter-from="opacity-0 -translate-y-2"
      enter-to="opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leave-from="opacity-100 translate-y-0"
      leave-to="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden border-t border-base-300 bg-base-100 px-6 pb-4 pt-2 space-y-4"
      >
        <NavMenu @select="closeMobile" />
        <div class="pt-2 border-t border-base-300">
          <LocaleSwitcher />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Transition } from "vue";
import NavMenu from "~/components/navigation/NavMenu.vue";
import LocaleSwitcher from "~/components/navigation/LocaleSwitcher.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const mobileOpen = ref(false);
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);
const closeMobile = () => (mobileOpen.value = false);
</script>
