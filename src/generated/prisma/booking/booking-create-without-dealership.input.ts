import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateNestedOneWithoutBookingsInput } from '../customer/customer-create-nested-one-without-bookings.input';
import { VehicleCreateNestedOneWithoutBookingsInput } from '../vehicle/vehicle-create-nested-one-without-bookings.input';

@InputType()
export class BookingCreateWithoutDealershipInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: false })
  time!: Date | string;

  @Field(() => CustomerCreateNestedOneWithoutBookingsInput, { nullable: false })
  customer!: CustomerCreateNestedOneWithoutBookingsInput;

  @Field(() => VehicleCreateNestedOneWithoutBookingsInput, { nullable: false })
  vehicle!: VehicleCreateNestedOneWithoutBookingsInput;
}
