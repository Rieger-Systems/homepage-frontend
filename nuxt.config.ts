import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/motion/nuxt", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "de",
        name: "Deutsch",
        iso: "de-AT",
        dir: "ltr",
        file: "de/index.json", // Muss irgendeine Datei sein, z.B. index.json
      },
      {
        code: "en",
        name: "English",
        iso: "en-US",
        dir: "ltr",
        file: "en/index.json", // Gleiches für Englisch
      },
    ],
    defaultLocale: "de",
    lazy: true,
    strategy: "prefix_except_default",
  },

  css: ["~/assets/css/main.css"],
  components: {
    global: true,
    dirs: ["~/components", "~/components/ui"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});
