import { getCustomRepository } from 'typeorm';

import { TodoRepository } from '../repositories/TodoRepository';

class ListTodoService {
  async execute() {
    const todoRepository = getCustomRepository(TodoRepository);

    const todos = await todoRepository.find();

    return todos;
  }
}

export { ListTodoService };
