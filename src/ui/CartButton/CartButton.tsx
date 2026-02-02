import React from 'react';
import { useTranslation } from 'react-i18next';
import './CartButton.css';

export interface CartButtonProps {
  count: number;
}

export default function CartButton({ count }: CartButtonProps) {
  const { t } = useTranslation();

  if (count === 0) {
    return (
      <button type="button" className="cart-button cart-button--empty">
        {t('product.cart.add')}
      </button>
    );
  }

  return (
    <div className="cart-button cart-button--counter">
      <button type="button" className="cart-button__control" disabled>
        −
      </button>

      <span className="cart-button__count">{count}</span>

      <button type="button" className="cart-button__control" disabled>
        +
      </button>
    </div>
  );
}
