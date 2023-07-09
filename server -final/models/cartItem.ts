import mongoose from 'mongoose';
import { ProductSummary } from '../types';

const cartItemsSchema = new mongoose.Schema<ProductSummary>({
  identifier: { type: String, required: true },
  userEmail: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  product: {
    id: { type: String, required: true },
    thumbnail: {
      url: { type: String, required: true },
    },
    name: { type: String, required: true },
    options: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        itemId: { type: String, required: true },
        itemName: { type: String, required: true },
      },
    ],
  },

});
const CartItem = mongoose.model<ProductSummary>('cart', cartItemsSchema);

export default CartItem;
