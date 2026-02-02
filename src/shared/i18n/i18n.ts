import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        language: 'Language',
        theme: 'Theme',
        light: 'Light',
        dark: 'Dark',
      },
      modal: {
        demo: {
          title: 'Modal Window Demo',
          label: 'Enter text for the modal window:',
          placeholder: 'Enter your text here...',
          button: 'Open Modal Window',
          fallback: 'You did not enter any text',
        },
      },
    },
  },
  ru: {
    translation: {
      common: {
        language: 'Язык',
        theme: 'Тема',
        light: 'Светлая',
        dark: 'Тёмная',
      },
      modal: {
        demo: {
          title: 'Демо модального окна',
          label: 'Введите текст для модального окна:',
          placeholder: 'Введите текст здесь...',
          button: 'Открыть модальное окно',
          fallback: 'Вы не ввели текст',
        },
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
