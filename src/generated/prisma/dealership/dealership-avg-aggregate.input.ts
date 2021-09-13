import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DealershipAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  capacity?: true;
}
