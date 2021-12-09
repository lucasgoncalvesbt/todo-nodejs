import { Router } from 'express';

import { CreateTodoController } from './controllers/CreateTodoController';

const router = Router();

const createTodoController = new CreateTodoController();

router.post('/todos', createTodoController.handle);

export { router };
