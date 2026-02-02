import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../app/providers/ThemeProvider';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const label = isDark ? t('common.light') : t('common.dark');
  const icon = isDark ? '☀️' : '🌙';

  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={toggleTheme}
      aria-label={`Switch to ${label}`}
      title={label}
      data-theme={theme}
    >
      <span className="theme-switcher__icon" aria-hidden="true">
        {icon}
      </span>

      <span className="theme-switcher__text">{label}</span>
    </button>
  );
}
