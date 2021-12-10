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

    if (name.trim().length === 0 || name === null) {
      throw new AppError('Name is required', 400);
    }

    if (authorName.trim().length === 0 || authorName === null) {
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
