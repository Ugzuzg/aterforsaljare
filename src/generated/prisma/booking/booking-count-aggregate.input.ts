import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookingCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  dealershipId?: true;

  @Field(() => Boolean, { nullable: true })
  customerId?: true;

  @Field(() => Boolean, { nullable: true })
  vehicleVin?: true;

  @Field(() => Boolean, { nullable: true })
  time?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
