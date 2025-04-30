import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  components: {
    global: true,
    dirs: ["~/components", "~/components/ui"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
