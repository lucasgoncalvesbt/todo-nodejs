import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { TodoRepository } from '../repositories/TodoRepository';

class DeleteTodoService {
  async execute(id: string) {
    const todoRepository = getCustomRepository(TodoRepository);

    const todoExists = await todoRepository.findOne({ id });

    if (!todoExists) {
      throw new AppError('Todo not found', 404);
    }
    await todoRepository.delete(id);
  }
}

export { DeleteTodoService };
