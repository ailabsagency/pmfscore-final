import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHanlder';
import notFound from './app/middlewares/notFound';

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://pmf-score-frontend.vercel.app'],
  }),
);

// routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to PMS Score Compass');
});

// global error handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
