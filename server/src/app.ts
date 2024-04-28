import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { sessionConfig } from './config/dbSession.config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(sessionConfig);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
