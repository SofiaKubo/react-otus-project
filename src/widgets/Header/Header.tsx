import React from 'react';
import Logo from '../../ui/Logo/Logo';
import ThemeSwitcher from '../../features/theme/ui/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../../features/language/ui/LanguageSwitcher/LanguageSwitcher';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />

        <div className="header-actions">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
