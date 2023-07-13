import mongoose from 'mongoose';
import { Admin } from '../types';

const adminSchema = new mongoose.Schema<Admin>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const Admins = mongoose.model<Admin>('admin', adminSchema);
export default Admins;
