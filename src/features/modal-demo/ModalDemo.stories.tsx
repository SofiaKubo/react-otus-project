import type { Meta, StoryObj } from '@storybook/react';
import ModalDemo from './ModalDemo';
import React from 'react';

const meta: Meta<typeof ModalDemo> = {
  title: 'features/modal-demo/ModalDemo',
  component: ModalDemo,
};

export default meta;

type Story = StoryObj<typeof ModalDemo>;

export const Default: Story = {
  render: () => <ModalDemo />,
};
