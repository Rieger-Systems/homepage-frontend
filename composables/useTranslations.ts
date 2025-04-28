import de from "~/locales/de.json";
import en from "~/locales/en.json";
import { useLocaleStore } from "~/stores/locale";

const messages: Record<string, any> = {
  de,
  en,
};

export function useTranslations() {
  const localeStore = useLocaleStore();

  return (key: string): string => {
    const keys = key.split(".");
    let text: any = messages[localeStore.locale as keyof typeof messages] || {};

    for (const k of keys) {
      if (text?.[k]) {
        text = text[k];
      } else {
        return key; // Fallback: Key zurückgeben, wenn etwas fehlt
      }
    }

    return typeof text === "string" ? text : key;
  };
}
