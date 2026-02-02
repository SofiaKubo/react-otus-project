import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import OperationDetails from './OperationDetails';
import type { Operation } from '../../model/types';

const meta: Meta<typeof OperationDetails> = {
  title: 'entities/Operation/OperationDetails',
  component: OperationDetails,
  argTypes: {
    operation: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof OperationDetails>;

function DefaultContent() {
  const { t } = useTranslation();

  const operation: Operation = {
    id: 'op-2',
    title: t('stories.operation.grocery.title'),
    description: t('stories.operation.grocery.longDescription'),
    amount: 45.67,
    date: '2024-03-18',
    category: {
      id: 'cat-1',
      name: t('stories.operation.category.groceries'),
    },
  };

  return <OperationDetails operation={operation} />;
}

export const Default: Story = {
  render: () => <DefaultContent />,
};
