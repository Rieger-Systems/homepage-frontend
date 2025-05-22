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
        files: [
          "de/index.json",
          "de/about.json",
          "de/aisystems.json",
          "de/contact.json",
          "de/faq.json",
          "de/homepage.json",
          "de/imprint.json",
          "de/jobs.json",
          "de/mail.json",
          "de/privacy.json",
          "de/products.json",
          "de/projects.json",
          "de/services.json",
          "de/software.json",
          "de/terms.json",
          "de/website.json",
        ],
      },
      {
        code: "en",
        name: "English",
        iso: "en-US",
        dir: "ltr",
        files: [
          "en/index.json",
          "en/about.json",
          "en/aisystems.json",
          "en/contact.json",
          "en/faq.json",
          "en/homepage.json",
          "en/imprint.json",
          "en/jobs.json",
          "en/mail.json",
          "en/privacy.json",
          "en/products.json",
          "en/projects.json",
          "en/services.json",
          "en/software.json",
          "en/terms.json",
          "en/website.json",
        ],
      },
    ],
    defaultLocale: "de",
    lazy: false,
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
