<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import { useLocalePath } from "#i18n"; // useLocalePath korrekt importieren

const { t } = useI18n();
const { logoShort } = useAssets(); // Angenommen, useAssets ist vorhanden und liefert logoShort

const localePath = useLocalePath(); // localePath initialisieren

const router = useRouter();
const route = useRoute();

function scrollToAfterHero() {
  setTimeout(() => {
    const element = document.getElementById("services-carousel");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
}

// Angepasste handleClick, um localePath zu verwenden
function handleClick() {
  // Wenn wir bereits auf der Startseite sind, scrolle
  if (route.path === localePath("/")) {
    scrollToAfterHero();
  } else {
    // Navigiere zur Startseite in der aktuellen Sprache und scrolle dann
    router.push(localePath("/")).then(() => {
      setTimeout(() => {
        scrollToAfterHero();
      }, 300);
    });
  }
}
</script>

<template>
  <footer
    class="bg-base-200 border-t border-base-300 text-sm text-base-content/80"
    v-motion="{
      initial: { opacity: 0, y: 50 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 18,
          delay: 100,
        },
      },
    }"
  >
    <div
      class="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
    >
      <div class="flex flex-col gap-4 max-w-xs">
        <NuxtLink
          :to="localePath('/')"
          class="inline-flex items-center gap-4 group"
          :aria-label="t('footer.ariaLabels.home')"
        >
          <img
            :src="logoShort"
            :alt="t('footer.ariaLabels.logoAlt')"
            class="w-12 h-12 md:w-14 md:h-14 rounded shadow"
          />
          <span
            class="text-xl font-semibold text-primary tracking-tight leading-snug"
          >
            {{ t("header.company") }}
          </span>
        </NuxtLink>
        <p class="text-sm text-base-content/60 leading-relaxed">
          {{ t("footer.slogan") }}
        </p>
      </div>

      <nav
        :aria-label="t('footer.sections.company')"
        class="flex flex-col gap-3"
      >
        <h3 class="text-base font-semibold text-primary mb-2">
          {{ t("footer.sections.company") }}
        </h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink :to="localePath('/about')" class="hover:text-primary">{{
              t("footer.links.about")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')" class="hover:text-primary">{{
              t("footer.links.contact")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/faq')" class="hover:text-primary">{{
              t("footer.links.faq")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/jobs')" class="hover:text-primary">{{
              t("footer.links.career")
            }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <nav
        :aria-label="t('footer.sections.services')"
        class="flex flex-col gap-3"
      >
        <h3 class="text-base font-semibold text-primary mb-2">
          {{ t("footer.sections.services") }}
        </h3>
        <ul class="space-y-2">
          <li>
            <a
              href="#services-carousel"
              class="hover:text-primary cursor-pointer"
              @click.prevent="handleClick"
              role="link"
              tabindex="0"
              :aria-label="t('footer.ariaLabels.productsScroll')"
            >
              {{ t("footer.links.products") }}
            </a>
          </li>
          <li>
            <NuxtLink :to="localePath('/projects')" class="hover:text-primary">
              {{ t("footer.links.projects") }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav :aria-label="t('footer.sections.legal')" class="flex flex-col gap-3">
        <h3 class="text-base font-semibold text-primary mb-2">
          {{ t("footer.sections.legal") }}
        </h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink :to="localePath('/imprint')" class="hover:text-primary">{{
              t("footer.links.imprint")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/privacy')" class="hover:text-primary">{{
              t("footer.links.privacy")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/terms')" class="hover:text-primary">{{
              t("footer.links.terms")
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div
      class="border-t border-base-400 mt-8 pt-6 pb-8 text-center text-xs text-base-content/50 space-y-3 px-6"
    >
      <p>
        {{ t("footer.copyright", { year: new Date().getFullYear() }) }}
      </p>

      <p class="text-xs leading-relaxed">
        🍪 {{ t("footer.nocookies") }}<br />
        {{ t("footer.privacyMore") }}
        <NuxtLink
          :to="localePath('/privacy')"
          class="underline hover:text-primary"
          >{{ t("footer.links.privacy") }}</NuxtLink
        >.
      </p>

      <div
        class="flex justify-center gap-6 pt-1 text-base md:text-lg text-base-content/60"
        role="list"
        :aria-label="t('footer.ariaLabels.socialMedia')"
      >
        <a
          :href="AppConfig.contact.social.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary transition"
          aria-label="LinkedIn"
          role="listitem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM.47 8h4.96v13H.47V8zM7.12 8h4.76v1.78h.07c.66-1.25 2.27-2.57 4.68-2.57 5 0 5.92 3.29 5.92 7.58V21H17V15.1c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.11V21H7.12V8z"
            />
          </svg>
        </a>

        <a
          :href="AppConfig.contact.social.github"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary transition"
          aria-label="GitHub"
          role="listitem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 .3A12 12 0 000 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.1 3.1 0 00-1.3-1.7c-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1 1.7 2.7 1.2 3.3.9a2.6 2.6 0 01.8-1.6c-2.6-.3-5.3-1.3-5.3-5.9a4.6 4.6 0 011.2-3.1 4.2 4.2 0 01.1-3s1-.3 3.2 1.2a10.9 10.9 0 015.9 0C18 6.8 19 7.1 19 7.1a4.2 4.2 0 01.1 3 4.6 4.6 0 011.2 3.1c0 4.6-2.7 5.6-5.3 5.9a3 3 0 01.9 2.4v3.6c0 .3.2.7.8.6A12 12 0 0024 12.3 12 12 0 0012 .3z"
            />
          </svg>
        </a>

        <a
          :href="`mailto:${AppConfig.contact.email}`"
          class="hover:text-primary transition"
          aria-label="E-Mail"
          role="listitem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 002-2zm-1.4 2L12 11.3 5.4 6h13.2zM4 18V8l8 6 8-6v10H4z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
