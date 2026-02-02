import { createContext, useContext } from 'react';

export type Language = 'en' | 'ru';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return value;
}
