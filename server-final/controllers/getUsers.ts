/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../error/HttpError';
import Users from '../models/users';

const getUsers = async (req:Request, res:Response, next:NextFunction) => {
  let userList;
  try {
    userList = await Users.find({}, '-password');
  } catch (err) {
    const error = new HttpError('There is no Users, Please check again', 500);
    return next(error);
  }

  res.status(200).send({ userList });
};
export default getUsers;
