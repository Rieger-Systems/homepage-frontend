import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: [
    "primeflex/primeflex.css",
    "primeicons/primeicons.css",
    "~/assets/css/base.css",
    "~/assets/css/main.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
