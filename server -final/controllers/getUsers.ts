/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Users from '../models/users';

const getUsers = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const userList = await Users.find({}, '-password');
    res.status(200).send({ userList });
  } catch (err) {
    const error = new HttpError('There is no Users, Please check again', 500);
    return next(error);
  }
};
export default getUsers;
