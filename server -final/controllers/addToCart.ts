/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Option, VerifiedData } from '../types';
import User from '../models/users';

import Product from '../models/productDetail';
import HttpError from '../error/HttpError';
import CartItem from '../models/cartItem';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const addToCart = async (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;

  const token = String(authorization).replace(/^Bearer\s+/, '');
  const verified = jwt.verify(token, ACCESS_SECRET) as VerifiedData;

  const { productId, options, quantity } = req.body;

  // 카트 주인 정보 얻기
  let users;
  try {
    users = await User.findOne({ email: verified.email }, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500,
    );
    return next(error);
  }

  // 카트에 추가한 아이템 정보 얻기
  let item;
  try {
    item = await Product.findOne({ id: productId });
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500,
    );
    return next(error);
  }

  // 상품명과 옵션을 확인하는 식별자를 만든다
  const identifier = `${item?.id}-${options.map((option:Option) => (`${option.itemId}`)).join('-')}`;
  const createdCartItem = new CartItem({
    identifier,
    userEmail: users?.email,
    quantity,
    unitPrice: item?.price,
    totalPrice: quantity * (item?.price || 0),
    product: {
      id: item?.id,
      thumbnail: {
        url: item?.images[0].url,
      },
      name: item?.name,
      options: [...options],
    },
  });

  const RepeatedItem = await CartItem.findOne({
    userEmail: createdCartItem.userEmail,
    identifier: createdCartItem.identifier,
  });

  if (RepeatedItem) {
    RepeatedItem.quantity += createdCartItem.quantity;
    RepeatedItem.totalPrice += createdCartItem.totalPrice;
    try {
      await RepeatedItem.save();
    } catch (err) {
      const error = new HttpError(
        'Creating place failed, please try again.',
        500,
      );
      return next(error);
    }
    res.send({ RepeatedItem });
  } else if (!RepeatedItem) {
    try {
      await createdCartItem.save();
    } catch (err) {
      const error = new HttpError(
        'Creating place failed, please try again.',
        500,
      );
      return next(error);
    }
    res.send({ createdCartItem });
  }
};

export default addToCart;
