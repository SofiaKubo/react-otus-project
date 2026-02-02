import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import OperationPreview from './OperationPreview';
import type { Operation } from '../../model/types';

const meta: Meta<typeof OperationPreview> = {
  title: 'entities/Operation/OperationPreview',
  component: OperationPreview,
  argTypes: {
    operation: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof OperationPreview>;

function ShortDescriptionContent() {
  const { t } = useTranslation();

  const operation: Operation = {
    id: 'op-1',
    title: t('stories.operation.grocery.title'),
    description: t('stories.operation.grocery.shortDescription'),
    amount: 45.67,
    date: '2024-03-18',
    category: {
      id: 'cat-1',
      name: t('stories.operation.category.groceries'),
    },
  };

  return <OperationPreview operation={operation} />;
}

export const ShortDescription: Story = {
  render: () => <ShortDescriptionContent />,
};

function LongDescriptionContent() {
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

  return <OperationPreview operation={operation} />;
}

export const LongDescription: Story = {
  render: () => <LongDescriptionContent />,
};
