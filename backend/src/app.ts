import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.routes';
import packsRouter from './routes/packs.routes';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productsRouter);
app.use('/', packsRouter);
app.use(errorMiddleware);

export default app;
