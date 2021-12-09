import express, { Request, Response, NextFunction, Router } from 'express';
import errorMiddleware from '../middleware/httperror';

const defaultRoute = Router();

defaultRoute.use(express.json());
defaultRoute.use(express.urlencoded({ extended: true }));

defaultRoute.get(
  '/',
  errorMiddleware,
  async (req: Request, res: Response, NextFunction) => {
    try {
      res.json({ status: 'ok' });
    } catch (error) {
      res.sendStatus(500).json({ error: 500, message: error });
    }
  }
);

module.exports = defaultRoute;
