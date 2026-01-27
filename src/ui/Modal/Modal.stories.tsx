import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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

export const ConfirmLike: Story = {
  render: () => (
    <Modal onClose={() => console.log('Close clicked')}>
      <div className="confirm">
        <div className="confirm-header">
          <span className="confirm-title">Question</span>
        </div>

        <div className="confirm-body">Are you sure to leave?</div>

        <div className="confirm-actions">
          <button className="confirm-btn" type="button">
            OK
          </button>
          <button className="confirm-btn" type="button">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  ),
};

export const Closed: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <p>Page content without modal</p>
      <p style={{ color: '#999', fontSize: '14px' }}>Modal is not rendered (conditional rendering pattern)</p>
    </div>
  ),
};

export const OnlyText: Story = {
  render: () => (
    <Modal onClose={() => console.log('Close clicked')}>
      <p style={{ margin: 0 }}>This is a simple modal with text only</p>
    </Modal>
  ),
};
