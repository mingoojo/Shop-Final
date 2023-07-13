/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpError from '../error/HttpError';
import Order from '../models/order';
import OrderDetail from '../models/orderDetail';
import { VerifiedData } from '../types';

dotenv.config();
const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const createOrder = async (req:Request, res:Response, next:NextFunction) => {
  const {
    merchantId, transactionId, cartItem, totalPrice, receiver,
  } = req.body;

  let verified;
  try {
    const token = String(req.headers.authorization).replace(/^Bearer\s+/, '');
    verified = jwt.verify(token, ACCESS_SECRET) as VerifiedData;
  } catch (err) {
    const error = new HttpError('accessToken is broken, please login again', 403);
    return next(error);
  }

  if (!verified) {
    const error = new HttpError('accessToken is broken, please login again', 403);
    return next(error);
  }

  const today = new Date();
  const orderedAt = `${today.toLocaleDateString()}-${today.toLocaleTimeString()}`;

  const OrderItem = new Order({
    id: merchantId,
    title: cartItem[0].name,
    totalPrice,
    status: 'paid',
    orderedAt,
    email: verified.email,
  });

  const OrderDetailItem = new OrderDetail({
    id: merchantId,
    transactionId,
    cartItem,
    totalPrice,
    receiver,
    email: verified.email,
  });

  try {
    await OrderItem.save();
    await OrderDetailItem.save();
  } catch (err) {
    const error = new HttpError(
      'Cannot save a data, please try again.',
      500,
    );
    return next(error);
  }
};

export default createOrder;
