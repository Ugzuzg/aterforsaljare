import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUncheckedCreateNestedManyWithoutCustomerInput } from '../booking/booking-unchecked-create-nested-many-without-customer.input';

@InputType()
export class CustomerUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phoneNumber!: string;

  @Field(() => BookingUncheckedCreateNestedManyWithoutCustomerInput, { nullable: true })
  bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput;
}
