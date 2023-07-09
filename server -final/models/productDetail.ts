import mongoose from 'mongoose';
import { ProductDetail } from '../types';

const productDetailSchema = new mongoose.Schema<ProductDetail>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },

  category: {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },

  images: [
    {
      url: { type: String, required: true },
    },
  ],

  options: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      items: [
        {
          id: { type: String, required: true },
          name: { type: String, required: true },
        },
      ],
    },
  ],
});

const ProductDetail = mongoose.model<ProductDetail>('productDetail', productDetailSchema);
export default ProductDetail;
