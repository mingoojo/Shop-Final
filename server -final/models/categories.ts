import mongoose from 'mongoose';
import { Category } from '../types';

const categoriesSchema = new mongoose.Schema<Category>({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const Categories = mongoose.model<Category>('category', categoriesSchema);
export default Categories;
