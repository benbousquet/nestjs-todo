import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(
      'mongodb+srv://ben:123@cluster0-xwxht.azure.mongodb.net/todos?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
