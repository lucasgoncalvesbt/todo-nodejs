import { Request, Response } from 'express';

class UpdateTodoController {
  async handle(req: Request, res: Response) {
    return res.json(req.body);
  }
}

export { UpdateTodoController };
