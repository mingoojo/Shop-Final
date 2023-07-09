/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import ProductDetail from '../models/productDetail';

const getProductDetail = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  let product;
  try {
    [product] = await ProductDetail.find({ id });
  } catch (err) {
    const error = new HttpError('Cannot find a ProductDetail for requested, Please check again', 404);
    return next(error);
  }
  res.status(200).send({ product });
};

export default getProductDetail;
