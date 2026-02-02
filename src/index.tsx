import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/i18n/i18n';
import './app/index.css';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { LanguageProvider } from './app/providers/LanguageProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
