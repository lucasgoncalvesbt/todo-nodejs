import { Request, Response } from 'express';

class DeleteTodoController {
  async handle(req: Request, res: Response) {
    return res.json({ message: 'Delete Todo' });
  }
}

export { DeleteTodoController };
