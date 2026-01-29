import React from 'react';
import { useTheme } from '../../../../app/providers/ThemeProvider';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  const icon = isDark ? '🌙' : '☀️';

  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      data-theme={theme}
    >
      <span className="theme-switcher__icon" aria-hidden="true">
        {icon}
      </span>

      <span className="theme-switcher__text">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
