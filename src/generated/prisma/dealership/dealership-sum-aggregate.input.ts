import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DealershipSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  capacity?: true;
}
