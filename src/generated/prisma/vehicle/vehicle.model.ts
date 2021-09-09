import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { VehicleCount } from './vehicle-count.output';

@ObjectType()
export class Vehicle {
  @Field(() => ID, { nullable: false })
  vin!: string;

  @Field(() => String, { nullable: false })
  model!: string;

  @Field(() => String, { nullable: false })
  make!: string;

  @Field(() => [Booking], { nullable: true })
  bookings?: Array<Booking>;

  @Field(() => VehicleCount, { nullable: true })
  _count?: VehicleCount;
}
