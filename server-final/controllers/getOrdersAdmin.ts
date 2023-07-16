/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Order from '../models/order';

const getOrdersAdmin = async (req:Request, res:Response, next:NextFunction) => {
  let orders;
  try {
    orders = await Order.find();
  } catch (err) {
    const error = new HttpError('cannot find order list, please try again', 404);
    return next(error);
  }

  res.status(201).send({ orders });
};

export default getOrdersAdmin;
