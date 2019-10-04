import { Field, ID, ObjectType } from 'type-graphql';
@ObjectType()
export class Todo {
  @Field()
  id: string;
  @Field()
  title: string;

  @Field()
  completed: boolean;
}
