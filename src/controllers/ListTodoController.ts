import { Request, Response } from 'express';

class ListTodoController {
  async handle(req: Request, res: Response) {
    return res.json({ message: 'List Todo' });
  }
}

export { ListTodoController };
