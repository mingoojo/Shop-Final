/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpError from '../error/HttpError';
import { VerifiedData } from '../types';
import CartProduct from '../models/cartProduct';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const getCart = async (req:Request, res:Response, next:NextFunction) => {
  let verified;
  try {
    const token = String(req.headers.authorization).replace(/^Bearer\s+/, '');
    verified = jwt.verify(token, ACCESS_SECRET) as VerifiedData;
  } catch (err) {
    const error = new HttpError('accessToken is broken, please login again', 403);
    return next(error);
  }

  let cart;
  try {
    cart = await CartProduct.find({ email: verified.email });
  } catch (err) {
    const error = new HttpError(
      'Cannot find a cart Product, please try again.',
      500,
    );
    return next(error);
  }

  if (!cart.length) {
    const error = new HttpError(
      'Cannot find a cart Product, please try again.',
      404,
    );
    return next(error);
  }

  const cartItems = cart.map((cartItem) => ({
    id: cartItem.id,
    name: cartItem.name,
    productId: cartItem.productId,
    image: cartItem.image,
    category: cartItem.category,
    options: cartItem.options,
    quantity: cartItem.quantity,
    unitPrice: cartItem.unitPrice,
    totalPrice: cartItem.totalPrice,
  }));

  res.status(200).send({ cartItems });
};
export default getCart;
