import { CartProduct } from '../src/types';

const cart: CartProduct[] = [
  {
    category: {
      id: 'CAT-wa2ecanvhs',
      name: 'acc',
    },
    id: 'line-item-01',
    image: 'http://example.com/01.jpg',
    name: 'test',
    options: [
      { kind: '컬러', items: { name: 'black' } },
    ],
    productId: 'PRO-n64rvc4hi5e',
    quantity: 1,
    unitPrice: 10_000,
    totalPrice: 10_000,
  },
];

export default cart;
