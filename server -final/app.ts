/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import HttpError from './error/HttpError';
import { Err } from './types';
import productRouter from './router/productRouter';
import authenticationRouter from './router/authenticationRouter';
import adminRouter from './router/adminRouter';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:8000', 'http://localhost:8080'],
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  credentials: true,
}));

app.use(adminRouter);
app.use(productRouter);
app.use(authenticationRouter);

// when the route is wrong
app.use((req:Request, res:Response, next:NextFunction) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});

// when the error is occured
app.use((error:Err, req:Request, res:Response, next:NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

// mongodb connect
mongoose.connect(
  `${process.env.MONGODB_KEY}`,
).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${String(process.env.PORT)} with database!`);
  });
}).catch(() => {
  console.log('Connection failed!');
});
