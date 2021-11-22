import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

export default function OrderCard({ sale }) {
  const { role } = useSelector((state) => state.user);
  return (
    <div>
      <p data-testid={ `${role}_orders__element-order-id-${sale.id}` }>
        Pedido
        { sale.id }
      </p>
      <h2 data-testid={ `${role}_orders__element-delivery-status-${sale.id}` }>
        { sale.status }
      </h2>
      <p data-testid={ `${role}_orders__element-order-date-${sale.id}` }>
        <strong>{ sale.saleDate }</strong>
      </p>
      <p data-testid={ `${role}_orders__element-card-price-${sale.id}` }>
        <strong>{ sale.totalPrice }</strong>
      </p>
      { role === 'seller' && (
        <p data-testid={ `seller_orders__element-card-address-${sale.id}` }>
          { sale.deliveryAddress }
          ,
          { sale.deliveryNumber }
        </p>
      ) }
    </div>
  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
  }).isRequired,
};
