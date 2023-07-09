/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Products from '../models/products';

const getProducts = async (req:Request, res:Response, next:NextFunction) => {
  const { categoryId } = req.query;
  let products;

  if (!categoryId) {
    try {
      products = await Products.find();
    } catch (err) {
      const error = new HttpError('Cannot find a products, Please check again!', 404);
      return next(error);
    }
    res.status(200).send({ products });
  } else {
    try {
      products = await Products.find({ 'category.id': categoryId });
    } catch (err) {
      const error = new HttpError('Cannot find a products, Please check again!', 404);
      return next(error);
    }
    res.status(200).send({ products });
  }
};

export default getProducts;
