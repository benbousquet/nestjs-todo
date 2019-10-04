import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './models/todo';
import { NewTodoInput } from './dto/new-todo.input';

@Resolver('Todos')
export class TodosResolver {
  // define todos service
  constructor(private readonly todosService: TodosService) {}
  // testing queries
  @Query(() => String)
  async helloWorld() {
    return 'hello World';
  }
  @Query(() => String)
  async test(@Args('id') id: number) {
    return `your number is ${id}`;
  }
  // create todo mutation return a single todo
  @Mutation(() => Todo)
  async createTodo(
    @Args('newTodoData') newTodoData: NewTodoInput,
  ): Promise<Todo> {
    // calls the todos service createTodo method and passes in the new data
    const todo = await this.todosService.createTodo(newTodoData);
    return todo;
  }
  // find all todos query returns all todos
  @Query(() => [Todo])
  async allTodo(): Promise<Todo[]> {
    // calls the todos service all todos method
    const todos = await this.todosService.allTodo();
    return todos;
  }
  // finds one todo with id returns a single todo
  @Query(() => Todo)
  async getTodo(@Args('id') id: string): Promise<Todo> {
    // calls the todos service getTodo method and passes id
    const todo = await this.todosService.getTodo(id);
    return todo;
  }
  // remove todo mutation returns removed todo
  @Mutation(() => Todo)
  async removeTodo(@Args('id') id: string): Promise<Todo> {
    // calls the todos service removeTodo method and passes id
    const todo = await this.todosService.removeTodo(id);
    return todo;
  }
  // update todo mutation returns updated todo
  @Mutation(() => Todo)
  async updateTodo(
    @Args('id') id: string,
    @Args('newTodoData') newTodoData: NewTodoInput,
  ): Promise<Todo> {
    // calls the todos serivce updateTodo method and passes id and new data
    const todo = await this.todosService.updateTodo(id, newTodoData);
    return todo;
  }
}
