import { Controller, Body,Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Post()
    create(@Body() body){
        return this.todoService.create(body);
    }

    @Get()
    findAll(){
        return this.todoService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return this.todoService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.todoService.delete(id);
    }

}
