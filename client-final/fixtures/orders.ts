import products from './products';

import { OrderSummary } from '../src/types';

const orders: OrderSummary[] = [
  {
    id: 'order-01',
    title: products[0].name,
    status: 'paid',
    totalPrice: 10_000,
    orderedAt: '2023-01-01 00:00:00',
  },
];

export default orders;
