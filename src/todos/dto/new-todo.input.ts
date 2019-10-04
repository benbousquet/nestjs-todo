import { InputType, Field } from 'type-graphql';

@InputType()
export class NewTodoInput {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  completed: boolean;
}
