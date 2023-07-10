/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Product from '../models/product';

const getProducts = async (req:Request, res:Response, next:NextFunction) => {
  const { categoryId } = req.query;
  let products;
  if (categoryId) {
    try {
      products = await Product.find({ 'category.id': categoryId });
    } catch (err) {
      const error = new HttpError(
        'Creating Product failed, please try again.',
        500,
      );
      return next(error);
    }
  } else {
    try {
      products = await Product.find();
    } catch (err) {
      const error = new HttpError(
        'Creating Product failed, please try again.',
        500,
      );
      return next(error);
    }
  }

  res.status(201).send({ products });
};

export default getProducts;
