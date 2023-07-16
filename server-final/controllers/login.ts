/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpError from '../error/HttpError';
import Users from '../models/users';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const login = async (req:Request, res:Response, next:NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new HttpError('Invalid inputs passed, please check your data.', 422);
    return next(err);
  }

  const { email, password } = req.body;

  // 이메일 검증
  let existedUser;
  try {
    existedUser = await Users.findOne({ email });
  } catch (err) {
    const error = new HttpError('There is no userdata, Please check again', 500);
    return next(error);
  }

  if (!existedUser) {
    const error = new HttpError('There is no userdata, Please check again', 403);
    return next(error);
  }

  // 패스워드 검증
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existedUser.password);
  } catch (err) {
    const error = new HttpError('Password is wrong, Please check again', 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError('Password is wrong, Please check again', 401);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign({
      email: existedUser.email,
    }, ACCESS_SECRET, { expiresIn: '24h' });
  } catch (err) {
    const error = new HttpError('Log in failed, please try again later.', 500);
    return next(error);
  }

  res.status(201).send({ accessToken: token });
};
export default login;
