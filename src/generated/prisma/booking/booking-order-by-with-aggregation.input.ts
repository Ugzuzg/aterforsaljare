import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingCountOrderByAggregateInput } from './booking-count-order-by-aggregate.input';
import { BookingMaxOrderByAggregateInput } from './booking-max-order-by-aggregate.input';
import { BookingMinOrderByAggregateInput } from './booking-min-order-by-aggregate.input';

@InputType()
export class BookingOrderByWithAggregationInput {
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

  @Field(() => BookingCountOrderByAggregateInput, { nullable: true })
  _count?: BookingCountOrderByAggregateInput;

  @Field(() => BookingMaxOrderByAggregateInput, { nullable: true })
  _max?: BookingMaxOrderByAggregateInput;

  @Field(() => BookingMinOrderByAggregateInput, { nullable: true })
  _min?: BookingMinOrderByAggregateInput;
}
