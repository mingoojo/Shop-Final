/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Product from '../models/product';
import HttpError from '../error/HttpError';
import { CartProductOption, VerifiedData } from '../types';
import CartProduct from '../models/cartProduct';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const createCart = async (req:Request, res:Response, next:NextFunction) => {
  const { productId, options, quantity } = req.body;

  let verified;
  try {
    const token = String(req.headers.authorization).replace(/^Bearer\s+/, '');
    verified = jwt.verify(token, ACCESS_SECRET) as VerifiedData;
  } catch (err) {
    const error = new HttpError('Cannot find a userData, please login again', 403);
    return next(error);
  }

  let product;
  try {
    product = await Product.findOne({ id: productId });
  } catch (err) {
    const error = new HttpError(
      'Cannot find a Product , please try again.',
      500,
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      'Cannot find a Product, please try again.',
      500,
    );
    return next(error);
  }

  const id = `CAR-${Math.random().toString(36).substr(2, 16)}`;
  const indicator = `${product.id}-${options.map((option:CartProductOption) => (
    option.items.name
  )).join('-')}`;

  const newCartProduct = new CartProduct({
    id,
    indicator,
    email: verified.email,
    name: product.name,
    productId: product.id,
    image: product.image,
    category: product.category,
    options,
    quantity,
    unitPrice: product.price,
    totalPrice: quantity * product.price,
  });

  let existedcartProduct;
  try {
    existedcartProduct = await CartProduct.findOne({ indicator, email: newCartProduct.email });
  } catch (err) {
    const error = new HttpError(
      'Cannot find a Product , please try again.',
      500,
    );
    return next(error);
  }

  if (!existedcartProduct) {
    try {
      await newCartProduct.save();
    } catch (err) {
      const error = new HttpError(
        'Cannot save a data, please try again.',
        500,
      );
      return next(error);
    }
    res.status(201).send('done');
  } else if (existedcartProduct) {
    existedcartProduct.quantity += quantity;
    existedcartProduct.totalPrice += newCartProduct.totalPrice;
    try {
      await existedcartProduct.save();
    } catch (err) {
      const error = new HttpError(
        'Cannot save a data, please try again.',
        500,
      );
      return next(error);
    }
    res.status(201).send('done');
  }
};

export default createCart;
