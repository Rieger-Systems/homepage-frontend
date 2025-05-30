<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-base-100 border-b border-base-300 shadow-sm backdrop-blur-md"
    v-motion="{
      initial: { opacity: 0, y: -50 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 150, damping: 20, delay: 50 },
      },
    }"
  >
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
      <!-- Branding / Home -->
      <NuxtLink
        to="/"
        class="text-xl font-bold text-primary tracking-tight leading-none"
        :aria-label="t('header.toHome')"
      >
        {{ t("header.company") }}
      </NuxtLink>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <NavMenu />
      </nav>
      <!-- Controls (LocaleSwitcher + Mobile Menu) -->
      <div class="flex items-center gap-2">
        <!-- LocaleSwitcher Mobile only -->
        <div class="md:hidden">
          <LocaleSwitcher />
        </div>
        <!-- Burger Menu Mobile only -->
        <button
          @click="toggleMobile"
          :aria-expanded="mobileOpen"
          :aria-label="t('header.openMenu')"
          class="btn btn-ghost btn-square md:hidden"
        >
          <Bars3Icon class="w-6 h-6" />
        </button>
        <!-- LocaleSwitcher Desktop only -->
        <div class="hidden md:block">
          <LocaleSwitcher />
        </div>
      </div>
    </div>

    <!-- MOBILE NAVIGATION OVERLAY -->
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
        class="md:hidden fixed inset-0 z-50 bg-base-100/95 backdrop-blur-sm flex flex-col h-screen"
        @click.self="closeMobile"
        tabindex="-1"
        ref="mobileMenu"
      >
        <!-- Overlay Header (Branding + Close) -->
        <div
          class="flex items-center justify-between px-6 pt-4 pb-2 border-b border-base-300"
        >
          <span class="font-bold text-primary text-lg">
            {{ t("header.company") }}
          </span>
          <button
            @click="closeMobile"
            aria-label="Menü schließen"
            class="btn btn-ghost btn-sm"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Navigation Items -->
        <div class="flex-1 overflow-y-auto px-6 py-4">
          <NavMenu @select="closeMobile" />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import NavMenu from "~/components/navigation/NavMenu.vue";
import LocaleSwitcher from "~/components/navigation/LocaleSwitcher.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const mobileOpen = ref(false);
const mobileMenu = ref<HTMLElement | null>(null);

// Öffnen/Schließen
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);
const closeMobile = () => (mobileOpen.value = false);

// Scroll-Lock wenn Mobile Menu offen
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
  // Escape-Handling für Overlay schließen
  if (open) {
    document.addEventListener("keydown", onEscape);
  } else {
    document.removeEventListener("keydown", onEscape);
  }
});

// Close on Escape
function onEscape(e: KeyboardEvent) {
  if (e.key === "Escape") closeMobile();
}

// Clean up beim Unmount
onBeforeUnmount(() => {
  document.body.style.overflow = "";
  document.removeEventListener("keydown", onEscape);
});
</script>
