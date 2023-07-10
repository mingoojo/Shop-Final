/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import Categories from '../models/categories';
import HttpError from '../error/HttpError';

const createCategory = async (req:Request, res:Response, next:NextFunction) => {
  const id = `CAT-${Math.random().toString(36).substr(2, 16)}`;
  const { name } = req.body;

  const newCategories = new Categories({ id, name });

  try {
    await newCategories.save();
  } catch (err) {
    const error = new HttpError(
      'Creating Category failed, please try again.',
      500,
    );
    return next(error);
  }

  res.status(201).send({ newCategories });
};

export default createCategory;
