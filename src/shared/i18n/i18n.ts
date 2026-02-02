import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        language: 'Language',
        hello: 'Hello!',
      },
      modal: {
        title: 'Modal Window Demo',
      },
    },
  },
  ru: {
    translation: {
      common: {
        language: 'Язык',
        hello: 'Привет!',
      },
      modal: {
        title: 'Демо модального окна',
      },
    },
  },
} as const;

void i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
