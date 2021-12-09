import { Request, Response } from 'express';

class CreateTodoController {
  handle(req: Request, res: Response) {
    const { name, content, authorName } = req.body;
    console.log({
      name,
      content,
      authorName,
    });

    return res.send();
  }
}

export { CreateTodoController };
