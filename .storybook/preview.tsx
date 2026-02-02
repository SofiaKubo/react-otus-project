import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/app/providers/ThemeProvider';
import { LanguageProvider } from '../src/app/providers/LanguageProvider';
import '../src/shared/i18n/i18n';
import '../src/app/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    language: {
      description: 'Global language',
      defaultValue: 'en',
      toolbar: {
        title: 'Language',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Русский' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const language = context.globals.language || 'en';

      if (typeof document !== 'undefined') {
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add(`theme-${theme}`);
      }

      if (typeof window !== 'undefined') {
        const i18n = require('../src/shared/i18n/i18n').default;
        if (i18n.language !== language) {
          i18n.changeLanguage(language);
        }
      }

      return (
        <ThemeProvider>
          <LanguageProvider>
            <Story />
          </LanguageProvider>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
