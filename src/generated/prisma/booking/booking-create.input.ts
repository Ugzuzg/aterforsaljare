import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealershipCreateNestedOneWithoutBookingsInput } from '../dealership/dealership-create-nested-one-without-bookings.input';
import { CustomerCreateNestedOneWithoutBookingsInput } from '../customer/customer-create-nested-one-without-bookings.input';
import { VehicleCreateNestedOneWithoutBookingsInput } from '../vehicle/vehicle-create-nested-one-without-bookings.input';

@InputType()
export class BookingCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: false })
  time!: Date | string;

  @Field(() => DealershipCreateNestedOneWithoutBookingsInput, {
    nullable: false,
  })
  dealership!: DealershipCreateNestedOneWithoutBookingsInput;

  @Field(() => CustomerCreateNestedOneWithoutBookingsInput, { nullable: false })
  customer!: CustomerCreateNestedOneWithoutBookingsInput;

  @Field(() => VehicleCreateNestedOneWithoutBookingsInput, { nullable: false })
  vehicle!: VehicleCreateNestedOneWithoutBookingsInput;
}
