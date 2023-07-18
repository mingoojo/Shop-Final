import { CartProduct } from '../src/types';

const nullCart: CartProduct = {
  category: {
    id: '',
    name: '',
  },
  id: '',
  image: '',
  name: '',
  options: [
    { kind: '', items: { name: '' } },
  ],
  productId: '',
  quantity: 0,
  unitPrice: 0,
  totalPrice: 0,
};

export default nullCart;
