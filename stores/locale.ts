export const useLocaleStore = defineStore("locale", {
  state: () => ({
    locale: "de",
  }),
  actions: {
    setLocale(newLocale: string) {
      this.locale = newLocale;
    },
  },
});
