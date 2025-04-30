<template>
  <footer
    class="bg-base-100 border-t border-base-300 text-sm text-base-content/80"
  >
    <div class="max-w-screen-xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
      <!-- Branding / Mission -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <img
            src="/short-logo.jpg"
            alt="Rieger Systems Logo"
            class="w-8 h-8 rounded-sm"
          />
          <span class="text-lg font-semibold text-primary">Rieger Systems</span>
        </div>
        <p class="text-sm text-base-content/60 leading-relaxed">
          Wir entwickeln Technologie, die Menschen stärkt - nicht überfordert.
          Klar. Sicher. Mit Verantwortung.
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

      <!-- Info -->
      <div>
        <h3 class="text-base font-semibold text-primary mb-4">Information</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="/faq" class="hover:text-primary">FAQ</NuxtLink></li>
          <li>
            <NuxtLink to="/about" class="hover:text-primary">Über uns</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ethics" class="hover:text-primary"
              >Ethik & Werte</NuxtLink
            >
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
      class="border-t border-base-300 mt-10 pt-6 px-6 pb-10 text-xs text-center text-base-content/50 space-y-2"
    >
      <p>
        © {{ new Date().getFullYear() }} Rieger Systems · Alle Rechte
        vorbehalten
      </p>
      <p>
        Wir respektieren deine Privatsphäre. Statistische Auswertungen erfolgen
        anonym und ohne Cookies.
      </p>
    </div>
  </footer>
</template>
