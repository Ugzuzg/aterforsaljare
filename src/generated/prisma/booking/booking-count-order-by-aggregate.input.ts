import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookingCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dealershipId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  customerId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  vehicleVin?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  time?: keyof typeof SortOrder;
}
