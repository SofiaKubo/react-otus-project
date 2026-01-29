import React from 'react';
import Logo from '../../ui/Logo/Logo';
import './Header.css';
import ThemeSwitcher from 'src/features/theme/ui/ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
