import express from 'express';
import morgan from 'morgan';


export const app = express();
app.use(express.json());


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
