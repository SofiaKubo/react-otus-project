import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import './Modal.stories.css';

const meta: Meta<typeof Modal> = {
  title: 'ui/Modal/Modal',
  component: Modal,
  argTypes: {
    children: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

function ConfirmModalContent() {
  const { t } = useTranslation();

  return (
    <Modal onClose={() => console.log('Close clicked')}>
      <div className="confirm">
        <div className="confirm-header">
          <span className="confirm-title">{t('modal.confirm.title')}</span>
        </div>

        <div className="confirm-body">{t('modal.confirm.question')}</div>

        <div className="confirm-actions">
          <button className="confirm-btn" type="button">
            {t('modal.confirm.ok')}
          </button>
          <button className="confirm-btn" type="button">
            {t('modal.confirm.cancel')}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export const ConfirmLike: Story = {
  render: () => <ConfirmModalContent />,
};

function ClosedContent() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 20 }}>
      <p>{t('modal.closed.content')}</p>
      <p style={{ color: '#999', fontSize: '14px' }}>{t('modal.closed.description')}</p>
    </div>
  );
}

export const Closed: Story = {
  render: () => <ClosedContent />,
};

function OnlyTextContent() {
  const { t } = useTranslation();

  return (
    <Modal onClose={() => console.log('Close clicked')}>
      <p style={{ margin: 0 }}>{t('modal.simple.text')}</p>
    </Modal>
  );
}

export const OnlyText: Story = {
  render: () => <OnlyTextContent />,
};
