import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { TodoRepository } from '../repositories/TodoRepository';

interface ITodoRequest {
  name: string;
  content: string;
  authorName: string;
}

class UpdateTodoService {
  async execute(id: string, { name, content, authorName }: ITodoRequest) {
    const todoRepository = getCustomRepository(TodoRepository);

    const todoToUpdate = await todoRepository.findOne({ id });

    if (!todoToUpdate) {
      throw new AppError('Todo not found', 404);
    }

    todoRepository.merge(todoToUpdate, { name, content, authorName });

    const todoUpdated = await todoRepository.save(todoToUpdate);

    return todoUpdated;
  }
}

export { UpdateTodoService };
