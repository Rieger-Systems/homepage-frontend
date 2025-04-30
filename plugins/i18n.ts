import de from "~/locales/de.json";
import en from "~/locales/en.json";
import { useLocaleStore } from "~/stores/locale";

const messages = { de, en };

export default defineNuxtPlugin(() => {
  const t = (key: string): string => {
    const locale = useLocaleStore().locale;
    const keys = key.split(".");
    let text: any = messages[locale as keyof typeof messages] || {};

    for (const k of keys) {
      if (text?.[k]) {
        text = text[k];
      } else {
        return key; // fallback
      }
    }

    return typeof text === "string" ? text : key;
  };

  return {
    provide: {
      t,
    },
  };
});
