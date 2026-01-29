import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/theme/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        padding: '10px',
      }}
    >
      <ThemeSwitcher />
    </div>
  ),
};
