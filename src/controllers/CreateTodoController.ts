import { Request, Response } from 'express';

import { CreateTodoService } from '../services/CreateTodoService';

class CreateTodoController {
  handle(req: Request, res: Response) {
    const { name, content, authorName } = req.body;

    const createTodoService = new CreateTodoService();

    createTodoService.execute({
      name,
      content,
      authorName,
    });

    return res.send();
  }
}

export { CreateTodoController };
