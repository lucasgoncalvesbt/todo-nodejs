import { Request, Response } from 'express';

import { ListTodoService } from '../services/ListTodoService';

class ListTodoController {
  async handle(req: Request, res: Response) {
    const listTodoService = new ListTodoService();

    const todos = await listTodoService.execute();
    return res.json(todos);
  }
}

export { ListTodoController };
