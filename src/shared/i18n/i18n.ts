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
        close: 'Close',
      },
      home: {
        title: 'React Demo Application',
        description:
          'This application demonstrates core React concepts, reusable UI components, and application-level features such as theming and state management.',
        featuresTitle: 'Available features',
        features: {
          modal: 'Modal window with controlled state',
          theme: 'Global theme switching using Context',
          language: 'Global language switching using Context',
          components: 'Reusable UI components',
          storybook: 'Storybook-driven development',
        },
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
      product: {
        preview: {
          category: 'Category',
          price: 'Price',
        },
        details: {
          category: 'Category',
          price: 'Price',
          description: 'Description',
        },
        cart: {
          category: 'Category',
          price: 'Price',
          remove: 'Remove',
          add: 'Add to cart',
        },
      },
      operation: {
        preview: {
          amount: 'Amount',
          category: 'Category',
          date: 'Date',
        },
        details: {
          amount: 'Amount',
          category: 'Category',
          date: 'Date',
          description: 'Description',
          confirm: 'Confirm',
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
        close: 'Закрыть',
      },
      home: {
        title: 'React демо-приложение',
        description:
          'Это приложение демонстрирует основные концепции React, переиспользуемые UI компоненты и функции уровня приложения, такие как темы и управление состоянием.',
        featuresTitle: 'Доступные функции',
        features: {
          modal: 'Модальное окно с контролируемым состоянием',
          theme: 'Глобальное переключение темы через Context',
          language: 'Глобальное переключение языка через Context',
          components: 'Переиспользуемые UI компоненты',
          storybook: 'Разработка через Storybook',
        },
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
      product: {
        preview: {
          category: 'Категория',
          price: 'Цена',
        },
        details: {
          category: 'Категория',
          price: 'Цена',
          description: 'Описание',
        },
        cart: {
          category: 'Категория',
          price: 'Цена',
          remove: 'Удалить',
          add: 'В корзину',
        },
      },
      operation: {
        preview: {
          amount: 'Сумма',
          category: 'Категория',
          date: 'Дата',
        },
        details: {
          amount: 'Сумма',
          category: 'Категория',
          date: 'Дата',
          description: 'Описание',
          confirm: 'Подтвердить',
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
