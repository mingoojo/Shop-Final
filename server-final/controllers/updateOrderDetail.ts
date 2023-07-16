/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Order from '../models/order';
import OrderDetail from '../models/orderDetail';

const updateOrderDetail = async (req:Request, res:Response, next:NextFunction) => {
  const { status } = req.body;
  const { id } = req.params;

  console.log(status);

  let order;
  try {
    order = await Order.findOne({ id });
  } catch (err) {
    const error = new HttpError('cannot find order list, please try again', 404);
    return next(error);
  }

  let orderDetail;
  try {
    orderDetail = await OrderDetail.findOne({ id });
  } catch (err) {
    const error = new HttpError('cannot find orderDetail, please try again', 404);
    return next(error);
  }

  if (!order) {
    const error = new HttpError('cannot find order, please try again', 404);
    return next(error);
  }

  if (!orderDetail) {
    const error = new HttpError('cannot find orderDetail, please try again', 404);
    return next(error);
  }

  order.status = status;
  orderDetail.status = status;

  try {
    await order.save();
  } catch (err) {
    const error = new HttpError('cannot find order1, please try again', 500);
    return next(error);
  }

  console.log(orderDetail.status);
  console.log(orderDetail);

  try {
    await orderDetail.save();
  } catch (err) {
    const error = new HttpError('cannot find order2, please try again', 500);
    return next(error);
  }

  res.status(202).send('done');
};

export default updateOrderDetail;
