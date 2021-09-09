import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { CustomerCount } from './customer-count.output';

@ObjectType()
export class Customer {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phoneNumber!: string;

  @Field(() => [Booking], { nullable: true })
  bookings?: Array<Booking>;

  @Field(() => CustomerCount, { nullable: true })
  _count?: CustomerCount;
}
