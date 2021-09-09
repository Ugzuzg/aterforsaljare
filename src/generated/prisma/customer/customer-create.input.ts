import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedManyWithoutCustomerInput } from '../booking/booking-create-nested-many-without-customer.input';

@InputType()
export class CustomerCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phoneNumber!: string;

  @Field(() => BookingCreateNestedManyWithoutCustomerInput, { nullable: true })
  bookings?: BookingCreateNestedManyWithoutCustomerInput;
}
