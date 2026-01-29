import React from 'react';
import Logo from '../../ui/Logo/Logo';
import './Header.css';
import ThemeSwitcher from '../../features/theme/ui/ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />

        <div className="header-actions">
          {/* Здесь будет LanguageSwitcher */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
