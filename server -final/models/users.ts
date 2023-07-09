import mongoose from 'mongoose';
import { User } from '../types';

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const Users = mongoose.model<User>('user', userSchema);
export default Users;
