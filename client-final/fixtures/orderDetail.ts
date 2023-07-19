import products from './products';

import { OrderDetail } from '../src/types';

// export const nullOrderDetail: OrderDetail = {
//   id: '',
//   transactionId: '',
//   email: '',
//   totalPrice: 0,
//   receiver: {
//     name: '',
//     address1: '',
//     address2: '',
//     postalCode: '',
//     phoneNumber: '',
//   },
//   cartItem: [{
//     id: '',
//     name: '',
//     productId: '',
//     image: '',
//     category: { id: '', name: '' },
//     options: [],
//     quantity: 0,
//     unitPrice: 0,
//     totalPrice: 0,
//   }],
// };

const orderDetail: OrderDetail[] = [
  {
    id: 'order-01',
    transactionId: 'transactionId-test',
    email: 'test@test.com',
    receiver: {
      name: 'tester',
      address1: 'address1',
      address2: 'address2',
      postalCode: '00000',
      phoneNumber: '00000000000',
    },
    cartItem: [
      {
        id: 'line-item-01',
        name: '맨투맨',
        productId: 'productId-test',
        image: 'image.jpeg',
        category: { id: 'testID', name: 'test' },
        options: [
          { kind: '컬러', items: { name: 'black' } },
        ],
        unitPrice: 10_000,
        quantity: 1,
        totalPrice: 10_000,
      },
    ],
    totalPrice: 10_000,
  },
];

export default orderDetail;
