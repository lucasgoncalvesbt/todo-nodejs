import { Router } from 'express';

import { CreateTodoController } from './controllers/CreateTodoController';
import { ListTodoController } from './controllers/ListTodoController';

const router = Router();

const listTodoController = new ListTodoController();
const createTodoController = new CreateTodoController();

router.get('/todos', listTodoController.handle);
router.post('/todos', createTodoController.handle);

export { router };
