import { Request, Response } from 'express';

import { CreateTodoService } from '../services/CreateTodoService';

class CreateTodoController {
  async handle(req: Request, res: Response) {
    const { name, content, authorName } = req.body;

    const createTodoService = new CreateTodoService();

    const todo = await createTodoService.execute({
      name,
      content,
      authorName,
    });

    return res.status(201).json(todo);
  }
}

export { CreateTodoController };
