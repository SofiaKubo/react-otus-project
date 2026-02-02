import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import ProductPreview from './ProductPreview';
import type { Product } from '../../model/types';

const meta: Meta<typeof ProductPreview> = {
  title: 'entities/Product/ProductPreview',
  component: ProductPreview,
  argTypes: {
    product: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof ProductPreview>;

function ShortDescriptionContent() {
  const { t } = useTranslation();

  const product: Product = {
    id: 'prod-1',
    title: t('stories.product.headphones.title'),
    description: t('stories.product.headphones.shortDescription'),
    price: 199.99,
    image: '/images/headphones.avif',
    category: {
      id: 'cat-1',
      name: t('stories.product.category.electronics'),
    },
  };

  return <ProductPreview product={product} cartCount={0} />;
}

export const ShortDescription: Story = {
  render: () => <ShortDescriptionContent />,
};

function LongDescriptionContent() {
  const { t } = useTranslation();

  const product: Product = {
    id: 'prod-2',
    title: t('stories.product.headphones.title'),
    description: t('stories.product.headphones.longDescription'),
    price: 199.99,
    image: '/images/headphones.avif',
    category: {
      id: 'cat-1',
      name: t('stories.product.category.electronics'),
    },
  };

  return <ProductPreview product={product} cartCount={0} />;
}

export const LongDescription: Story = {
  render: () => <LongDescriptionContent />,
};

function WithItemsInCartContent() {
  const { t } = useTranslation();

  const product: Product = {
    id: 'prod-1',
    title: t('stories.product.headphones.title'),
    description: t('stories.product.headphones.shortDescription'),
    price: 199.99,
    image: '/images/headphones.avif',
    category: {
      id: 'cat-1',
      name: t('stories.product.category.electronics'),
    },
  };

  return <ProductPreview product={product} cartCount={3} />;
}

export const WithItemsInCart: Story = {
  render: () => <WithItemsInCartContent />,
};
