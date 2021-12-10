import { Router } from 'express';

import { CreateTodoController } from './controllers/CreateTodoController';
import { DeleteTodoController } from './controllers/DeleteTodoController';
import { ListTodoController } from './controllers/ListTodoController';
import { UpdateTodoController } from './controllers/UpdateTodoController';

const router = Router();

const listTodoController = new ListTodoController();
const createTodoController = new CreateTodoController();
const updateTodoController = new UpdateTodoController();
const deleteTodoController = new DeleteTodoController();

router.get('/todos', listTodoController.handle);
router.post('/todos', createTodoController.handle);
router.put('/todos/:id', updateTodoController.handle);
router.delete('/todos/:id', deleteTodoController.handle);

export { router };
