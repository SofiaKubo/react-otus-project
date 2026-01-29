import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from '../../../../app/providers/ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/theme/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  render: () => <ThemeSwitcher />,
};
