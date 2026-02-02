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
        confirm: {
          title: 'Question',
          question: 'Are you sure to leave?',
          ok: 'OK',
          cancel: 'Cancel',
        },
        closed: {
          content: 'Page content without modal',
          description: 'Modal is not rendered (conditional rendering pattern)',
        },
        simple: {
          text: 'This is a simple modal with text only',
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
          edit: 'Edit',
        },
      },
      stories: {
        product: {
          headphones: {
            title: 'Wireless Headphones',
            shortDescription: 'High-quality wireless headphones suitable for everyday use.',
            longDescription:
              'High-quality wireless headphones with active noise cancellation, long battery life and comfortable ear cushions. Suitable for everyday use, work and travel. These premium headphones feature advanced Bluetooth 5.0 technology for seamless connectivity, touch controls for easy operation, and a foldable design for portability. The rechargeable battery provides up to 30 hours of continuous playback, and the quick charge feature gives you 5 hours of use with just 10 minutes of charging. Compatible with all major devices and voice assistants.',
          },
          category: {
            electronics: 'Electronics',
          },
        },
        operation: {
          grocery: {
            title: 'Grocery shopping',
            shortDescription: 'Bought fruits and vegetables',
            longDescription:
              'Bought fruits, vegetables, bread, milk, cheese and some snacks for the weekend. Also picked up a few household items and cleaning supplies. This description is intentionally long to demonstrate how text truncation works.',
          },
          category: {
            groceries: 'Groceries',
          },
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
        confirm: {
          title: 'Вопрос',
          question: 'Вы уверены, что хотите выйти?',
          ok: 'ОК',
          cancel: 'Отмена',
        },
        closed: {
          content: 'Содержимое страницы без модального окна',
          description: 'Модальное окно не отображается (паттерн условного рендеринга)',
        },
        simple: {
          text: 'Это простое модальное окно только с текстом',
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
          edit: 'Редактировать',
        },
      },
      stories: {
        product: {
          headphones: {
            title: 'Беспроводные наушники',
            shortDescription: 'Высококачественные беспроводные наушники для повседневного использования.',
            longDescription:
              'Высококачественные беспроводные наушники с активным шумоподавлением, долгим временем работы от батареи и удобными амбушюрами. Подходят для повседневного использования, работы и путешествий. Эти премиальные наушники оснащены передовой технологией Bluetooth 5.0 для бесшовного подключения, сенсорным управлением для удобства и складной конструкцией для портативности. Аккумулятор обеспечивает до 30 часов непрерывного воспроизведения, а функция быстрой зарядки дает 5 часов использования всего за 10 минут зарядки. Совместимы со всеми основными устройствами и голосовыми помощниками.',
          },
          category: {
            electronics: 'Электроника',
          },
        },
        operation: {
          grocery: {
            title: 'Покупка продуктов',
            shortDescription: 'Купили фрукты и овощи',
            longDescription:
              'Купили фрукты, овощи, хлеб, молоко, сыр и закуски на выходные. Также взяли несколько товаров для дома и чистящие средства. Это описание намеренно длинное, чтобы продемонстрировать работу обрезки текста.',
          },
          category: {
            groceries: 'Продукты',
          },
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
