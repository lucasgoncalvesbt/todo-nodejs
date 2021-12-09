import cors from 'cors';
import express from 'express';

import 'express-async-errors';

import errorHandler from './errors/ErrorHandler';
import { router } from './routes';

import './database';

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(errorHandler.handle);

app.listen(3333, () => {
  console.log('Listening on port 3333 🚀');
});
