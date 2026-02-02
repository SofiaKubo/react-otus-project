import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="home-page">
      <header className="home-page__header">
        <h1 className="home-page__title">{t('home.title')}</h1>
        <p className="home-page__description">{t('home.description')}</p>
      </header>

      <div className="home-page__content">
        <h2 className="home-page__section-title">{t('home.featuresTitle')}</h2>

        <ul className="home-page__features">
          <li>{t('home.features.modal')}</li>
          <li>{t('home.features.theme')}</li>
          <li>{t('home.features.language')}</li>
          <li>{t('home.features.components')}</li>
          <li>{t('home.features.storybook')}</li>
        </ul>
      </div>
    </section>
  );
}
