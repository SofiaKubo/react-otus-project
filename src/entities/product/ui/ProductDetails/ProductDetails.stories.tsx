import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import ProductDetails from './ProductDetails';
import type { Product } from '../../model/types';

const meta: Meta<typeof ProductDetails> = {
  title: 'entities/Product/ProductDetails',
  component: ProductDetails,
  argTypes: {
    product: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetails>;

function DefaultContent() {
  const { t } = useTranslation();

  const product: Product = {
    id: 'prod-1',
    title: t('stories.product.headphones.title'),
    description: t('stories.product.headphones.longDescription'),
    price: 199.99,
    image: '/images/headphones.avif',
    category: {
      id: 'cat-1',
      name: t('stories.product.category.electronics'),
    },
  };

  return <ProductDetails product={product} cartCount={0} />;
}

export const Default: Story = {
  render: () => <DefaultContent />,
};

function WithItemsInCartContent() {
  const { t } = useTranslation();

  const product: Product = {
    id: 'prod-1',
    title: t('stories.product.headphones.title'),
    description: t('stories.product.headphones.longDescription'),
    price: 199.99,
    image: '/images/headphones.avif',
    category: {
      id: 'cat-1',
      name: t('stories.product.category.electronics'),
    },
  };

  return <ProductDetails product={product} cartCount={3} />;
}

export const WithItemsInCart: Story = {
  render: () => <WithItemsInCartContent />,
};
