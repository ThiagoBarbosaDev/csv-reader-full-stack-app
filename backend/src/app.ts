import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import productsRouter from './routes/products.routes';
import packsRouter from './routes/packs.routes';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productsRouter);
app.use('/', packsRouter);
app.use(
  (err: Error, _req: Request, res: Response, next: NextFunction) =>
    errorMiddleware(err, _req, res, next),
);

export default app;
