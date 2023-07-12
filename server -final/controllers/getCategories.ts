/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import Categories from '../models/categories';
import HttpError from '../error/HttpError';

const getCategories = async (req:Request, res:Response, next:NextFunction) => {
  let categories;
  try {
    categories = await Categories.find();
  } catch (err) {
    const error = new HttpError(
      'Cannot find a Category, please try again.',
      500,
    );
    return next(error);
  }

  res.status(200).send({ categories });
};

export default getCategories;
