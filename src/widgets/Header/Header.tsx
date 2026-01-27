import React from 'react';
import Logo from '../../ui/Logo/Logo';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
      </div>
    </header>
  );
}
