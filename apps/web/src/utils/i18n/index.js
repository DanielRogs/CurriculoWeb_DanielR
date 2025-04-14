import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationPT from "./locales/ptbr/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  ptbr: { translation: translationPT },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ptbr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
