import mongoose from 'mongoose';
import { Product } from '../types';

const productSchema = new mongoose.Schema<Product>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
});

const Product = mongoose.model<Product>('product', productSchema);
export default Product;
