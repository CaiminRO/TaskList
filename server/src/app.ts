import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { sessionConfig } from './config/dbSession.config';
import { setLocalUserData } from './middleware/localUserData.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(sessionConfig);
app.use(setLocalUserData);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
