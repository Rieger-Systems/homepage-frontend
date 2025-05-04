<template>
  <footer
    class="bg-base-200 border-t border-base-300 text-sm text-base-content/80"
  >
    <!-- Hauptfooter -->
    <div
      class="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10"
    >
      <!-- Branding / Mission -->
      <div class="col-span-2 md:col-span-1 flex flex-col gap-4">
        <NuxtLink to="/" class="inline-flex items-center gap-4 group">
          <img
            :src="logoShort"
            alt="Rieger Systems Logo"
            class="w-12 h-12 md:w-14 md:h-14 rounded shadow"
          />
          <span
            class="text-xl font-semibold text-primary tracking-tight leading-snug"
          >
            Rieger Systems
          </span>
        </NuxtLink>
        <p class="text-sm text-base-content/60 leading-relaxed max-w-xs mt-1">
          Technologie, die trägt - klar, sicher und menschlich.
        </p>
      </div>

      <!-- Produkt -->
      <div>
        <h3 class="text-base font-semibold text-primary mb-4">Produkt</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/products" class="hover:text-primary"
              >Leistungen</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/projects" class="hover:text-primary"
              >Projekte</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-primary"
              >Kontakt</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Information -->
      <div>
        <h3 class="text-base font-semibold text-primary mb-4">Information</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="/faq" class="hover:text-primary">FAQ</NuxtLink></li>
          <li>
            <NuxtLink to="/about" class="hover:text-primary">Über uns</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/jobs" class="hover:text-primary">Karriere</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Rechtliches -->
      <div>
        <h3 class="text-base font-semibold text-primary mb-4">Rechtliches</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/imprint" class="hover:text-primary"
              >Impressum</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/privacy" class="hover:text-primary"
              >Datenschutz</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/terms" class="hover:text-primary">AGB</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer-Final -->
    <div
      class="border-t border-base-400 mt-8 pt-6 pb-8 text-center text-xs text-base-content/50 space-y-3 px-6"
    >
      <p>
        © {{ new Date().getFullYear() }} Rieger Systems · Alle Rechte
        vorbehalten
      </p>

      <!-- Cookie-Statement -->
      <p class="text-xs text-center text-base-content/50 leading-relaxed">
        🍪 Diese Website verwendet <strong>keine Cookies</strong> und kein
        externes Tracking.<br />
        Weitere Informationen finden Sie in unserer
        <NuxtLink to="/privacy" class="underline hover:text-primary"
          >Datenschutzerklärung</NuxtLink
        >.
      </p>

      <!-- Socials -->
      <div
        class="flex justify-center gap-6 pt-1 text-base md:text-lg text-base-content/60"
      >
        <NuxtLink
          to="https://www.linkedin.com/company/rieger-systems"
          target="_blank"
          class="hover:text-primary transition"
          aria-label="LinkedIn"
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
        </NuxtLink>

        <NuxtLink
          to="https://github.com/rieger-systems"
          target="_blank"
          class="hover:text-primary transition"
          aria-label="GitHub"
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
        </NuxtLink>

        <NuxtLink
          to="mailto:kontakt@rieger-systems.eu"
          class="hover:text-primary transition"
          aria-label="E-Mail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2L12 11.3 5.4 6h13.2zM4 18V8l8 6 8-6v10H4z"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { logoShort } = useAssets();
</script>
