import React from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.css';

export interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export default function Modal({ children, className, onClose }: ModalProps) {
  const { t } = useTranslation();

  return (
    <div
      className={['modal-overlay', className].filter(Boolean).join(' ')}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label={t('common.close')} type="button" onClick={onClose}>
          ×
        </button>

        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
