import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VehicleMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  vin?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  model?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  make?: keyof typeof SortOrder;
}
