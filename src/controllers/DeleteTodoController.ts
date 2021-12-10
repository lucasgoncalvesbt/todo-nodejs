import { Request, Response } from 'express';

import { DeleteTodoService } from '../services/DeleteTodoService';

class DeleteTodoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteTodoService = new DeleteTodoService();

    await deleteTodoService.execute(id);

    return res.status(204).send();
  }
}

export { DeleteTodoController };
