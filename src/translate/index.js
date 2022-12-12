import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { eng } from "./eng";
import { rus } from "./rus";
import { uzb } from "./uzb";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "gb",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      gb: {
        translation: {
          ...eng,
        },
      },
      ru: {
        translation: {
          ...rus,
        },
      },
      uz: {
        translation: {
          ...uzb,
        },
      },
    },
  });

export default i18n;
