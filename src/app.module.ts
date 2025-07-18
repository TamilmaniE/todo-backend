import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    TodoModule,
  ],
})
export class AppModule {}
