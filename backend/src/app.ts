import express, { Request, Response } from 'express';
import statusCodes from './utils/statusCodes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/validate', (_req: Request, res: Response) => {
  res.status(statusCodes.OK).json({ message: 'validate resposne'});
});

app.put('/update', (_req: Request, res: Response) => {
  res.status(statusCodes.OK).json({ message: 'update response'});
});

export default app