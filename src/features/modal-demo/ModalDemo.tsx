import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../ui/Modal/Modal';
import './ModalDemo.css';

export default function ModalDemo() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  return (
    <div className="modal-demo">
      <h2 className="modal-demo__title">{t('modal.demo.title')}</h2>

      <div className="modal-demo__input-group">
        <label htmlFor="modal-text" className="modal-demo__label">
          {t('modal.demo.label')}
        </label>

        <input
          id="modal-text"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t('modal.demo.placeholder')}
          className="modal-demo__input"
        />
      </div>

      <button onClick={() => setIsOpen(true)} className="modal-demo__button">
        {t('modal.demo.button')}
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <p className="modal-demo__modal-content">{inputText || t('modal.demo.fallback')}</p>
        </Modal>
      )}
    </div>
  );
}
