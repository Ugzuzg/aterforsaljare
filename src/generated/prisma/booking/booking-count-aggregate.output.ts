import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  dealershipId!: number;

  @Field(() => Int, { nullable: false })
  customerId!: number;

  @Field(() => Int, { nullable: false })
  vehicleVin!: number;

  @Field(() => Int, { nullable: false })
  time!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
