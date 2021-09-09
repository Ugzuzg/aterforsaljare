import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutCustomerInput } from './booking-update-without-customer.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutCustomerInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingUpdateWithoutCustomerInput, { nullable: false })
  data!: BookingUpdateWithoutCustomerInput;
}
