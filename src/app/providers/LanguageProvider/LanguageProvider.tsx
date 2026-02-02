import React, { ReactNode, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext, Language } from './LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<Language>((i18n.language as Language) || 'en');

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'ru' : 'en';
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguageState(lng as Language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
