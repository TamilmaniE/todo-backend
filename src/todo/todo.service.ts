import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(data: any): Promise<Todo> {
    return this.todoModel.create(data);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async update(id: string, data: any): Promise<Todo | null> {
    return this.todoModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<any> {
    return this.todoModel.findByIdAndDelete(id);
  }
}
