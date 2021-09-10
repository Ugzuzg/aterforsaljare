import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealershipCreateNestedOneWithoutBookingsInput } from '../dealership/dealership-create-nested-one-without-bookings.input';
import { CustomerCreateNestedOneWithoutBookingsInput } from '../customer/customer-create-nested-one-without-bookings.input';

@InputType()
export class BookingCreateWithoutVehicleInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: false })
  time!: Date | string;

  @Field(() => DealershipCreateNestedOneWithoutBookingsInput, { nullable: false })
  dealership!: DealershipCreateNestedOneWithoutBookingsInput;

  @Field(() => CustomerCreateNestedOneWithoutBookingsInput, { nullable: false })
  customer!: CustomerCreateNestedOneWithoutBookingsInput;
}
