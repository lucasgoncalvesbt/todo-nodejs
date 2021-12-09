import { getCustomRepository } from 'typeorm';

import { TodoRepository } from '../repositories/TodoRepository';

interface ITodoRequest {
  name: string;
  content: string;
  authorName: string;
}

class CreateTodoService {
  async execute({ name, content, authorName }: ITodoRequest) {
    const todoRepository = getCustomRepository(TodoRepository);

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
