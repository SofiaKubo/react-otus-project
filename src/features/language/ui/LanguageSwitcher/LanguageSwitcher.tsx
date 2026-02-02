import React from 'react';
import { useLanguage } from '../../../../app/providers/LanguageProvider';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  const nextLanguage = language === 'en' ? 'RU' : 'EN';
  const nextLanguageFull = language === 'en' ? 'Russian' : 'English';

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${nextLanguageFull}`}
      title={`Switch to ${nextLanguageFull}`}
    >
      <span className="language-switcher__icon" aria-hidden="true">
        🌐
      </span>
      <span className="language-switcher__text">{nextLanguage}</span>
    </button>
  );
}
