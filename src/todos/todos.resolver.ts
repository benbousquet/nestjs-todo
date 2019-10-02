import { Resolver, Query } from '@nestjs/graphql';
import { TodosService } from './todos.service';

@Resolver('Todos')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}
  @Query(() => String)
  async helloWorld() {
    return 'hello World';
  }
}
