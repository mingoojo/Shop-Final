/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpError from '../error/HttpError';
import { VerifiedData } from '../types';
import CartProduct from '../models/cartProduct';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const deleteCart = async (req:Request, res:Response, next:NextFunction) => {
  let verified;
  try {
    const token = String(req.headers.authorization).replace(/^Bearer\s+/, '');
    verified = jwt.verify(token, ACCESS_SECRET) as VerifiedData;
  } catch (err) {
    const error = new HttpError('accessToken is broken, please login again', 403);
    return next(error);
  }

  try {
    await CartProduct.deleteMany({ email: verified.email });
  } catch (err) {
    const error = new HttpError(
      'Cannot find a cart Product, please try again.',
      500,
    );
    return next(error);
  }

  res.status(200).send('done');
};
export default deleteCart;
