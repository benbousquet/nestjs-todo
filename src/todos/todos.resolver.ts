import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './models/todo';
import { NewTodoInput } from './dto/new-todo.input';

@Resolver('Todos')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}
  @Query(() => String)
  async helloWorld() {
    return 'hello World';
  }
  @Query(() => String)
  async test(@Args('id') id: number) {
    return `your number is ${id}`;
  }
  @Mutation(() => Todo)
  async creatTodo(
    @Args('newTodoData') newTodoData: NewTodoInput,
  ): Promise<Todo> {
    const todo = await this.todosService.createTodo(newTodoData);
    return todo;
  }
  @Query(() => [Todo])
  async allTodo(): Promise<Todo[]> {
    const todos = await this.todosService.allTodo();
    return todos;
  }
}
