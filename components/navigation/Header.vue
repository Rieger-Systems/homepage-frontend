<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-base-100 border-b border-base-300 shadow-sm backdrop-blur-md"
    v-motion="{
      initial: { opacity: 0, y: -50 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 150,
          damping: 20,
          delay: 50,
        },
      },
    }"
  >
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="text-xl font-bold text-primary tracking-tight leading-none"
        aria-label="Zur Startseite"
      >
        Rieger Systems
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8">
        <NavMenu />
      </nav>

      <div class="flex items-center gap-3">
        <div class="hidden md:block">
          <LocaleSwitcher />
        </div>
        <button
          @click="toggleMobile"
          :aria-expanded="mobileOpen"
          aria-label="Menü öffnen"
          class="btn btn-ghost btn-square md:hidden"
        >
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>
    </div>

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
import { Transition } from "vue"; // `Transition` is correctly imported from 'vue'
import NavMenu from "~/components/navigation/NavMenu.vue";
import LocaleSwitcher from "~/components/navigation/LocaleSwitcher.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const mobileOpen = ref(false);
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);
const closeMobile = () => (mobileOpen.value = false);
</script>
