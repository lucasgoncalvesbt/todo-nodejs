interface ITodoRequest {
  name: string;
  content: string;
  authorName: string;
}

class CreateTodoService {
  async execute({ name, content, authorName }: ITodoRequest) {
    console.log({ name, content, authorName });
  }
}

export { CreateTodoService };
