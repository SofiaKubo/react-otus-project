import React from 'react';
import Header from '../../widgets/Header/Header';
import './Layout.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">{children}</main>
    </div>
  );
}
