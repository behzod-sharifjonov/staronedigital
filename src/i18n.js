import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Для загрузки JSON-файлов
  .use(LanguageDetector) // Для определения языка браузера
  .use(initReactI18next) // Для интеграции с React
  .init({
    fallbackLng: "ru", // Язык по умолчанию
    debug: false, // Включить debug-режим при необходимости
    interpolation: {
      escapeValue: false, // Отключаем экранирование (React сам справляется)
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Указываем путь к JSON-файлам
    },
  });

export default i18n;
