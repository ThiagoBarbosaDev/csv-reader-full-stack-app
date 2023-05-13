import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.routes';
import packsRouter from './routes/packs.routes';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productsRouter)
app.use('/', packsRouter)
app.use(errorMiddleware)

// app.post('/validate', (_req: Request, res: Response) => {
//   res.status(statusCodes.OK).json({ message: 'validate response'});
// });

// app.put('/update', (_req: Request, res: Response) => {
//   res.status(statusCodes.OK).json({ message: 'update response'});
// });

export default app