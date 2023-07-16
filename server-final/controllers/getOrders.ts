/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { VerifiedData } from '../types';
import HttpError from '../error/HttpError';
import Order from '../models/order';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const getOrders = async (req:Request, res:Response, next:NextFunction) => {
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

  let orders;
  try {
    orders = await Order.find({ email: verified.email });
  } catch (err) {
    const error = new HttpError('cannot find order list, please try again', 404);
    return next(error);
  }

  res.status(201).send({ orders });
};

export default getOrders;
