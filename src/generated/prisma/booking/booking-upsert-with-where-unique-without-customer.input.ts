import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutCustomerInput } from './booking-update-without-customer.input';
import { BookingCreateWithoutCustomerInput } from './booking-create-without-customer.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutCustomerInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingUpdateWithoutCustomerInput, { nullable: false })
  update!: BookingUpdateWithoutCustomerInput;

  @Field(() => BookingCreateWithoutCustomerInput, { nullable: false })
  create!: BookingCreateWithoutCustomerInput;
}
