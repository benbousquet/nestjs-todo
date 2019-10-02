import { InputType, Field } from 'type-graphql';

@InputType()
export class NewTodoInput {
  @Field()
  title: string;

  @Field()
  completed: boolean;
}
