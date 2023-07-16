/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Product from '../models/product';
import ProductDetail from '../models/productDetail';

const createProduct = async (req:Request, res:Response, next:NextFunction) => {
  const id = `PRO-${Math.random().toString(36).substr(2, 16)}`;
  const {
    name, image, price, category, options, description,
  } = req.body;

  const newProduct = new Product({
    id,
    name,
    image,
    price,
    category,
  });

  const newProductDetail = new ProductDetail({
    id,
    name,
    image,
    price,
    category,
    options,
    description,
  });

  try {
    await newProduct.save();
    await newProductDetail.save();
  } catch (err) {
    const error = new HttpError(
      'Creating Product failed, please try again.',
      500,
    );
    return next(error);
  }

  res.status(201).send({ newProduct, newProductDetail });
};

export default createProduct;
