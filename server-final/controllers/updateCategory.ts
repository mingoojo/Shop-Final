/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import Categories from '../models/categories';
import HttpError from '../error/HttpError';

const updateCategory = async (req:Request, res:Response, next:NextFunction) => {
  const { name, categoryId, hidden } = req.body;

  let category;
  try {
    category = await Categories.findOne({ id: categoryId });
  } catch (err) {
    const error = new HttpError(
      'Cannot find a Category, please try again.',
      500,
    );
    return next(error);
  }

  if (!category) {
    const error = new HttpError(
      'Cannot find a Category, please try again.',
      500,
    );
    return next(error);
  }

  category.name = name;
  category.hidden = hidden;

  try {
    await category.save();
  } catch (err) {
    const error = new HttpError(
      'Cannot find a Category, please try again.',
      500,
    );
    return next(error);
  }

  res.status(201).send('done');
};

export default updateCategory;
