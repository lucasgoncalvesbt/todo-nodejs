import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import 'express-async-errors';

import errorHandler from './errors/ErrorHandler';
import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(errorHandler.handle);

app.listen(3333, () => {
  console.log('Listening on port 3333 🚀');
});
