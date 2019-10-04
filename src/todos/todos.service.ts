import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  // inject the todo model
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}
  // creates a todo and returns it
  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createTodo = new this.todoModel(createTodoDto);
    return await createTodo.save();
  }
  // returns all todos
  async allTodo(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }
  // returns one todo with id
  async getTodo(id: String): Promise<Todo> {
    return await this.todoModel.findOne({ _id: id });
  }
  // returns and removes one todo with id
  async removeTodo(id: String): Promise<Todo> {
    return await this.todoModel.findByIdAndRemove(id);
  }
  // returns and updates one todo with id and new todo data
  async updateTodo(id: String, todo: Todo): Promise<Todo> {
    return await this.todoModel.findByIdAndUpdate(id, todo);
  }
}
