import mongoose from 'mongoose';
import { CartProduct } from '../types';

const cartProductSchema = new mongoose.Schema<CartProduct>({
  id: { type: String, required: true },
  indicator: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  productId: { type: String, required: true },
  image: { type: String, required: true },
  category: {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  options: [
    {
      kind: { type: String, required: true },
      items: {
        name: { type: String, required: true },
      },
    },
  ],
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const CartProduct = mongoose.model<CartProduct>('cart', cartProductSchema);
export default CartProduct;
