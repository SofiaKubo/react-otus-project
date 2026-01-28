import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <section className="home-page">
      <header className="home-page__header">
        <h1 className="home-page__title">React Demo Application</h1>
        <p className="home-page__description">
          This application demonstrates core React concepts, reusable UI components, and application-level features such
          as theming and state management.
        </p>
      </header>

      <div className="home-page__content">
        <h2 className="home-page__section-title">Available features</h2>

        <ul className="home-page__features">
          <li>Modal window with controlled state</li>
          <li>Global theme switching using Context</li>
          <li>Reusable UI components</li>
          <li>Storybook-driven development</li>
        </ul>
      </div>
    </section>
  );
}
