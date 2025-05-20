import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/motion/nuxt"],

  css: ["~/assets/css/main.css"],
  components: {
    global: true,
    dirs: ["~/components", "~/components/ui", "~/components/ui/transition"],
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
