import { Field, ID, ObjectType } from 'type-graphql';
@ObjectType()
export class Todo {
  @Field()
  title: string;

  @Field()
  completed: boolean;
}
