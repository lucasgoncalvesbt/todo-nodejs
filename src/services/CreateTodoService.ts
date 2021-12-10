import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { TodoRepository } from '../repositories/TodoRepository';

interface ITodoRequest {
  name: string;
  content: string;
  authorName: string;
}

class CreateTodoService {
  async execute({ name, content, authorName }: ITodoRequest) {
    const todoRepository = getCustomRepository(TodoRepository);

    if (name === undefined || name === null || name.trim().length === 0) {
      throw new AppError('Name is required', 400);
    }

    if (
      authorName === undefined ||
      authorName === null ||
      authorName.trim().length === 0
    ) {
      throw new AppError('Author name is required', 400);
    }

    const todo = todoRepository.create({
      name,
      content,
      authorName,
    });

    await todoRepository.save(todo);

    return todo;
  }
}

export { CreateTodoService };
