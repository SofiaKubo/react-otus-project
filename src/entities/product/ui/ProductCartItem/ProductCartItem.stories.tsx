import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import ProductCartItem from './ProductCartItem';
import type { CartProduct } from '../../model/types';

const meta: Meta<typeof ProductCartItem> = {
  title: 'entities/Product/ProductCartItem',
  component: ProductCartItem,
  argTypes: {
    product: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCartItem>;

function SingleItemContent() {
  const { t } = useTranslation();

  const product: CartProduct = {
    id: 'prod-1',
    title: t('stories.product.headphones.title'),
    price: 199.99,
    image: '/images/headphones.avif',
  };

  return <ProductCartItem product={product} quantity={1} />;
}

export const SingleItem: Story = {
  render: () => <SingleItemContent />,
};

function MultipleItemsContent() {
  const { t } = useTranslation();

  const product: CartProduct = {
    id: 'prod-1',
    title: t('stories.product.headphones.title'),
    price: 199.99,
    image: '/images/headphones.avif',
  };

  return <ProductCartItem product={product} quantity={3} />;
}

export const MultipleItems: Story = {
  render: () => <MultipleItemsContent />,
};
