import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'features/language/LanguageSwitcher',
  component: LanguageSwitcher,
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
  render: () => <LanguageSwitcher />,
};

export const InHeader: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px',
        background: 'var(--bg-secondary)',
        borderBottom: '2px solid var(--border-color)',
      }}
    >
      <LanguageSwitcher />
    </div>
  ),
};
