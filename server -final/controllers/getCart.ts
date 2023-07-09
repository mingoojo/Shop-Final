/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { VerifiedData } from '../types';
import CartItem from '../models/cartItem';
import HttpError from '../error/HttpError';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const getCart = async (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;

  const token = String(authorization).replace(/^Bearer\s+/, '');
  const verified = jwt.verify(token, ACCESS_SECRET) as VerifiedData;

  const MyCartItem = await CartItem.find({ userEmail: verified.email });

  if (!MyCartItem) {
    const error = new HttpError(
      'Cart is empty, go back to Product List',
      500,
    );
    return next(error);
  }

  const lineItems = MyCartItem.map((item) => (
    {
      id: String(item._id),
      product: item.product,
      options: item.product.options,
      unitPrice: item.unitPrice,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    }
  ));
  const totalPrice = lineItems.reduce((acc, cur) => acc + cur.totalPrice, 0);

  res.status(200).send({
    cartItem: {
      lineItems,
      totalPrice,
    },
  });
};

export default getCart;
