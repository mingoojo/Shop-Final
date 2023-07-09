import { NextFunction, Request, Response } from 'express';

const logout = async (req:Request, res:Response, next:NextFunction) => {
  res.status(202);
};

export default logout;
