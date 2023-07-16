/* eslint-disable consistent-return */
import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpError from '../error/HttpError';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const checkToken = async (req:Request, res:Response, next:NextFunction) => {
  let verified;
  try {
    const token = String(req.headers.authorization).replace(/^Bearer\s+/, '');
    verified = jwt.verify(token, ACCESS_SECRET);
  } catch (err) {
    const error = new HttpError('accessToken is broken, please login again', 403);
    return next(error);
  }
  res.status(200).json({ verified });
};
export default checkToken;
