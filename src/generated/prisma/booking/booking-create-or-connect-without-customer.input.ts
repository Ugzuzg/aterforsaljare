import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateWithoutCustomerInput } from './booking-create-without-customer.input';

@InputType()
export class BookingCreateOrConnectWithoutCustomerInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingCreateWithoutCustomerInput, { nullable: false })
  create!: BookingCreateWithoutCustomerInput;
}
