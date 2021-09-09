import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingOrderByRelationAggregateInput } from '../booking/booking-order-by-relation-aggregate.input';

@InputType()
export class VehicleOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  vin?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  model?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  make?: keyof typeof SortOrder;

  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings?: BookingOrderByRelationAggregateInput;
}
