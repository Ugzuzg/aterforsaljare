import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateWithoutDealershipInput } from './booking-create-without-dealership.input';

@InputType()
export class BookingCreateOrConnectWithoutDealershipInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingCreateWithoutDealershipInput, { nullable: false })
  create!: BookingCreateWithoutDealershipInput;
}
