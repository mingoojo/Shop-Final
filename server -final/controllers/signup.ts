/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import HttpError from '../error/HttpError';
import Users from '../models/users';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET || '';

const signup = async (req:Request, res:Response, next:NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError('Invalid inputs passed, please check your data.', 422);
    return next(error);
  }

  const { name, email, password } = req.body;

  let existedUser;
  try {
    existedUser = await Users.findOne({ email });
  } catch (err) {
    const error = new HttpError('There is no userdata, Please check again', 500);
    return next(error);
  }
  if (existedUser) {
    const error = new HttpError('Inputed email is already exists, Please check again', 403);
    return next(error);
  }

  let hassedPassword;
  try {
    hassedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError('Could not create password, please try again.', 500);
    return next(error);
  }
  const createdUser = new Users({
    name,
    email,
    password: hassedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('signup is failed, please check again', 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign({ email: createdUser.email }, ACCESS_SECRET, { expiresIn: '24h' });
  } catch (err) {
    const error = new HttpError('Sign up failed, please try again later.', 500);
    return next(error);
  }

  res.status(201).send({ accessToken: token });
};

export default signup;
