import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { DealershipCount } from './dealership-count.output';

@ObjectType()
export class Dealership {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Int, { nullable: false, defaultValue: 2 })
  capacity!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [Booking], { nullable: true })
  bookings?: Array<Booking>;

  @Field(() => DealershipCount, { nullable: true })
  _count?: DealershipCount;
}
