import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookingCountAggregate } from './booking-count-aggregate.output';
import { BookingMinAggregate } from './booking-min-aggregate.output';
import { BookingMaxAggregate } from './booking-max-aggregate.output';

@ObjectType()
export class AggregateBooking {
  @Field(() => BookingCountAggregate, { nullable: true })
  _count?: BookingCountAggregate;

  @Field(() => BookingMinAggregate, { nullable: true })
  _min?: BookingMinAggregate;

  @Field(() => BookingMaxAggregate, { nullable: true })
  _max?: BookingMaxAggregate;
}
