/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import Categories from '../models/categories';
import HttpError from '../error/HttpError';

const getCategoryAdmin = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  let category;
  try {
    category = await Categories.findOne({ id });
  } catch (err) {
    const error = new HttpError(
      'Cannot find a Category, please try again.',
      500,
    );
    return next(error);
  }
  res.status(200).send(category);
};

export default getCategoryAdmin;
