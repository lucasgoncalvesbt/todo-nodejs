import { Request, Response } from 'express';

import { UpdateTodoService } from '../services/UpdateTodoService';

class UpdateTodoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, content, authorName } = req.body;

    const updateTodoService = new UpdateTodoService();

    const todo = await updateTodoService.execute(id, {
      name,
      content,
      authorName,
    });

    return res.json(todo);
  }
}

export { UpdateTodoController };
