import React from 'react';
import { useLanguage } from '../../../../app/providers/LanguageProvider';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Russian' : 'English'}`}
      title={`Current language: ${language.toUpperCase()}`}
    >
      <span className="language-switcher__icon" aria-hidden="true">
        🌐
      </span>
      <span className="language-switcher__text">{language.toUpperCase()}</span>
    </button>
  );
}
