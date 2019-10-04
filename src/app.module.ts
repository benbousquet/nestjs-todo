import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config();

@Module({
  imports: [
    TodosModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_STRING),
  ],
})
export class AppModule {}
