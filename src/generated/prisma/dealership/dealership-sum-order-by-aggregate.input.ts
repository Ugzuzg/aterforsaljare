import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DealershipSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
}
