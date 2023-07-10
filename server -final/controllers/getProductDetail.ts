import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import ProductDetail from '../models/productDetail';

// eslint-disable-next-line consistent-return
const getProductDetail = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  let productDetail;
  try {
    productDetail = await ProductDetail.findOne({ id });
  } catch (err) {
    const error = new HttpError(
      'Creating Product failed, please try again.',
      500,
    );
    return next(error);
  }

  res.status(200).send({ productDetail });
};

export default getProductDetail;
