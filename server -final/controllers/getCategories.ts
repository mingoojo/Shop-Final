/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Categories from '../models/categories';

const getCategories = async (req:Request, res:Response, next:NextFunction) => {
  let categories;
  try {
    categories = await Categories.find();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a data`.', 404);
    return next(error);
  }
  res.status(200).send({ categories });
};

export default getCategories;
