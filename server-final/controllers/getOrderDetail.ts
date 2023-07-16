/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import OrderDetail from '../models/orderDetail';

const getOrderDetail = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;

  let orderDetail;
  try {
    orderDetail = await OrderDetail.findOne({ id });
  } catch (err) {
    const error = new HttpError('cannot find orderDetail, please try again', 404);
    return next(error);
  }

  if (!orderDetail) {
    const error = new HttpError('cannot find orderDetail, please try again', 404);
    return next(error);
  }

  res.status(201).send({ orderDetail });
};

export default getOrderDetail;
