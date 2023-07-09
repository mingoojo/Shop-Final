import mongoose from 'mongoose';
import { Product } from '../types';

const productsSchema = new mongoose.Schema<Product>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  thumbnail: {
    url: { type: String, required: true },
  },

});

const Products = mongoose.model<Product>('products', productsSchema);
export default Products;
