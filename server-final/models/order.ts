import mongoose from 'mongoose';
import { Order } from '../types';

const orderSchema = new mongoose.Schema<Order>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true },
  orderedAt: { type: String, required: true },
  email: { type: String, required: true },
});

const Order = mongoose.model<Order>('order', orderSchema);
export default Order;
